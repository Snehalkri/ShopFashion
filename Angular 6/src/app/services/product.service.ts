import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public cartProducts: any
  constructor() { }
  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProductsFromCart() {
    let products = localStorage.getItem('products');
    products = JSON.parse(products);
    this.cartProducts = Object.values(products);
  }



  addProduct(product: any) {
    let products: any = localStorage.getItem('products');
    products = JSON.parse(products);
    if (products != null) {
      if (products[product.id] === undefined) {
        products = {
          ...products,
          [product.id]: product
        }
      }
      products[product.id].cart += 1;
    } else {
      product.cart = 1;
      products = {
        [product.id]: product
      }
    }
    localStorage.setItem('products', JSON.stringify(products))
  }

  totalCost(product: any) {
    let totalCost = localStorage.getItem('totalCost');
    if (totalCost == null) {
      localStorage.setItem('totalCost', product.price)
    } else {
      totalCost = JSON.parse(totalCost)
      localStorage.setItem('totalCost', totalCost + product.price);
    }
  }
  cartNumber(product: any) {
    let cartNumber = localStorage.getItem('cartNumber');
    if (cartNumber == null) {
      localStorage.setItem('cartNumber', product.cart)
    } else {
      cartNumber = JSON.parse(cartNumber)
      localStorage.setItem('cartNumber', cartNumber + 1);
    }
  }
  getItemCart() {
    let products: any = localStorage.getItem('products');

    console.log(products);
    products = JSON.parse(products);
    console.log(products);
    return products;
    //return Object.values(products);
  }

  addToCart(id: any) {
    let cartProduct = this.getProducts().filter((item) => item.id === id);
    console.log(cartProduct[0]);
    this.addProduct(cartProduct[0]);
    this.totalCost(cartProduct[0]);
    this.cartNumber(cartProduct[0]);
  }
  removeItem(id: any) {
    console.log(id);
    let products: any = localStorage.getItem('products');
    products = JSON.parse(products);
    let cartNumber: any = localStorage.getItem('cartNumber');
    cartNumber = JSON.parse(cartNumber);
    let totalCost: any = localStorage.getItem('totalCost');
    totalCost = JSON.parse(totalCost);
    let cartSinglePrice = Object.values<any>(products).find((item: any) => item.id === id).price;
    let cartSingleValue = Object.values<any>(products).find((item: any) => item.id === id).cart;
    if (cartNumber == 1) {
      totalCost -= cartSinglePrice;
      cartNumber -= cartSingleValue;
    } else {
      totalCost -= cartSinglePrice * cartSingleValue;
      cartNumber -= cartSingleValue;
    }


    console.log(totalCost);
    console.log(cartNumber);
    let cartKey = Object.keys(products).filter((item: any) => item != id)
    console.log(cartKey);
    let cart: any;
    let newProducts = Object.values(products).filter((item: any) => item.id != id);
    cartKey.forEach((key: any) => {
      newProducts.forEach((item: any) => {
        if (item.id == key) {
          cart = {
            ...cart,
            [key]: item
          }
        }
      })
    })
    localStorage.setItem('products', JSON.stringify(cart))
    localStorage.setItem('cartNumber', JSON.stringify(cartNumber));
    localStorage.setItem('totalCost', JSON.stringify(totalCost));
    let p = localStorage.getItem('products');
    // p = JSON.parse(p);
    console.log(typeof(p));

    if (p == 'undefined') {
      // this.getProductsFromCart();
      // return;
      localStorage.removeItem('products');
      localStorage.removeItem('totalCost');
      localStorage.removeItem('cartNumber');
      this.getProductsFromCart();
    }

    this.getProductsFromCart();


  }
  getCartNumber() {
    let cartNumber: any = localStorage.getItem('cartNumber');
    cartNumber = JSON.parse(cartNumber)
    return cartNumber;
  }
  getTotalPrice() {
    let totalCost = localStorage.getItem('totalCost');
    totalCost = JSON.parse(totalCost);
    return totalCost;
  }
}
