import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurantes/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  menu: MenuItem[];

  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute) {
      console.log('passei aqui');
  }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id'];
    this.restaurantService.menuOfRestaurant(id)
    .subscribe(menu=> this.menu = menu);
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }

}
