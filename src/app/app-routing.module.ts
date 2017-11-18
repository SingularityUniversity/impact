import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitiativeComponent } from './initiative/initiative.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { InitiativeDetailComponent } from './initiative-detail/initiative-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'initiatives', component: InitiativeComponent },
  { path: 'detail/:name', component: InitiativeDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
