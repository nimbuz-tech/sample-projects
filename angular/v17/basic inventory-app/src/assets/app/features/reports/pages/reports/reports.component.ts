import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryStoreService } from '../../../../shared/services/inventory-store.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent {
  categorySummary = this.store.getCategorySummary();
  topByValue = this.store.getTopProductsByValue(6);
  kpis = this.store.getKpis();

  constructor(public store: InventoryStoreService) {}
}
