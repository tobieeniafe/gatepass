webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <app-nav></app-nav>\n  <router-outlet></router-outlet>\n\n<footer class=\"page-footer\">\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n        &copy; Company 2017.\n      </div>\n    </div>\n</footer>\n</div>\n  <!-- <a routerLink='/dashboard' routerLinkActive='active'>Dashboard</a> -->\n\n\n  <!-- <div class=\"slider\" id='slider' *ngFor='let image of sliderImages'>\n  <img src=\"{{image}}\" id=\"sliderImage\">\n  </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { NgStyle } from '@angular/common';
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_snazzy_info_window__ = __webpack_require__("../../../../@agm/snazzy-info-window/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_index_index_component__ = __webpack_require__("../../../../../src/app/components/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_organiser_events_events_component__ = __webpack_require__("../../../../../src/app/components/organiser/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_organiser_events_events_service__ = __webpack_require__("../../../../../src/app/components/organiser/events/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_organiser_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/organiser/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_organiser_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/organiser/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validator_service__ = __webpack_require__("../../../../../src/app/services/validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_authguard_service__ = __webpack_require__("../../../../../src/app/services/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_organiser_create_event_create_event_component__ = __webpack_require__("../../../../../src/app/components/organiser/create-event/create-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_organiser_create_event_create_event_service__ = __webpack_require__("../../../../../src/app/components/organiser/create-event/create-event.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_9__components_index_index_component__["a" /* IndexComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_12__components_organiser_events_events_component__["a" /* EventsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__services_authguard_service__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_15__components_organiser_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__services_authguard_service__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__components_organiser_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__services_authguard_service__["a" /* AuthGuard */]] },
    { path: 'create-event', component: __WEBPACK_IMPORTED_MODULE_20__components_organiser_create_event_create_event_component__["a" /* CreateEventComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__services_authguard_service__["a" /* AuthGuard */]] }
    //{ path: '**', component: LoginComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBQTeEyrwUuonblZu8k9cCxErVDCw7qn1k'
            }),
            __WEBPACK_IMPORTED_MODULE_7__agm_snazzy_info_window__["a" /* AgmSnazzyInfoWindowModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__["ImageUploadModule"].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_organiser_events_events_component__["a" /* EventsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_organiser_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_organiser_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_organiser_create_event_create_event_component__["a" /* CreateEventComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__services_validator_service__["a" /* ValidatorService */], __WEBPACK_IMPORTED_MODULE_19__services_authguard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_21__components_organiser_create_event_create_event_service__["a" /* CreateEventService */], __WEBPACK_IMPORTED_MODULE_13__components_organiser_events_events_service__["a" /* EventsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#sliderDiv{\n  height: 600px;\n  padding-top: 50px;\n  color: #ffffff;\n}\n\n#divTwo{\n  height: 300px;\n  padding-top: 30px;\n}\n\n#divThree{\n  height: 700px;\n}\n\nh1, h2, h3, h4, h5, p{\n  text-align: center;\n}\ndiv{\n  margin: auto !important;\n  text-align: center;\n}\n\n@media only screen and (max-width: 1200px) {\n    .ribbon {\n        width: 100%;\n    }\n    #divThree{\n      height: 700px;\n    }\n    h3{\n      font-size: 36px;\n    }\n    p{\n      font-size: 18px;\n    }\n    #sliderDiv{\n      height: 600px;\n      padding-top: 30px;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n<div class=\"sliderDiv\" id='sliderDiv' [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\n  <h3>Sell Tickets Fast</h3>\n  <h3>Get Paid Faster</h3>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore .\n    <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.\n    <br>Duis aute irure dolor voluptate velit esse cillum dolore eu fugiat.\n    <br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.\n  </p>\n  <br><br>\n  <div class=\"row\">\n    <div class=\"col s1 m3\"></div>\n    <div class=\"col s12 m3\">\n      <img src=\"{{appstore}}\" [ngStyle]=\"{'width': '185px', 'height': '60px'}\">\n    </div>\n    <div class=\"col s12 m3\">\n      <img src=\"{{playstore}}\" [ngStyle]=\"{'width': '185px', 'height': '60px'}\">\n    </div>\n    <div class=\"col s1 m3\"></div>\n  </div>\n</div>\n\n<div class=\"divTwo row\" id=\"divTwo\">\n  <div class=\"col s12 m1\"></div>\n  <div class=\"col s12 m5\">\n    <h4>No More Long Lines</h4>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n      <br>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      <br> Ut enim ad minim veniam, quis nostrud exercitation\n      <br>aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n      <br>voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      <br>cupidatat non proident, sunt in culpa qui officia .\n    </p>\n  </div>\n  <div class=\"col s12 m6\">\n    <img src=\"{{iosApp}}\" id=\"sliderImage\">\n  </div>\n</div>\n\n<div class=\"divThree row\" id=\"divThree\">\n  <div class=\"col s12 m12\">\n    <h3>Bring Your Event To Life</h3>\n    <img src=\"{{ribbon}}\" class=\"ribbon\">\n  </div>\n  <br><br><br>\n  <div class=\"col s12 m12\">\n    <a routerLink='/login' routerLinkActive='active'><button style=\"background-color:#25252E !important\" type=\"button\" name=\"button\" class=\"btn-large getStarted waves-effect waves-light\">Get Started</button></a>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
        this.title = 'GatePassNG';
        this.sliderImages = ['assets/img/1.png', 'assets/img/2.png', 'assets/img/1.jpg', 'assets/img/4.jpg', 'assets/img/5.jpg', 'assets/img/6.jpg'];
        this.image = this.sliderImages[2];
        this.iosApp = 'assets/img/iosapp.png';
        this.ribbon = 'assets/img/ribbon.png';
        this.appstore = 'assets/img/appstore.png';
        this.playstore = 'assets/img/playstore.png';
        //Observable.interval(3000).subscribe(() => {
        //this.slideShow();
        //});
    }
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'index',
        template: __webpack_require__("../../../../../src/app/components/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IndexComponent);

//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loginBody{\n  height: 600px;\n  width: 100%;\n  padding-top: 65px;\n  -webkit-filter: contrast(100%); /* Safari 6.0 - 9.0 */\n  filter: contrast(100%);\n  z-index: -500;\n}\n\n\n.form{\n  background-color: #fff;\n  height: 387px;\n  margin: auto;\n  margin-top: 450px;\n  margin-bottom: 100px;\n  padding-top: 30px;\n  /*margin-left: 33%;*/\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n\n.transparent{\n  background-color: rgba(64, 64, 64, 0.5) !important;\n  height: 300px;\n  color: #ffffff;\n}\n\n.transparent-btn{\n  background-color: rgba(255, 255, 255, 0.1) !important;\n  border: 1px solid #fff;\n  border-radius: 5px;\n}\n\n.small{\n  display: none;\n}\n\n@media only screen and (max-width: 1200px) {\n  loginBody{\n    height: inherit;\n    padding-top: 65px;\n  }\n\n  .form{\n    background-color: #fff;\n    height: 320px;\n    margin: auto;\n    margin-top: 450px;\n    margin-bottom: 100px;\n    /*margin-left: 33%;*/\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n    margin: auto;\n  }\n\n  .transparent{\n    display: none;\n  }\n\n  .small{\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loginBody\" id='loginBody' [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\n  <div class=\"row\">\n    <div class=\"col m2 s1\"></div>\n    <div class=\"form col m4 s10 row\" align=\"center\">\n    \t<form (submit)=\"onLoginSubmit()\" class=\"row\" id=\"form\" novalidate=\"\">\n    \t\t<h4>Login</h4>\n            <div class=\"input-field col s12\">\n              <input placeholder=\"E-mail\" id=\"password\" type=\"email\" class=\"validate\" name=\"email\" [(ngModel)]=\"email\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input placeholder='Password' id=\"password\" type=\"password\" class=\"validate\" name=\"password\" [(ngModel)]=\"password\">\n            </div>\n            <button type=\"submit\" name=\"button\" class=\"btn waves-effect waves-light\" [disabled]='isDisabled'>Login</button>\n            <h5 class=\"small\">Don't have an account? <a routerLink='/register'>Register</a></h5>\n    \t</form>\n    </div>\n    <br><br><br><br>\n    <div class=\"col m4 s1 transparent\">\n      <div class=\"right\" align='right'>\n        <h4>Don't have an <br> account?</h4>\n        <a routerLink='/register'><button style=\"background-color: #25252E !important\" type=\"button\" name=\"button\" class=\"transparent-btn btn\">Register</button></a>\n        <p>Read the terms and conditions for this platform <br><a routerLink='/#'>here</a> </p>\n      </div>\n    </div>\n    <div class=\"col m2 s1\"></div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, _auth) {
        this.router = router;
        this._auth = _auth;
        this.image = 'assets/img/7.jpg';
        this.title = 'Login Page';
        this.isDisabled = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.isDisabled = true;
        var user = {
            email: this.email,
            password: this.password
        };
        this._auth.loginUser(user).subscribe(function (data) {
            if (data.status == false) {
                Materialize.toast('Invalid email or password', 5000, 'red white-text');
                _this.isDisabled = false;
            }
            else if (data.status == true) {
                Materialize.toast('Login successful', 5000, 'green white-text');
                localStorage.setItem('token', data.token);
                console.log(localStorage.getItem('gatepass_token'));
                _this.isDisabled = false;
                //console.log(data.token);
                _this.router.navigate(['/events']);
            }
            else {
                _this.isDisabled = false;
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\n  min-width: 100% !important;\n  min-height: 100% !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <nav class=\"white\" role=\"navigation\">\n    <div class=\"nav-wrapper container\">\n      <a id=\"logo-container\" routerLink='/index' class=\"brand-logo\"><h4 class=\"primary-base-text\">Gatepass</h4></a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li><a *ngIf=\"!_auth.loggedIn()\" routerLink='/register' routerLinkActive='active'>Get Started</a></li>\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/events' routerLinkActive='active'>Events</a></li>\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/create-event' routerLinkActive='active'>Create Event</a></li>\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/profile' routerLinkActive='active'>Profile</a></li>\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/settings' routerLinkActive='active'>Settings</a></li>\n        <li><a *ngIf=\"_auth.loggedIn()\" (click)='logOut()'>Logout</a></li>\n      </ul>\n\n      <ul id=\"nav-mobile\" class=\"side-nav\">\n        <li><a *ngIf=\"!_auth.loggedIn()\" routerLink='/register' routerLinkActive='active'>Get Started</a></li>\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/events' routerLinkActive='active'>Events</a></li>\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/create-event' routerLinkActive='active'>Create Event</a></li>\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/profile' routerLinkActive='active'>Profile</a></li>\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/settings' routerLinkActive='active'>Settings</a></li>\n        <li><a *ngIf=\"_auth.loggedIn()\" (click)='logOut()'>Logout</a></li>\n      </ul>\n      <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse white-text\"><i class=\"fa fa-bars primary-base-text\"></i></a>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = (function () {
    function NavComponent(_auth, router) {
        this._auth = _auth;
        this.router = router;
        this.logo = 'assets/img/logo1.png';
        this.loggedIn$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.loggedIn);
        console.log(this._auth.loggedIn());
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.setLoggedIn = function (value) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    };
    NavComponent.prototype.logOut = function () {
        console.log('logged out');
        Materialize.toast('Logout successful', 5000, 'green white-text');
        localStorage.removeItem('gatepass_token');
        this.router.navigate(['/login']);
        this.setLoggedIn(false);
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavComponent);

var _a, _b;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/create-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\n  min-height: 100vh;\n  padding-bottom: 70px;\n}\nlabel{\n  font-size: 12px !important;\n}\n\nagm-map {\n  height: 100vh;\n}\n\n/deep/ image-upload label.upload.button { background-color: #24242e; }\n\n/*.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.upload-btn {\n  border: 1px solid #24242e;\n  color: #24242e;\n  background-color: #fff;\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 18px;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 18px !important;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/create-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row body\">\n  <div class=\"col m12 s12\">\n    <h5>Create Event</h5>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n    <br>\n  </div>\n\n<!-- form starts here -->\n  <div class=\"col m6 s12\">\n    <form class=\"col s12\" (submit)=\"createEvent(eventDate.value, eventTime.value)\" class=\"row\" id=\"form\" novalidate=\"\">\n      <div class=\"row\">\n        <div class=\"input-field col s12 m6\">\n          <label for=\"event_name\">Event Name</label>\n          <input placeholder=\"Event Name\" id=\"event_name\" type=\"text\" class=\"validate\" name=\"event_name\" [(ngModel)]=\"event_name\">\n        </div>\n        <div class=\"input-field col s12 m6\">\n          <label for=\"event_location\">Event Location</label>\n          <input placeholder='Event Location' id=\"event_location\" type=\"text\" class=\"validate\" name=\"event_location\" [(ngModel)]=\"event_location\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12 m6\">\n          <label for=\"event_date\">Date</label><br>\n          <input id=\"event_date\" type=\"text\" class=\"datepicker\" #eventDate name=\"event_date\" [(ngModel)]=\"event_date\">\n        </div>\n        <div class=\"input-field col s12 m6\">\n          <label for=\"event_time\">Time</label><br>\n          <input id=\"event_time\" type=\"text\" class=\"timepicker\" #eventTime name=\"event_time\" [(ngModel)]=\"event_time\">\n        </div>\n      </div>\n      <div class=\"row\"><br>\n        <div class=\"input-field col s12 m6\">\n          <label for=\"price\">Base Price</label>\n          <input placeholder=\"Base Price\" id=\"price\" type=\"text\" class=\"validate\"  name=\"base_price\" [(ngModel)]=\"base_price\">\n        </div>\n      </div>\n      <br><br>\n      <h5>Ticket Details</h5><br>\n\n      <!-- ticket type 1 -->\n      <div class=\"row\">\n        <div class=\"input-field col s12 m4\">\n          <label for=\"ticket_name\">Ticket Name</label>\n          <input placeholder=\"e.g. Regular\" id=\"price\" type=\"text\" class=\"validate\" name=\"ticket1_name\" [(ngModel)]=\"ticket1_name\">\n        </div>\n        <div class=\"input-field col s12 m4\">\n          <label for=\"ticket_price\">Ticket Price</label>\n          <input placeholder='ticket Price' id=\"ticket_price\" type=\"text\" class=\"validate\" name=\"ticket1_price\" [(ngModel)]=\"ticket1_price\">\n        </div>\n        <div class=\"col s12 m4\">\n          <image-upload  [max]=\"1\"  [url]=\"'https://api.imgur.com/3/upload'\"  [headers]=\"[{header: 'Authorization', value: 'Client-ID aab3505f42b5d63'}]\"\n          buttonCaption=\"Ticket Image\"  dropBoxMessage=\"Drop image here\"  (onFileUploadFinish)=\"imageUploaded($event)\" [extensions]=\"['jpeg','png','jpg']\" #ticketImg></image-upload>\n        </div>\n      </div><br>\n      <!-- ticket type 1 end-->\n\n      <br><br>\n      <div class=\"row\">\n        <div class=\"file-field input-field col s12\">\n          <h5 align='center'>Design Image</h5>\n          <!-- <div class=\"btn\">\n            <span>Upload</span>\n            <input type=\"file\">\n          </div>\n          <div class=\"file-path-wrapper\">\n            <input class=\"file-path validate\" type=\"text\">\n          </div> -->\n          <image-upload  [max]=\"1\"  [url]=\"'https://api.imgur.com/3/upload'\"  [headers]=\"[{header: 'Authorization', value: 'Client-ID aab3505f42b5d63'}]\"\n          buttonCaption=\"Event Image\"  dropBoxMessage=\"Drop image here\"  (onFileUploadFinish)=\"imageUploaded($event)\" [extensions]=\"['jpeg','png','jpg']\" #eventImg></image-upload>\n        </div>\n      </div>\n      <br><br>\n      <div class=\"row\" align=center>\n        <button type=\"submit\" name=\"button\" class=\"btn\" [disabled]='isDisabled'>Create Event</button>\n      </div>\n      <br><br>\n    </form>\n  </div>\n  <!-- form ends here -->\n\n\n\n  <div class=\"col m6 s12\">\n    <agm-map [latitude]=\"position.latitude\" [longitude]=\"position.longitude\" [zoom]='17' [minZoom]='15'>\n      <agm-marker [latitude]=\"position.latitude\" [longitude]=\"position.longitude\">\n        <!-- <agm-snazzy-info-window [isOpen]=\"true\" [maxWidth]=\"200\" [closeWhenOthersOpen]=\"true\" backgroundColor='#0ff' border=\"{width: '5px', color: '#000'}\">\n          <ng-template>\n            My first Snazzy Info Window!\n          </ng-template>\n        </agm-snazzy-info-window> -->\n      </agm-marker>\n    </agm-map>\n  </div>\n\n\n</div>\n\n<!-- <div class=\"upload-btn-wrapper\">\n  <button class=\"upload-btn\">ticket image</button>\n  <input type=\"file\" (change)=\"fileChange($event)\" accept=\".jpeg,.jpg,.png\">\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/create-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_event_service__ = __webpack_require__("../../../../../src/app/components/organiser/create-event/create-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateEventComponent = (function () {
    function CreateEventComponent(createEventService, router, _http) {
        this.createEventService = createEventService;
        this.router = router;
        this._http = _http;
        this.mapTitle = 'google map';
        this.position = {
            'longitude': 4.673671399999989,
            'latitude': 8.4793627
        };
        this.tables = []; //This is the table you'll send back it will contain the table id's
        this.isDisabled = true;
    }
    CreateEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.position = position.coords;
                //console.log(this.position.longitude);
                //console.log(this.position.latitude);
            });
        }
    };
    CreateEventComponent.prototype.imageUploaded = function (event) {
        var _this = this;
        var resp = event.serverResponse._body;
        var j = JSON.parse(resp);
        var data = {
            "image_url": j.data.link,
            "price": this.ticket1_price,
            "title": this.ticket1_name
        };
        console.log(data);
        this.quicky(data).subscribe(function (resp) {
            if (resp.status) {
                _this.tables.push(resp.table._id.$oid);
                console.log(_this.tables);
                _this.isDisabled = false;
            }
        });
    };
    CreateEventComponent.prototype.quicky = function (data) {
        var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Authorization', localStorage.getItem('gatepass_token'));
        return this._http.post("http://gatepassng.herokuapp.com/api/v1/table", data, { headers: header }).map(function (res) { return res.json(); });
    };
    CreateEventComponent.prototype.createEvent = function (d, t) {
        var _this = this;
        var event = {
            coord: [this.position.latitude, this.position.longitude],
            date: d,
            image_url: 'https://i.imgur.com/v0zECrf.jpg',
            location: this.event_location,
            name: this.event_name,
            price: this.base_price,
            table: this.tables,
            time: t
        };
        this.createEventService.postEvent(event).subscribe(function (data) {
            if (data.status == false) {
                Materialize.toast('Error while creating event', 5000, 'red white-text');
                console.log(data);
            }
            else if (data.status == true) {
                console.log(data);
                Materialize.toast('Event created', 5000, 'green white-text');
                _this.router.navigate(['/events']);
            }
        }, function (err) { return console.log(err); }, function () { return console.log(event); } //console.log('Request Completed')
        );
    };
    return CreateEventComponent;
}());
CreateEventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'create-event',
        template: __webpack_require__("../../../../../src/app/components/organiser/create-event/create-event.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/organiser/create-event/create-event.component.css"), __webpack_require__("../../../../../src/app/components/organiser/create-event/snazzy-info-window.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__create_event_service__["a" /* CreateEventService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__create_event_service__["a" /* CreateEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__create_event_service__["a" /* CreateEventService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _c || Object])
], CreateEventComponent);

