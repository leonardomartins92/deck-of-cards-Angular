import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card, Deck } from './services/api.models';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
  public cards: Card[] = [];
  public side: string = '';
  
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.deckDraw();
  }

  deckDraw() {
    this.apiService
      .getDeckDraw()
      .subscribe((draw) => this.cards = draw.cards);
  }
    
  newDeck() {
    window.location.reload();
  }

  onNewGame(side:string){
    this.apiService
    .getDeckDraw(2)
    .subscribe(cards => this.cards = cards.cards);
    this.side = side;
  }

  
}
