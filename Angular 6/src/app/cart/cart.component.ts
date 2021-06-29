import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public productService:ProductService) {
    this.productService.getProductsFromCart()
  //  console.log(this.productService.cartProducts);
  //  console.log(this.productService.getItemCart());
   
   }

  ngOnInit() {
  }

}
