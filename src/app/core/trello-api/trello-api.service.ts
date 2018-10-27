import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';

@Injectable()
export class TrelloApiService {

  private trelloApiUrl = 'https://api.trello.com/1/';

  constructor(
    private http: HttpClient,
    private location: Location
  ) { }

  public authorize(): void {
    const post = 'http://localhost:4200/home';
    const query = `authorize?key=${environment.trelloKey}&return_url=${post}&expiration=never&name=${environment.name}`;
    window.location.href = this.trelloApiUrl + query;
  }

  public getCards( token ): Observable<any>{
    const query = '/members/me/cards?filter=visible&stickers=true&attachments=true&members=true';
    const identifier = `&${token}&key=${environment.trelloKey}`;
    return this.http.get( this.trelloApiUrl + query + identifier).pipe(
      map( (cards: Array<any>) => cards.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
    );
  }
}
