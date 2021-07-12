import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/services/api.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Card[] =[];
  
  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }
 
  get deckId(): string{
    const currentId = this.activatedRoute.snapshot.paramMap.get('id');
    return currentId || 'new';
  }

  ngOnInit() {
    this.deckDraw();
  }

  deckDraw() {
    this.apiService
      .getDeckDraw()
      .subscribe((draw) => this.cards = draw.cards);
  }


}