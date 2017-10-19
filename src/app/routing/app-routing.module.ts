import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from "./dashboard.component";
import {ProductListComponent} from "../product/product-list.component";
import {ProductDetailComponent} from "../product/product-detail.component";
import {CartListComponent} from "../cart/cart-list.component";
import {CreationComponent} from "../creation/creation.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: ProductDetailComponent},
  {path: 'cart', component: CartListComponent},
  {path: 'creation', component: CreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

