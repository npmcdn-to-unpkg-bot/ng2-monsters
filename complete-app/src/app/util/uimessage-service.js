System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var UIMessageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UIMessageService = (function () {
                function UIMessageService(location) {
                    this.location = location;
                    this.msgStore = {};
                    this.subscribers = [];
                }
                UIMessageService.prototype.message = function (msg, path) {
                    return this.addOrGetMessage('message', msg, path);
                };
                UIMessageService.prototype.errorMessage = function (msg, path) {
                    return this.addOrGetMessage('errorMessage', msg, path);
                };
                UIMessageService.prototype.addOrGetMessage = function (key, msg, path) {
                    if (msg) {
                        this.msgStore = {};
                        this.msgStore[key] = { text: msg, path: (path || this.location.path()) };
                        this.subscribers.forEach(function (fn) { return fn(); });
                        return;
                    }
                    // retrieve a message and clear the store if the message path matches current path
                    var msgForKey = this.msgStore[key];
                    if (msgForKey) {
                        if (this.location.path() === msgForKey.path) {
                            this.msgStore[key] = null;
                        }
                        return msgForKey.text;
                    }
                    return null;
                };
                UIMessageService.prototype.subscribe = function (fn) {
                    this.subscribers = [fn];
                };
                UIMessageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], UIMessageService);
                return UIMessageService;
            }());
            exports_1("UIMessageService", UIMessageService);
        }
    }
});

//# sourceMappingURL=../maps/util/uimessage-service.js.map
