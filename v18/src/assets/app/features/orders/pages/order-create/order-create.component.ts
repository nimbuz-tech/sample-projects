import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InventoryStoreService } from '../../../../shared/services/inventory-store.service';

@Component({
  selector: 'app-order-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
})
export class OrderCreateComponent {
  products = this.store.getProducts();
  orderId: string | null = null;

  headerForm = this.fb.group({
    customerName: ['', [Validators.required, Validators.minLength(2)]],
  });

  lineForm = this.fb.group({
    productId: ['', Validators.required],
    qty: [1, [Validators.required, Validators.min(1)]],
  });

  constructor(private store: InventoryStoreService, private fb: FormBuilder) {}

  startDraft() {
    if (this.headerForm.invalid) { this.headerForm.markAllAsTouched(); return; }
    this.orderId = this.store.createOrderDraft(this.headerForm.value.customerName!);
  }

  addLine() {
    if (!this.orderId) return;
    if (this.lineForm.invalid) { this.lineForm.markAllAsTouched(); return; }
    const v = this.lineForm.value;
    this.store.addOrderLine(this.orderId, v.productId!, Number(v.qty));
    this.lineForm.patchValue({ qty: 1 });
  }

  confirm() {
    if (!this.orderId) return;
    this.store.confirmOrder(this.orderId);
    alert('Order confirmed. Stock updated.');
    this.orderId = null;
    this.headerForm.reset();
  }

  get draft() {
    if (!this.orderId) return null;
    return this.store.getOrders().find(o => o.id === this.orderId) ?? null;
  }

  nameOf(id: string) { return this.store.getProduct(id)?.name ?? 'Unknown'; }
}
