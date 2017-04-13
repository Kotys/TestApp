import {MenuItem} from "./menu-item";
export class DayMenu {
  public date?: string;
  public menuItems: MenuItem[] = [];

  constructor(data?: DayMenu) {
    if (data && data.hasOwnProperty('date')) this.date = data.date;
    if (data && data.menuItems) {
      data.menuItems.forEach(menuItem => {
        this.menuItems.push(new MenuItem(menuItem));
      });
    }
  }

  public getMenuItemByType(type: string): MenuItem[] {
    return this.menuItems.filter((menuItem: MenuItem) => {
      return menuItem.type === type;
    });
  }
}
