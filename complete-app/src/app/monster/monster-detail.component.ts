import {Component, OnInit} from "angular2/core";

import {RouteParams} from "angular2/router";
import {Router} from "angular2/router";

import {UIMessage} from "../util/uimessage.component";
import {MonsterService} from "./monster-service";
import {UIMessageService} from "../util/uimessage-service";
import {CartService} from "../cart/cart-service";
import {RouterLink} from "angular2/router";
import {CartButton} from "../cart/cart-button.component";



@Component({
    selector: 'monster-detail',
    directives: [UIMessage, RouterLink, CartButton ],
    templateUrl: 'app/monster/monster-detail.html'
})

export class MonsterDetail implements OnInit {

    id: number;
    monster: any;

    constructor(routeParams: RouteParams, private router: Router, private monsterService: MonsterService, private messageService: UIMessageService, private cartService: CartService) {
         this.id = routeParams.get('id');
    }

    ngOnInit() {

        this.monsterService.get(this.id)
            .subscribe(data => this.monster = data);

    }

    addToCart(monster) {

        this.cartService.add(monster)
            .then(() => {
                this.messageService.message(`Added ${monster.name} to cart`,'/monsters');
                this.router.navigate(['Monsters']);

            })
            .catch((error) => this.messageService.errorMessage(error.message) );

    }




}