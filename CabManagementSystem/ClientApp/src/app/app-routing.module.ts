import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditManagersComponent } from './managersComponent/edit-managers/edit-managers.component';
import { VehicleBillingComponent } from './finance/vehicle-billing/vehicle-billing.component';
import { FinanceComponent } from './finance/finance/finance.component';

const routes: Routes = [
  { path: 'edit-managers/:id', component: EditManagersComponent },
  { path: 'update-billing', component: VehicleBillingComponent },
  { path: '', component: FinanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
