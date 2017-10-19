import {Component} from '@angular/core';
import {ProductService} from "../product/product.service";
import {Product} from "../product/product";

@Component({
  selector: 'app-create-product',
  templateUrl: './creation.form.html',
  styleUrls: ['creation.form.css']
})
export class CreationComponent {
  constructor(private productService: ProductService){}
  submitForm(form:  any): void {
    console.log(form);
    this.productService.addProduct(form as Product);
  }
}
