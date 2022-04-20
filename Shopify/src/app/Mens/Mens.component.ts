import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../products/productItem';
import { MensService } from '../service/Mens.service';
import { AuthServiceService } from '../service/auth-service.service';
import { AddToCartService } from '../service/add-to-cart.service';

@Component({
  selector: 'app-Mens',
  templateUrl: './Mens.component.html',
  styleUrls: ['./Mens.component.css'],
})
export class MensComponent implements OnInit {
  isAdmin: boolean;
  productList = Array<ProductItem>();
  username = '';
  constructor(
    dataservice: MensService,
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

  addToCart(name: string) {
    alert('Added to cart');
    this.cartService.addMensToCart(name);
  }
  ngOnInit() {
    this.username = sessionStorage.getItem('loggedUser');
    if (this.username == 'admin') {
      this.isAdmin = true;
    }
  }
}
