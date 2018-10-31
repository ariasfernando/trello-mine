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
    this.trelloApiService.getCards( this.token ).subscribe( response => this.tarjetas = response );
    this.trelloApiService.getBoards( this.token ).subscribe( response => this.boards = response );
    this.trelloApiService.getOrganizations( this.token ).subscribe( response => this.organizations = response );
  }

}
