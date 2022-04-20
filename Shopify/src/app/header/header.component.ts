import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { CartService } from 'src/app/service/cart.service';
import { ProductpageService } from 'src/app/service/productpage.service';
import { IProductpage } from 'src/IProductpage'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean;
  username: string = 'Guest';
  public totalItem : number = 0;
  public searchTerm !: string;

   //added
   productPage:IProductpage[]=[];

  constructor(private auth: AuthServiceService, 
    private cartService:CartService,private productpageService:ProductpageService) {}

  ngOnInit() {
    this.username = sessionStorage.getItem('loggedUser');
    if (this.username == 'admin') {
      this.isAdmin = true;
    }
  }

 
}
