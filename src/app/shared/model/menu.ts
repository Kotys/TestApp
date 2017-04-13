import {DayMenu} from "./day-menu";

export class WeekMenu {
  public date: string;
  public dayMenus: DayMenu[] = [];

  constructor(data?: WeekMenu) {
    if (data && data.hasOwnProperty('date')) this.date = data.date;
    if (data && data.hasOwnProperty('dayMenus')) {
      data.dayMenus.forEach(dayMenu => {
        this.dayMenus.push(new DayMenu(dayMenu));
      });
    }
  }
}
