import { Component, OnInit, OnChanges } from '@angular/core';
import { TrelloApiService } from '../../core/trello-api/trello-api.service';

@Component({
  selector: 'app-mis-tarjetas',
  templateUrl: './mis-tarjetas.component.html',
  styleUrls: ['./mis-tarjetas.component.scss']
})
export class MisTarjetasComponent implements OnInit, OnChanges {

  public cards: any[];
  public boards: any[];
  public organizations: any[];
  public originalCards: any[];

  private token: string;

  constructor(
    private trelloApiService: TrelloApiService
  ) {
    this.cards = [];
    this.originalCards = [];
    this.token = sessionStorage.getItem('token');
  }

  ngOnInit() {
    this.trelloApiService.getData( this.token );
    this.trelloApiService.getCards.subscribe( response => { 
      this.cards = response;
      this.originalCards = response;
    } );
  }

  ngOnChanges() {
    this.originalCards = this.cards;
  }

  public onListUpdate( list: any[] ): void {
    this.cards = list;
  }

}
