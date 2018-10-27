import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { DateCompareService } from '../../../../core/date-compare/date-compare.service';

@Component({
  selector: 'app-mis-tarjetas-list-date',
  templateUrl: './mis-tarjetas-list-date.component.html',
  styleUrls: ['./mis-tarjetas-list-date.component.scss']
})
export class MisTarjetasListDateComponent implements OnInit {

  @Input() fecha: Date;
  @Input() cerrado: boolean;
  @HostBinding( 'attr.class' ) style: string;

  constructor(
    private dateCompare: DateCompareService
  ) { }

  ngOnInit() {
    console.log( this.cerrado );
    if ( this.fecha === null ) {
      this.style = 'label label-default';
    } else if ( this.cerrado ) {
      this.style = 'label label-success';
    } else {
      this.setDateStyles();
    }
  }

  private setDateStyles(): void {
    switch ( this.dateCompare.compareDatesOnly( new Date( this.fecha ), new Date() ) ) {
      case 1:
        this.style = 'label label-info';
        break;
      case -1:
        this.style = 'label label-danger';
      break;
      case 0:
        this.style = 'label label-warning';
        break;
    }
  }

}