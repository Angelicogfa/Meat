import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurantes/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id'];
    this.menu = this.restaurantService.menuOfRestaurant(id);
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }

}
