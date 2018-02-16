import { MenuItem } from "../menu-item/menu-item.model";

export class CartItem {

    constructor(public menuItem: MenuItem,
        public quantity: number = 1) {

    }

    value(): number {
        return this.menuItem.price * this.quantity;
    }

    incrementQuantity(quantity: number = 1) {
        this.quantity += quantity;
    }

    decrementQuantity(quantity: number = 1) {

        this.quantity -= quantity;
        if (this.quantity < 0) { 
            this.quantity = 0;
        }
    }
}