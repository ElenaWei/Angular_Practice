import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from './product';
import {CartService} from '../cart/cart.service';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Location} from '@angular/common';
import {ProductService} from "./product.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product.detail.html',
  styleUrls: ['./product.detail.css']
})
export class ProductDetailComponent implements OnInit{
  modify = false;
  //@Input()
  product: Product;
  //@Output()
  // deletRequest = new EventEmitter<Product>();
  // requestDelete() {
  //   this.deletRequest.emit(this.product);
  //   this.product = null;
  // }
  modifyProduct() {
    this.modify = true;
  }
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    //this.route.paramMap.subscribe(p=> console.log(p));
    this.route.paramMap
      .switchMap((params: ParamMap)=> this.productService.getProduct(+params.get('id')))
      .subscribe(product => this.product = product)
  }
  goBack(): void {
    this.location.back();
  }
  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
