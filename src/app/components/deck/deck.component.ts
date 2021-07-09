import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Card, Deck } from 'src/app/services/api.models';


@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})

export class DeckComponent implements OnChanges {
  @Input() cards!: Card[];
  @Input() side!: string;

  values: number[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.validation();
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
      setTimeout(() => { window.alert("Ganhou"); }, 1500);
    }
    else if ((this.values[0] + this.values[1]) % 2 == 1 && this.side === 'impar') {
      setTimeout(() => { window.alert("Ganhou"); }, 1500);
    }
    else {
      setTimeout(() => { window.alert("Perdeu"); }, 1500);
    }
  }





}
