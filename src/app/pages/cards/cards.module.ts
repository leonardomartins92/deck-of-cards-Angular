import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardsRoutingModule } from './cards.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppModule } from 'src/app/app.module';
import { HeaderModule } from 'src/app/components/header/header.module';


@NgModule({
  declarations: [
    CardsComponent,
   
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    NgbModule,
    HeaderModule
  ]
})
export class CardsModule { }
