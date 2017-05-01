import {Component, Injector, OnInit} from "@angular/core";
import {Restaurant} from "../../shared/model/restaurant";
import {RestaurantsManagerService} from "../../shared/services/restaurants-manager.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Params} from "@angular/router";
import {BaseComponent} from "../../shared/components/base-component";
import {DateConvectorService} from "../../shared/services/date-convector.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent extends BaseComponent implements OnInit {

  private activatedRoute: ActivatedRoute;
  private restaurantsManager: RestaurantsManagerService;

  public loadingState: boolean = true;
  public restaurants: Restaurant[] = [];
  public viewDate: string;
  public viewDateInvalid: boolean = false;

  private routeParamsChangesSubscription: Subscription;

  constructor(injector: Injector) {
    super(injector);
    this.restaurantsManager = injector.get(RestaurantsManagerService);
    this.activatedRoute = injector.get(ActivatedRoute);
    this.restaurantsManager.dataPrepared.subscribe(dataReady => {
      this.loadingState = false;
    });
  }

  ngOnInit() {
    this.routeParamsChangesSubscription = this.activatedRoute.params.subscribe((routeParams: Params) => {
      if (routeParams['date'] && DateConvectorService.getMomentFromServerDate(routeParams['date']).isValid()) {
        this.viewDate = DateConvectorService.getClientDateAsStringFrom(routeParams['date']);

        this.loadData();
      } else {
        this.router.navigate(['/restaurants/' + DateConvectorService.getServerDate()]);
      }
    });
  }

  public dateChanged(newDate: string): void {
    this.viewDateInvalid = !/^\d{1,2}.\d{1,2}.\d{4}$/.test(newDate);
    if (!this.viewDateInvalid) {
      this.router.navigate(['/restaurants/' + DateConvectorService.getServerDateAsStringFrom(this.viewDate)]);
    }
  }

  private loadData(): void {
    this.restaurantsManager.getAllRestaurantsByDate(this.viewDate).subscribe((restaurants: Restaurant[]) => {
      this.restaurants = restaurants;
      console.log(this.restaurants);
    }).unsubscribe();
  }


  public nextDay(): void {
    if (!this.viewDateInvalid) {
      this.router.navigate(['/restaurants/' + DateConvectorService.getMomentFromClientDate(this.viewDate).add(1, 'day').format(DateConvectorService.DATE_URL)])
    }
  }

  public prevDay(): void {
    if (!this.viewDateInvalid) {
      this.router.navigate(['/restaurants/' + DateConvectorService.getMomentFromClientDate(this.viewDate).subtract(1, 'day').format(DateConvectorService.DATE_URL)])
    }
  }
}
