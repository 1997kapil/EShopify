import { Injectable } from '@angular/core';
import { ProductItem } from '../products/productItem';
import { DataService } from './data.service';
import { MensService } from './Mens.service';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  productsList: Array<ProductItem>;
  MensProducts: Array<ProductItem>;
  productsInCart: Array<any> = [];
  constructor(
    private dataservice: DataService,
    private Mensservice: MensService
  ) {
    this.productsList = this.dataservice.getProducts();
    this.MensProducts = this.Mensservice.getProductList();
  }

  addProductToCart(id: number) {
    for (var i = 0; i < this.productsList.length; i++) {
      const productExistInCart = this.productsInCart.find(
        ({ id }) => id === this.productsList[i].id
      );
      if (productExistInCart) {
        if (this.productsInCart[i].id == id) {
          this.productsInCart[i].num++;
        }
        console.log(this.productsInCart[i]);
      } else if (this.productsList[i].id == id) {
        this.productsInCart.push({ ...this.productsList[i], num: 1 });
      }
    }
  }

  addMensToCart(name: string) {
    for (var i = 0; i < this.MensProducts.length; i++) {
      const productExistInCart = this.productsInCart.find(
        ({ name }) => name === this.MensProducts[i].name
      );
      if (productExistInCart) {
        if (this.productsInCart[i].name == name) {
          this.productsInCart[i].num++;
        }
        console.log(this.productsInCart[i]);
      } else if (this.MensProducts[i].name == name) {
        this.productsInCart.push({ ...this.MensProducts[i], num: 1 });
      }
    }
  }

  getProductsInCart() {
    return this.productsInCart;
  }

  removeFromCart(name: string) {
    for (var i = 0; i < this.productsInCart.length; i++) {
      if (this.productsInCart[i].name == name) {
        this.productsInCart.splice(i, 1);
      }
    }
  }
}
