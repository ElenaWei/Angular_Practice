import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product-list',
  template: `
    <h1>{{title}}</h1>
    <h2>Products</h2>
    <ul class = "products">
      <li *ngFor = "let p of products"
          [class.selected]= "p === selectedProduct"
          (click) = "onSelect(p)">
        <!--each product goes here -->
        <span class = "badge">{{p.id}}</span>{{p.name}}
      </li>
    </ul>
    <app-product-detail [product]="selectedProduct" (deletRequest)="deleteProduct($event)" ></app-product-detail>
  `,
  styleUrls: ['./product.css']
})
export class ProductListComponent implements OnInit {
  title: 'List of products';
  products: Product[];
  selectedProduct: Product;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
  deleteProduct(product: Product) {
        this.products.splice(this.products.indexOf(product), 1);
  }
}
