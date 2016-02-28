System.register(['angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1;
    var RestService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            RestService = (function () {
                function RestService(baseUrl, http) {
                    this.baseUrl = baseUrl;
                    this.http = http;
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json');
                }
                RestService.prototype.query = function () {
                    return this.http.get(this.baseUrl)
                        .map(function (r) { return r.json(); });
                };
                RestService.prototype.get = function (id) {
                    return this.http.get(this.baseUrl + '/' + id)
                        .map(function (r) { return r.json(); });
                };
                RestService.prototype.save = function (item) {
                    var url = this.baseUrl;
                    if (item.id) {
                        url += '/' + item.id;
                    }
                    var body = JSON.stringify(item);
                    if (item.id) {
                        return this.http.put(url, body, { headers: this.headers })
                            .map(function (r) { return r.json(); });
                    }
                    return this.http.post(url, body, { headers: this.headers })
                        .map(function (r) { return r.json(); });
                };
                RestService.prototype.delete = function (item) {
                    return this.http.delete(this.baseUrl + '/' + item.id)
                        .map(function (r) { return r.json(); });
                };
                return RestService;
            }());
            exports_1("RestService", RestService);
        }
    }
});

//# sourceMappingURL=../maps/util/rest-service.js.map
