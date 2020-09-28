import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkOrdersComponent } from './components/work-orders/work-orders.component';

const routes: Routes = [
  {
    path: 'work-orders',
    component: WorkOrdersComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'work-orders',
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
