import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { InventoryStoreService } from '../../../../shared/services/inventory-store.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent {
  constructor(public store: InventoryStoreService, private router: Router) {}
  get orders() { return this.store.getOrders(); }
  create() { this.router.navigate(['/orders/new']); }
}
