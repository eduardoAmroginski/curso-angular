import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-card-restaurant',
  templateUrl: './card-restaurant.component.html'
})
export class CardRestaurantComponent implements OnInit {


  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
