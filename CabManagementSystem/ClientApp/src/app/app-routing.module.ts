import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditManagersComponent } from './managersComponent/edit-managers/edit-managers.component';
import { VehicleBillingComponent } from './finance/vehicle-billing/vehicle-billing.component';
import { FinanceComponent } from './finance/finance/finance.component';
import { EditBillingComponent } from './finance/edit-billing/edit-billing.component';

const routes: Routes = [
  { path: 'edit-managers/:id', component: EditManagersComponent },
  { path: 'add', component: VehicleBillingComponent },
  { path: 'edit/:id', component: EditBillingComponent },
  { path: '', component: FinanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
