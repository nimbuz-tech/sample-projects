import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InventoryStoreService } from '../../../../shared/services/inventory-store.service';
import { Product } from '../../../../shared/models';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  q = '';
  constructor(public store: InventoryStoreService, private router: Router) {}

  get products(): Product[] {
    const all = this.store.getProducts();
    const q = this.q.trim().toLowerCase();
    if (!q) return all;
    return all.filter(p => [p.sku, p.name, p.category ?? '', p.supplier ?? ''].some(x => x.toLowerCase().includes(q)));
  }

  create() { this.router.navigate(['/products/new']); }
  edit(id: string) { this.router.navigate(['/products', id]); }
  remove(id: string) {
    if (confirm('Delete this product?')) this.store.deleteProduct(id);
  }
}
