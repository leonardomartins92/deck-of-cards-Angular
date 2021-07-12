import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppGuard } from './app.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [AppGuard],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
