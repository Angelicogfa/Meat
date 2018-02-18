import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-options.model';
import { OrderService } from './order-service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' },
  ];

  constructor(private orderService: OrderService,
    private router: Router) {

  }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.carItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map(t => new OrderItem(t.quantity, t.menuItem.id));

    this.orderService.checkOrder(order)
      .subscribe(orderId => {
        console.log(`Order concluída: ${orderId}`);
        this.router.navigate(['/order-summary']);
        this.orderService.clear();
      });
  }
}