var _a, _b, _c;
//# sourceMappingURL=create-event.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/create-event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateEventService = (function () {
    function CreateEventService(_http) {
        this._http = _http;
        this.http = _http;
        this.token = localStorage.getItem('gatepass_token');
        (function ($) {
            $(function () {
                $('.button-collapse').sideNav();
                $('.parallax').parallax();
                $('.datepicker').pickadate({
                    format: 'dd/mm/yyyy',
                    formatSubmit: 'dd/mm/yyyy',
                    selectMonths: true,
                    selectYears: 10,
                    today: 'Today',
                    clear: 'Clear',
                    close: 'Ok',
                    closeOnSelect: false // Close upon selecting a date,
                });
                $('.timepicker').pickatime({
                    default: 'now',
                    fromnow: 0,
                    twelvehour: false,
                    donetext: 'OK',
                    cleartext: 'Clear',
                    canceltext: 'Cancel',
                    autoclose: false,
                    ampmclickable: true,
                    aftershow: function () { } //Function for after opening timepicker
                });
            });
        })(jQuery);
    }
    CreateEventService.prototype.postEvent = function (event) {
        console.log(event);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.http.post('https://gatepassng.herokuapp.com/api/v1/events', event, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    return CreateEventService;
}());
CreateEventService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CreateEventService);

