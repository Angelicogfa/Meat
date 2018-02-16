import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
})
export class OrderItemsComponent implements OnInit {

  @Output() increaseQuantity = new EventEmitter<CartItem>();
  @Output() decreaseQuantity = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();
  @Input() items: CartItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  emitIncrease(item: CartItem) {
    this.increaseQuantity.emit(item);
  }

  emitDecrease(item: CartItem) {
    this.decreaseQuantity.emit(item);
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }
}
