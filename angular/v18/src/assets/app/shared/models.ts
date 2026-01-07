export type UUID = string;

export interface Product {
  id: UUID;
  sku: string;
  name: string;
  price: number;
  stock: number;
  reorderLevel: number;
  active: boolean;
  createdAt: string;
  supplier?: string;
  category?: string;
}

export interface StockTxn {
  id: UUID;
  productId: UUID;
  type: 'IN' | 'OUT' | 'ADJUST';
  qty: number;
  note?: string;
  at: string;
}

export interface OrderLine {
  productId: UUID;
  qty: number;
  unitPrice: number;
}

export interface Order {
  id: UUID;
  customerName: string;
  status: 'DRAFT' | 'CONFIRMED';
  lines: OrderLine[];
  total: number;
  createdAt: string;
}
