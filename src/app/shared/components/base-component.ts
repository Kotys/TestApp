import {Router} from "@angular/router";
import {Injector} from "@angular/core";
/**
 * @copyright    Copyright (c) 2017 B2A Software Development (http://www.b2a.cz)
 */

export abstract class BaseComponent {
  protected router: Router;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
  }
}
