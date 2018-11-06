import { Component, Input, Output, EventEmitter, HostBinding, OnChanges } from '@angular/core';
import { FormatHelperService } from '../../../core/format-helper/format-helper.service';
import { TrelloApiService } from '../../../core/trello-api/trello-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-tarjetas-filter',
  templateUrl: './mis-tarjetas-filter.component.html',
  styleUrls: ['./mis-tarjetas-filter.component.scss']
})
export class MisTarjetasFilterComponent implements OnChanges {

  @Input() list: any[];
  @Output() onListUpdate: EventEmitter<any[]>;

  public status: string = 'primary';
  public organization: string = '';
  public board: string = '';
  public sort: string = 'nombre';
  public sortOrderDesc: boolean = false;

  public showMenu: boolean = true;
  public organizations: any[];
  public boards: any[];

  public selectedBoards: any[];

  private originalList: any[];

  constructor(
    private formatHelper: FormatHelperService,
    private trelloApiService: TrelloApiService,
    private router: Router
  ) {
    this.selectedBoards = [];
    this.originalList = [];
    this.onListUpdate = new EventEmitter<any[]>();
    this.trelloApiService.getOrganizations.subscribe( response => this.organizations = response );
    this.trelloApiService.getBoards.subscribe( response => this.boards = response );
  }

  ngOnChanges() {
    this.originalList = this.list;
    if( this.originalList !== null ){
      this.sendFilteredCards();
    }
  }

  public onOrganizationChange( $event ): void {
    this.organization = $event.srcElement.value;
    this.selectedBoards = this.getBoardsByOrganization( this.organization );
    this.sendFilteredCards();
  }

  public onBoardChange( $event ): void {
    this.board = $event.srcElement.value;
    this.sendFilteredCards();
  }

  public onDateFilterChange( status: string ): void {
    this.status = status;
    this.sendFilteredCards();
  }

  public onSortChange( $event ): void {
    if ( $event.srcElement.value !== '') {
      this.sort = $event.srcElement.value;
      this.sendFilteredCards();
    }
  }

  public onSortOrderChange( desc: boolean ) {
    this.sortOrderDesc = desc;
    this.sendFilteredCards();
  }

  public onLogOut( ) {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  public isState( state: string ): boolean {
    return state === this.status;
  }

  private sendFilteredCards( ): void {
    let cards = [];
    cards = this.getCardsByStatus( this.originalList, this.status );
    cards = this.organization === '' ? cards : this.getCardsByOrganization( cards, this.organization );
    cards = this.board === '' ? cards : this.getCardsByBoard( cards, this.board );
    if ( this.sort === 'nombre' ) {
      cards = this.sortCardsByName( cards, this.sortOrderDesc );
    } else if ( this.sort === 'vencimiento' ) {
      cards = this.sortCardsByDue( cards, this.sortOrderDesc );
    }
    this.onListUpdate.emit( cards );
  }

  private getBoardsByOrganization( organizationId: string ): any[] {
    return this.boards.filter( board => board.idOrganization === organizationId );
  }

  private getCardsByOrganization( cards: any[], organizationId: string ): any[]{
    let outputCards = [];
    const boards = this.getBoardsByOrganization( organizationId );
    boards.forEach( board => {
      let cardsByBoard = this.getCardsByBoard( cards, board.id ); 
      outputCards = outputCards.concat( cardsByBoard );
    } );
    return outputCards;
  }

  private getCardsByBoard( cards: any[], boardId: string ): any[] {
    return cards.filter( card => card.idBoard === boardId );
  }

  private getCardsByStatus( cards: any[], status: string ): any[] {
    if( status === 'primary' )  {
      return cards;
    } else if ( status === 'secondary' ){
      return cards.filter( item => item.due === null );
    } else {
      return cards.filter( card => { 
        return card.due !== null && this.formatHelper.getStatusByDate ( new Date( card.due ) ) === this.status;
      } );
    }
  }

  private sortCardsByName( cards: any[], desc: boolean = true ): any[] {

    return cards.sort( ( a, b ) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      const descResult = (nameA < nameB) ?  1 : (nameA > nameB) ? -1 : 0;
      const ascResult  = (nameA < nameB) ? -1 : (nameA > nameB) ?  1 : 0;
      return desc ? descResult : ascResult;
    } );

  }

  private sortCardsByDue( cards: any[], desc: boolean = true ): any[] {

    return cards.sort( function( a, b ) {
      a = new Date(a.due);
      b = new Date(b.due);
      const descResult = a > b ? -1 : a < b ?  1 : 0;
      const ascResult  = a > b ?  1 : a < b ? -1 : 0;
      return desc ? descResult : ascResult;
    } );

  }
}
