import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Deck, Draw } from './api.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDeckDraw( numberOfCards: number = 8): Observable<Draw> {
    return this.httpClient.get<Draw>(`${environment.apiUrl}/deck/new/draw/?count=${numberOfCards}`);
  }
  postDeck() {
    return this.httpClient.get<Deck>(`${environment.apiUrl}/deck/new?jokers_enabled=true`, {});
  }
}
