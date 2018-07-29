import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as t from '.';

const routes: Routes = [               
        { path: 'trade', component: t.TradeComponent,
            children : [           
            { 
                path: 'equity', 
                component : t.EquityComponent 
            },
            { 
                path: 'equity:id',
                component : t.EquityComponent
            }]    
        }
];

export const TradeRoutes: ModuleWithProviders = RouterModule.forChild(routes);
