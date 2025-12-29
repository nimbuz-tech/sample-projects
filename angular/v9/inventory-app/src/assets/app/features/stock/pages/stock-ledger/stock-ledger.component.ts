import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InventoryStoreService } from '../../../../shared/services/inventory-store.service';

@Component({
  selector: 'app-stock-ledger',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './stock-ledger.component.html',
  styleUrls: ['./stock-ledger.component.css'],
})
export class StockLedgerComponent {
  products = this.store.getProducts();
  txns = this.store.getStockTxns();

  form = this.fb.group({
    productId: ['', Validators.required],
    type: ['IN', Validators.required],
    qty: [1, [Validators.required, Validators.min(1)]],
    note: [''],
  });

  constructor(private store: InventoryStoreService, private fb: FormBuilder) {}

  apply() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const v = this.form.value;
    this.store.adjustStock(v.productId!, v.type as any, Number(v.qty), v.note || undefined);
    this.products = this.store.getProducts();
    this.txns = this.store.getStockTxns();
    this.form.patchValue({ qty: 1, note: '' });
  }

  productName(id: string) { return this.store.getProduct(id)?.name ?? 'Unknown'; }
}
