import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product, Condition} from './product';
import {CartService} from '../cart/cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product.detail.html',
  styles: [`
    .details {
      font-size: 20pt;
      width: 450px;
      color: blue;
    }

    .context {
      font-size: 16pt;
      border: 1px solid black;
      width: 300px;
    }

    .operations {
      font-size: 18pt;
      color: red;
    }
  `]
})
export class ProductDetailComponent {
  modify = false;
  create = false;
  conditions = Condition;
  @Input()
  product: Product;
  @Output()
  deletRequest = new EventEmitter<Product>();
  requestDelete() {
    this.deletRequest.emit(this.product);
    this.product = null;
  }
  modifyProduct() {
    this.modify = true;
  }
  createProduct() {
    this.create = true;
  }
  getAsString(condition: Condition) {
    return Condition[condition];
  }
  constructor(private cartService: CartService) {}
  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
