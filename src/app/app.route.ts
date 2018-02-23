import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { OrderSumarryComponent } from "./order-sumarry/order-sumarry.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'restaurants', component: RestaurantesComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent },
        ]
    },
    { path: 'order', loadChildren: './order/order.module#OrderModule' },
    { path: 'order-summary', component: OrderSumarryComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '**', component: NotFoundComponent }
]