import { bootstrap } from 'angular2/platform/browser';

import { provide } from 'angular2/core';

import {ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy} from "angular2/router";
import {HashLocationStrategy} from "angular2/router";
import {APP_BASE_HREF} from "angular2/router";

import {HTTP_PROVIDERS} from "angular2/http";

import { AppComponent } from './app.component';
import {UserService} from "./user/user-service";
import {CartService} from './cart/cart-service';
import {MonsterService} from "./monster/monster-service";
import {UIMessageService} from "./util/uimessage-service";


bootstrap(AppComponent,[
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,

    provide(UserService, { useClass: UserService }),
    provide(CartService, { useClass: CartService }),
    provide(MonsterService, { useClass: MonsterService }),
    provide(UIMessageService, { useClass: UIMessageService }),

    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    provide(APP_BASE_HREF, { useValue: '/'})

]).then(
    success => console.log(`app started...`),
    error => console.log(error)
);