var _a;
//# sourceMappingURL=create-event.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/snazzy-info-window.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".si-float-wrapper {\n  position: absolute;\n  width: 100%; }\n  .si-float-wrapper,\n  .si-float-wrapper * {\n    box-sizing: border-box; }\n\n[class*='si-wrapper'] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px;\n  cursor: default; }\n\n.si-wrapper-top {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: -40px;\n  margin-left: 0px;\n  -webkit-transform: translate(-50%, -100%);\n          transform: translate(-50%, -100%); }\n\n.si-wrapper-bottom {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n  margin-top: 0px;\n  margin-left: 0px;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0); }\n\n.si-wrapper-left {\n  margin-top: -20px;\n  margin-left: -11px;\n  -webkit-transform: translate(-100%, -50%);\n          transform: translate(-100%, -50%); }\n\n.si-wrapper-right {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  margin-top: -20px;\n  margin-left: 11px;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%); }\n\n[class*='si-shadow-wrapper'] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.29804;\n  z-index: 1; }\n\n.si-shadow-wrapper-top,\n.si-shadow-wrapper-bottom {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.si-shadow-pointer-bottom,\n.si-shadow-pointer-right {\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1; }\n\n.si-shadow-frame {\n  box-shadow: 0 1px 3px 0 #000; }\n\n[class*='si-shadow-pointer'] {\n  position: relative;\n  width: 15px;\n  height: 15px;\n  margin: auto; }\n\n[class*='si-shadow-inner-pointer'] {\n  position: absolute;\n  width: 141%;\n  height: 141%;\n  box-shadow: -0.70711px 0.70711px 3px 0 #000; }\n\n.si-shadow-inner-pointer-top {\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg); }\n\n.si-shadow-inner-pointer-bottom {\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translate(-50%, 50%) rotate(-45deg);\n          transform: translate(-50%, 50%) rotate(-45deg); }\n\n.si-shadow-inner-pointer-left {\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg); }\n\n.si-shadow-inner-pointer-right {\n  top: 50%;\n  right: 0;\n  -webkit-transform: translate(50%, -50%) rotate(-45deg);\n          transform: translate(50%, -50%) rotate(-45deg); }\n\n.si-frame {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  border-radius: 3px;\n  overflow: hidden;\n  z-index: 2; }\n\n.si-content-wrapper {\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  padding: 30px;\n  background-color: #fff; }\n  .si-has-border .si-content-wrapper {\n    border: 1px solid #bbb; }\n\n.si-content {\n  overflow: auto; }\n\n.si-close-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  color: inherit;\n  font-family: Arial, Baskerville, monospace;\n  font-size: 24px;\n  cursor: pointer;\n  opacity: 0.5;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  .si-close-button:hover, .si-close-button:focus {\n    opacity: 0.7; }\n\n[class*='si-pointer-border'] {\n  position: absolute;\n  border: 15px solid transparent;\n  z-index: 3; }\n\n[class*='si-pointer-bg'] {\n  position: relative;\n  border: 15px solid transparent;\n  z-index: 4; }\n  .si-has-border [class*='si-pointer-bg'] {\n    border-width: 15px; }\n\n.si-pointer-border-top,\n.si-pointer-border-bottom {\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0); }\n\n.si-pointer-border-left,\n.si-pointer-border-right {\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%); }\n\n.si-pointer-top {\n  border-bottom: 0; }\n\n.si-pointer-border-top {\n  bottom: 0;\n  border-top-color: #bbb; }\n\n.si-pointer-bg-top {\n  border-top-color: #fff; }\n  .si-has-border .si-pointer-bg-top {\n    top: -1px;\n    margin-bottom: 0px; }\n\n.si-pointer-bottom {\n  border-top: 0; }\n\n.si-pointer-border-bottom {\n  top: 0;\n  border-bottom-color: #bbb; }\n\n.si-pointer-bg-bottom {\n  border-bottom-color: #fff; }\n  .si-has-border .si-pointer-bg-bottom {\n    bottom: -1px;\n    margin-top: 0px; }\n\n.si-pointer-left {\n  border-right: 0; }\n\n.si-pointer-border-left {\n  right: 0;\n  border-left-color: #bbb; }\n\n.si-pointer-bg-left {\n  border-left-color: #fff; }\n  .si-has-border .si-pointer-bg-left {\n    left: -1px;\n    margin-right: 0px; }\n\n.si-pointer-right {\n  border-left: 0; }\n\n.si-pointer-border-right {\n  left: 0;\n  border-right-color: #bbb; }\n\n.si-pointer-bg-right {\n  border-right-color: #fff; }\n  .si-has-border .si-pointer-bg-right {\n    right: -1px;\n    margin-left: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/organiser/events/events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\n  min-height: 80vh !important;\n  padding: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/organiser/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n\n  <table class=\"responsive-table striped\">\n        <thead>\n          <tr>\n              <th data-field=\"#\"></th>\n              <th data-field=\"name\">Name</th>\n              <th data-field=\"location\">Location</th>\n              <th data-field=\"date\">Date</th>\n              <th data-field=\"purchase\">Purchase</th>\n              <th data-field=\"status\">Status</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngIf='noEvent'><td colspan=\"6\"><h2 align=center>You have no events at this time</h2></td></tr>\n          <tr *ngFor=\"let event of events; let i = index\">\n            <td>{{i+1}}</td>\n            <td>{{event.name}}</td>\n            <td>{{event.location}}</td>\n            <td>{{event.date}}</td>\n            <td>{{event.price}}</td>\n            <td>\n              <div class=\"switch\">\n                  <label>Off<input type=\"checkbox\" [checked]=\"event.is_online\" (change)='changeStatus()'><span class=\"lever\"></span>On</label>\n                </div>\n            </td>\n          </tr>\n        </tbody>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/organiser/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_service__ = __webpack_require__("../../../../../src/app/components/organiser/events/events.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsComponent = (function () {
    function EventsComponent(eventsService, router) {
        this.eventsService = eventsService;
        this.router = router;
        this.noEvent = false;
        this.viewEvents();
    }
    EventsComponent.prototype.ngOnInit = function () { };
    EventsComponent.prototype.viewEvents = function () {
        var _this = this;
        this.eventsService.getEvent().subscribe(function (data) {
            _this.events = data;
            if (_this.events.length == 0) {
                _this.noEvent = true;
            }
        }, function (err) { return console.log(err); }, function () { return console.log(_this.events); });
    };
    EventsComponent.prototype.changeStatus = function () {
        console.log('now false');
    };
    return EventsComponent;
}());
EventsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'events',
        template: __webpack_require__("../../../../../src/app/components/organiser/events/events.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/organiser/events/events.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__events_service__["a" /* EventsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], EventsComponent);

var _a, _b;
//# sourceMappingURL=events.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/events/events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsService = (function () {
    function EventsService(_http) {
        this._http = _http;
        this.http = _http;
        this.token = localStorage.getItem('gatepass_token');
    }
    EventsService.prototype.getEvent = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.http.get('https://gatepassng.herokuapp.com/api/v1/events', { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    return EventsService;
}());
EventsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], EventsService);

