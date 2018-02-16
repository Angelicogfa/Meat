import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { MenuItem } from '../menu-item/menu-item.model';

@Injectable()
export class ShoppingCartServiceService {

  items: CartItem[] = [];

  constructor() { }

  clear() {
    this.items = [];
  }

  total(): number {
    return this.items
      .map(t => t.value())
      .reduce((prev, value) => prev + value, 0);
  }

  addItem(item: MenuItem) {
    console.log('addItem service raise');
    let foundItem = this.items.find((mItem) => mItem.menuItem.id == item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    let index = this.items.indexOf(item);
    this.items.slice(index, 1);
  }

  increaseQty(item: CartItem) {
    item.incrementQuantity();
  }

  decreaseQty(item: CartItem) {
    item.decrementQuantity();
    if (item.quantity === 0)
      this.removeItem(item);
  }
}
