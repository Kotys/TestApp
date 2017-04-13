import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {AppRouting} from "./app.routing";
import {SharedModule} from "./shared/shared.module";
import {PublicModule} from "./public/public.module";
import {AdminModule} from "./admin/admin.module";
import {RestaurantsManagerService} from "./shared/services/restaurants-manager.service";
import {StoreModule} from "@ngrx/store";
import {RestaurantsStore} from "./shared/stores/restaurants-store";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(AppRouting),
    StoreModule.provideStore({
      RestaurantsStore
    }),
    SharedModule,
    PublicModule,
    AdminModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    RestaurantsManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
