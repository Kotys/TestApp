import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantBoxComponent } from './restaurants/restaurant-box/restaurant-box.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [RestaurantsComponent, RestaurantBoxComponent, RestaurantDetailComponent]
})
export class PublicModule { }
