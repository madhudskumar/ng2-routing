"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./welcome.component');
var login_component_1 = require('./login.component');
var user_component_1 = require('./user.component');
var landing_component_1 = require('./landing.component');
var routes = [
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'user/:id', component: user_component_1.UserComponent },
    { path: '**', component: landing_component_1.LandComponent }
];
exports.appRouterProvider = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map