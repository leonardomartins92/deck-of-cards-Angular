import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card, Deck } from './services/api.models';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Output() newGame = new EventEmitter();
  
  public cards: Card[] = [];
  
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

  onNewGame(){
    console.log("game");
    this.apiService
    .getDeckDraw(2)
    .subscribe(cards =>{ 
      this.cards = cards.cards,
      console.log(cards)
     })
  }

  
}
