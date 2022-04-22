import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductpageService } from 'src/app/service/productpage.service';
import { IProductpage } from 'src/IProductpage'; 
import { CartService } from 'src/app/service/cart.service';
import { ProductItem } from '../products/productItem';
import { AddToCartService } from '../service/add-to-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private productpageService:ProductpageService,private activatedRoute: ActivatedRoute,
    private cartService: AddToCartService) { }
  
    productList: Array<any>;
    bill: number = 0;
  public products : any []= [];
  public grandTotal! : number;

  

  
  ngOnInit(): void {
    this.productList = this.cartService.getProductsInCart();
    for (var i = 0; i < this.productList.length; i++) {
      this.bill += this.productList[i].num * this.productList[i].price;
    }
  }
   
  remove(name: string) {
    this.cartService.removeFromCart(name);
  }
   

  }
 
