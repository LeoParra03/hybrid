import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'page1',
    loadComponent: () => import('./page1/page1.page').then( m => m.Page1Page)
  },
];
