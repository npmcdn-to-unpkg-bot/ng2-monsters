import { Component, OnInit } from 'angular2/core';

import { MonsterService } from './monster-service';
import {CartService} from "../cart/cart-service";
import {UIMessageService} from "../util/uimessage-service";
import {UserService} from "../user/user-service";
import {UIMessage} from "../util/uimessage.component";
import {RouterLink} from "angular2/router";
import {MonsterSummary} from "./monster-summary.pipe";
import {CartButton} from "../cart/cart-button.component";

@Component({
    selector: 'monster-list',
    directives: [UIMessage, RouterLink, CartButton ],
    pipes: [MonsterSummary ],
    templateUrl: 'app/monster/monster-list.html'
})


export class MonsterList implements OnInit {

    monsters: any;

    constructor(private monsterService: MonsterService, private cartService: CartService, private userService: UserService, private messageService: UIMessageService ) {

    }

    ngOnInit() {

        this.monsterService.query()
            .subscribe(data => this.monsters = data);

    }

    addToCart(monster) {

       this.cartService.add(monster)
           .then(() => {
               this.messageService.message(`Added ${monster.name} to cart`);
           })
           .catch((error) => this.messageService.errorMessage(error.message) );

    }

    canEdit(monster) {

        var currentUser = this.userService.currentUser();
        if(monster.sellerId == currentUser.id)
            return true;

        return false;
    }



}