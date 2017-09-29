webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = "<div class=\"body\">\r\n  <app-nav></app-nav>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n<footer class=\"page-footer\">\r\n    <div class=\"footer-copyright\">\r\n      <div class=\"container\">\r\n        &copy; Company 2017.\r\n      </div>\r\n    </div>\r\n</footer>\r\n<p style=\"display: none\">{{computerIsOnline | async}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].interval(1000).subscribe(function () {
            _this.computerIsOnline = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].merge(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(navigator.onLine), __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'online').map(function () { return true; }), __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'offline').map(function () {
                Materialize.toast("Seems you're offline", 3000, 'grey darken-3 white-text');
                //return false
            }));
        });
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBQTeEyrwUuonblZu8k9cCxErVDCw7qn1k',
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__["ImageUploadModule"].forRoot()
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
exports.push([module.i, "#sliderDiv{\r\n  height: 600px;\r\n  padding-top: 50px;\r\n  color: #ffffff;\r\n}\r\n\r\n#divTwo{\r\n  height: 300px;\r\n  padding-top: 30px;\r\n}\r\n\r\n#divThree{\r\n  height: 700px;\r\n}\r\n\r\nh1, h2, h3, h4, h5, p{\r\n  text-align: center;\r\n}\r\ndiv{\r\n  margin: auto !important;\r\n  text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .ribbon {\r\n        width: 100%;\r\n    }\r\n    #divThree{\r\n      height: 700px;\r\n    }\r\n    h3{\r\n      font-size: 36px;\r\n    }\r\n    p{\r\n      font-size: 18px;\r\n    }\r\n    #sliderDiv{\r\n      height: 600px;\r\n      padding-top: 30px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n<div class=\"sliderDiv\" id='sliderDiv' [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\r\n  <h3>Sell Tickets Fast</h3>\r\n  <h3>Get Paid Faster</h3>\r\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore .\r\n    <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.\r\n    <br>Duis aute irure dolor voluptate velit esse cillum dolore eu fugiat.\r\n    <br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.\r\n  </p>\r\n  <br><br>\r\n  <div class=\"row\">\r\n    <div class=\"col s1 m3\"></div>\r\n    <div class=\"col s12 m3\">\r\n      <img src=\"{{appstore}}\" [ngStyle]=\"{'width': '185px', 'height': '60px'}\">\r\n    </div>\r\n    <div class=\"col s12 m3\">\r\n      <img src=\"{{playstore}}\" [ngStyle]=\"{'width': '185px', 'height': '60px'}\">\r\n    </div>\r\n    <div class=\"col s1 m3\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"divTwo row\" id=\"divTwo\">\r\n  <div class=\"col s12 m1\"></div>\r\n  <div class=\"col s12 m5\">\r\n    <h4>No More Long Lines</h4>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,\r\n      <br>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n      <br> Ut enim ad minim veniam, quis nostrud exercitation\r\n      <br>aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r\n      <br>voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n      <br>cupidatat non proident, sunt in culpa qui officia .\r\n    </p>\r\n  </div>\r\n  <div class=\"col s12 m6\">\r\n    <img src=\"{{iosApp}}\" id=\"sliderImage\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"divThree row\" id=\"divThree\">\r\n  <div class=\"col s12 m12\">\r\n    <h3>Bring Your Event To Life</h3>\r\n    <img src=\"{{ribbon}}\" class=\"ribbon\">\r\n  </div>\r\n  <br><br><br>\r\n  <div class=\"col s12 m12\">\r\n    <a routerLink='/login' routerLinkActive='active'><button style=\"background-color:#25252E !important\" type=\"button\" name=\"button\" class=\"btn-large getStarted waves-effect waves-light\">Get Started</button></a>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, "#loginBody{\r\n  height: 600px;\r\n  width: 100%;\r\n  padding-top: 65px;\r\n  -webkit-filter: contrast(100%); /* Safari 6.0 - 9.0 */\r\n  filter: contrast(100%);\r\n  z-index: -500;\r\n}\r\n\r\n\r\n.form{\r\n  background-color: #fff;\r\n  height: 387px;\r\n  margin: auto;\r\n  margin-top: 450px;\r\n  margin-bottom: 100px;\r\n  padding-top: 30px;\r\n  /*margin-left: 33%;*/\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.transparent{\r\n  background-color: rgba(64, 64, 64, 0.5) !important;\r\n  height: 300px;\r\n  color: #ffffff;\r\n}\r\n\r\n.transparent-btn{\r\n  background-color: rgba(255, 255, 255, 0.1) !important;\r\n  border: 1px solid #fff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.small{\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n  loginBody{\r\n    height: inherit;\r\n    padding-top: 65px;\r\n  }\r\n\r\n  .form{\r\n    background-color: #fff;\r\n    height: 350px;\r\n    margin: auto;\r\n    margin-top: 450px;\r\n    margin-bottom: 100px;\r\n    /*margin-left: 33%;*/\r\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n    margin: auto;\r\n  }\r\n\r\n  .transparent{\r\n    display: none;\r\n  }\r\n\r\n  .small{\r\n    display: block;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loginBody\" id='loginBody' [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\r\n  <div class=\"row\">\r\n    <div class=\"col m2 s1\"></div>\r\n    <div class=\"form col m4 s10 row\" align=\"center\">\r\n    \t<form (submit)=\"onLoginSubmit()\" class=\"row\" id=\"form\" novalidate=\"\">\r\n    \t\t<h4>Login</h4>\r\n            <div class=\"input-field col s12\">\r\n              <input placeholder=\"E-mail\" id=\"password\" type=\"email\" class=\"validate\" name=\"email\" [(ngModel)]=\"email\">\r\n            </div>\r\n            <div class=\"input-field col s12\">\r\n              <input placeholder='Password' id=\"password\" type=\"password\" class=\"validate\" name=\"password\" [(ngModel)]=\"password\">\r\n            </div>\r\n            <button type=\"submit\" name=\"button\" class=\"btn waves-effect waves-light\" [disabled]='isDisabled'>Login</button>\r\n            <div class=\"progress\" *ngIf='isDisabled'>\r\n                <div class=\"indeterminate\"></div>\r\n            </div>\r\n            <h5 class=\"small\">Don't have an account? <a routerLink='/register'>Register</a></h5>\r\n    \t</form>\r\n    </div>\r\n    <br><br><br><br>\r\n    <div class=\"col m4 s1 transparent\">\r\n      <div class=\"right\" align='right'>\r\n        <h4>Don't have an <br> account?</h4>\r\n        <a routerLink='/register'><button style=\"background-color: #25252E !important\" type=\"button\" name=\"button\" class=\"transparent-btn btn\">Register</button></a>\r\n        <p>Read the terms and conditions for this platform <br><a routerLink='/#'>here</a> </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col m2 s1\"></div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
                //console.log(localStorage.getItem('token'));
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\r\n  min-width: 100% !important;\r\n  min-height: 100% !important;\r\n}\r\n\r\ndiv .container a img{\r\n  width: 210px !important;\r\n  height: 55px !important;\r\n\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n  div .container a img{\r\n    width: 180px !important;\r\n    height: 55px !important;\r\n\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <nav class=\"white\" role=\"navigation\">\r\n    <div class=\"nav-wrapper container\">\r\n      <a id=\"logo-container\" routerLink='/index' class=\"brand-logo\"><img src=\"{{logo}}\"></a>\r\n      <ul class=\"right hide-on-med-and-down\">\r\n        <li><a *ngIf=\"!_auth.loggedIn()\" routerLink='/register' routerLinkActive='active'>Get Started</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/events' routerLinkActive='active'>Events</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/create-event' routerLinkActive='active'>Create Event</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/profile' routerLinkActive='active'>Profile</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/settings' routerLinkActive='active'>Settings</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" (click)='logOut()'>Logout</a></li>\r\n      </ul>\r\n\r\n      <ul id=\"nav-mobile\" class=\"side-nav\">\r\n        <li><a *ngIf=\"!_auth.loggedIn()\" routerLink='/register' routerLinkActive='active'>Get Started</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/events' routerLinkActive='active'>Events</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/create-event' routerLinkActive='active'>Create Event</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/profile' routerLinkActive='active'>Profile</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/settings' routerLinkActive='active'>Settings</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" (click)='logOut()'>Logout</a></li>\r\n      </ul>\r\n      <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse white-text\"><i class=\"fa fa-bars primary-base-text\"></i></a>\r\n    </div>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
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
        this.logo = 'assets/img/logo.png';
        this.loggedIn$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.loggedIn);
        //console.log(this._auth.loggedIn())
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
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        this.setLoggedIn(false);
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NavComponent);

var _a, _b;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/create-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\r\n  min-height: 100vh;\r\n  padding-bottom: 70px;\r\n}\r\n\r\nlabel{\r\n  font-size: 12px !important;\r\n}\r\n\r\nagm-map {\r\n  height: 100vh;\r\n}\r\n\r\n/deep/ image-upload label.upload.button {\r\n  background-color: #24242e;\r\n  text-transform: lowercase;\r\n  font-weight: normal;\r\n  padding: 6px;\r\n  border-radius: 3px;\r\n  font-family: 'avenirNextCondensed';\r\n}\r\n\r\n/deep/ image-upload label.clear span{\r\n  text-transform: lowercase;\r\n  font-weight: normal;\r\n  background-color: #d32f2f;\r\n}\r\n\r\n/deep/ image-upload label.clear.button{\r\n  background-color: #d32f2f;\r\n  border-radius: 3px;\r\n  padding: 6px;\r\n}\r\n\r\n/deep/ image-upload div.image-container.hr-inline-group{\r\n  background-color: #f8f8f8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/create-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row body\">\r\n  <div class=\"col m12 s12\">\r\n    <h5>Create Event</h5>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n    <br>\r\n  </div>\r\n\r\n<!-- form starts here -->\r\n  <div class=\"col m6 s12\">\r\n    <form class=\"col s12\" (submit)=\"createEvent(eventDate.value, eventTime.value)\" class=\"row\" id=\"form\" novalidate=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 m6\">\r\n          <input placeholder=\"Event Name\" id=\"event_name\" type=\"text\" class=\"validate\" name=\"event_name\" [(ngModel)]=\"event_name\">\r\n        </div>\r\n        <div class=\"input-field col s12 m6\">\r\n          <input placeholder='Event Location' id=\"event_location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"validate\" name=\"event_location\" [(ngModel)]=\"event_location\" #search [formControl]=\"searchControl\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 m6\">\r\n          <input id=\"event_date\" placeholder='Date' type=\"text\" class=\"datepicker\" #eventDate name=\"event_date\" [(ngModel)]=\"event_date\">\r\n        </div>\r\n        <div class=\"input-field col s12 m6\">\r\n          <input id=\"event_time\" placeholder=\"Time\" type=\"text\" class=\"timepicker\" #eventTime name=\"event_time\" [(ngModel)]=\"event_time\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\"><br>\r\n        <div class=\"input-field col s12 m6\">\r\n          <input placeholder=\"Base Price\" id=\"price\" type=\"text\" class=\"validate\"  name=\"base_price\" [(ngModel)]=\"base_price\">\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n      <h5>Ticket Details</h5><br>\r\n\r\n      <!-- ticket type 1 -->\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 m4\">\r\n          <input placeholder=\"e.g. Regular\" id=\"price\" type=\"text\" class=\"validate\" name=\"ticket1_name\" [(ngModel)]=\"ticket1_name\" #ticket1Name>\r\n        </div>\r\n        <div class=\"input-field col s12 m4\">\r\n          <input placeholder='Ticket Price' id=\"ticket_price\" type=\"text\" class=\"validate\" name=\"ticket1_price\" [(ngModel)]=\"ticket1_price\" #ticket1Price>\r\n        </div>\r\n        <div class=\"col s12 m4\">\r\n          <image-upload  [max]=\"1\"  [url]=\"'https://api.imgur.com/3/upload'\"  [headers]=\"[{header: 'Authorization', value: 'Client-ID aab3505f42b5d63'}]\"\r\n          buttonCaption=\"Ticket Image\"  dropBoxMessage=\"Drop image here\"  (onFileUploadFinish)=\"ticketImageUpload($event, ticket1Name.value, ticket1Price.value)\" [extensions]=\"['jpeg','png','jpg']\"></image-upload>\r\n        </div>\r\n      </div><br>\r\n      <!-- ticket type 1 end-->\r\n\r\n      <!-- ticket type 2 -->\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 m4\">\r\n          <input placeholder=\"e.g. VIP\" id=\"price\" type=\"text\" class=\"validate\" name=\"ticket2_name\" [(ngModel)]=\"ticket2_name\" #ticket2Name>\r\n        </div>\r\n        <div class=\"input-field col s12 m4\">\r\n          <input placeholder='Ticket Price' id=\"ticket_price\" type=\"text\" class=\"validate\" name=\"ticket2_price\" [(ngModel)]=\"ticket2_price\" #ticket2Price>\r\n        </div>\r\n        <div class=\"col s12 m4\">\r\n          <image-upload  [max]=\"1\"  [url]=\"'https://api.imgur.com/3/upload'\"  [headers]=\"[{header: 'Authorization', value: 'Client-ID aab3505f42b5d63'}]\"\r\n          buttonCaption=\"Ticket Image\"  dropBoxMessage=\"Drop image here\"  (onFileUploadFinish)=\"ticketImageUpload($event, ticket2Name.value, ticket2Price.value)\" [extensions]=\"['jpeg','png','jpg']\"></image-upload>\r\n        </div>\r\n      </div><br>\r\n      <!-- ticket type 2 end-->\r\n\r\n      <!-- ticket type 3 -->\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 m4\">\r\n          <input placeholder=\"e.g. Table of 4\" id=\"price\" type=\"text\" class=\"validate\" name=\"ticket3_name\" [(ngModel)]=\"ticket3_name\" #ticket3Name>\r\n        </div>\r\n        <div class=\"input-field col s12 m4\">\r\n          <input placeholder='Ticket Price' id=\"ticket_price\" type=\"text\" class=\"validate\" name=\"ticket3_price\" [(ngModel)]=\"ticket3_price\" #ticket3Price>\r\n        </div>\r\n        <div class=\"col s12 m4\">\r\n          <image-upload  [max]=\"1\"  [url]=\"'https://api.imgur.com/3/upload'\"  [headers]=\"[{header: 'Authorization', value: 'Client-ID aab3505f42b5d63'}]\"\r\n          buttonCaption=\"Ticket Image\"  dropBoxMessage=\"Drop image here\"  (onFileUploadFinish)=\"ticketImageUpload($event, ticket3Name.value, ticket3Price.value)\" [extensions]=\"['jpeg','png','jpg']\"></image-upload>\r\n        </div>\r\n      </div><br>\r\n      <!-- ticket type 3 end-->\r\n\r\n      <!-- ticket type 4 -->\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 m4\">\r\n          <input placeholder=\"e.g. Table of 6\" id=\"price\" type=\"text\" class=\"validate\" name=\"ticket4_name\" [(ngModel)]=\"ticket4_name\" #ticket4Name>\r\n        </div>\r\n        <div class=\"input-field col s12 m4\">\r\n          <input placeholder='Ticket Price' id=\"ticket_price\" type=\"text\" class=\"validate\" name=\"ticket4_price\" [(ngModel)]=\"ticket4_price\" #ticket4Price>\r\n        </div>\r\n        <div class=\"col s12 m4\">\r\n          <image-upload  [max]=\"1\"  [url]=\"'https://api.imgur.com/3/upload'\"  [headers]=\"[{header: 'Authorization', value: 'Client-ID aab3505f42b5d63'}]\"\r\n          buttonCaption=\"Ticket Image\"  dropBoxMessage=\"Drop image here\"  (onFileUploadFinish)=\"ticketImageUpload($event, ticket4Name.value, ticket4Price.value)\" [extensions]=\"['jpeg','png','jpg']\"></image-upload>\r\n        </div>\r\n      </div><br>\r\n      <!-- ticket type 4 end-->\r\n\r\n      <!-- ticket type 5 -->\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 m4\">\r\n          <input placeholder=\"e.g. Table of 8\" id=\"price\" type=\"text\" class=\"validate\" name=\"ticket5_name\" [(ngModel)]=\"ticket5_name\" #ticket5Name>\r\n        </div>\r\n        <div class=\"input-field col s12 m4\">\r\n          <input placeholder='Ticket Price' id=\"ticket_price\" type=\"text\" class=\"validate\" name=\"ticket5_price\" [(ngModel)]=\"ticket5_price\" #ticket5Price>\r\n        </div>\r\n        <div class=\"col s12 m4\">\r\n          <image-upload  [max]=\"1\"  [url]=\"'https://api.imgur.com/3/upload'\"  [headers]=\"[{header: 'Authorization', value: 'Client-ID aab3505f42b5d63'}]\"\r\n          buttonCaption=\"Ticket Image\"  dropBoxMessage=\"Drop image here\"  (onFileUploadFinish)=\"ticketImageUpload($event, ticket5Name.value, ticket5Price.value)\" [extensions]=\"['jpeg','png','jpg']\"></image-upload>\r\n        </div>\r\n      </div><br>\r\n      <!-- ticket type 5 end-->\r\n\r\n      <br><br>\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m12\">\r\n          <h5 align='center'>Event Design Image</h5>\r\n          <image-upload  [max]=\"1\"  [url]=\"'https://api.imgur.com/3/upload'\"  [headers]=\"[{header: 'Authorization', value: 'Client-ID aab3505f42b5d63'}]\"\r\n          buttonCaption=\"Event Image\"  dropBoxMessage=\"Drop image here\"  (onFileUploadFinish)=\"eventImageUpload($event)\" [extensions]=\"['jpeg','png','jpg']\" #eventImg></image-upload>\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n      <div class=\"row\" align=center>\r\n        <button type=\"submit\" name=\"button\" class=\"btn\" [disabled]='isDisabled'>Create Event</button>\r\n      </div>\r\n      <br><br>\r\n    </form>\r\n  </div>\r\n  <!-- form ends here -->\r\n\r\n\r\n\r\n  <div class=\"col m6 s12\">\r\n    <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]='17' [minZoom]='15'>\r\n      <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n    </agm-map>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/create-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_event_service__ = __webpack_require__("../../../../../src/app/components/organiser/create-event/create-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    function CreateEventComponent(createEventService, router, _http, mapsAPILoader, ngZone) {
        this.createEventService = createEventService;
        this.router = router;
        this._http = _http;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.mapTitle = 'google map';
        this.tables = [];
        this.isDisabled = true;
    }
    CreateEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                //console.log(position.coords);
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {});
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry == undefined || place.geometry == null) {
                        return;
                    }
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.formatted_address = place.formatted_address;
                    //console.log(`${this.formatted_address}  ${this.latitude}   ${this.longitude}`);
                });
            });
        });
    };
    CreateEventComponent.prototype.ticketImageUpload = function (event, n, p) {
        var _this = this;
        var resp = event.serverResponse._body;
        var j = JSON.parse(resp);
        var data = {
            "image_url": j.data.link,
            "price": p,
            "title": n
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
        var header = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
        header.append('Authorization', localStorage.getItem('token'));
        return this._http.post("https://gatepassng.herokuapp.com/api/v1/table", data, { headers: header }).map(function (res) { return res.json(); });
    };
    CreateEventComponent.prototype.eventImageUpload = function (event) {
        var resp = event.serverResponse._body;
        var j = JSON.parse(resp);
        this.image_url = j.data.link;
        console.log(this.image_url);
    };
    CreateEventComponent.prototype.createEvent = function (d, t) {
        var _this = this;
        if (this.formatted_address == null || this.formatted_address == undefined) {
            this.event_location = this.event_location;
        }
        else {
            this.event_location = this.formatted_address;
        }
        var event = {
            coord: [this.latitude, this.longitude],
            date: d,
            image_url: this.image_url,
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
        }, function (err) { return console.log(err); }, function () { return console.log(); } //console.log('Request Completed') event
        );
    };
    return CreateEventComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], CreateEventComponent.prototype, "searchElementRef", void 0);
CreateEventComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'create-event',
        template: __webpack_require__("../../../../../src/app/components/organiser/create-event/create-event.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/organiser/create-event/create-event.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__create_event_service__["a" /* CreateEventService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__create_event_service__["a" /* CreateEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__create_event_service__["a" /* CreateEventService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _f || Object])
], CreateEventComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=create-event.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/create-event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
        this.token = localStorage.getItem('token');
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
                    twelvehour: true,
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
        //console.log(event);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CreateEventService);

var _a;
//# sourceMappingURL=create-event.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/events/events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\r\n  min-height: 80vh !important;\r\n  padding: 70px;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  .body{\r\n    min-height: 85vh !important;\r\n    padding: 5px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/organiser/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n\r\n  <table class=\"highlight\">\r\n        <thead>\r\n          <tr>\r\n              <th data-field=\"#\"></th>\r\n              <th data-field=\"name\">Name</th>\r\n              <th data-field=\"location\">Location</th>\r\n              <th data-field=\"date\">Date</th>\r\n              <th data-field=\"purchase\">Ticket Sales</th>\r\n              <th data-field=\"status\">Status</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody *ngIf='events'>\r\n          <tr *ngIf='noEvent'><td colspan=\"6\"><h4 align=center>Oops.. you have no events at this time ☹</h4></td></tr>\r\n            <tr *ngFor=\"let event of events; let i = index\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{event.name}}</td>\r\n              <td>{{event.location}}</td>\r\n              <td>{{event.date}}</td>\r\n              <td>{{event.purchased}}</td>\r\n              <td *ngIf='!event.disabled'>\r\n                <div class=\"switch\">\r\n                    <label>Off<input type=\"checkbox\" [checked]=\"event.is_online\" (change)='changeStatus(event)' value=\"{{event.is_online}}\"  [disabled]='loading'><span class=\"lever\"></span>On</label>\r\n                </div>\r\n              </td>\r\n              <td class=\"red-text\" *ngIf='event.disabled'>Expired Event</td>\r\n            </tr>\n        </tbody>\r\n  </table>\r\n  <br><br><br>\r\n  <div *ngIf='preloader' align='center'>\r\n    <h5>Loading events</h5>\r\n    <div class=\"preloader-wrapper small active\">\r\n      <div class=\"spinner-layer\">\r\n        <div class=\"circle-clipper left\">\r\n          <div class=\"circle\"></div>\r\n        </div><div class=\"gap-patch\">\r\n          <div class=\"circle\"></div>\r\n        </div><div class=\"circle-clipper right\">\r\n          <div class=\"circle\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/organiser/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_service__ = __webpack_require__("../../../../../src/app/components/organiser/events/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    function EventsComponent(eventsService, router, http) {
        this.eventsService = eventsService;
        this.router = router;
        this.http = http;
        this.noEvent = false;
        this.preloader = true;
        this.event_id = [];
        this.event_status = [];
        this.loading = false;
        this.viewEvents();
        this.token = localStorage.getItem('token');
    }
    EventsComponent.prototype.ngOnInit = function () { };
    EventsComponent.prototype.viewEvents = function () {
        var _this = this;
        this.eventsService.getEvent().subscribe(function (data) {
            _this.events = data;
            _this.preloader = false;
            if (_this.events.length == 0) {
                _this.noEvent = true;
            }
        }, function (err) { return console.log(err); }, function () { return console.log(); } //this.events
        );
    };
    EventsComponent.prototype.changeStatus = function (e) {
        var _this = this;
        this.loading = true;
        if (e.is_online == true) {
            this.message = { "is_online": false };
        }
        else if (e.is_online == false) {
            this.message = { "is_online": true };
        }
        this.eventsService.updateStatus(e._id.$oid, this.message).subscribe(function (data) {
            console.log(data);
            if (data.status == true) {
                Materialize.toast("Event " + e.name + "'s status updated", 3000, 'green white-text');
                _this.loading = false;
            }
            else {
                Materialize.toast("Error updating " + e.name + "'s status", 3000, 'red white-text');
                _this.loading = false;
            }
        });
    };
    return EventsComponent;
}());
EventsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'events',
        template: __webpack_require__("../../../../../src/app/components/organiser/events/events.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/organiser/events/events.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__events_service__["a" /* EventsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _c || Object])
], EventsComponent);

