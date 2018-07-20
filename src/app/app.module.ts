import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap';
import { SharedModule } from './shared/shared.module'

import * as c from './';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    c.AppComponent,
    c.MainComponent,
    c.HomeComponent    
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    SharedModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: MainComponent }     
    ])
  ],
  providers: [],
  bootstrap: [c.AppComponent]
})
export class AppModule { }
