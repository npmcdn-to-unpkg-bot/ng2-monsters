
import {Component, OnInit} from "angular2/core";
import {RouterLink} from "angular2/router";
import {CartService} from "./cart-service";

@Component({
    selector: 'cart-button',
    directives: [RouterLink],
    template: `<a [routerLink]="['Cart']" class="btn btn-warning">Checkout ({{cartCount}})</a>`
})

export class CartButton implements OnInit {

    cartCount: number = 0;

    constructor(private cartService: CartService) { }

    ngOnInit() {

        var self = this;

        function updateCount() {
            self.cartCount = self.cartService.itemCount();
        }

        this.cartService.subscribe(updateCount);
        updateCount();

    }


}