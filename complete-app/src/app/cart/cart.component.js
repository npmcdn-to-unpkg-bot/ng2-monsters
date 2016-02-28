System.register(["angular2/core", "../util/uimessage-service", "./cart-service", "angular2/router", "../util/uimessage.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, uimessage_service_1, cart_service_1, router_1, uimessage_component_1;
    var Cart;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (uimessage_service_1_1) {
                uimessage_service_1 = uimessage_service_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (uimessage_component_1_1) {
                uimessage_component_1 = uimessage_component_1_1;
            }],
        execute: function() {
            Cart = (function () {
                function Cart(cartService, messageService) {
                    this.cartService = cartService;
                    this.messageService = messageService;
                }
                Cart.prototype.ngOnInit = function () {
                    this.fetchMonstersInCart();
                };
                Cart.prototype.fetchMonstersInCart = function () {
                    this.monsters = this.cartService.items();
                    this.totalPrice = this.cartService.totalPrice();
                };
                Cart.prototype.validate = function () {
                    if (this.monsters.length == 0) {
                        this.messageService.errorMessage("Your cart is empty");
                        return false;
                    }
                    return true;
                };
                Cart.prototype.checkOutClicked = function () {
                    if (!this.validate())
                        return;
                    this.messageService.message("Congratulations on your purchase");
                };
                Cart.prototype.removeMonster = function (monster) {
                    this.cartService.remove(monster);
                    console.log('removed: ' + monster);
                    this.fetchMonstersInCart();
                };
                Cart = __decorate([
                    core_1.Component({
                        selector: 'cart',
                        directives: [router_1.RouterLink, uimessage_component_1.UIMessage],
                        templateUrl: 'app/cart/cart.html'
                    }), 
                    __metadata('design:paramtypes', [cart_service_1.CartService, uimessage_service_1.UIMessageService])
                ], Cart);
                return Cart;
            }());
            exports_1("Cart", Cart);
        }
    }
});

//# sourceMappingURL=../maps/cart/cart.component.js.map
