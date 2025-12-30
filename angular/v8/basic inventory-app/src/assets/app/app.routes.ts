import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.routes').then(m => m.PRODUCTS_ROUTES),
  },
  {
    path: 'stock',
    loadComponent: () =>
      import('./features/stock/pages/stock-ledger/stock-ledger.component').then(m => m.StockLedgerComponent),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders.routes').then(m => m.ORDERS_ROUTES),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./features/reports/pages/reports/reports.component').then(m => m.ReportsComponent),
  },

  { path: '**', redirectTo: 'dashboard' },
];
