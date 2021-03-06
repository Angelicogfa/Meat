import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../core/restaurant.service';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any[]>;

  constructor(private restaurantService: RestaurantService,
  private route:ActivatedRoute) { }

  ngOnInit() {
 
    let id = this.route.parent.snapshot.params['id'];
    this.reviews = this.restaurantService.reviewsOfRestaurant(id);
  }

}
