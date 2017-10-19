import {Injectable} from '@angular/core';
import {Product} from './product';
import {PRODUCTS} from './mock-products';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductService {

  // getProducts(): Observable<Product[]> {
  //   return Observable.of(PRODUCTS);
  // }
  deleteProduct(product: Product): void {
    PRODUCTS.splice(PRODUCTS.indexOf(product), 1);
  }
  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }
  getProduct(id: number): Promise<Product> {
    return this.getProducts()
      .then(products => products.find(product => product.id === id));
  }
  addProduct(product: Product): void {
    PRODUCTS.push(product);
  }
}
