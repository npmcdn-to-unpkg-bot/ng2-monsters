System.register(["angular2/core", "angular2/router", "../util/uimessage.component", "./monster-service", "../util/uimessage-service", "../cart/cart-service", "../cart/cart-button.component"], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, uimessage_component_1, monster_service_1, uimessage_service_1, cart_service_1, router_3, cart_button_component_1;
    var MonsterDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
            },
            function (uimessage_component_1_1) {
                uimessage_component_1 = uimessage_component_1_1;
            },
            function (monster_service_1_1) {
                monster_service_1 = monster_service_1_1;
            },
            function (uimessage_service_1_1) {
                uimessage_service_1 = uimessage_service_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (cart_button_component_1_1) {
                cart_button_component_1 = cart_button_component_1_1;
            }],
        execute: function() {
            MonsterDetail = (function () {
                function MonsterDetail(routeParams, router, monsterService, messageService, cartService) {
                    this.router = router;
                    this.monsterService = monsterService;
                    this.messageService = messageService;
                    this.cartService = cartService;
                    this.id = routeParams.get('id');
                }
                MonsterDetail.prototype.ngOnInit = function () {
                    var _this = this;
                    this.monsterService.get(this.id)
                        .subscribe(function (data) { return _this.monster = data; });
                };
                MonsterDetail.prototype.addToCart = function (monster) {
                    var _this = this;
                    this.cartService.add(monster)
                        .then(function () {
                        _this.messageService.message("Added " + monster.name + " to cart", '/monsters');
                        _this.router.navigate(['Monsters']);
                    })
                        .catch(function (error) { return _this.messageService.errorMessage(error.message); });
                };
                MonsterDetail = __decorate([
                    core_1.Component({
                        selector: 'monster-detail',
                        directives: [uimessage_component_1.UIMessage, router_3.RouterLink, cart_button_component_1.CartButton],
                        templateUrl: 'app/monster/monster-detail.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_2.Router, monster_service_1.MonsterService, uimessage_service_1.UIMessageService, cart_service_1.CartService])
                ], MonsterDetail);
                return MonsterDetail;
            }());
            exports_1("MonsterDetail", MonsterDetail);
        }
    }
});

//# sourceMappingURL=../maps/monster/monster-detail.component.js.map
