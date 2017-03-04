"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ComposedComponent = (function () {
    function ComposedComponent(http) {
        this.http = http;
        //	@ViewChild('mainWidth') mainWidth;
        //	@ViewChild('feedbackWidth') feedbackWidth;
        this.articles = [];
        this.full = false;
        this.feedbackToggle = false;
        this.Language = "en";
    }
    ComposedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost/main/api')
            .subscribe(function (data) { _this.articles = data.json(); });
    };
    ComposedComponent.prototype.feedback = function (event) {
        var className = event.target.className;
        if (className == 'fa fa-envelope fa-lg' || className == 'row' || className == 'fa fa-window-close fa-lg') {
            this.feedbackToggle = !this.feedbackToggle;
        }
        else {
            return;
        }
    };
    ComposedComponent.prototype.detail = function (article) {
        this.articles = [];
        this.articles.push(article);
        this.full = true;
    };
    ComposedComponent.prototype.submit = function () {
        var body = JSON.stringify({
            title: this.title,
            email: this.email,
            message: this.message
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post('http://localhost/messages', body, options).subscribe();
        this.feedbackToggle = !this.feedbackToggle;
    };
    ComposedComponent.prototype.changeLanguage = function () {
        var _this = this;
        this.full = false;
        if (this.Language == "en") {
            //            console.log("en");
            this.http.get('http://localhost/main/api_rus')
                .subscribe(function (data) { _this.articles = data.json(); });
            this.Language = "ru";
        }
        else if (this.Language == "ru") {
            //            console.log("ru");
            this.http.get('http://localhost/main/api')
                .subscribe(function (data) { _this.articles = data.json(); });
            this.Language = "en";
        }
    };
    ComposedComponent.prototype.onSearch = function () {
        if (this.search === undefined) {
            return;
        }
        var en = /[a-z 0-9]/i;
        var ru = /[а-я 0-9]/i;
        if (this.search.match(en)) {
            this.http.get('http://localhost/search')
                .subscribe(function (data) {
                //    console.log(data._body  );
                //        for (let i of data){console.log(i)}
                //			});
            });
            if (this.search.match(ru)) {
                console.log('Russian language');
            }
        }
    };
    return ComposedComponent;
}());
ComposedComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'composed-component',
        templateUrl: 'composed.component.html',
        styleUrls: ['composed.component.css']
    }),
    __param(0, core_1.Inject(http_1.Http)),
    __metadata("design:paramtypes", [http_1.Http])
], ComposedComponent);
exports.ComposedComponent = ComposedComponent;
//# sourceMappingURL=comoposed.component.js.map