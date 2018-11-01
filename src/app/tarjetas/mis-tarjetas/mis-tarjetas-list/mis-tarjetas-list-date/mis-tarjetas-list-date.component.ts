import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { FormatHelperService } from '../../../../core/format-helper/format-helper.service';

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
    private formatHelper: FormatHelperService
  ) { }

  ngOnInit() {
    console.log ( this.style );
    this.fechaDate = new Date( this.fecha );
    if ( this.fecha === null ) {
      this.style = 'badge badge-secondary';
      this.label = 'no asignada';
    } else if ( this.cerrado ) {
      this.style = 'badge badge-success';
      this.label = 'realizada';
    } else {
      this.setStyleByStatus ( this.formatHelper.getStatusByDate( this.fechaDate ) );
    }
  }

  private setStyleByStatus( status: string ): void {
    this.style = 'badge badge-' + status;
    switch ( status ) {
      case 'danger':
        this.label = 'vencida';
        break;
      case 'info':
        this.label = 'próximos días';
        break;
      case 'warning':
        this.label = 'hoy';
        break;
    }
  }
}