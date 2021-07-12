import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/services/api.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  cards: Card[] =[];
  side!: string;
  msg='Soma: Par ou Impar?';
  sub= 'Figuras valem 0';
  values: number[] = [];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    
  }

  onNewGame(side:string){
    this.apiService
    .getDeckDraw('new',2)
    .subscribe(cards =>{ 
      this.cards = cards.cards,
      this.side = side,
      this.validation();
    });
  } 
   
  validation() {
    if (this.cards && this.side) {
      this.convertSpecialCardToNumber();
      this.evenOrOdd();
    }
  }

  convertSpecialCardToNumber() {
    for (let i in this.cards) {
      this.values[i] = +this.cards[i].value;

      if (this.cards[i].value === 'ACE') {
        this.values[i] = 1;
      }

      if (isNaN(this.values[i])) {
        this.values[i] = 0;
      }
    }
  }

  evenOrOdd() {
    if ((this.values[0] + this.values[1]) % 2 == 0 && this.side === 'par') {
      setTimeout(() => { window.alert("Acertou"); }, 1500);
    }
    else if ((this.values[0] + this.values[1]) % 2 == 1 && this.side === 'impar') {
      setTimeout(() => { window.alert("Acertou"); }, 1500);
    }
    else {
      setTimeout(() => { window.alert("Errou"); }, 1500);
    }
  }


}
