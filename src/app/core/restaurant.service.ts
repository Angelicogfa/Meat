import { Restaurant } from "../restaurantes/restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { MEAT_API } from "../app.api";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch"

import { ErrorHandler } from "../app.error-handler";
import { MenuItem } from "../restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantService {
    private rests: Restaurant[];

    constructor(private http: HttpClient) {

    }

    restaurants(search?: string): Observable<Restaurant[]> {
<<<<<<< HEAD
        let params:HttpParams = undefined;
        if(search){
            params = new HttpParams().set('q', search);
        }
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: params });
=======
        return this.http.get(`${MEAT_API}/restaurants`, { params: { q: search } })
            .map(response => response.json())
            .catch(ErrorHandler.handlerError);
>>>>>>> 9469fe303472c00093520760e3fb17b219a18806
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
    }

    reviewsOfRestaurant(id: string): Observable<any[]> {
        return this.http.get<any[]>(`${MEAT_API}/restaurants/${id}/reviews`);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
    }
}