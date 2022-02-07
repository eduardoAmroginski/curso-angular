import { Component, OnInit } from '@angular/core';

import { Restaurant } from './card-restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  //Passando um array de interface Restaurant
  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
      .subscribe( restaurants => this.restaurants = restaurants)
  }

}
