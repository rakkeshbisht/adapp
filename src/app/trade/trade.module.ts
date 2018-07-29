import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeComponent } from './trade/trade.component';
import { EquityComponent } from './equity/equity.component';
import { TradeRoutes } from "./trade.routing";


@NgModule({
  imports: [
    CommonModule,
    TradeRoutes      
  ],
  declarations: [TradeComponent, EquityComponent]
})
export class TradeModule { }
