import { Routes } from '@angular/router';

import { RoutingComponent } from './Component/routing-component/routing-component/routing-component';
import { MainComponent } from './Component/main-component/main-component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'main' },
    {path:'main', component: MainComponent},
    {path:'routeTest', component: RoutingComponent}
];
