import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: 'humanDate'
})
export class HumanDatePipe implements PipeTransform {
  transform(value: string, args?: any): string {
    return moment(value, 'YYYY-MM-DD').format("D.M.YYYY");
  }
}
