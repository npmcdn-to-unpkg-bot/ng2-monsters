System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', "angular2/http", './app.component', "./user/user-service", './cart/cart-service', "./monster/monster-service", "./util/uimessage-service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, router_1, router_2, router_3, router_4, http_1, app_component_1, user_service_1, cart_service_1, monster_service_1, uimessage_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
                router_4 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (monster_service_1_1) {
                monster_service_1 = monster_service_1_1;
            },
            function (uimessage_service_1_1) {
                uimessage_service_1 = uimessage_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                core_1.provide(user_service_1.UserService, { useClass: user_service_1.UserService }),
                core_1.provide(cart_service_1.CartService, { useClass: cart_service_1.CartService }),
                core_1.provide(monster_service_1.MonsterService, { useClass: monster_service_1.MonsterService }),
                core_1.provide(uimessage_service_1.UIMessageService, { useClass: uimessage_service_1.UIMessageService }),
                core_1.provide(router_2.LocationStrategy, { useClass: router_3.HashLocationStrategy }),
                core_1.provide(router_4.APP_BASE_HREF, { useValue: '/' })
            ]).then(function (success) { return console.log("app started..."); }, function (error) { return console.log(error); });
        }
    }
});

//# sourceMappingURL=maps/boot.js.map
