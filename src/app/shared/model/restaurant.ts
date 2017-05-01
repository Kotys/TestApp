/**
 * @copyright    Copyright (c) 2017 B2A Software Development (http://www.b2a.cz)
 */

import {WeekMenu} from "./menu";

export class Restaurant {
  public id: number;
  public title: string;
  public urlTitle: string;
  public menus: WeekMenu[] = [];

  constructor(data?: Restaurant) {
    if (data && data.hasOwnProperty('title')) this.title = data.title;
    if (data && data.hasOwnProperty('urlTitle')) this.urlTitle = data.urlTitle;
    if (data && data.hasOwnProperty('menus')) {
      data.menus.forEach(menu => {
        this.menus.push(new WeekMenu(menu));
      });
    }
  }
}
