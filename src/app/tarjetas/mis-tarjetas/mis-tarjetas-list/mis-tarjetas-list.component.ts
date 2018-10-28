import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-mis-tarjetas-list',
  templateUrl: './mis-tarjetas-list.component.html',
  styleUrls: ['./mis-tarjetas-list.component.scss']
})
export class MisTarjetasListComponent implements OnInit, OnChanges {

  @Input() tarjetas: any[];

  public originalList: any[];
  public filterCards: true;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.originalList = this.tarjetas;
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

  public sortCardsByName( desc: boolean = true ): void {

      this.tarjetas = this.tarjetas.sort( ( a, b ) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        const descResult = (nameA < nameB) ?  1 : (nameA > nameB) ? -1 : 0;
        const ascResult  = (nameA < nameB) ? -1 : (nameA > nameB) ?  1 : 0;
        return desc ? descResult : ascResult;
      } );

  }

  public sortCardsByDue( desc: boolean = true ): void {

    this.tarjetas = this.tarjetas.sort( ( a, b ) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      const descResult = (nameA < nameB) ?  1 : (nameA > nameB) ? -1 : 0;
      const ascResult  = (nameA < nameB) ? -1 : (nameA > nameB) ?  1 : 0;
      return desc ? descResult : ascResult;
    } );

    this.tarjetas = this.tarjetas.sort( function( a, b ) {
      a = new Date(a.due);
      b = new Date(b.due);
      const descResult = a > b ? -1 : a < b ?  1 : 0;
      const ascResult  = a > b ?  1 : a < b ? -1 : 0;
      return desc ? descResult : ascResult;
    } );

  }

  public onListUpdate( list: any[] ): void {
    this.tarjetas = list;
  }

}
