import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-options.model';
import { OrderService } from './order-service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  paymentOptions:RadioOption[] = [
    {label:'Dinheiro', value:'MON' },
    {label:'Cartão de Débito', value:'DEB' },
    {label:'Cartão Refeição', value:'REF' },
  ];

  constructor(private orderService: OrderService) {

  }

  ngOnInit() {
  }

  cartItems() : CartItem[]{
    return this.orderService.carItems();
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem){
    this.orderService.remove(item);
  }
}
