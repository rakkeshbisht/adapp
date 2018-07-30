(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account-list/account-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/account-list/account-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#account-list .container {\r\n    margin-left: 10px;\r\n    margin-top: 40px;\r\n}"

/***/ }),

/***/ "./src/app/account-list/account-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/account-list/account-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"account-list\">\n  <div class=\"container table-responsive\">\n    <table class=\"table table-sm table-bordered\">\n      <tr>\n        <th *ngFor=\"let col of columns\">\n          {{col}}\n        </th>\n      </tr>\n      <tr *ngFor=\"let item of accountList | async\">       \n         <td>\n              <a [routerLink]=\"\" (click)=\"accountClicked(item.lplAcct)\">{{item.lplAcct}}</a>\n        </td>\n         <td>{{item.acctName}}</td>\n         <td>{{item.clntGrp}}</td>\n         <td>{{item.acctClass}}</td>\n         <td>{{item.invstObj}}</td>\n         <td>{{item.repID}}</td>\n      </tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/account-list/account-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account-list/account-list.component.ts ***!
  \********************************************************/
/*! exports provided: AccountListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountListComponent", function() { return AccountListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_account_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/account-list.service */ "./src/app/core/services/account-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountListComponent = /** @class */ (function () {
    function AccountListComponent(router, accountListService) {
        this.router = router;
        this.accountListService = accountListService;
    }
    AccountListComponent.prototype.ngOnInit = function () {
        this.columns = this.accountListService.getColumns();
        this.accountList = this.accountListService.getAccountList();
        this.modelColumns = this.accountListService.getModelColumns();
    };
    AccountListComponent.prototype.accountClicked = function (accountNo) {
        if (accountNo)
            this.router.navigate(['/home/trade/equity', accountNo]);
    };
    AccountListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'account-list',
            template: __webpack_require__(/*! ./account-list.component.html */ "./src/app/account-list/account-list.component.html"),
            styles: [__webpack_require__(/*! ./account-list.component.css */ "./src/app/account-list/account-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_account_list_service__WEBPACK_IMPORTED_MODULE_1__["AccountListService"]])
    ], AccountListComponent);
    return AccountListComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ADApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _trade_trade_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trade/trade.module */ "./src/app/trade/trade.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ "./src/app/index.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ___WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                ___WEBPACK_IMPORTED_MODULE_5__["AccountListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _trade_trade_module__WEBPACK_IMPORTED_MODULE_4__["TradeModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutes"]
            ],
            providers: [],
            bootstrap: [___WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/app/index.ts");
/* harmony import */ var _trade_trade_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trade/trade.module */ "./src/app/trade/trade.module.ts");



var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ___WEBPACK_IMPORTED_MODULE_1__["MainComponent"],
        children: [
            { path: '', redirectTo: 'accounts', pathMatch: 'full' },
            { path: 'accounts', component: ___WEBPACK_IMPORTED_MODULE_1__["AccountListComponent"] },
            { path: 'trade', loadChildren: function () { return _trade_trade_module__WEBPACK_IMPORTED_MODULE_2__["TradeModule"]; } }
        ] }
];
var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/core/services/account-list.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/account-list.service.ts ***!
  \*******************************************************/
/*! exports provided: AccountListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountListService", function() { return AccountListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mock-data */ "./src/app/mock-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountListService = /** @class */ (function () {
    function AccountListService() {
    }
    AccountListService.prototype.getAccountList = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_2__["accountsListData"]);
    };
    AccountListService.prototype.getColumns = function () {
        return ["Account No", "Account Name", "Client", "Account Class", "Objective", "Rep ID"];
    };
    ;
    AccountListService.prototype.getModelColumns = function () {
        return ["lplAcct", "acctName", "clntGrp", "acctClass", "invstObj", "repID"];
    };
    ;
    AccountListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AccountListService);
    return AccountListService;
}());



/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! exports provided: AppComponent, MainComponent, AccountListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]; });

/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]; });

/* harmony import */ var _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-list/account-list.component */ "./src/app/account-list/account-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountListComponent", function() { return _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_2__["AccountListComponent"]; });






