import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { InitiativeDetailComponent } from './initiative-detail/initiative-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:name', component: InitiativeDetailComponent }
];


export const routing = RouterModule.forRoot(routes);
