import { Injectable } from '@angular/core';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];

  constructor() { }

  clear() {
    this.items = [];
  }

  total(): number {
    const total =  this.items
      .map(t => t.value())
      .reduce((prev, value) => prev + value, 0);
      console.log(`Total ${total}`);
      return total;
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
    this.items.splice(this.items.indexOf(item), 1);
    console.log(this.items.length);
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
