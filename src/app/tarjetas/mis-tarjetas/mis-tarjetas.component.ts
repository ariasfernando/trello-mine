import { Component, OnInit } from '@angular/core';
import { TrelloApiService } from '../../shared/trello-api.service';

@Component({
  selector: 'app-mis-tarjetas',
  templateUrl: './mis-tarjetas.component.html',
  styleUrls: ['./mis-tarjetas.component.scss']
})
export class MisTarjetasComponent implements OnInit {

  private token: string;
  public tarjetas: any[];

  constructor(
    private trelloApiService: TrelloApiService
  ) {
    this.tarjetas = [];
    this.token = sessionStorage.getItem('token');
  }

  ngOnInit() {
    this.trelloApiService.getCards( this.token ).subscribe( response => this.tarjetas = response );
  }

}
