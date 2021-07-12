import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAuthenticatedComponent } from './not-authenticated.component';
import { NotAuthenticatedRoutingModule } from './not-authenticated.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/components/header/header.module';


@NgModule({
  declarations: [
    NotAuthenticatedComponent
  ],
  imports: [
    CommonModule,
    NotAuthenticatedRoutingModule,
    ReactiveFormsModule,
    HeaderModule
  ]
})
export class NotAuthenticatedModule { }
