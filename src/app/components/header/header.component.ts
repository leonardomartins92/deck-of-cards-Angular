import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/services/api.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() newGame = new EventEmitter();

  constructor( ) { }

  ngOnInit(): void {

  }

 newDeck() {
    window.location.reload();
  }
  
}
