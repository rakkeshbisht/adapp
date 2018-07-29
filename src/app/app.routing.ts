import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as c from '.';
import * as t from './trade';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: c.MainComponent,
      children : [
        { path: '', redirectTo: 'accounts', pathMatch: 'full' },
        { path: 'accounts', component : c.AccountListComponent },         
        //{ path : 'trade', loadChildren : 'src/app/trade/trade.module#Trade'}      
        { path : 'trade', component : t.TradeComponent }      
    ]}     
];

export const AppRoutes : ModuleWithProviders = RouterModule.forRoot(routes)  
