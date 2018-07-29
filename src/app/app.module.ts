import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap';
import { SharedModule } from './shared/shared.module'
import { TradeModule } from "./trade/trade.module";
import * as c from '.';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [
    c.AppComponent,
    c.MainComponent,
    c.AccountListComponent       
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    SharedModule,
    TradeModule,
    AppRoutes 
  ],
  providers: [],
  bootstrap: [c.AppComponent]
})
export class AppModule { }