/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transparentbtn{\r\n    border:0px solid transparent;\r\n    background-color: #007BFF;\r\n    color: white;  \r\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" href=\"/home/accounts\">Trading</a>\r\n            </div>\r\n            <div class=\"nav navbar-nav\">\r\n                <form class=\"form-inline\">\r\n                    <input class=\"form-control\" style=\"width: 350px\" type=\"search\" placeholder=\"Account Name/Account Number\" aria-label=\"Search\">\r\n                    <button class=\"btn transparentbtn\" type=\"submit\">\r\n                        <span class=\"fa fa-search\"></span>\r\n                    </button>\r\n                </form>\r\n            </div>\r\n            <div class=\"nav navbar-nav navbar-right\">\r\n                <hamburger-menu></hamburger-menu>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <router-outlet></router-outlet> \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.openModal = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/mock-data.ts":
/*!******************************!*\
  !*** ./src/app/mock-data.ts ***!
  \******************************/
/*! exports provided: accountsListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountsListData", function() { return accountsListData; });
var accountsListData = [
    {
        "accountID": "122663279",
        "acctName": "Gs Test",
        "lplAcct": "84500511",
        "acctClass": "Test test Test test",
        "repID": "CCCA",
        "invstObj": "C - Growth with Income",
        "clntGrp": 'A'
    },
    {
        "accountID": "122663277",
        "acctName": "Data Tester",
        "lplAcct": "84500509",
        "acctClass": "Test test Test test",
        "repID": "CCCA",
        "invstObj": "B - Income with Moderate Growth",
        "clntGrp": 'B'
    },
    {
        "accountID": "122663275",
        "acctName": "Data Tester",
        "lplAcct": "84500507",
        "acctClass": "Test test Test test",
        "repID": "CCCA",
        "invstObj": "B - Income with Moderate Growth",
        "clntGrp": 'C'
    }
];


/***/ }),

/***/ "./src/app/shared/components/hamburger/hamburger.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/hamburger/hamburger.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#hamburger .dropdown-toggle {\r\n    border:0px solid transparent;\r\n    background-color: #007BFF    \r\n}\r\n\r\n#hamburger .dropdown-toggle::after {\r\n    display:none;        \r\n}\r\n\r\n#hamburger .dropdown-menu a:hover\r\n{\r\n  color: #fff;\r\n  background-color : darkgray;\r\n  border-color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/shared/components/hamburger/hamburger.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/hamburger/hamburger.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"hamburger\" class=\"btn-group\">\r\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" \r\n    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      <span class=\"fa fa-bars\" style=\"font-size:24px\"></span>\r\n    </button>\r\n  \r\n    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuLink\">\r\n      <a class=\"dropdown-item\" href=\"#\">\r\n          <span class=\"fa fa-home\"></span> Home\r\n      </a>\r\n      <a class=\"dropdown-item\" href=\"#\">\r\n        <span class=\"fa fa-sign-out\"></span> Log Off\r\n      </a>      \r\n    </div>\r\n </div>"

/***/ }),

/***/ "./src/app/shared/components/hamburger/hamburger.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/hamburger/hamburger.component.ts ***!
  \********************************************************************/
/*! exports provided: HamburgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburgerComponent", function() { return HamburgerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HamburgerComponent = /** @class */ (function () {
    function HamburgerComponent() {
    }
    HamburgerComponent.prototype.ngOnInit = function () {
    };
    HamburgerComponent.prototype.onMenuClick = function () {
        this.menuClicked = !this.menuClicked;
    };
    HamburgerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hamburger-menu',
            template: __webpack_require__(/*! ./hamburger.component.html */ "./src/app/shared/components/hamburger/hamburger.component.html"),
            styles: [__webpack_require__(/*! ./hamburger.component.css */ "./src/app/shared/components/hamburger/hamburger.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HamburgerComponent);
    return HamburgerComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: HamburgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hamburger/hamburger.component */ "./src/app/shared/components/hamburger/hamburger.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HamburgerComponent", function() { return _components_hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_0__["HamburgerComponent"]; });




/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [___WEBPACK_IMPORTED_MODULE_2__["HamburgerComponent"]],
            declarations: [___WEBPACK_IMPORTED_MODULE_2__["HamburgerComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/trade/equity/equity.component.css":
/*!***************************************************!*\
  !*** ./src/app/trade/equity/equity.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trade/equity/equity.component.html":
/*!****************************************************!*\
  !*** ./src/app/trade/equity/equity.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  equity works!\n</p>\n"

/***/ }),

/***/ "./src/app/trade/equity/equity.component.ts":
/*!**************************************************!*\
  !*** ./src/app/trade/equity/equity.component.ts ***!
  \**************************************************/
/*! exports provided: EquityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquityComponent", function() { return EquityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EquityComponent = /** @class */ (function () {
    function EquityComponent() {
    }
    EquityComponent.prototype.ngOnInit = function () {
    };
    EquityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equity',
            template: __webpack_require__(/*! ./equity.component.html */ "./src/app/trade/equity/equity.component.html"),
            styles: [__webpack_require__(/*! ./equity.component.css */ "./src/app/trade/equity/equity.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EquityComponent);
    return EquityComponent;
}());



/***/ }),

/***/ "./src/app/trade/index.ts":
/*!********************************!*\
  !*** ./src/app/trade/index.ts ***!
  \********************************/
/*! exports provided: TradeComponent, EquityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trade/trade.component */ "./src/app/trade/trade/trade.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradeComponent", function() { return _trade_trade_component__WEBPACK_IMPORTED_MODULE_0__["TradeComponent"]; });

/* harmony import */ var _equity_equity_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equity/equity.component */ "./src/app/trade/equity/equity.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EquityComponent", function() { return _equity_equity_component__WEBPACK_IMPORTED_MODULE_1__["EquityComponent"]; });





/***/ }),

