import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavComponent} from "./components/nav/nav.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HumanDatePipe} from "./pipes/human-date.pipe";
import {RouterModule} from "@angular/router";
import {LoadingSpinnerComponent} from "./components/loading-spinner/loading-spinner.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [NavComponent, FooterComponent, HumanDatePipe, LoadingSpinnerComponent],
  exports: [NavComponent, FooterComponent, HumanDatePipe, LoadingSpinnerComponent]
})
export class SharedModule {
}
