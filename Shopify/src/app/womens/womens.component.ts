import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../products/productItem';
import { WomensService } from '../service/Womens.service';
import { AuthServiceService } from '../service/auth-service.service';
import { AddToCartService } from '../service/add-to-cart.service';

@Component({
  selector: 'app-Womens',
  templateUrl: './Womens.component.html',
  styleUrls: ['./Womens.component.css'],
})
export class WomensComponent implements OnInit {
  isAdmin: boolean;
  productList = Array<ProductItem>();
  username = '';
  constructor(
    dataservice: WomensService,
    private auth: AuthServiceService,
    private cartService: AddToCartService
  ) {
    this.productList = dataservice.getProductList();
  }

  delete(id: number) {
    for (var i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        this.productList.splice(i, 1);
      }
    }
  }

  // addToCart(name: string) {
  //   this.cartService.addWomensToCart(name);
  // }
  addToCart(id: number) {
    alert('Added to cart');
    this.cartService.addProductToCart(id);
  }
  ngOnInit() {
    this.username = sessionStorage.getItem('loggedUser');
    if (this.username == 'admin') {
      this.isAdmin = true;
    }
  }
}

