import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {ListProductComponent} from './list-product/list-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';
import {AllProductByCategoryComponent} from './all-product-by-category/all-product-by-category.component';
import {AllProductByDateComponent} from './all-product-by-date/all-product-by-date.component';
import {ViewProductComponent} from './view-product/view-product.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  { path: '', component: ListProductComponent },
  {path:'list-products', component:ListProductComponent},
  { path: 'create-product', component: CreateProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'search-cat/:id', component: AllProductByCategoryComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'search-date', component: AllProductByDateComponent },
  {path:'cart',component:CartComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
