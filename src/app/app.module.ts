import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { AppComponent } from './app.component';
import {ProductListComponent} from './product/product-list.component';
import {ProductDetailComponent} from './product/product-detail.component';
import {ProductService} from './product/product.service';
import {CartListComponent} from './cart/cart-list.component';
import {CartService} from './cart/cart.service';
import {CalculatePipe} from './cart/cart.pipe';
import {DashboardComponent} from './routing/dashboard.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {CreationComponent} from "./creation/creation.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartListComponent,
    CalculatePipe,
    DashboardComponent,
    CreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ProductService, CartService, Validators],
  bootstrap: [AppComponent]
})
export class AppModule { }
