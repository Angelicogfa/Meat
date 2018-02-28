import { ShoppingCartService } from "./shopping-cart.service";
import { Injectable } from "@angular/core";
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item";
import { Order, OrderItem } from "../order/order.model";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { MEAT_API } from "../app.api";

@Injectable()
export class OrderService {


    constructor(
        private http: HttpClient,
        private cartService: ShoppingCartService) {

    }

    carItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }

    itemsValue(): number {
        return this.cartService.total();
    }

    checkOrder(order: Order): Observable<string> {
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
            .map(order => order.id);
    }

    clear() {
        this.cartService.clear();
    }
}