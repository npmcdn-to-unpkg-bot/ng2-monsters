
import {Component, OnInit} from "angular2/core";
import {UIMessageService} from "../util/uimessage-service";
import {CartService} from "./cart-service";
import {RouterLink} from "angular2/router";
import {UIMessage} from "../util/uimessage.component";


@Component({
    selector: 'cart',
    directives: [RouterLink, UIMessage],
    templateUrl: 'app/cart/cart.html'
})


export class Cart implements OnInit {

    monsters: any;
    totalPrice: number;

    constructor(private cartService: CartService, private messageService: UIMessageService) {}

    ngOnInit() {
        this.fetchMonstersInCart();
    }

    fetchMonstersInCart() {
        this.monsters = this.cartService.items();
        this.totalPrice = this.cartService.totalPrice();
    }

    validate() {

        if(this.monsters.length == 0) {
            this.messageService.errorMessage("Your cart is empty");
            return false;
        }

        return true;
    }

    checkOutClicked() {

        if(!this.validate())
            return;

        this.messageService.message("Congratulations on your purchase");

    }

    removeMonster(monster) {
        this.cartService.remove(monster);
        console.log('removed: ' + monster);
        this.fetchMonstersInCart();
    }


}