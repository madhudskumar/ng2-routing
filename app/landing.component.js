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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var LandComponent = (function () {
    function LandComponent(router) {
        this.router = router;
        this.user = Math.random();
    }
    LandComponent.prototype.gotoUser = function () {
        this.router.navigate(['/user', this.user]);
    };
    LandComponent = __decorate([
        core_1.Component({
            selector: 'landing-component',
            template: "\n    <h3>this is landing page</h3>\n    <a routerLink='/welcome' routerLinkActive=\"active\">Welcome page</a>\n    <a routerLink='/login' routerLinkActive=\"active\">login page</a>\n    <button (click)='gotoUser()'>got to user</button>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LandComponent);
    return LandComponent;
}());
exports.LandComponent = LandComponent;
//# sourceMappingURL=landing.component.js.map