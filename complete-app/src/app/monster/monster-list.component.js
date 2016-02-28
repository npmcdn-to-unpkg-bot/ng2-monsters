System.register(['angular2/core', './monster-service', "../cart/cart-service", "../util/uimessage-service", "../user/user-service", "../util/uimessage.component", "angular2/router", "./monster-summary.pipe", "../cart/cart-button.component"], function(exports_1, context_1) {
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
    var core_1, monster_service_1, cart_service_1, uimessage_service_1, user_service_1, uimessage_component_1, router_1, monster_summary_pipe_1, cart_button_component_1;
    var MonsterList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (monster_service_1_1) {
                monster_service_1 = monster_service_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (uimessage_service_1_1) {
                uimessage_service_1 = uimessage_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (uimessage_component_1_1) {
                uimessage_component_1 = uimessage_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (monster_summary_pipe_1_1) {
                monster_summary_pipe_1 = monster_summary_pipe_1_1;
            },
            function (cart_button_component_1_1) {
                cart_button_component_1 = cart_button_component_1_1;
            }],
        execute: function() {
            MonsterList = (function () {
                function MonsterList(monsterService, cartService, userService, messageService) {
                    this.monsterService = monsterService;
                    this.cartService = cartService;
                    this.userService = userService;
                    this.messageService = messageService;
                }
                MonsterList.prototype.ngOnInit = function () {
                    var _this = this;
                    this.monsterService.query()
                        .subscribe(function (data) { return _this.monsters = data; });
                };
                MonsterList.prototype.addToCart = function (monster) {
                    var _this = this;
                    this.cartService.add(monster)
                        .then(function () {
                        _this.messageService.message("Added " + monster.name + " to cart");
                    })
                        .catch(function (error) { return _this.messageService.errorMessage(error.message); });
                };
                MonsterList.prototype.canEdit = function (monster) {
                    var currentUser = this.userService.currentUser();
                    if (monster.sellerId == currentUser.id)
                        return true;
                    return false;
                };
                MonsterList = __decorate([
                    core_1.Component({
                        selector: 'monster-list',
                        directives: [uimessage_component_1.UIMessage, router_1.RouterLink, cart_button_component_1.CartButton],
                        pipes: [monster_summary_pipe_1.MonsterSummary],
                        templateUrl: 'app/monster/monster-list.html'
                    }), 
                    __metadata('design:paramtypes', [monster_service_1.MonsterService, cart_service_1.CartService, user_service_1.UserService, uimessage_service_1.UIMessageService])
                ], MonsterList);
                return MonsterList;
            }());
            exports_1("MonsterList", MonsterList);
        }
    }
});

//# sourceMappingURL=../maps/monster/monster-list.component.js.map
