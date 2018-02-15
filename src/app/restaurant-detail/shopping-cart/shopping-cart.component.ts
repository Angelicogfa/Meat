import { Component, OnInit } from '@angular/core';
import { ShoppingCartServiceService } from './shopping-cart-service.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartServiceService) { }

  ngOnInit() {
  }

  items():any[]{
    return this.shoppingCartService.itens;
  }

  total():number{
    return this.shoppingCartService.total();
  }

}
