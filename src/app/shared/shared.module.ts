import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ShoppingCartService } from "../core/shopping-cart.service";
import { RestaurantService } from "../core/restaurant.service";
import { OrderService } from "../core/order.service";

@NgModule({
    declarations: [InputComponent,
        RadioComponent,
        RatingComponent],
    imports: [FormsModule,
        ReactiveFormsModule,
        CommonModule],
    exports: [InputComponent,
        RadioComponent,
        RatingComponent,
        FormsModule,
        ReactiveFormsModule,
        CommonModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule:SharedModule,
            providers:[ShoppingCartService, RestaurantService, OrderService]
        }
    }
}