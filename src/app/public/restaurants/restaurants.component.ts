import {Component, Injector, OnInit} from "@angular/core";
import {Restaurant} from "../../shared/model/restaurant";
import {RestaurantsManagerService} from "../../shared/services/restaurants-manager.service";
import * as moment from "moment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  private restaurantsManager: RestaurantsManagerService;
  private formBuilder: FormBuilder;

  public restaurants: Restaurant[] = [];
  public viewDateForm: FormGroup;
  public viewDate: string;

  constructor(injector: Injector) {
    this.restaurantsManager = injector.get(RestaurantsManagerService);
    this.formBuilder = injector.get(FormBuilder);
  }

  ngOnInit() {
    this.viewDate = moment().format('YYYY-MM-DD');

    this.viewDateForm = this.formBuilder.group({
      viewDate: [moment().format('D.M.YYYY'), Validators.required]
    }, {validator: this.viewDateFormatValidator});
    this.viewDateForm.controls['viewDate'].valueChanges.debounceTime(50).subscribe((viewDate: string) => {
      if (this.viewDateForm.valid) {
        this.viewDate = moment(viewDate, 'D.M.YYYY', true).format('YYYY-MM-DD');
      }
    });

    this.restaurantsManager.getAllRestaurants().subscribe((restaurants: Restaurant[]) => {
      this.restaurants = restaurants;
    });
  }

  public nextDay(event): void {
    event.preventDefault();

    if (this.viewDateForm.valid) {
      this.viewDateForm.patchValue({
        viewDate: moment(this.viewDateForm.value.viewDate, 'D.M.YYYY', true).add(1, 'day').format('D.M.YYYY')
      });
    }
  }

  public prevDay(event): void {
    event.preventDefault();

    if (this.viewDateForm.valid) {
      this.viewDateForm.patchValue({
        viewDate: moment(this.viewDateForm.value.viewDate, 'D.M.YYYY', true).subtract(1, 'day').format('D.M.YYYY')
      });
    }
  }

  private viewDateFormatValidator = (formGroup: FormGroup) => {
    if (formGroup.value['viewDate']) {
      if (!/^\d{1,2}.\d{1,2}.\d{4}$/.test(formGroup.value.viewDate) || !moment(formGroup.value.viewDate, 'D.M.YYYY', true).isValid()) {
        formGroup.controls['viewDate'].setErrors({invalidFormat: true});
      } else {
        formGroup.controls['viewDate'].setErrors(null);
      }
    }
  };
}
