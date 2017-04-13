import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavComponent} from "./components/nav/nav.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HumanDatePipe} from "./pipes/human-date.pipe";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [NavComponent, FooterComponent, HumanDatePipe],
  exports: [NavComponent, FooterComponent, HumanDatePipe]
})
export class SharedModule {
}
