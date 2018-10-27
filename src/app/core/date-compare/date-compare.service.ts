import { Injectable } from '@angular/core';

@Injectable()
export class DateCompareService {

  constructor() { }

  public compareDatesOnly( date1: Date, date2: Date ): number {
    date1.setHours( 0, 0, 0 );
    date2.setHours( 0, 0, 0 );
    if ( date1.getTime() > date2.getTime() ) {
      return 1;
    } else if ( date1.getTime() < date2.getTime() ) {
      return -1;
    } else {
      return 0;
    }
  }
}
