import {EventEmitter, Injectable, Injector} from "@angular/core";
import {Restaurant} from "../model/restaurant";
import {Http} from "@angular/http";
import "rxjs";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";


@Injectable()
export class RestaurantsManagerService {

  private readonly localStorageRestaurantsKey: string = 'restaurants';

  private http: Http;
  private store: Store<any>;

  private _dataPrepared: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(injector: Injector) {
    this.http = injector.get(Http);
    this.store = injector.get(Store);

    this.initLocalData();

    // if (localStorage.getItem(this.localStorageRestaurantsKey)) {
    //   try {
    //     this.store.dispatch({
    //       type: 'SET_RESTAURANTS', payload: this.mapRestaurants(
    //         JSON.parse(localStorage.getItem(this.localStorageRestaurantsKey))
    //       )
    //     });
    //   } catch (e) {
    //     this.initLocalData();
    //   }
    // } else {
    //   this.initLocalData();
    // }
  }

  get dataPrepared(): Observable<boolean> {
    return this._dataPrepared.asObservable();
  }

  public getAllRestaurants(): Observable<Restaurant[]> {
    return this.store.select('RestaurantsStore');
  }

  public getAllRestaurantsByDate(date: string): Observable<Restaurant[]> {
    return this.store.select('RestaurantsStore').filter((restaurant: Restaurant) => {
      return true;
    });
  }

  private initLocalData(): void {
    this.http.get('/assets/restaurants.json').map(response => {
        try {
          return response.json();
        } catch (e) {
          return Observable.throw('Unable to parse JSON from response!');
        }
      })
      .map(data => this.mapRestaurants(data))
      .subscribe((restaurants: Restaurant[]) => {
        this.store.dispatch({type: 'SET_RESTAURANTS', payload: restaurants});
        this.saveRestaurants(restaurants);
        this._dataPrepared.emit(true);
      }, error => {
        console.error(error);
      });
  }

  private mapRestaurants = (restaurantsData: any) => {
    return restaurantsData.map(restaurantData => {
      return new Restaurant(restaurantData);
    })
  };

  private saveRestaurants(data: Restaurant[]): void {
    localStorage.setItem(this.localStorageRestaurantsKey, JSON.stringify(data));
  }
}
