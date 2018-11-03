import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable()
export class TrelloApiService {

  private trelloApiUrl = 'https://api.trello.com/1/';

  public getCards: Subject<any>;
  public getBoards: Subject<any>;
  public getOrganizations: Subject<any>;

  constructor(
    private http: HttpClient
  ) {
    this.getCards = new BehaviorSubject<any>( null );
    this.getBoards = new BehaviorSubject<any>( null );
    this.getOrganizations = new BehaviorSubject<any>( null );

  }

  public authorize(): void {
    const post = window.location.origin + '/home';
    const query = `authorize?key=${environment.trelloKey}&return_url=${post}&expiration=never&name=${environment.name}`;
    window.location.href = this.trelloApiUrl + query;
  }

  public getData( token ): void {
    this._getCards( token );
    this._getBoards( token );
    this._getOrganizations( token );
  }

  public getBoardByID( id: string ): Observable<any>{
    const obs = this.getBoards.pipe(
      map( boards => boards.filter( board => board.id === id)[0]  )
    );
    return obs;
  }

  public getOrganizationByID( id: string ): Observable<any>{
    return this.getOrganizations.pipe(
      map( boards => boards.filter( board => board.id === id)[0]  )
    )
  }

  private _getCards( token ): void{
    const query = '/members/me/cards?filter=visible&stickers=true&attachments=true&members=true';
    const identifier = `&${token}&key=${environment.trelloKey}`;
    this.http.get( this.trelloApiUrl + query + identifier).pipe(
      map( (cards: Array<any>) => cards.filter( card => card.dueComplete === false ) )
    ).subscribe( response => {
      this.getCards.next( response );
    });
  }

  private _getBoards( token ): void{
    const query = '/members/me/boards';
    const identifier = `?${token}&key=${environment.trelloKey}`;
    this.http.get( this.trelloApiUrl + query + identifier).pipe()
      .subscribe( response => {
        this.getBoards.next( response );
      });
  }

  private _getOrganizations( token ): void{
    const query = '/members/me/organizations';
    const identifier = `?${token}&key=${environment.trelloKey}`;
    this.http.get( this.trelloApiUrl + query + identifier).pipe()
      .subscribe( response => {
        this.getOrganizations.next( response );
      });
  }

}