var _a;
//# sourceMappingURL=events.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/organiser/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/organiser/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/organiser/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/organiser/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/organiser/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/organiser/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/components/organiser/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/organiser/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#registerBody{\n  height: 600px;\n  width: 100%;\n  padding-top: 65px;\n  -webkit-filter: contrast(100%); /* Safari 6.0 - 9.0 */\n  filter: contrast(100%);\n  z-index: -500;\n}\n\n\n.form{\n  background-color: #fff;\n  height: 450px;\n  margin: auto;\n  margin-top: 450px;\n  margin-bottom: 100px;\n  /*padding-top: 30px;*/\n  /*margin-right: 33%;*/\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n\n.transparent{\n  background-color: rgba(64, 64, 64, 0.5) !important;\n  height: 300px;\n  color: #ffffff;\n}\n\n.transparent-btn{\n  background-color: rgba(255, 255, 255, 0.1) !important;\n  border: 1px solid #fff;\n  border-radius: 5px;\n}\n\n.small{\n  display: none;\n}\n\n@media only screen and (max-width: 1050px) {\n  .registerBody{\n    height: inherit;\n    padding-top: 65px;\n  }\n\n  .form{\n    background-color: #fff;\n    height: 470px;\n    margin: auto;\n    margin-top: 450px;\n    margin-bottom: 100px;\n    /*margin-right: 33%;*/\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n  }\n\n  .transparent{\n    display: none;\n  }\n\n  .small{\n    display: block;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"registerBody\" id='registerBody' [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\n  <div class=\"row\">\n\n    <div class=\"col m2 s1\"></div>\n    <div class=\"col m4 transparent\">\n      <div align='left'>\n        <h4>Already have an <br> account?</h4>\n        <a routerLink='/login'><button type=\"button\" name=\"button\" class=\"transparent-btn btn\">Login</button></a>\n        <p>Read the terms and conditions for this platform <br><a routerLink='/#'>here</a> </p>\n      </div>\n    </div>\n    <div class=\"form col m4 s10 row\" align=\"center\">\n    \t<form class=\"row\" id=\"form\" (submit)=\"onRegisterSubmit()\" novalidate=\"\">\n    \t\t<h4>Register</h4>\n            <div class=\"input-field col s12\">\n              <input [(ngModel)]=\"fullname\"  placeholder=\"Fullname\" id=\"fullname\" type=\"text\" class=\"validate\" name=\"fullname\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input [(ngModel)]=\"username\"  placeholder=\"Username\" id=\"username\" type=\"text\" class=\"validate\" name=\"username\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input [(ngModel)]=\"phone\"  placeholder=\"Phone\" id=\"phone\" type=\"text\" class=\"validate\" name=\"phone\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input [(ngModel)]=\"email\"  placeholder=\"E-mail\" id=\"password\" type=\"email\" class=\"validate\" name=\"email\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input [(ngModel)]=\"password\"  placeholder='Password' id=\"password\" type=\"password\" class=\"validate\" name=\"password\">\n            </div>\n            <button type=\"submit\" name=\"button\" class=\"btn waves-effect waves-light\" [disabled]='isDisabled'>Register</button>\n\n            <h5 class=\"small\">Already have an account? <a routerLink='/login'>Login</a></h5>\n    \t</form>\n    </div>\n    <div class=\"col m2 s1\"></div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validator_service__ = __webpack_require__("../../../../../src/app/services/validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(_auth, _validateService, _router) {
        this._auth = _auth;
        this._validateService = _validateService;
        this._router = _router;
        this.image = 'assets/img/7.jpg';
        this.title = 'Register Page';
        this.responseStatus = [];
        this.isDisabled = false;
        this.location = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.isDisabled = true;
        var user = {
            fullname: this.fullname,
            username: this.username,
            phone: this.username,
            password: this.password,
            email: this.email
        };
        //console.log(user)
        if (!this._validateService.ValidateRegister(user)) {
            //Show flash or something
            console.log("err");
            return false;
        }
        //validate email
        if (!this._validateService.ValidateEmail(user.email)) {
            //Flash flash flash flash
            console.log("err");
            return false;
        }
        this._auth.registerUser(user).subscribe(function (data) {
            console.log(data);
            if (data.status == false) {
                Materialize.toast(data.message + 's', 5000, 'red white-text');
                _this.isDisabled = false;
            }
            else if (data.status == true) {
                //Flash message
                Materialize.toast('Registration successful', 5000, 'green white-text');
                localStorage.setItem('gatepass_token', data.token);
                console.log(localStorage.setItem('token', data.token));
                _this._router.navigate(['/events']);
                _this.isDisabled = false;
            }
            else {
                //Flash message
                _this._router.navigate(['/register']);
                _this.isDisabled = false;
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validator_service__["a" /* ValidatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validator_service__["a" /* ValidatorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
    }
    AuthService.prototype.registerUser = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        return this._http.post('https://gatepassng.herokuapp.com/api/v1/organiser/register', user, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loginUser = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        return this._http.post('https://gatepassng.herokuapp.com/api/v1/organiser/login', user, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //the CanActivate is to  to portect

var AuthGuard = (function () {
    function AuthGuard(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._auth.loggedIn()) {
            console.log(this._auth.loggedIn());
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidatorService = (function () {
    function ValidatorService() {
    }
    ValidatorService.prototype.ValidateRegister = function (user) {
        if (user.fullname == undefined || user.email == undefined || user.password == undefined || user.phone == undefined || user.username == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidatorService.prototype.ValidateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidatorService;
}());
ValidatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidatorService);

//# sourceMappingURL=validator.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map