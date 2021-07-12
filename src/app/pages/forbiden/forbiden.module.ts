import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbidenComponent } from './forbiden.component';
import { ForbidenRoutingModule } from './forbiden.routing';

@NgModule({
  declarations: [
    ForbidenComponent
  ],
  imports: [
    CommonModule,
    ForbidenRoutingModule
  ]
})
export class ForbidenModule { }
