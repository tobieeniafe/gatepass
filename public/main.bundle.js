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

module.exports = "<div class=\"body\">\r\n  <app-nav></app-nav>\r\n  <router-outlet></router-outlet>\r\n\r\n<footer class=\"page-footer\">\r\n    <div class=\"footer-copyright\">\r\n      <div class=\"container\">\r\n        &copy; Company 2017.\r\n      </div>\r\n    </div>\r\n</footer>\r\n</div>\r\n"

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
exports.push([module.i, "#loginBody{\r\n  height: 600px;\r\n  width: 100%;\r\n  padding-top: 65px;\r\n  -webkit-filter: contrast(100%); /* Safari 6.0 - 9.0 */\r\n  filter: contrast(100%);\r\n  z-index: -500;\r\n}\r\n\r\n\r\n.form{\r\n  background-color: #fff;\r\n  height: 387px;\r\n  margin: auto;\r\n  margin-top: 450px;\r\n  margin-bottom: 100px;\r\n  padding-top: 30px;\r\n  /*margin-left: 33%;*/\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.transparent{\r\n  background-color: rgba(64, 64, 64, 0.5) !important;\r\n  height: 300px;\r\n  color: #ffffff;\r\n}\r\n\r\n.transparent-btn{\r\n  background-color: rgba(255, 255, 255, 0.1) !important;\r\n  border: 1px solid #fff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.small{\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n  loginBody{\r\n    height: inherit;\r\n    padding-top: 65px;\r\n  }\r\n\r\n  .form{\r\n    background-color: #fff;\r\n    height: 320px;\r\n    margin: auto;\r\n    margin-top: 450px;\r\n    margin-bottom: 100px;\r\n    /*margin-left: 33%;*/\r\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n    margin: auto;\r\n  }\r\n\r\n  .transparent{\r\n    display: none;\r\n  }\r\n\r\n  .small{\r\n    display: block;\r\n  }\r\n}\r\n", ""]);

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
                console.log(localStorage.getItem('token'));
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
exports.push([module.i, ".body{\r\n  min-width: 100% !important;\r\n  min-height: 100% !important;\r\n}\r\n\r\ndiv .container a img{\r\n  width: 230px !important;\r\n  height: 55px !important;\r\n\r\n}\r\n", ""]);

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
        this.logo = 'assets/img/logo.png';
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
        localStorage.removeItem('token');
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
exports.push([module.i, ".body{\r\n  min-height: 100vh;\r\n  padding-bottom: 70px;\r\n}\r\n\r\nlabel{\r\n  font-size: 12px !important;\r\n}\r\n\r\nagm-map {\r\n  height: 100vh;\r\n}\r\n\r\n/deep/ image-upload label.upload.button {\r\n  background-color: #24242e;\r\n  text-transform: lowercase;\r\n  font-weight: normal;\r\n  padding: 6px;\r\n  border-radius: 3px;\r\n  font-family: 'avenirNextCondensed';\r\n}\r\n\r\n/deep/ image-upload label.clear span{\r\n  text-transform: lowercase;\r\n  font-weight: normal;\r\n  background-color: #d32f2f;\r\n}\r\n\r\n/deep/ image-upload label.clear.button{\r\n  background-color: #d32f2f;\r\n  border-radius: 3px;\r\n  padding: 6px;\r\n}\r\n\r\n/deep/ image-upload div.image-container.hr-inline-group{\r\n  background-color: #f8f8f8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/create-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row body\">\r\n  <div class=\"col m12 s12\">\r\n    <h5>Create Event</h5>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n    <br>\r\n  </div>\r\n\r\n<!-- form starts here -->\r\n  <div class=\"col m6 s12\">\r\n    <form class=\"col s12\" (submit)=\"createEvent(eventDate.value, eventTime.value)\" class=\"row\" id=\"form\" novalidate=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 m6\">\r\n          <label for=\"event_name\">Event Name</label>\r\n          <input placeholder=\"Event Name\" id=\"event_name\" type=\"text\" class=\"validate\" name=\"event_name\" [(ngModel)]=\"event_name\">\r\n        </div>\r\n        <div class=\"input-field col s12 m6\">\r\n          <label for=\"event_location\">Event Location</label>\r\n          <input placeholder='Event Location' id=\"event_location\" type=\"text\" class=\"validate\" name=\"event_location\" [(ngModel)]=\"event_location\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 m6\">\r\n          <label for=\"event_date\">Date</label><br>\r\n          <input id=\"event_date\" type=\"text\" class=\"datepicker\" #eventDate name=\"event_date\" [(ngModel)]=\"event_date\">\r\n        </div>\r\n        <div class=\"input-field col s12 m6\">\r\n          <label for=\"event_time\">Time</label><br>\r\n          <input id=\"event_time\" type=\"text\" class=\"timepicker\" #eventTime name=\"event_time\" [(ngModel)]=\"event_time\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\"><br>\r\n        <div class=\"input-field col s12 m6\">\r\n          <label for=\"price\">Base Price</label>\r\n          <input placeholder=\"Base Price\" id=\"price\" type=\"text\" class=\"validate\"  name=\"base_price\" [(ngModel)]=\"base_price\">\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n      <h5>Ticket Details</h5><br>\r\n\r\n      <!-- ticket type 1 -->\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 m4\">\r\n          <label for=\"ticket_name\">Ticket Name</label>\r\n          <input placeholder=\"e.g. Regular\" id=\"price\" type=\"text\" class=\"validate\" name=\"ticket1_name\" [(ngModel)]=\"ticket1_name\">\r\n        </div>\r\n        <div class=\"input-field col s12 m4\">\r\n          <label for=\"ticket_price\">Ticket Price</label>\r\n          <input placeholder='ticket Price' id=\"ticket_price\" type=\"text\" class=\"validate\" name=\"ticket1_price\" [(ngModel)]=\"ticket1_price\">\r\n        </div>\r\n        <div class=\"col s12 m4\">\r\n          <image-upload  [max]=\"1\"  [url]=\"'https://api.imgur.com/3/upload'\"  [headers]=\"[{header: 'Authorization', value: 'Client-ID aab3505f42b5d63'}]\"\r\n          buttonCaption=\"Ticket Image\"  dropBoxMessage=\"Drop image here\"  (onFileUploadFinish)=\"ticketImageUpload($event)\" [extensions]=\"['jpeg','png','jpg']\" #ticketImg></image-upload>\r\n        </div>\r\n      </div><br>\r\n      <!-- ticket type 1 end-->\r\n\r\n      <br><br>\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m12\">\r\n          <h5 align='center'>Event Design Image</h5>\r\n          <image-upload  [max]=\"1\"  [url]=\"'https://api.imgur.com/3/upload'\"  [headers]=\"[{header: 'Authorization', value: 'Client-ID aab3505f42b5d63'}]\"\r\n          buttonCaption=\"Event Image\"  dropBoxMessage=\"Drop image here\"  (onFileUploadFinish)=\"eventImageUpload($event)\" [extensions]=\"['jpeg','png','jpg']\" #eventImg></image-upload>\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n      <div class=\"row\" align=center>\r\n        <button type=\"submit\" name=\"button\" class=\"btn\" [disabled]='isDisabled'>Create Event</button>\r\n      </div>\r\n      <br><br>\r\n    </form>\r\n  </div>\r\n  <!-- form ends here -->\r\n\r\n\r\n\r\n  <div class=\"col m6 s12\">\r\n    <agm-map [latitude]=\"position.latitude\" [longitude]=\"position.longitude\" [zoom]='17' [minZoom]='15'>\r\n      <agm-marker [latitude]=\"position.latitude\" [longitude]=\"position.longitude\">\r\n        <!-- <agm-snazzy-info-window [isOpen]=\"true\" [maxWidth]=\"200\" [closeWhenOthersOpen]=\"true\" backgroundColor='#0ff' border=\"{width: '5px', color: '#000'}\">\r\n          <ng-template>\r\n            My first Snazzy Info Window!\r\n          </ng-template>\r\n        </agm-snazzy-info-window> -->\r\n      </agm-marker>\r\n    </agm-map>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<!-- <div class=\"upload-btn-wrapper\">\r\n  <button class=\"upload-btn\">ticket image</button>\r\n  <input type=\"file\" (change)=\"fileChange($event)\" accept=\".jpeg,.jpg,.png\">\r\n</div> -->\r\n"

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
    CreateEventComponent.prototype.ticketImageUpload = function (event) {
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
        var event = {
            coord: [this.position.latitude, this.position.longitude],
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
exports.push([module.i, ".si-float-wrapper {\r\n  position: absolute;\r\n  width: 100%; }\r\n  .si-float-wrapper,\r\n  .si-float-wrapper * {\r\n    box-sizing: border-box; }\r\n\r\n[class*='si-wrapper'] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: absolute;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  font-size: 14px;\r\n  cursor: default; }\r\n\r\n.si-wrapper-top {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  margin-top: -40px;\r\n  margin-left: 0px;\r\n  -webkit-transform: translate(-50%, -100%);\r\n          transform: translate(-50%, -100%); }\r\n\r\n.si-wrapper-bottom {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: reverse;\r\n      -ms-flex-direction: column-reverse;\r\n          flex-direction: column-reverse;\r\n  margin-top: 0px;\r\n  margin-left: 0px;\r\n  -webkit-transform: translate(-50%, 0);\r\n          transform: translate(-50%, 0); }\r\n\r\n.si-wrapper-left {\r\n  margin-top: -20px;\r\n  margin-left: -11px;\r\n  -webkit-transform: translate(-100%, -50%);\r\n          transform: translate(-100%, -50%); }\r\n\r\n.si-wrapper-right {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: reverse;\r\n      -ms-flex-direction: row-reverse;\r\n          flex-direction: row-reverse;\r\n  margin-top: -20px;\r\n  margin-left: 11px;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%); }\r\n\r\n[class*='si-shadow-wrapper'] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  opacity: 0.29804;\r\n  z-index: 1; }\r\n\r\n.si-shadow-wrapper-top,\r\n.si-shadow-wrapper-bottom {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column; }\r\n\r\n.si-shadow-pointer-bottom,\r\n.si-shadow-pointer-right {\r\n  -webkit-box-ordinal-group: 0;\r\n      -ms-flex-order: -1;\r\n          order: -1; }\r\n\r\n.si-shadow-frame {\r\n  box-shadow: 0 1px 3px 0 #000; }\r\n\r\n[class*='si-shadow-pointer'] {\r\n  position: relative;\r\n  width: 15px;\r\n  height: 15px;\r\n  margin: auto; }\r\n\r\n[class*='si-shadow-inner-pointer'] {\r\n  position: absolute;\r\n  width: 141%;\r\n  height: 141%;\r\n  box-shadow: -0.70711px 0.70711px 3px 0 #000; }\r\n\r\n.si-shadow-inner-pointer-top {\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\r\n          transform: translate(-50%, -50%) rotate(-45deg); }\r\n\r\n.si-shadow-inner-pointer-bottom {\r\n  bottom: 0;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, 50%) rotate(-45deg);\r\n          transform: translate(-50%, 50%) rotate(-45deg); }\r\n\r\n.si-shadow-inner-pointer-left {\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\r\n          transform: translate(-50%, -50%) rotate(-45deg); }\r\n\r\n.si-shadow-inner-pointer-right {\r\n  top: 50%;\r\n  right: 0;\r\n  -webkit-transform: translate(50%, -50%) rotate(-45deg);\r\n          transform: translate(50%, -50%) rotate(-45deg); }\r\n\r\n.si-frame {\r\n  position: relative;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n  border-radius: 3px;\r\n  overflow: hidden;\r\n  z-index: 2; }\r\n\r\n.si-content-wrapper {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  padding: 30px;\r\n  background-color: #fff; }\r\n  .si-has-border .si-content-wrapper {\r\n    border: 1px solid #bbb; }\r\n\r\n.si-content {\r\n  overflow: auto; }\r\n\r\n.si-close-button {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  border: 0;\r\n  outline: none;\r\n  background-color: transparent;\r\n  color: inherit;\r\n  font-family: Arial, Baskerville, monospace;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  opacity: 0.5;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none; }\r\n  .si-close-button:hover, .si-close-button:focus {\r\n    opacity: 0.7; }\r\n\r\n[class*='si-pointer-border'] {\r\n  position: absolute;\r\n  border: 15px solid transparent;\r\n  z-index: 3; }\r\n\r\n[class*='si-pointer-bg'] {\r\n  position: relative;\r\n  border: 15px solid transparent;\r\n  z-index: 4; }\r\n  .si-has-border [class*='si-pointer-bg'] {\r\n    border-width: 15px; }\r\n\r\n.si-pointer-border-top,\r\n.si-pointer-border-bottom {\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, 0);\r\n          transform: translate(-50%, 0); }\r\n\r\n.si-pointer-border-left,\r\n.si-pointer-border-right {\r\n  top: 50%;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%); }\r\n\r\n.si-pointer-top {\r\n  border-bottom: 0; }\r\n\r\n.si-pointer-border-top {\r\n  bottom: 0;\r\n  border-top-color: #bbb; }\r\n\r\n.si-pointer-bg-top {\r\n  border-top-color: #fff; }\r\n  .si-has-border .si-pointer-bg-top {\r\n    top: -1px;\r\n    margin-bottom: 0px; }\r\n\r\n.si-pointer-bottom {\r\n  border-top: 0; }\r\n\r\n.si-pointer-border-bottom {\r\n  top: 0;\r\n  border-bottom-color: #bbb; }\r\n\r\n.si-pointer-bg-bottom {\r\n  border-bottom-color: #fff; }\r\n  .si-has-border .si-pointer-bg-bottom {\r\n    bottom: -1px;\r\n    margin-top: 0px; }\r\n\r\n.si-pointer-left {\r\n  border-right: 0; }\r\n\r\n.si-pointer-border-left {\r\n  right: 0;\r\n  border-left-color: #bbb; }\r\n\r\n.si-pointer-bg-left {\r\n  border-left-color: #fff; }\r\n  .si-has-border .si-pointer-bg-left {\r\n    left: -1px;\r\n    margin-right: 0px; }\r\n\r\n.si-pointer-right {\r\n  border-left: 0; }\r\n\r\n.si-pointer-border-right {\r\n  left: 0;\r\n  border-right-color: #bbb; }\r\n\r\n.si-pointer-bg-right {\r\n  border-right-color: #fff; }\r\n  .si-has-border .si-pointer-bg-right {\r\n    right: -1px;\r\n    margin-left: 0px; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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

module.exports = "<div class=\"body\">\r\n\r\n  <table class=\"striped\">\r\n        <thead>\r\n          <tr>\r\n              <th data-field=\"#\"></th>\r\n              <th data-field=\"name\">Name</th>\r\n              <th data-field=\"location\">Location</th>\r\n              <th data-field=\"date\">Date</th>\r\n              <th data-field=\"purchase\">Purchase</th>\r\n              <th data-field=\"status\">Status</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngIf='noEvent'><td colspan=\"6\"><h2 align=center>You have no events at this time</h2></td></tr>\r\n          <tr *ngFor=\"let event of events; let i = index\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{event.name}}</td>\r\n            <td>{{event.location}}</td>\r\n            <td>{{event.date}}</td>\r\n            <td>{{event.price}}</td>\r\n            <td>\r\n              <div class=\"switch\">\r\n                  <label>Off<input type=\"checkbox\" [checked]=\"event.is_online\" (change)='changeStatus()'><span class=\"lever\"></span>On</label>\r\n                </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n  </table>\r\n\r\n</div>\r\n"

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

module.exports = "<p>\r\n  profile works!\r\n</p>\r\n"

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

module.exports = "<p>\r\n  settings works!\r\n</p>\r\n"

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
exports.push([module.i, "#registerBody{\r\n  height: 600px;\r\n  width: 100%;\r\n  padding-top: 65px;\r\n  -webkit-filter: contrast(100%); /* Safari 6.0 - 9.0 */\r\n  filter: contrast(100%);\r\n  z-index: -500;\r\n}\r\n\r\n\r\n.form{\r\n  background-color: #fff;\r\n  height: 450px;\r\n  margin: auto;\r\n  margin-top: 450px;\r\n  margin-bottom: 100px;\r\n  /*padding-top: 30px;*/\r\n  /*margin-right: 33%;*/\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.transparent{\r\n  background-color: rgba(64, 64, 64, 0.5) !important;\r\n  height: 300px;\r\n  color: #ffffff;\r\n}\r\n\r\n.transparent-btn{\r\n  background-color: rgba(255, 255, 255, 0.1) !important;\r\n  border: 1px solid #fff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.small{\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n  .registerBody{\r\n    height: inherit;\r\n    padding-top: 65px;\r\n  }\r\n\r\n  .form{\r\n    background-color: #fff;\r\n    height: 470px;\r\n    margin: auto;\r\n    margin-top: 450px;\r\n    margin-bottom: 100px;\r\n    /*margin-right: 33%;*/\r\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n  }\r\n\r\n  .transparent{\r\n    display: none;\r\n  }\r\n\r\n  .small{\r\n    display: block;\r\n  }\r\n\r\n}\r\n", ""]);

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
                localStorage.setItem('token', data.token);
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