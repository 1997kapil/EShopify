import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ProductItem } from '../products/productItem';

@Injectable({
  providedIn: 'root',
})
export class ClothesService extends DataService {
  constructor() {
    super();
    this.productList = new Array<ProductItem>();
    let p1 = new ProductItem(
      1,
      'Red Fit',
      'Casual Wear',
      500,
      'assets/images/Red_Fit.jpg'
    );
    let p2 = new ProductItem(
      2,
      'Men Black Tshirt',
      'Casual Wear',
      499,
      'assets/images/men black tshirt.jpg'
    );
    let p3 = new ProductItem(
      3,
      'Men Blue Shirt',
      'Casual Wear',
      699,
      'assets/images/men blue shirt.jpg'
    );
    let p4 = new ProductItem(
      4,
      'Men Polo Tshirt',
      'Casual Wear',
      740,
      'assets/images/men polo tshirt.jpg'
    );
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
    let p9 = new ProductItem(
      9,
      'girl dungaree',
      'Party Wear',
      400,
      'assets/images/girl dungaree.jpg'
    );
    let p10 = new ProductItem(
      10,
      'boys blazer',
      'Party Wear',
      600,
      'assets/images/boys blazer.jpg'
    );
    this.productList.push(p1);
    this.productList.push(p2);
    this.productList.push(p3);
    this.productList.push(p4);
    this.productList.push(p5);
    this.productList.push(p6);
    this.productList.push(p7);
    this.productList.push(p8);
    this.productList.push(p9);
    this.productList.push(p10);
  }

  getProductList(): Array<ProductItem> {
    return this.productList;
  }
}
