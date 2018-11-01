import { Component, OnInit } from '@angular/core';
import { TrelloApiService } from '../../core/trello-api/trello-api.service';

@Component({
  selector: 'app-mis-tarjetas',
  templateUrl: './mis-tarjetas.component.html',
  styleUrls: ['./mis-tarjetas.component.scss']
})
export class MisTarjetasComponent implements OnInit {

  private token: string;
  public tarjetas: any[];
  public boards: any[];
  public organizations: any[];

  constructor(
    private trelloApiService: TrelloApiService
  ) {
    this.tarjetas = [];
    this.token = sessionStorage.getItem('token');
  }

  ngOnInit() {
    this.trelloApiService.getData( this.token );
    this.trelloApiService.getCards.subscribe( response => this.tarjetas = response );
  }

}
