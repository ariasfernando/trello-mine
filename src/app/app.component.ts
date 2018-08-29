import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';

declare var Trello: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cards: Array<any>;
  idBoards: Array<any>;
  idOrganizations: Array<any>;
  boards: Array<any>;
  organizations: Array<any>;
  showButton = false;
  showMenu = false;
  idOrganization: string;

  constructor( private ref: ChangeDetectorRef ) {
    this.idOrganization = '';
    this.cards = [];
    this.boards = [];
    this.organizations = [];
  }

  ngOnInit() {

    Trello.authorize({
      type: 'popup',
      name: 'Migración desde Trello',
      scope: {
          read: 'true',
          write: 'true'
      },
      expiration: 'never',
      success: this.authenticationSuccess.bind( this ),
      error: this.error
    });

  }

  // Public methods

  public importCards( ) {
    Trello.get('/members/me/cards?filter=visible&stickers=true&attachments=true&members=true', ( success ) => {
      this.cards = success;
      this.showButton = false;
      this.importBoards();
    }, this.error );

  }

  public getCards() {
    return this.cards.filter( ( card) => {
      const completed = !card.dueComplete;
      const organization = this.idOrganization === ''
                        || ( this.getOrganizationByCardID( card.idBoard ) !== undefined
                              && this.getOrganizationByCardID( card.idBoard ).id === this.idOrganization )
                        || ( this.getOrganizationByCardID( card.idBoard ) === undefined
                              && this.idOrganization === '_personal' );
      return completed && organization;
    } );
  }

  public getBoardByID( boardId: string ) {
    return _.find( this.boards, board => board.id === boardId) || null;
  }

  public getOrganizationByCardID( boardId: string ) {
    const board = this.getBoardByID( boardId );
    const org = _.find( this.organizations, organization => organization.id === board.idOrganization);
    return org;
  }

  public getOrganizationByID( id: string ) {
    return _.find( this.organizations, organization => organization.id === id );
  }

  public sortCardsAsc() {
    this.cards = this.cards.sort( ( a, b ) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return (nameA < nameB) ? 1 : (nameA > nameB) ? -1 : 0;
    } );
  }

  public sortCardsDesc() {
    this.cards = this.cards.sort( ( a, b ) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    } );
  }

  public sortBoardAsc() {
    this.cards = this.cards.sort( ( a, b ) => {
      const boardA = this.getBoardByID( a.idBoard ).name.toUpperCase();
      const boardB = this.getBoardByID( b.idBoard ).name.toUpperCase();
      return (boardA < boardB) ? 1 : (boardA > boardB) ? -1 : 0;
    } );
  }

  public sortBoardDesc() {
      this.cards = this.cards.sort( ( a, b ) => {
        const boardA = this.getBoardByID( a.idBoard ).name.toUpperCase();
        const boardB = this.getBoardByID( b.idBoard ).name.toUpperCase();
        return (boardA < boardB) ? -1 : (boardA > boardB) ? 1 : 0;
      } );
  }

  public sortOrg( descending: boolean = true ) {

    const orderValue = descending ? 1 : -1;

    this.cards = this.cards.sort( ( a, b ) => {

      const boardA = this.getBoardByID( a.idBoard );
      const boardB = this.getBoardByID( b.idBoard );

      const orgA = boardA.idOrganization !== null ? this.getOrganizationByCardID( a.idBoard ).displayName.toUpperCase() : '';
      const orgB = boardB.idOrganization !== null ? this.getOrganizationByCardID( b.idBoard ).displayName.toUpperCase() : '';


      if (orgA < orgB ) {
        return -1 * orderValue;
      }

      if ( orgA > orgB ) {
        return  1 * orderValue;
      }

      if (boardA.name < boardB.name ) {
        return -1 * orderValue;
      }

      if (boardA.name > boardB.name ) {
        return  1 * orderValue;
      }

      if (a.name < b.name ) {
        return -1 * orderValue;
      }

      if (a.name > b.name ) {
        return  1 * orderValue;
      }

      return 0;

    } );
  }

  public getLabelColor( labelColor: string ) {
    switch (labelColor ) {

      case 'yellow':
        return '#f2d600';

      case 'orange':
        return '#ffab4a';

      case 'red':
        return '#eb5a46';

      case 'blue':
        return '#0079bf';

      case 'green':
        return '#61bd4f';

      case 'lime':
        return '#51e898';

      case 'sky':
        return '#00c2e0';

      case 'pink':
        return '#ff80ce';

      case 'black':
        return '#272727';

      default:
        return labelColor;
    }

  }

  public filterByOrganization( idOrganization ) {
    this.idOrganization = idOrganization;
  }

  // Private methods

  private authenticationSuccess( response ) {
    console.log ( response );
    this.showButton = true;
  }

  private importBoards() {
    this.idBoards = _.uniq( this.cards.map( card => card.idBoard ) );
    this.idBoards.forEach( idBoard => {
      Trello.get('/boards/' + idBoard, board => {
          this.boards.push( board );
          if ( this.boards.length === this.idBoards.length ) {
            this.importOrganizations();
          }
      });
    });
  }

  private importOrganizations() {
    this.idOrganizations = _.uniq( this.boards.map( board => board.idOrganization ) );
    this.idOrganizations.forEach( idOrganization => {
      Trello.get('/organizations/' + idOrganization, ( organization ) => this.organizations.push( organization ) );
    });
  }

  private error ( error ) {
    console.log ( error );
  }

}
