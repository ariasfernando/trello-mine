import { Component, OnInit, HostBinding } from '@angular/core';
import { TrelloApiService } from '../../core/trello-api/trello-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @HostBinding( 'attr.class' ) class = 'container';

  constructor(
    private trelloApiService: TrelloApiService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.routes.fragment.subscribe( response => {
      if ( response !== null ) {
        sessionStorage.setItem('token', response);
        this.router.navigate(['/mis-tarjetas']);
      }
    });
  }

  public onLogIn( $event ): void {
    this.trelloApiService.authorize();
  }

}
