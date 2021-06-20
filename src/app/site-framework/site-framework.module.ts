import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {_MatMenuDirectivesModule, MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule} from '@angular/material';
import {SiteFrameworkAdminModule} from '../admin/site-framework-admin/site-framework-admin.module';




@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    SiteFrameworkAdminModule,
    MatIconModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class SiteFrameworkModule { }
