import { Injectable } from '@angular/core';
import { Order, Product, StockTxn, UUID } from '../models';

const LS_KEY = 'basic_inventory_v2';

function uuid(): UUID {
  // crypto.randomUUID is supported in modern browsers
  // fallback for older
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyCrypto: any = crypto;
  return anyCrypto?.randomUUID ? anyCrypto.randomUUID() : Math.random().toString(16).slice(2) + Date.now();
}

type StoreState = {
  products: Product[];
  stockTxns: StockTxn[];
  orders: Order[];
};

function nowISO() { return new Date().toISOString(); }

@Injectable({ providedIn: 'root' })
export class InventoryStoreService {
  private state: StoreState = this.load();

  // ---------- Products ----------
  getProducts(): Product[] {
    return [...this.state.products].sort((a, b) => a.name.localeCompare(b.name));
  }

  getProduct(id: UUID): Product | undefined {
    return this.state.products.find(p => p.id === id);
  }

  upsertProduct(input: Partial<Product> & { name: string; sku: string }): UUID {
    const existing = input.id ? this.getProduct(input.id) : undefined;

    if (existing) {
      Object.assign(existing, {
        sku: input.sku,
        name: input.name,
        price: Number(input.price ?? existing.price ?? 0),
        stock: Number(input.stock ?? existing.stock ?? 0),
        reorderLevel: Number(input.reorderLevel ?? existing.reorderLevel ?? 0),
        active: input.active ?? existing.active ?? true,
        supplier: input.supplier ?? existing.supplier,
        category: input.category ?? existing.category,
      });
      this.save();
      return existing.id;
    }

    const p: Product = {
      id: uuid(),
      sku: input.sku,
      name: input.name,
      price: Number(input.price ?? 0),
      stock: Number(input.stock ?? 0),
      reorderLevel: Number(input.reorderLevel ?? 0),
      active: input.active ?? true,
      createdAt: nowISO(),
      supplier: input.supplier ?? 'General Supplier',
      category: input.category ?? 'General',
    };
    this.state.products.push(p);
    this.save();
    return p.id;
  }

  deleteProduct(id: UUID) {
    this.state.products = this.state.products.filter(p => p.id !== id);
    this.state.stockTxns = this.state.stockTxns.filter(t => t.productId !== id);
    this.state.orders = this.state.orders.map(o => ({
      ...o,
      lines: o.lines.filter(l => l.productId !== id),
      total: o.lines.filter(l => l.productId !== id).reduce((s, l) => s + l.qty * l.unitPrice, 0),
    }));
    this.save();
  }

  // ---------- Stock ----------
  getStockTxns(): StockTxn[] {
    return [...this.state.stockTxns].sort((a, b) => b.at.localeCompare(a.at));
  }

  adjustStock(productId: UUID, type: StockTxn['type'], qty: number, note?: string) {
    const p = this.getProduct(productId);
    if (!p) return;

    const delta = type === 'IN' ? qty : type === 'OUT' ? -qty : qty; // ADJUST uses signed qty
    p.stock = Math.max(0, p.stock + delta);

    this.state.stockTxns.push({
      id: uuid(),
      productId,
      type,
      qty,
      note,
      at: nowISO(),
    });
    this.save();
  }

  // ---------- Orders ----------
  getOrders(): Order[] {
    return [...this.state.orders].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  getOrder(id: UUID): Order | undefined {
    return this.state.orders.find(o => o.id === id);
  }

  createOrderDraft(customerName: string): UUID {
    const o: Order = {
      id: uuid(),
      customerName,
      status: 'DRAFT',
      lines: [],
      total: 0,
      createdAt: nowISO(),
    };
    this.state.orders.push(o);
    this.save();
    return o.id;
  }

  addOrderLine(orderId: UUID, productId: UUID, qty: number) {
    const o = this.getOrder(orderId);
    const p = this.getProduct(productId);
    if (!o || !p) return;

    const existing = o.lines.find(l => l.productId === productId);
    if (existing) existing.qty += qty;
    else o.lines.push({ productId, qty, unitPrice: p.price });

    o.total = o.lines.reduce((s, l) => s + l.qty * l.unitPrice, 0);
    this.save();
  }

  confirmOrder(orderId: UUID) {
    const o = this.getOrder(orderId);
    if (!o || o.status !== 'DRAFT') return;

    for (const line of o.lines) {
      this.adjustStock(line.productId, 'OUT', line.qty, `Order ${o.id} confirmed`);
    }
    o.status = 'CONFIRMED';
    this.save();
  }

  // ---------- Reports / Dashboard KPIs ----------
  getKpis() {
    const products = this.getProducts();
    const lowStock = products.filter(p => p.active && p.stock <= p.reorderLevel).length;
    const totalStockValue = products.reduce((s, p) => s + (p.stock * p.price), 0);
    const confirmedOrders = this.state.orders.filter(o => o.status === 'CONFIRMED').length;
    return { productCount: products.length, lowStock, totalStockValue, confirmedOrders };
  }

  getCategorySummary() {
    const map = new Map<string, { category: string; items: number; stockValue: number; stockUnits: number }>();
    for (const p of this.getProducts()) {
      const key = p.category || 'General';
      const row = map.get(key) ?? { category: key, items: 0, stockValue: 0, stockUnits: 0 };
      row.items += 1;
      row.stockUnits += p.stock;
      row.stockValue += p.stock * p.price;
      map.set(key, row);
    }
    return [...map.values()].sort((a, b) => b.stockValue - a.stockValue);
  }

  getTopProductsByValue(limit = 5) {
    return this.getProducts()
      .map(p => ({ ...p, stockValue: p.stock * p.price }))
      .sort((a, b) => b.stockValue - a.stockValue)
      .slice(0, limit);
  }

  // ---------- Persistence ----------
  private load(): StoreState {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      try { return JSON.parse(raw) as StoreState; } catch {}
    }

    const seed: StoreState = {
      products: [
        { id: uuid(), sku: 'SKU-1001', name: 'USB Keyboard', price: 899, stock: 12, reorderLevel: 5, active: true, createdAt: nowISO(), supplier: 'KeyTech', category: 'Accessories' },
        { id: uuid(), sku: 'SKU-1002', name: 'Wireless Mouse', price: 699, stock: 8, reorderLevel: 4, active: true, createdAt: nowISO(), supplier: 'KeyTech', category: 'Accessories' },
        { id: uuid(), sku: 'SKU-1003', name: 'HDMI Cable', price: 299, stock: 25, reorderLevel: 10, active: true, createdAt: nowISO(), supplier: 'CablePro', category: 'Cables' },
        { id: uuid(), sku: 'SKU-1004', name: 'SSD 512GB', price: 3499, stock: 6, reorderLevel: 3, active: true, createdAt: nowISO(), supplier: 'StorageHub', category: 'Storage' },
      ],
      stockTxns: [],
      orders: [],
    };
    localStorage.setItem(LS_KEY, JSON.stringify(seed));
    return seed;
  }

  private save() {
    localStorage.setItem(LS_KEY, JSON.stringify(this.state));
  }
}