/***/ "./src/app/trade/trade.module.ts":
/*!***************************************!*\
  !*** ./src/app/trade/trade.module.ts ***!
  \***************************************/
/*! exports provided: TradeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeModule", function() { return TradeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trade/trade.component */ "./src/app/trade/trade/trade.component.ts");
/* harmony import */ var _equity_equity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equity/equity.component */ "./src/app/trade/equity/equity.component.ts");
/* harmony import */ var _trade_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trade.routing */ "./src/app/trade/trade.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TradeModule = /** @class */ (function () {
    function TradeModule() {
    }
    TradeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _trade_routing__WEBPACK_IMPORTED_MODULE_4__["TradeRoutes"]
            ],
            declarations: [_trade_trade_component__WEBPACK_IMPORTED_MODULE_2__["TradeComponent"], _equity_equity_component__WEBPACK_IMPORTED_MODULE_3__["EquityComponent"]]
        })
    ], TradeModule);
    return TradeModule;
}());



/***/ }),

/***/ "./src/app/trade/trade.routing.ts":
/*!****************************************!*\
  !*** ./src/app/trade/trade.routing.ts ***!
  \****************************************/
/*! exports provided: TradeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeRoutes", function() { return TradeRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/app/trade/index.ts");


var routes = [
    {
        path: '', component: ___WEBPACK_IMPORTED_MODULE_1__["TradeComponent"],
        children: [
            {
                path: 'equity',
                component: ___WEBPACK_IMPORTED_MODULE_1__["EquityComponent"]
            },
            {
                path: 'equity/:id',
                component: ___WEBPACK_IMPORTED_MODULE_1__["EquityComponent"]
            }
        ]
    }
];
var TradeRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/trade/trade/trade.component.css":
/*!*************************************************!*\
  !*** ./src/app/trade/trade/trade.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#trade .row .navcontainer .sidenav {\r\n    height: 100%;\r\n    width: 200px;\r\n    position: fixed;\r\n    z-index: 1;    \r\n    left: 0;    \r\n    overflow-x: hidden;    \r\n}\r\n\r\n#trade .row .navcontainer .sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    color: #818181;\r\n    display: block;    \r\n    width: 100%;\r\n    text-align: left;\r\n}\r\n\r\n#trade .row .navcontainer .sidenav a:active {\r\n    color : black;\r\n    background-color: darkgray;\r\n}\r\n\r\n#trade .row .navcontainer .sidenav a:focus {\r\n    color : black;\r\n    background-color: darkgray;\r\n}\r\n"

/***/ }),

/***/ "./src/app/trade/trade/trade.component.html":
/*!**************************************************!*\
  !*** ./src/app/trade/trade/trade.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"trade\">\n  <div class=\"row\">\n    <div class=\"col-md-3 navcontainer\">\n      <div class=\"sidenav bg-light\">\n        <a class=\"focus\" routerLink=\"/home/trade/equity\">Equity</a>\n        <a class=\"active\" routerLink=\"/home/trade/mutualfund\">Mutual Funds</a>\n        <a routerLink=\"/home/trade/option\">Options</a>         \n      </div>\n    </div>\n    <div class=\"col-md-9\">\n        <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/trade/trade/trade.component.ts":
/*!************************************************!*\
  !*** ./src/app/trade/trade/trade.component.ts ***!
  \************************************************/
/*! exports provided: TradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeComponent", function() { return TradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TradeComponent = /** @class */ (function () {
    function TradeComponent() {
    }
    TradeComponent.prototype.ngOnInit = function () {
    };
    TradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trade',
            template: __webpack_require__(/*! ./trade.component.html */ "./src/app/trade/trade/trade.component.html"),
            styles: [__webpack_require__(/*! ./trade.component.css */ "./src/app/trade/trade/trade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TradeComponent);
    return TradeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\sw_project\adapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map