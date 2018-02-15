import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { MenuItem } from '../menu-item/menu-item.model';

@Injectable()
export class ShoppingCartServiceService {

  itens: CartItem[] = [];

  constructor() { }

  clear() {
    this.itens = [];
  }

  total(): number {
    return this.itens
    .map(t => t.value())
    .reduce((prev, value) => prev + value, 0);
  }

  addItem(item: MenuItem) {
    let foundItem = this.itens.find((mItem) => mItem.menuItem.id == item.id);
    if (foundItem) {
      foundItem.incrementQuantity();
    } else {
      this.itens.push(new CartItem(item));
    }
  }

  removeItem(item: any) {
    this.itens.slice(this.itens.indexOf(item), 1);
  }
}
