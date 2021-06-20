import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { SideBarAdminComponent } from './side-bar-admin/side-bar-admin.component';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [HeaderAdminComponent, SideBarAdminComponent],
  exports: [
    HeaderAdminComponent,
    SideBarAdminComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule
  ]
})
export class SiteFrameworkAdminModule { }
