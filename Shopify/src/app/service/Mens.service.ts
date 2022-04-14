import { Injectable } from '@angular/core';
import { ProductItem } from '../products/productItem';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class MensService extends DataService {
  productList = Array<ProductItem>();
  constructor() {
    super();
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
      'men formal shirt',
      'Casual Wear',
      700,
      'assets/images/men formal shirt.jpg'
    );
    this.productList.push(p1);
    this.productList.push(p2);
    this.productList.push(p3);
    this.productList.push(p4);
    this.productList.push(p5);
  }
  getProductList(): Array<ProductItem> {
    return this.productList;
  }
}
