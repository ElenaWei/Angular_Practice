import { Injectable} from '@angular/core';
import {Cart} from './cart';
import {Product} from '../product/product';

@Injectable() // this is not required when just create the class and don't use other service constructor inside
export class CartService {
  carts = new Array<Cart>();
  addProduct(product: Product): void {
    const c = this.carts.find(function(cart){
      return cart.id === product.id;
    })
    if (c) {
      c.quantity++;
    } else {
      this.carts.push(new Cart(product.id, product.name, product.price, 1));
    }
  }
}
