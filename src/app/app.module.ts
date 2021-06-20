import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {SiteFrameworkModule} from './site-framework/site-framework.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule, MatRadioModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {SiteFrameworkAdminModule} from './admin/site-framework-admin/site-framework-admin.module';
import { AboutComponent } from './about/about.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatDialogModule } from '@angular/material';
import { OrdersComponent } from './orders/orders.component';
import { DatePipe } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    OrdersComponent,
    CheckoutComponent],
  imports: [
    MatDialogModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    SiteFrameworkModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    SiteFrameworkAdminModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule
  ],
  entryComponents:[OrdersComponent],
  providers: [ToastrService,DatePipe],
  bootstrap: [AppComponent]})
export class AppModule { }
