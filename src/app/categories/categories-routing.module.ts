import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import {ListCategoryComponent} from './list-category/list-category.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import {UpdateCategoryComponent} from './update-category/update-category.component';

const routes: Routes = [{ path: '', component: CategoriesComponent },
  {path:'list-category',component:ListCategoryComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'update-cat/:id',component:UpdateCategoryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
