System.register(["angular2/core", "angular2/router", "./monster-service", "../util/uimessage-service", "../util/uimessage.component"], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, router_3, monster_service_1, uimessage_service_1, uimessage_component_1;
    var MonsterSell;
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
            function (monster_service_1_1) {
                monster_service_1 = monster_service_1_1;
            },
            function (uimessage_service_1_1) {
                uimessage_service_1 = uimessage_service_1_1;
            },
            function (uimessage_component_1_1) {
                uimessage_component_1 = uimessage_component_1_1;
            }],
        execute: function() {
            MonsterSell = (function () {
                function MonsterSell(routeParams, router, messageService, monsterService) {
                    this.router = router;
                    this.messageService = messageService;
                    this.monsterService = monsterService;
                    var sid = routeParams.get('id');
                    if (sid) {
                        this.id = parseInt(sid, 10);
                    }
                }
                MonsterSell.prototype.ngOnInit = function () {
                    if (this.id) {
                        this.fetchMonster();
                    }
                    else {
                        // test data
                        this.monster = { name: "Jaws", type: "Fish", birthday: "1975/07/21", price: 6000000, img: "https://upload.wikimedia.org/wikipedia/en/e/eb/JAWS_Movie_poster.jpg", description: "Jaws is a 1975 American film directed by Steven Spielberg and based on Peter Benchley's 1974 novel of the same name. The prototypical summer blockbuster, its release is regarded as a watershed moment in motion picture history. In the story, a giant man-eating great white shark attacks beachgoers on Amity Island, a fictional New England summer resort town, prompting the local police chief to hunt it with the help of a marine biologist and a professional shark hunter." };
                    }
                };
                MonsterSell.prototype.fetchMonster = function () {
                    var _this = this;
                    this.monsterService.get(this.id)
                        .subscribe(function (data) { return _this.monster = data; });
                };
                MonsterSell.prototype.sellMonster = function () {
                    var _this = this;
                    this.monsterService.save(this.monster)
                        .subscribe(function () {
                        _this.messageService.message('Your monster is now up for sale!', '/');
                        _this.router.navigate(['Monsters']);
                    }, function (error) {
                        _this.messageService.errorMessage(error);
                    });
                };
                MonsterSell.prototype.cancelClicked = function () {
                    this.router.navigate(['Monsters']);
                };
                MonsterSell.prototype.cancelSale = function () {
                    var _this = this;
                    if (!confirm("Are you sure you want to cancel this sale?"))
                        return;
                    this.monsterService.delete(this.monster)
                        .subscribe(function () {
                        _this.messageService.message("Your sale is now canceled", '/monsters');
                        _this.router.navigate(['Monsters']);
                    });
                };
                MonsterSell = __decorate([
                    core_1.Component({
                        selector: 'monster-sell',
                        directives: [uimessage_component_1.UIMessage, router_3.RouterLink],
                        templateUrl: 'app/monster/monster-sell.html'
                    }), 
                    __metadata('design:paramtypes', [router_2.RouteParams, router_1.Router, uimessage_service_1.UIMessageService, monster_service_1.MonsterService])
                ], MonsterSell);
                return MonsterSell;
            }());
            exports_1("MonsterSell", MonsterSell);
        }
    }
});

//# sourceMappingURL=../maps/monster/monster-sell.component.js.map
