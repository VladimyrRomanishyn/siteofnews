"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//import {HeaderService} from '../services/header.services';
var ContentComponent = (function () {
    function ContentComponent(http) {
        var _this = this;
        this.http = http;
        this.isHidden = false;
        this.http.get('http://localhost/main/api')
            .subscribe(function (data) { _this.data = data.json(); });
    }
    ContentComponent.prototype.create = function () {
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'content-component',
        templateUrl: 'content.component.html',
        styleUrls: ['content.component.css']
    }),
    __param(0, core_1.Inject(http_1.Http))
], ContentComponent);
exports.ContentComponent = ContentComponent;
