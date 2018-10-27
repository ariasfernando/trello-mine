import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { DateCompareService } from '../../../../core/date-compare/date-compare.service';

@Component({
  selector: 'app-mis-tarjetas-list-date',
  templateUrl: './mis-tarjetas-list-date.component.html',
  styleUrls: ['./mis-tarjetas-list-date.component.scss']
})
export class MisTarjetasListDateComponent implements OnInit {

  @Input() fecha: string;
  @Input() cerrado: boolean;
  @HostBinding( 'attr.class' ) style: string;

  public label: string;
  public fechaDate: Date;

  constructor(
    private dateCompare: DateCompareService
  ) { }

  ngOnInit() {
    this.fechaDate = new Date( this.fecha );
    if ( this.fecha === null ) {
      this.style = 'badge badge-secondary';
      this.label = 'no asignada';
    } else if ( this.cerrado ) {
      this.style = 'badge badge-success';
      this.label = 'realizada';
    } else {
      this.setDateStyles();
    }
  }

  private setDateStyles(): void {
    switch ( this.dateCompare.compareDatesOnly( this.fechaDate, new Date() ) ) {
      case 1:
        this.style = 'badge badge-info';
        this.label = 'próximos días';
        break;
      case -1:
        this.style = 'badge badge-danger';
        this.label = 'vencida';
      break;
      case 0:
        this.style = 'badge badge-warning';
        this.label = 'hoy';
        break;
    }
  }

}