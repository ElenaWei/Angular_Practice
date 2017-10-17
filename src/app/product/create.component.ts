import {Component} from '@angular/core';

@Component({
  selector: 'app-create-product',
  template: `
    <div *ngIf="create">
      <form #form="ngForm">
        <label>Product id: </label>
        <input required ngModel name="product_id" #productId="ngModel" type="number">
        <div *ngIf="productId.touched && !productId.valid">
          Product Id is required.
        </div>
        <label>Product Name: </label>
          <input required ngModel minlength="5" maxlength="20" pattern="PR.*"
                 name="product_name" #productName="ngModel" id="product_name" type="text">
          <!--<div *ngIf="productName.touched && !productName.valid">-->
            <!--<div *ngIf="productName.errors.required">Product name is required.</div>-->
            <!--<div *ngIf="productName.errors.minLength">Product name should be minimum 5 characters.</div>-->
            <!--<div *ngIf="productName.errors.pattern">Product name does not match the pattern.</div>-->
          <!--</div>-->
        <label>Product Description: </label>
        <input required ngModel #productDescription="ngModel" type="text">
        <label>Product Price: </label>
        <input required ngModel #productPrice="ngModel" type="number">
        <label>Product Condition: </label>
        <input required ngModel #productCondition="ngModel" type="text">
        <label>Product Category: </label>
        <input required ngModel #productCategory="ngModel" type="text">
      </form>
    </div>`,
  styles: [``]
})
export class CreateComponent {
  create = false;
  createProduct() {
    this.create = true;
  }
}
