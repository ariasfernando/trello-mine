import { Component, Input, HostBinding, OnChanges } from '@angular/core';
import { ICard } from '../../../../model/card';
import { FormatHelperService } from '../../../../core/format-helper/format-helper.service';

@Component({
  selector: 'app-mis-tarjetas-list-item',
  templateUrl: './mis-tarjetas-list-item.component.html',
  styleUrls: ['./mis-tarjetas-list-item.component.scss']
})
export class MisTarjetasListItemComponent implements OnChanges {

  @Input() card: ICard;
  @HostBinding('attr.class') class: string;

  public fecha: Date;

  constructor(
    private formatHelper: FormatHelperService
  ) {
    this.class = 'card';
  }

  ngOnChanges() {
    this.fecha = new Date( this.card.due );
    if ( this.card.due === null ) {
      this.setStyleByStatus( 'secondary' );
    } else if ( this.card.dueComplete ) {
      this.setStyleByStatus( 'success' );
    } else {
      this.setStyleByStatus ( this.formatHelper.getStatusByDate( this.fecha ) );
    }
  }

  private setStyleByStatus( status: string ): void {
    this.class = 'card mb-3 border-' + status;
  }

} 