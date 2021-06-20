import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLTEComponent } from './admin-lte/admin-lte.component';
import { ListProdComponent } from './prod/list-prod/list-prod.component';
import {MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [AdminComponent, AdminLTEComponent, ListProdComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
