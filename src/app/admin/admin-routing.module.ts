import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {AdminLTEComponent} from './admin-lte/admin-lte.component';
import {ListProdComponent} from './prod/list-prod/list-prod.component';
const routes: Routes = [{ path: '', redirectTo:'admin/adminlte',pathMatch:'full' },
  {path:'adminlte',component:AdminLTEComponent},
  {path:'prod/list-prod',component:ListProdComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
