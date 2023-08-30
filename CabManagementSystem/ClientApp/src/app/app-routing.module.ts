import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditManagersComponent } from './managersComponent/edit-managers/edit-managers.component';

const routes: Routes = [
  { path: 'edit-managers/:id', component: EditManagersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
