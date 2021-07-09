import { Component, Input, OnInit } from '@angular/core';
import { Card, Deck } from 'src/app/services/api.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})

export class DeckComponent implements OnInit {
  @Input() cards!: Card [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    
  }

  
 
}
