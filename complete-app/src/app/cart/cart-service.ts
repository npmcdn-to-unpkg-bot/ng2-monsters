
import {RestService} from "../util/rest-service";
import {UserService} from "../user/user-service";
import {Injectable} from "angular2/core";

declare var _:any;

@Injectable()
export class CartService  {

    cart: any = [ ];

    subscribers: any = [];

    userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    add(monster) {

        var self = this;

        function _add(monster) {

            var currentUser = self.userService.currentUser();
            if(monster.sellerId == currentUser.id) {
                throw { message: "You can not buy your own monster" };
            }

            var f = _.filter(self.cart, function(m) { return m.id == monster.id; } );
            if(f.length > 0) {
                throw { message: monster.name + " is already in your cart." };
            }

            self.cart.push(monster);

            self.subscribers.forEach(function(s) { s(); });
        }

        return new Promise(function(resolve, reject) {

            try {
                _add(monster);
                resolve();
            } catch(e) {
                reject(e);
            }

        });


    }

    remove(monster) {
        _.remove(this.cart,function(m) { return m.id == monster.id; });
        this.subscribers.forEach(function(s) { s(); });

    }

    items() {
        return this.cart;
    }

    itemCount() {
        return this.cart.length;
    }

    totalPrice() {
        return _.sum(_.map(this.cart,function(m) { return m.price; }));
    }

    subscribe(fn) {
        this.subscribers = [ fn ];
    }

}