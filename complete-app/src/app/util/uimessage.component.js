System.register(['angular2/core', './uimessage-service'], function(exports_1, context_1) {
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
    var core_1, uimessage_service_1;
    var UIMessage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (uimessage_service_1_1) {
                uimessage_service_1 = uimessage_service_1_1;
            }],
        execute: function() {
            UIMessage = (function () {
                function UIMessage(messageService) {
                    this.messageService = messageService;
                }
                UIMessage.prototype.ngOnInit = function () {
                    var _this = this;
                    this.messageService.subscribe(function () {
                        _this.updateMessages();
                    });
                    this.updateMessages();
                };
                UIMessage.prototype.updateMessages = function () {
                    this.message = this.messageService.message();
                    this.errorMessage = this.messageService.errorMessage();
                };
                UIMessage = __decorate([
                    core_1.Component({
                        selector: 'ui-message',
                        template: "\n\t\t<div *ngIf=\"message\" class='alert alert-info'>\n\t\t\t{{message}}\n\t\t</div>\n\t\t<div *ngIf=\"errorMessage\" class='alert alert-danger'>\n\t\t\t{{errorMessage}}\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [uimessage_service_1.UIMessageService])
                ], UIMessage);
                return UIMessage;
            }());
            exports_1("UIMessage", UIMessage);
        }
    }
});

//# sourceMappingURL=../maps/util/uimessage.component.js.map
