import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Restaurant} from "../../../shared/model/restaurant";
import {WeekMenu} from "../../../shared/model/menu";
import {DayMenu} from "../../../shared/model/day-menu";
import * as moment from "moment";

@Component({
  selector: 'app-restaurant-box',
  templateUrl: './restaurant-box.component.html',
  styleUrls: ['./restaurant-box.component.css']
})
export class RestaurantBoxComponent implements OnChanges {

  @Input() public restaurant: Restaurant;
  @Input() public viewDate: string;

  public menuByDate: DayMenu;
  private week: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.restaurant && this.viewDate) {
      this.menuByDate = this.getMenuByDate(this.viewDate);
    }
  }

  private getWeekMenu(week: string): WeekMenu {
    if (this.restaurant.menus.length > 0) {
      return this.restaurant.menus.find((weekMenu: WeekMenu) => {
        return weekMenu.date == week;
      });
    }

    return null;
  }

  public getMenuByDate(date: string = this.viewDate): DayMenu {
    let week: string = moment(date, 'YYYY-MM-DD').format('YYYY-WW');

    let weekMenu: WeekMenu = this.getWeekMenu(week);
    if (weekMenu) {
      return this.getWeekMenu(week).dayMenus.find((dayMenu: DayMenu) => {
        return dayMenu.date == date;
      });
    }
    return null;
  }
}
