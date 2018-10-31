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

  public getLabelColor( labelColor: string ): string {
    switch (labelColor ) {

      case 'yellow':
        return '#f2d600';

      case 'orange':
        return '#ffab4a';

      case 'red':
        return '#eb5a46';

      case 'blue':
        return '#0079bf';

      case 'green':
        return '#61bd4f';

      case 'lime':
        return '#51e898';

      case 'sky':
        return '#00c2e0';

      case 'pink':
        return '#ff80ce';

      case 'black':
        return '#272727';

      default:
        return labelColor;
    }

  }

  public getStatusByDate( dateToCompare: Date ) {
    switch ( this.compareDatesOnly( dateToCompare, new Date() ) ) {
      case 1:
        return 'info';
      case -1:
        return 'danger';
      case 0:
        return 'warning';
      default:
        return '';
    }
  }

}
