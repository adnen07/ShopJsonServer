import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddCategoryComponent } from './add-category/add-category.component';
import {FormsModule} from '@angular/forms';
import { UpdateCategoryComponent } from './update-category/update-category.component';


@NgModule({
  declarations: [CategoriesComponent, ListCategoryComponent, AddCategoryComponent, UpdateCategoryComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class CategoriesModule { }
