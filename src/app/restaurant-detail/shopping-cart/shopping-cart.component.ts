import { Component, OnInit } from '@angular/core';
import { ShoppingCartServiceService } from './shopping-cart-service.service';
import { CartItem } from './cart-item';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartServiceService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    console.log('return itens');
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  clear() {
    this.shoppingCartService.clear();
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: any) {
    console.log('addItem raise');
    this.shoppingCartService.addItem(item);
  }
}
