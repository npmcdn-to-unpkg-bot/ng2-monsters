System.register(["../user/user-service", "angular2/core"], function(exports_1, context_1) {
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
    var user_service_1, core_1;
    var CartService;
    return {
        setters:[
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CartService = (function () {
                function CartService(userService) {
                    this.cart = [];
                    this.subscribers = [];
                    this.userService = userService;
                }
                CartService.prototype.add = function (monster) {
                    var self = this;
                    function _add(monster) {
                        var currentUser = self.userService.currentUser();
                        if (monster.sellerId == currentUser.id) {
                            throw { message: "You can not buy your own monster" };
                        }
                        var f = _.filter(self.cart, function (m) { return m.id == monster.id; });
                        if (f.length > 0) {
                            throw { message: monster.name + " is already in your cart." };
                        }
                        self.cart.push(monster);
                        self.subscribers.forEach(function (s) { s(); });
                    }
                    return new Promise(function (resolve, reject) {
                        try {
                            _add(monster);
                            resolve();
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                };
                CartService.prototype.remove = function (monster) {
                    _.remove(this.cart, function (m) { return m.id == monster.id; });
                    this.subscribers.forEach(function (s) { s(); });
                };
                CartService.prototype.items = function () {
                    return this.cart;
                };
                CartService.prototype.itemCount = function () {
                    return this.cart.length;
                };
                CartService.prototype.totalPrice = function () {
                    return _.sum(_.map(this.cart, function (m) { return m.price; }));
                };
                CartService.prototype.subscribe = function (fn) {
                    this.subscribers = [fn];
                };
                CartService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], CartService);
                return CartService;
            }());
            exports_1("CartService", CartService);
        }
    }
});

//# sourceMappingURL=../maps/cart/cart-service.js.map
