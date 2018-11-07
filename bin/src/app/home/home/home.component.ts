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
  ) {
    this.routes.queryParams.subscribe ( params => console.log( params['token'] ));
  }

  ngOnInit() {
    if( localStorage.getItem('token') !== null ) {
      console.log( "item token has been set" )
      this.router.navigate(['/cards']);
    } else {
      this.routes.fragment.subscribe( response => {
        if ( response !== null && response !== undefined) {
          console.log( "recieving item token", response );
          localStorage.setItem('token', response);
          this.router.navigate(['/cards']);
        }
      });
    }
  }

  public onLogIn( $event ): void {
    this.trelloApiService.authorize();
  }

}
