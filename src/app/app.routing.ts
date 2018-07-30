import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as c from '.';
import { TradeModule } from './trade/trade.module';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },            
    { path: 'home', component: c.MainComponent,
      children : [
        { path: '', redirectTo: 'accounts', pathMatch: 'full' },
        { path: 'accounts', component : c.AccountListComponent },         
        { path : 'trade', loadChildren: () => TradeModule }                    
    ]}         
];

export const AppRoutes : ModuleWithProviders = RouterModule.forRoot(routes)  
