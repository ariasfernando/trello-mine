import { Component, Input, HostBinding, OnChanges } from '@angular/core';
import { ICard } from '../../../../model/card';
import { FormatHelperService } from '../../../../core/format-helper/format-helper.service';
import { TrelloApiService } from '../../../../core/trello-api/trello-api.service';

@Component({
  selector: 'app-mis-tarjetas-list-item',
  templateUrl: './mis-tarjetas-list-item.component.html',
  styleUrls: ['./mis-tarjetas-list-item.component.scss']
})
export class MisTarjetasListItemComponent implements OnChanges {

  @Input() card: ICard;
  @HostBinding('attr.class') class: string;

  public fecha: Date;
  public organization: any;
  public board: any;

  public showDetail: boolean = true;
  
  constructor(
    private formatHelper: FormatHelperService,
    private trelloApiService: TrelloApiService
  ) {
    this.class = 'card';
  }

  ngOnChanges() {
    this.trelloApiService.getBoardByID( this.card.idBoard ).subscribe( board => {
      this.board = board;
      this.trelloApiService.getOrganizationByID( this.board.idOrganization ).subscribe( organization => {
        this.organization = organization;
      });
    });
    this.trelloApiService.getBoardByID( this.card.id )
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