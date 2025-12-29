import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InventoryStoreService } from '../../../../shared/services/inventory-store.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  id = this.route.snapshot.paramMap.get('id');
  isNew = !this.id || this.id === 'new';

  form = this.fb.group({
    sku: ['', [Validators.required, Validators.minLength(3)]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    category: ['General', [Validators.required]],
    supplier: ['General Supplier', [Validators.required]],
    price: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    reorderLevel: [0, [Validators.required, Validators.min(0)]],
    active: [true],
  });

  constructor(
    private fb: FormBuilder,
    private store: InventoryStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (!this.isNew && this.id) {
      const p = this.store.getProduct(this.id);
      if (p) this.form.patchValue(p);
    }
  }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const v = this.form.value;

    this.store.upsertProduct({
      id: this.isNew ? undefined : this.id!,
      sku: v.sku!,
      name: v.name!,
      category: v.category!,
      supplier: v.supplier!,
      price: Number(v.price),
      stock: Number(v.stock),
      reorderLevel: Number(v.reorderLevel),
      active: !!v.active,
    });

    this.router.navigate(['/products']);
  }

  cancel() { this.router.navigate(['/products']); }
}
