import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mis-tarjetas-list',
  templateUrl: './mis-tarjetas-list.component.html',
  styleUrls: ['./mis-tarjetas-list.component.scss']
})
export class MisTarjetasListComponent implements OnInit {

  @Input() tarjetas: any[];

  public filterCards: true;

  constructor() { }

  ngOnInit() {
  }

  public getLabelColor( labelColor: string ) {
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

  public getDateFromProperty( date: string ): Date{
    return new Date ( date );
  }
}
