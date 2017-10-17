import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {ProductListComponent} from './product/product-list.component';
import {ProductDetailComponent} from './product/product-detail.component';
import {ProductService} from './product/product.service';
import {CartListComponent} from './cart/cart-list.component';
import {CartService} from './cart/cart.service';
import {CalculatePipe} from './cart/cart.pipe';
import {CreateComponent} from './product/create.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartListComponent,
    CalculatePipe,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
