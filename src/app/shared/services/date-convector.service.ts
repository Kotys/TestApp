import * as moment from "moment";
import {Moment} from "moment";


export class DateConvectorService {

  public static readonly DATE_URL: string = 'YYYY-MM-DD';
  public static readonly DATE_HUMAN: string = 'D.M.YYYY';

  public static getMomentFromServerDate(serverDate: string): Moment {
    return moment(serverDate, DateConvectorService.DATE_URL);
  }

  public static getMomentFromClientDate(clientDate: string): Moment {
    return moment(clientDate, DateConvectorService.DATE_HUMAN);
  }

  public static getClientDateAsStringFrom(serverDate: string): string {
    return DateConvectorService.getMomentFromServerDate(serverDate).format(DateConvectorService.DATE_HUMAN);
  }

  public static getServerDateAsStringFrom(clientDate: string): string {
    return DateConvectorService.getMomentFromClientDate(clientDate).format(DateConvectorService.DATE_URL);
  }

  public static getClientDate(): string {
    return moment().format(DateConvectorService.DATE_HUMAN);
  }

  public static getServerDate(): string {
    return moment().format(DateConvectorService.DATE_URL);
  }
}
