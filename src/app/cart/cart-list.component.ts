import {Component} from '@angular/core';
import {Cart} from './cart';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart-list',
  template: `
    <div *ngIf="carts" class = "cart">
      <h2 class="cart-list">View of your cart</h2>
      <table class="cartDetails">
        <tr >
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>TotalPrice</th>
        </tr>
        <tr *ngFor="let c of carts">
          <td>{{c.id}}</td>
          <td>{{c.name}}</td>
          <td>{{c.price}}</td>
          <td>{{c.quantity}}</td>
          <td>{{c.price | calculateTotalPrice : c.quantity}}</td>
        </tr>
      </table><br>
      <span class="total">Total: {{calTotal()}}</span>
    </div>
  `,
  styles: [`
    .cart {
      float: right;
      width: 50%;
      margin: 100px;
    }

    .cart-list {
      color: purple;
      font-size: 20pt;
      background-color: #EEEEEE;
    }

    .cartDetails {
      border-collapse: collapse;
      font-size: 14pt;
      width: 80%;
      text-align: center;
    }
    table, th, td {
      border: 2px solid #607D8B;
    }
    .total {
      font-size: 16pt;
    }
  `]
})
export class CartListComponent {
    carts: Cart[];
    constructor(private cartService: CartService) {
      this.carts = cartService.carts;
    }
    calTotal() {
      let sum = 0;
      for (let i = 0; i < this.carts.length; i++) {
        const temp = this.carts[i].price * this.carts[i].quantity;
        sum += temp;
      }
      return sum;
    }
}
