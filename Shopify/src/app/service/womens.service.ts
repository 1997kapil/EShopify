import { Injectable } from '@angular/core';
import { ProductItem } from '../products/productItem';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class WomensService extends DataService {
  productList = Array<ProductItem>();
  constructor() {
    super();
    let p5 = new ProductItem(
      5,
      'women denim dress',
      'Party Wear',
      700,
      'assets/images/women denim dress.jpg'
    );
    let p6 = new ProductItem(
      6,
      'women hoodie',
      'Fashion Wear',
      800,
      'assets/images/women hoodie.jpg'
    );
    let p7 = new ProductItem(
      7,
      'women polo tshirt',
      'Fashion Wear',
      599,
      'assets/images/women polo tshirt.jpg'
    );
    let p8 = new ProductItem(
      8,
      'women shirt',
      'Casual Wear',
      500,
      'assets/images/women shirt.jpg'
    );
    this.productList.push(p5);
    this.productList.push(p6);
    this.productList.push(p7);
    this.productList.push(p8);
  }
  getProductList(): Array<ProductItem> {
    return this.productList;
  }
}