var _a, _b, _c;
//# sourceMappingURL=events.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/events/events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
        this.token = localStorage.getItem('token');
    }
    EventsService.prototype.getEvent = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.http.get('https://gatepassng.herokuapp.com/api/v1/events', { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    EventsService.prototype.updateStatus = function (id, message) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.http.put("https://gatepassng.herokuapp.com/api/v1/event/online/" + id, message, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    return EventsService;
}());
EventsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<p>\r\n  settings works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/organiser/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, "#registerBody{\r\n  height: 600px;\r\n  width: 100%;\r\n  padding-top: 65px;\r\n  -webkit-filter: contrast(100%); /* Safari 6.0 - 9.0 */\r\n  filter: contrast(100%);\r\n  z-index: -500;\r\n}\r\n\r\n\r\n.form{\r\n  background-color: #fff;\r\n  height: 470px;\r\n  margin: auto;\r\n  margin-top: 450px;\r\n  margin-bottom: 100px;\r\n  /*padding-top: 30px;*/\r\n  /*margin-right: 33%;*/\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.transparent{\r\n  background-color: rgba(64, 64, 64, 0.5) !important;\r\n  height: 300px;\r\n  color: #ffffff;\r\n}\r\n\r\n.transparent-btn{\r\n  background-color: rgba(255, 255, 255, 0.1) !important;\r\n  border: 1px solid #fff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.small{\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n  .registerBody{\r\n    height: inherit;\r\n    padding-top: 65px;\r\n  }\r\n\r\n  .form{\r\n    background-color: #fff;\r\n    height: 470px;\r\n    margin: auto;\r\n    margin-top: 450px;\r\n    margin-bottom: 100px;\r\n    /*margin-right: 33%;*/\r\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n  }\r\n\r\n  .transparent{\r\n    display: none;\r\n  }\r\n\r\n  .small{\r\n    display: block;\r\n  }\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"registerBody\" id='registerBody' [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col m2 s1\"></div>\r\n    <div class=\"col m4 transparent\">\r\n      <div align='left'>\r\n        <h4>Already have an <br> account?</h4>\r\n        <a routerLink='/login'><button type=\"button\" name=\"button\" class=\"transparent-btn btn\">Login</button></a>\r\n        <p>Read the terms and conditions for this platform <br><a routerLink='/#'>here</a> </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"form col m4 s10 row\" align=\"center\">\r\n    \t<form class=\"row\" id=\"form\" (submit)=\"onRegisterSubmit()\" novalidate=\"\">\r\n    \t\t<h4>Register</h4>\r\n            <div class=\"input-field col s12\">\r\n              <input [(ngModel)]=\"fullname\"  placeholder=\"Fullname\" id=\"fullname\" type=\"text\" class=\"validate\" name=\"fullname\">\r\n            </div>\r\n            <div class=\"input-field col s12\">\r\n              <input [(ngModel)]=\"username\"  placeholder=\"Username\" id=\"username\" type=\"text\" class=\"validate\" name=\"username\">\r\n            </div>\r\n            <div class=\"input-field col s12\">\r\n              <input [(ngModel)]=\"phone\"  placeholder=\"Phone\" id=\"phone\" type=\"text\" class=\"validate\" name=\"phone\">\r\n            </div>\r\n            <div class=\"input-field col s12\">\r\n              <input [(ngModel)]=\"email\"  placeholder=\"E-mail\" id=\"password\" type=\"email\" class=\"validate\" name=\"email\">\r\n            </div>\r\n            <div class=\"input-field col s12\">\r\n              <input [(ngModel)]=\"password\"  placeholder='Password' id=\"password\" type=\"password\" class=\"validate\" name=\"password\">\r\n            </div>\r\n            <button type=\"submit\" name=\"button\" class=\"btn waves-effect waves-light\" [disabled]='isDisabled'>Register</button>\r\n            <div class=\"progress\" *ngIf='isDisabled'>\r\n                <div class=\"indeterminate\"></div>\r\n            </div>\r\n\r\n            <h5 class=\"small\">Already have an account? <a routerLink='/login'>Login</a></h5>\r\n    \t</form>\r\n    </div>\r\n    <div class=\"col m2 s1\"></div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validator_service__ = __webpack_require__("../../../../../src/app/services/validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
                localStorage.setItem('token', data.token);
                //console.log(localStorage.setItem('token', data.token));
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validator_service__["a" /* ValidatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validator_service__["a" /* ValidatorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
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
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
            //console.log(this._auth.loggedIn())
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map