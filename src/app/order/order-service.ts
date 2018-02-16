import { ShoppingCartServiceService } from "../restaurant-detail/shopping-cart/shopping-cart-service.service";
import { Injectable } from "@angular/core";
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartServiceService) {

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
}