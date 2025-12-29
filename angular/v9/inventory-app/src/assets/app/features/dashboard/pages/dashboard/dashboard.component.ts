import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryStoreService } from '../../../../shared/services/inventory-store.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  kpis = this.store.getKpis();
  recentOrders = this.store.getOrders().slice(0, 5);
  lowStockProducts = this.store.getProducts().filter(p => p.active && p.stock <= p.reorderLevel).slice(0, 6);

  constructor(public store: InventoryStoreService) {}
}
