import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './game.routing';
import { HeaderModule } from 'src/app/components/header/header.module';



@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    HeaderModule
  ]
})
export class GameModule { }
