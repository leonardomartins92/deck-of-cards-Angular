import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardsRoutingModule } from './cards.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CardsComponent,
   
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    NgbModule
  ]
})
export class CardsModule { }
