import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-product-list',
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductListComponent implements OnInit {
  //title: 'List of products';
  products: Product[];
  selectedProduct: Product;
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product);
  }
  gotoDetail(){
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}
