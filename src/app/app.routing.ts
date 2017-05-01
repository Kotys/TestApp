import {Route} from "@angular/router";
import {RestaurantsComponent} from "./public/restaurants/restaurants.component";
import {RestaurantDetailComponent} from "./public/restaurants/restaurant-detail/restaurant-detail.component";
/**
 * @copyright    Copyright (c) 2017 B2A Software Development (http://www.b2a.cz)
 */

export const AppRouting: Route[] = [
  {path: '', redirectTo: 'restaurants', pathMatch: 'full'},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:date', component: RestaurantsComponent},



  {path: 'restaurants/detail/:restaurantCode', component: RestaurantDetailComponent},
];
