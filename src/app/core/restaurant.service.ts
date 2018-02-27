import { Restaurant } from "../restaurantes/restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { MEAT_API } from "../app.api";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch"

import { ErrorHandler } from "../app.error-handler";
import { MenuItem } from "../restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantService {
    private rests: Restaurant[];

    constructor(private http: Http) {

    }

    restaurants(search?: string): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`, { params: { q: search } })
            .map(response => response.json())
            .catch(ErrorHandler.handlerError);
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError);
    }

    reviewsOfRestaurant(id: string): Observable<any[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(result => result.json())
            .catch(ErrorHandler.handlerError);


    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(result => result.json())
            .catch(ErrorHandler.handlerError);
    }
}