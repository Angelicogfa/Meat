import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurantes/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../core/restaurant.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService,
  private routes: ActivatedRoute) { }

  ngOnInit() {

    var id = this.routes.snapshot.params["id"];

    this.restaurantService.restaurantById(id)
    .subscribe(restaurant=> this.restaurant = restaurant);
  }

}
