import { Injectable } from '@angular/core';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';
import { NotificationService } from '../shared/messages/notification.service';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];

  constructor(private notificationService: NotificationService) {

  }

  clear() {
    this.items = [];
  }

  total(): number {
    const total = this.items
      .map(t => t.value())
      .reduce((prev, value) => prev + value, 0);
    return total;
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id == item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
    this.notificationService.notify(`Você adicionou o item ${item.name}`);
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
    this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`);
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
