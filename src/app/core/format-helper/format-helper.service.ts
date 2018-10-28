import { Injectable } from '@angular/core';

@Injectable()
export class FormatHelperService {

  constructor() { }

  public compareDatesOnly( date1: Date, date2: Date ): number {
    date1.setHours( 0, 0, 0, 0 );
    date2.setHours( 0, 0, 0, 0 );
    if ( date1 > date2 ) {
      return 1;
    } else if ( date1.toISOString() === date2.toISOString() ) {
      return 0;
    } else {
      return -1;
    }
  }

}
