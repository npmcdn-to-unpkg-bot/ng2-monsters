
import { Component } from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";

import { MonsterList } from './monster/monster-list.component';
import {MonsterDetail} from "./monster/monster-detail.component";
import {MonsterSell} from "./monster/monster-sell.component";
import {Cart} from "./cart/cart.component";



@Component({
    selector: 'monster-app',
    directives: [ ROUTER_DIRECTIVES ],
    templateUrl: 'app/monster-app.html'
})

@RouteConfig([
    { path: '/', name: 'root', redirectTo: ['Monsters'] },
    { path: '/monsters', name: 'Monsters', component: MonsterList },
    { path: '/monster/:id', name: 'Monster', component: MonsterDetail},
    { path: '/sell', name: 'MonsterSell', component: MonsterSell },
    { path: '/sell/:id', name: 'MonsterSellEdit', component: MonsterSell },
    { path: '/cart', name: 'Cart', component: Cart }
])


export class AppComponent {





}
