import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAuthenticatedComponent } from './not-authenticated.component';
import { NotAuthenticatedRoutingModule } from './not-authenticated.routing';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotAuthenticatedComponent
  ],
  imports: [
    CommonModule,
    NotAuthenticatedRoutingModule,
    ReactiveFormsModule
  ]
})
export class NotAuthenticatedModule { }
