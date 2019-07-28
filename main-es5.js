(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button (click) = \"toggleShowme()\"> Sort by </button>\n<h1 *ngIf = \"showSomething\" >hide me</h1> -->\n<mat-tab-group mat-stretch-tabs animationDuration=\"0ms\">\n        <mat-tab label=\"Grouping\"><app-grouping></app-grouping></mat-tab>\n        <mat-tab label=\"Dashboard\"><app-overtable> </app-overtable></mat-tab>\n</mat-tab-group>\n      \n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/grouping/grouping.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/grouping/grouping.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n            \n<!-- <p-dropdown [options]=\"categories\" [(ngModel)]=\"selectedCategory\" placeholder=\"Select a Category\" optionLabel=\"label\" [showClear]=\"true\"></p-dropdown> -->\n\n\n        <!-- <div class=\"dropdown\">\n                Sort Students by \n                <button class=\"dropbtn\">Select</button>\n                <div class=\"dropdown-content\">\n                  <a href=\"\" >Collaboration</a>\n                  <a href=\"\" >Communication</a>\n                  \n                </div>\n              </div> -->\n\n<div class = \"parent-container\">\n            \n            \n    <div class=\"ui-g-12 ui-md-6 ui-g-nopad drag-column\">\n        \n        \n        <mat-radio-group aria-label=\"Sort students by\"> \n                <mat-radio-button value=\"1\" id = \"button1\" style=\"color: #A9B9FF\" (click)=\"sortAttributes(1)\">Collaboration</mat-radio-button>\n                <mat-radio-button value=\"2\" id = \"button2\" style=\"color: #F47645\" (click)=\"sortAttributes(2)\">Communication</mat-radio-button>\n                <mat-radio-button value=\"3\" id = \"button3\" style=\"color: #F7AA01\" (click)=\"sortAttributes(3)\">Problem Solving</mat-radio-button>\n                <mat-radio-button value=\"4\" id = \"button4\" style=\"color: #7ACFDE\" (click)=\"sortAttributes(4)\">Project Management</mat-radio-button>\n                <mat-radio-button value=\"5\" id = \"button5\" style=\"color: #FFA2DD\" (click)=\"sortAttributes(5)\">Group discussion</mat-radio-button>\n        </mat-radio-group> \n        \n        \n        <!-- optionLabel=\"name\" (onChange)=\"sortAttributes($event)\" -->\n        <div *ngFor=\"let student of availableStudents; index as i\"  class=\"ui-helper-clearfix\" pDraggable=\"students\" (onDragStart)=\"dragStart($event,student)\" (onDragEnd)=\"dragEnd($event)\">\n                \n                <div class = \"student-profile-info\">\n                    <img class = \"student-image\" src = {{student.image_source}}>\n                    \n\n                    <div class = \"student-name\">\n                        <b>{{student.name}}</b>\n                    </div>\n                </div>\n                <div class = \"student-performance\">\n\n                    <p class = \"group-header-desc\" ><b>{{student.student_header[header_index]}}</b></p>\n<!-- \n                    <p class = \"line-desc\">{{shortHand(student.collaboration)}}</p> -->\n                    <p class = \"line-desc\">Col</p>\n                    <div class = \"line line-1\" [style.width] =label_to_percentage(student.collaboration) >\n                                       \n                    </div>\n                    \n                    <!-- <p class = \"line-desc\">{{shortHand(student.communication)}}</p> -->\n                    <p class = \"line-desc\">Com</p>\n                    <div class = \"line line-2\" [style.width] =label_to_percentage(student.communication)>\n\n                    </div>\n\n                    <!-- <p class = \"line-desc\">{{shortHand(student.problem)}}</p> -->\n                    <p class = \"line-desc\">P.S</p>\n                    <div class = \"line line-3\" [style.width] =label_to_percentage(student.problem)>\n\n                    </div>\n\n                    <!-- <p class = \"line-desc\">{{shortHand(student.project_management)}}</p> -->\n                    <p class = \"line-desc\">P.M</p>\n                    <div class = \"line line-4\" [style.width] =label_to_percentage(student.project_management)>\n\n                    </div>\n\n                    <!-- <p class = \"line-desc\">{{shortHand(student.group_discussion)}}</p> -->\n                    <p class = \"line-desc\">G.D</p>\n                    <div class = \"line line-5\" [style.width] =label_to_percentage(student.group_discussion)>\n\n                    </div>\n\n                </div>\n        </div>\n</div>\n\n<div class = \"grouping-container\">\n    <button class = \"add-group-list\" (click)=\"increment_groups()\"> +</button> <p class = \"add-group-text\">Add group</p>\n    <button id = \"smart-grouping\" (click)=\"smart_grouping()\"> Smart Grouping</button>\n        <div class=\"ui-g-12 ui-md-6 drop-column\" *ngFor =\"let group of selectedStudents; index as i\"  [attr.data-index]=\"i\" pDroppable=\"students\" (onDrop)=\"drop($event,i)\" [ngClass]=\"{'ui-highlight-student':draggedStudent}\">\n                <p-table [value]=\"selectedStudents[i]\" >\n                    <ng-template pTemplate=\"body\" let-student>\n                        <tr>\n                            <div class = \"student-group-name\">\n                                <td>{{student.name}}</td>\n                                <td><button mat-button class = \"button red-button\" (click)=\"removeGroupValue(student, i)\"> - </button></td>\n                            </div>\n                        </tr>\n                    </ng-template>\n                </p-table>\n        </div>\n    \n</div>\n</div>\n<script>\n    var line1 = document.getElementById('line1'));\n    line1.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n\n    var line2 = document.getElementById('line2'));\n    line2.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n    var line3 = document.getElementById('line3'));\n    line3.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n    var line4 = document.getElementById('line4'));\n    line4.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n    var line5 = document.getElementById('line5'));\n    line5.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n\n</script>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = \"header-component\">\n<img id =\"klab-logo\" src=\"https://anima-uploads.s3.amazonaws.com/projects/5d280040f3c1a5b03fe80ee2/releases/5d28d795f3c1a5b03fe8132a/img/header-logo-qr-code@2x.png\">\n<img id = \"klab-name\"src = \"https://anima-uploads.s3.amazonaws.com/projects/5d280040f3c1a5b03fe80ee2/releases/5d28d9e18280a320cafb1493/img/home-coalesce@2x.png\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div class = \"homepage\">\n    <div class = \"welcomediv\">\n        <h1 id = \"welcomemessage\">Welcome, Travis</h1>\n    </div>\n    <div class = \"courses\">\n            <a routerLink=\"dashboard\"><button class=\"button\">History 1A  </button></a>\n        <a routerLink=\"dashboard\"><button class=\"button\">History 2A  </button></a>\n        <a routerLink=\"dashboard\"><button class=\"button\">Classic  </button></a>\n        \n    </div>\n</div>\n<body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/overtable/overtable.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/overtable/overtable.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"serial_no\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.serial_no}} </td>\n        </ng-container>\n      \n\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n      \n\n        <ng-container matColumnDef=\"last_evaluation\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Evaluation </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.last_evaluation}} </td>\n        </ng-container>\n      \n\n        <ng-container matColumnDef=\"last_check_in\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Check In </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.last_check_in}} </td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"collaboration\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Collaboration </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.collaboration}} </td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"communication\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Communication </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.problem_solving}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"problem_solving\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Problem Solving </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.problem_solving}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"group_discussion\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Group Discussion </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.group_discussion}} </td>\n        </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import {Router} from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _overtable_overtable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overtable/overtable.component */ "./src/app/overtable/overtable.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _grouping_grouping_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./grouping/grouping.component */ "./src/app/grouping/grouping.component.ts");
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dragdrop */ "./node_modules/primeng/dragdrop.js");
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_dragdrop__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__);



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _overtable_overtable_component__WEBPACK_IMPORTED_MODULE_11__["OvertableComponent"],
                _grouping_grouping_component__WEBPACK_IMPORTED_MODULE_13__["GroupingComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                primeng_dragdrop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_15__["TableModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__["DropdownModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    // toggleShowme()
    // {
    //   this.showSomething = !this.showSomething;
    // }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.studentlist = new Array<string>();
        // this.showSomething = false;
        // this.dataSource.sort = this.sort;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/grouping/grouping.component.css":
/*!*************************************************!*\
  !*** ./src/app/grouping/grouping.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-radio-button\r\n{\r\n    display: block;\r\n}\r\n\r\nbutton#smart-grouping\r\n{\r\n    margin-left: 5%;\r\n    margin-bottom: 10px;\r\n    margin-top: 20px;\r\n    margin-right : 10px;\r\n}\r\n\r\n.ui-g-12.ui-md-6.ui-g-nopad.drag-column\r\n{\r\n    width: 70%;\r\n    display: table-cell;\r\n    height: 100%;\r\n}\r\n\r\n.ui-helper-clearfix.ng-star-inserted\r\n{\r\n    border: 1px solid gray;\r\n    width: 30%;\r\n    height : 180px;\r\n    display: inline-block;\r\n    margin : 5px;\r\n    border-radius: 10px;\r\n    box-shadow: 1px 1px 1px 1px gray;\r\n}\r\n\r\n.parent-container\r\n{\r\n    display: table-row;\r\n}\r\n\r\n.grouping-container\r\n{\r\n    width: 30%;\r\n    display: table-cell;\r\n    background: gray;\r\n    height : 100%;\r\n}\r\n\r\n.ui-g-12.ui-md-6.drop-column.ng-star-inserted\r\n{\r\n    border: 2px dotted;\r\n    width: 70%;\r\n    height : 150px;\r\n    display: inline-block;\r\n    margin : 5%;\r\n    border-radius: 10px;\r\n    background: white;\r\n}\r\n\r\n.student-image \r\n{\r\n    border-radius: 50%;\r\n    -webkit-transform: scale(0.7);\r\n            transform: scale(0.7);\r\n    \r\n}\r\n\r\n.student-name\r\n{\r\n    margin-left: 20px;\r\n    margin-top : 2px;\r\n    width : 20%;\r\n}\r\n\r\nmat-radio-group.mat-radio-group\r\n{\r\n    display: inline-block;\r\n    margin-left: 3%;\r\n    margin-right: 9.7%;\r\n    margin-top: 7%;\r\n}\r\n\r\nmat-radio-button\r\n{\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.student-profile-info\r\n{\r\n    width : 40%;\r\n    display: inline-block;\r\n}\r\n\r\n.student-performance\r\n{\r\n    display: inline-block;\r\n    width : 50%;\r\n    margin-left : 5%;\r\n}\r\n\r\np#sort-title\r\n{\r\n    margin-left : 3%;\r\n}\r\n\r\np.line-desc\r\n{\r\n    display: inline-block;\r\n    font-size : 11px;\r\n}\r\n\r\n.line\r\n{\r\n    \r\n    height: 15px;\r\n    \r\n    margin-left: 20%;\r\n    box-sizing: border-box;\r\n    background: #000;\r\n    margin-top : -20%;\r\n    \r\n}\r\n\r\n.line-1\r\n{\r\n    \r\n    background: #A9B9FF;\r\n}\r\n\r\n.line-2 \r\n{\r\n    background: #F47645;\r\n}\r\n\r\n.line-3\r\n{\r\n    background: #F7AA01;\r\n}\r\n\r\n.line-4\r\n{\r\n    background: #7ACFDE;\r\n}\r\n\r\n.line-5\r\n{\r\n    background: #FFA2DD;\r\n}\r\n\r\n.button {\r\n    width: 25px;\r\n    height: 20px;\r\n    display: inline-block;\r\n  }\r\n\r\n.red-button {\r\n    background-color: #d3cfcf;\r\n    \r\n  }\r\n\r\n.group-header-desc\r\n{\r\n    color :#A9B9FF;\r\n}\r\n\r\n.add-group-text\r\n{\r\n    display: inline-block;\r\n    color: white;\r\n}\r\n\r\n.add-group-list\r\n{\r\n    background: transparent;\r\n    border: 2px solid white;\r\n    margin-left: 3%;\r\n    color: white;\r\n    margin-right: 3%;\r\n    border-radius: 50%;\r\n}\r\n\r\n@keyframes fadein {\r\n    from {\r\n        opacity:0;\r\n    }\r\n    to {\r\n        opacity:1;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes fadein { /* Safari and Chrome */\r\n    from {\r\n        opacity:0;\r\n    }\r\n    to {\r\n        opacity:1;\r\n    }\r\n}\r\n\r\n.dropbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n  }\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n\r\n  }\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n\r\n/* Links inside the dropdown */\r\n\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n\r\n/* Change color of dropdown links on hover */\r\n\r\n.dropdown-content a:hover {background-color: #ddd;}\r\n\r\n/* Show the dropdown menu on hover */\r\n\r\n.dropdown:hover .dropdown-content {display: block;}\r\n\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n\r\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBpbmcvZ3JvdXBpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsNkJBQXFCO1lBQXJCLHFCQUFxQjs7QUFFekI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBQ0E7O0lBRUksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFDQTs7SUFFSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFHQTs7O0lBR0ksWUFBWTs7SUFFWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCOztBQUVBOzs7SUFHSSxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0FBRUY7SUFDSSx5QkFBeUI7O0VBRTNCOztBQUVGOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0o7O0FBU0EsNEJBQTRCLHNCQUFzQjtJQUM5QztRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0o7O0FBVUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtFQUNkOztBQUVBLGtFQUFrRTs7QUFDbEU7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7RUFFckI7O0FBRUEseUNBQXlDOztBQUN6QztJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtFQUNaOztBQUVBLDhCQUE4Qjs7QUFDOUI7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztBQUVBLDRDQUE0Qzs7QUFDNUMsMkJBQTJCLHNCQUFzQixDQUFDOztBQUVsRCxvQ0FBb0M7O0FBQ3BDLG1DQUFtQyxjQUFjLENBQUM7O0FBRWxELDBGQUEwRjs7QUFDMUYsMEJBQTBCLHlCQUF5QixDQUFDIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBpbmcvZ3JvdXBpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFkaW8tYnV0dG9uXHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5idXR0b24jc21hcnQtZ3JvdXBpbmdcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQgOiAxMHB4O1xyXG59XHJcblxyXG4udWktZy0xMi51aS1tZC02LnVpLWctbm9wYWQuZHJhZy1jb2x1bW5cclxue1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4udWktaGVscGVyLWNsZWFyZml4Lm5nLXN0YXItaW5zZXJ0ZWRcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQgOiAxODBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbiA6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggZ3JheTtcclxufVxyXG5cclxuLnBhcmVudC1jb250YWluZXJcclxue1xyXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xyXG59XHJcblxyXG4uZ3JvdXBpbmctY29udGFpbmVyXHJcbntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgIGhlaWdodCA6IDEwMCU7XHJcbn1cclxuXHJcbi51aS1nLTEyLnVpLW1kLTYuZHJvcC1jb2x1bW4ubmctc3Rhci1pbnNlcnRlZFxyXG57XHJcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0IDogMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4gOiA1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLnN0dWRlbnQtaW1hZ2UgXHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgIFxyXG59XHJcblxyXG4uc3R1ZGVudC1uYW1lXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcCA6IDJweDtcclxuICAgIHdpZHRoIDogMjAlO1xyXG59XHJcblxyXG5tYXQtcmFkaW8tZ3JvdXAubWF0LXJhZGlvLWdyb3VwXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi1yaWdodDogOS43JTtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG59XHJcblxyXG5tYXQtcmFkaW8tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi5zdHVkZW50LXByb2ZpbGUtaW5mb1xyXG57XHJcbiAgICB3aWR0aCA6IDQwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uc3R1ZGVudC1wZXJmb3JtYW5jZVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aCA6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0IDogNSU7XHJcbn1cclxuXHJcbnAjc29ydC10aXRsZVxyXG57XHJcbiAgICBtYXJnaW4tbGVmdCA6IDMlO1xyXG59XHJcblxyXG5wLmxpbmUtZGVzY1xyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemUgOiAxMXB4O1xyXG59XHJcblxyXG5cclxuLmxpbmVcclxue1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIG1hcmdpbi10b3AgOiAtMjAlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5saW5lLTFcclxue1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjQTlCOUZGO1xyXG59XHJcblxyXG5cclxuLmxpbmUtMiBcclxue1xyXG4gICAgYmFja2dyb3VuZDogI0Y0NzY0NTtcclxufVxyXG5cclxuLmxpbmUtM1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjdBQTAxO1xyXG59XHJcblxyXG4ubGluZS00XHJcbntcclxuICAgIGJhY2tncm91bmQ6ICM3QUNGREU7XHJcbn1cclxuXHJcbi5saW5lLTVcclxue1xyXG4gICAgYmFja2dyb3VuZDogI0ZGQTJERDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4ucmVkLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNjZmNmO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuLmdyb3VwLWhlYWRlci1kZXNjXHJcbntcclxuICAgIGNvbG9yIDojQTlCOUZGO1xyXG59XHJcblxyXG4uYWRkLWdyb3VwLXRleHRcclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWRkLWdyb3VwLWxpc3Rcclxue1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7IC8qIEZpcmVmb3ggKi9cclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgZmFkZWluIHsgLyogT3BlcmEgKi9cclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHJvcGJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG4gIC5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAvKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcbiAgXHJcbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxyXG4gIFxyXG4gIC8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoZW4gdGhlIGRyb3Bkb3duIGNvbnRlbnQgaXMgc2hvd24gKi9cclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDE7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/grouping/grouping.component.ts":
/*!************************************************!*\
  !*** ./src/app/grouping/grouping.component.ts ***!
  \************************************************/
/*! exports provided: GroupingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupingComponent", function() { return GroupingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student */ "./src/app/grouping/student.ts");



// import {SelectItem} from 'primeng/api';
var GroupingComponent = /** @class */ (function () {
    // selectedCategory : string;
    // categories : SelectItem[] = new Array();
    function GroupingComponent() {
        this.availableStudents = new Array();
        this.selectedStudents = new Array();
        this.group_Placeholder_Container = new Array();
    }
    GroupingComponent.prototype.ngOnInit = function () {
        this.numberOfGroups = 4;
        this.header_index = 0;
        var dataSource = [
            { image_source: '', name: 'Ariana Campbell', gender: "Female", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Accomplished' },
            { image_source: '', name: 'Dan Smith', gender: "Male", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Max Goldstein', gender: "Male", collaboration: 'Accomplished', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Accomplished' },
            { image_source: '', name: 'Paige Voss', gender: "Female", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Sawyer Strong', gender: "Male", collaboration: 'Accomplished', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Sam Smiley', gender: "Female", collaboration: 'Developing', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Eadric Granok', gender: "Male", collaboration: 'Accomplished', communication: 'Developing', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Developing' },
            { image_source: '', name: 'Darby Gillett', gender: "Male", collaboration: 'Exemplary', communication: 'Developing', problem_solving: 'Developing', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Isabell Plotsker', gender: "Female", collaboration: 'Accomplished', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Chris Campbell', gender: "Male", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Accomplished' },
            { image_source: '', name: 'Chris Xie', gender: "Male", collaboration: 'Developing', communication: 'Developing', problem_solving: 'Developing', group_discussion: 'Exemplary', project_management: 'Developing' },
            { image_source: '', name: 'Erika Welda', gender: "Female", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Developing', project_management: 'Exemplary' },
        ];
        // this.categories =  [
        //   {label:'Select Category', value:null},
        //   {label:'Collaboration', value:1},
        //   {label:'Communication', value:2},
        //   {label:'Problem Solving', value:3},
        //   {label:'Project Management', value:4},
        //   {label:'Group Discussion', value:5}
        // ];
        this.studentsPerGroup = 4;
        for (var i = 0; i < dataSource.length; i++) {
            dataSource[i].image_source = 'assets/images/Student' + i.toString() + ".jpeg";
            this.availableStudents[i] = new _student__WEBPACK_IMPORTED_MODULE_2__["Student"](dataSource[i].image_source, dataSource[i].name, dataSource[i].gender, dataSource[i].collaboration, dataSource[i].problem_solving, dataSource[i].communication, dataSource[i].group_discussion, dataSource[i].project_management);
        }
        for (var i = 0; i < this.numberOfGroups; i++) {
            this.group_Placeholder_Container.push(this.group_Placeholder_Container.length);
            this.selectedStudents[i] = new Array();
        }
    };
    // moveStudent(index : number)
    // {
    //   var pusnhToList = this.availableStudents.splice(index,1)[0];
    //   this.selectedStudents.push(pushToList);
    // }
    GroupingComponent.prototype.dragStart = function (event, student) {
        this.draggedStudent = student;
    };
    GroupingComponent.prototype.drop = function (event, i) {
        if (this.draggedStudent) {
            var draggedStudentIndex_1 = this.findIndex(this.draggedStudent);
            this.selectedStudents[i] = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.selectedStudents[i], [this.draggedStudent]);
            this.availableStudents = this.availableStudents.filter(function (val, i) { return i != draggedStudentIndex_1; });
            this.draggedStudent = null;
        }
    };
    GroupingComponent.prototype.dragEnd = function (event) {
        this.draggedStudent = null;
    };
    GroupingComponent.prototype.findIndex = function (student) {
        var index = -1;
        for (var i = 0; i < this.availableStudents.length; i++) {
            if (student.name === this.availableStudents[i].name) {
                index = i;
                break;
            }
        }
        return index;
    };
    GroupingComponent.prototype.findGroupIndex = function (student, ind) {
        var index = -1;
        for (var i = 0; i < this.selectedStudents[ind].length; i++) {
            if (student.name === this.selectedStudents[ind][i].name) {
                index = i;
                break;
            }
        }
        return index;
    };
    GroupingComponent.prototype.increment_groups = function () {
        this.numberOfGroups += 1;
        this.selectedStudents[this.numberOfGroups - 1] = new Array();
    };
    GroupingComponent.prototype.label_to_percentage = function (value) {
        var return_value = "";
        if (value == "Exemplary") {
            return_value = "70%";
        }
        if (value == "Accomplished") {
            return_value = "50%";
        }
        if (value == "Developing") {
            return_value = "30%";
        }
        return return_value;
    };
    GroupingComponent.prototype.shortHand = function (value) {
        var return_value = "";
        if (value == "Exemplary") {
            return_value = "Exp";
        }
        if (value == "Accomplished") {
            return_value = "Acc";
        }
        if (value == "Developing") {
            return_value = "Dev";
        }
        return return_value;
    };
    GroupingComponent.prototype.setAtrributeStyle = function (value) {
        return "max width : " + value + ";";
    };
    GroupingComponent.prototype.sortAttributes = function (value) {
        var header_style_element = document.getElementsByClassName('group-header-desc');
        // console.log(value);
        if (value == 1) {
            this.availableStudents.sort(function (a, b) { return a.collaboration.localeCompare(b.collaboration); }).reverse();
            this.header_index = 0;
            console.log(this.header_index);
            for (var i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#A9B9FF";
            }
        }
        if (value == 2) {
            this.availableStudents.sort(function (a, b) { return a.communication.localeCompare(b.communication); }).reverse();
            this.header_index = 1;
            // console.log(this.header_index);
            for (var i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#F47645";
            }
        }
        if (value == 3) {
            this.availableStudents.sort(function (a, b) { return a.problem.localeCompare(b.problem); }).reverse();
            this.header_index = 2;
            for (var i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#F7AA01";
            }
        }
        if (value == 4) {
            this.availableStudents.sort(function (a, b) { return a.collaboration.localeCompare(b.project_management); }).reverse();
            this.header_index = 3;
            // console.log(this.header_index);
            for (var i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#7ACFDE";
            }
        }
        if (value == 5) {
            this.availableStudents.sort(function (a, b) { return a.group_discussion.localeCompare(b.group_discussion); }).reverse();
            this.header_index = 4;
            for (var i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#FFA2DD";
                // header_style_element[i].style.animation = "-webkit-animation: fadein 1s; -moz-animation: fadein 1s; -ms-animation: fadein 1s;  -o-animation: fadein 1s; animation: fadein 1s;"
            }
            // console.log(this.header_index);
        }
    };
    GroupingComponent.prototype.removeGroupValue = function (student, index) {
        console.log(index);
        var StudentIndex = this.findGroupIndex(student, index);
        console.log(StudentIndex);
        this.availableStudents = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([student], this.availableStudents);
        this.selectedStudents[index] = this.selectedStudents[index].filter(function (val, i) { return i != StudentIndex; });
    };
    GroupingComponent.prototype.labelScore = function (value) {
        if (value == "Exemplary")
            return "10";
        if (value == "Accomplished")
            return "7.5";
        if (value == "Developing")
            return "5";
    };
    GroupingComponent.prototype.formGroups = function (studentData, studentsPerGroup) {
        var _this = this;
        var jsonData = studentData;
        // Segregate male and female participants in roster for grouping
        var male_leadership = studentData.filter(function (el) { return el.gender == "Male"; });
        console.log();
        var female_leadership = studentData.filter(function (el) { return el.gender == "Female"; });
        var collaboration = studentData;
        var problem = studentData;
        var communication = studentData;
        var groupDiscussion = studentData;
        var size_groups = studentsPerGroup;
        // console.log(maleData);
        // female_leadership = female_collaboration = female_problem = female_communication = femaleData;
        // Sort groups, then form better groups
        male_leadership.sort(function (a, b) { return parseFloat(_this.labelScore(a.project_management)) - parseFloat(_this.labelScore(b.project_management)); });
        female_leadership.sort(function (a, b) { return parseFloat(_this.labelScore(a.project_management)) - parseFloat(_this.labelScore(b.project_management)); });
        // console.log(male_leadership, female_leadership);
        collaboration.sort(function (a, b) { return parseFloat(_this.labelScore(b.collaboration)) - parseFloat(_this.labelScore(a.collaboration)); });
        communication.sort(function (a, b) { return parseFloat(_this.labelScore(b.communication)) - parseFloat(_this.labelScore(a.communication)); });
        problem.sort(function (a, b) { return parseFloat(_this.labelScore(b.problem)) - parseFloat(_this.labelScore(a.problem)); });
        // console.log(collaboration, communication, problem);
        var class_roster = [];
        var roster_size = jsonData.length;
        var no_of_groups = Math.floor(roster_size / size_groups);
        for (var i = 0; i < no_of_groups; i++) {
            class_roster.push([]);
        }
        // console.log(class_roster);
        // **Grouping begins here**
        // Set leaders first based on equity
        var female_leaders = Math.floor(no_of_groups / 2);
        var male_leaders = no_of_groups - female_leaders;
        var remove_elements_array = [];
        console.log(female_leaders);
        for (var i = 0; i < female_leaders; i++) {
            class_roster[i].push(female_leadership.pop());
            remove_elements_array.push(class_roster[i][0].name);
        }
        for (var i = female_leaders; i < female_leaders + male_leaders; i++) {
            class_roster[i].push(male_leadership.pop());
            remove_elements_array.push(class_roster[i][0].name);
        }
        console.log(class_roster);
        console.log(remove_elements_array);
        var _loop_1 = function (i) {
            communication = communication.filter(function (el) { return el.name != remove_elements_array[i]; });
            collaboration = collaboration.filter(function (el) { return el.name != remove_elements_array[i]; });
            problem = problem.filter(function (el) { return el.name != remove_elements_array[i]; });
        };
        for (var i in remove_elements_array) {
            _loop_1(i);
        }
        // Grouping on other 3 begins here
        var remainder_roster = [communication, collaboration, problem, groupDiscussion];
        var round = 0;
        for (var i = 0; i < jsonData.length - female_leaders - male_leaders; i++) {
            var push_value = remainder_roster[i % 4].pop();
            class_roster[(i + round) % no_of_groups].push(push_value);
            console.log((i + round) % no_of_groups);
            // Remember that the pool of users is shared, one of these is bound to be redundant
            // But I am too lazy to optimize for something with O(n) complexity to begin with
            remainder_roster[0] = remainder_roster[0].filter(function (el) { return el.name != push_value.name; });
            remainder_roster[1] = remainder_roster[1].filter(function (el) { return el.name != push_value.name; });
            remainder_roster[2] = remainder_roster[2].filter(function (el) { return el.name != push_value.name; });
            remainder_roster[3] = remainder_roster[3].filter(function (el) { return el.name != push_value.name; });
            if (i % no_of_groups == 0 && i != 0) {
                round += 1;
            }
        }
        var undecided_class_roster = [];
        for (var i in class_roster) {
            if (class_roster[i].length > size_groups) {
                undecided_class_roster.push(class_roster[i].pop());
            }
            else {
                console.log(class_roster[i].length, size_groups);
            }
        }
        //console.log(undecided_class_roster);
        var eval_class_roster = [];
        for (var i in class_roster) {
            var roster_total = 0;
            var roster_average = 0;
            var counter = 0;
            for (var j in class_roster[i]) {
                var collaboration_score = this.labelScore(class_roster[i][j].collaboration);
                var communication_score = this.labelScore(class_roster[i][j].communication);
                var problem_score = class_roster[i][j].problem;
                var groupDiscussion_score = class_roster[i][j].project_management;
                roster_total = roster_total + 0.25 * parseFloat(collaboration_score) + 0.25 * parseFloat(communication_score) + 0.25 * parseFloat(problem_score) + 0.25 * parseFloat(groupDiscussion_score);
                counter += 1;
            }
            roster_average = roster_total / counter;
            eval_class_roster.push(roster_average);
        }
        //console.log(eval_class_roster);
        // Find lowest scoring groups and arrange accordingly
        var eval_class_roster_sorted = eval_class_roster.slice();
        eval_class_roster_sorted.sort();
        console.log(eval_class_roster_sorted);
        // console.log(eval_class_roster);
        // console.log(eval_class_roster_sorted);
        // for( let i in undecided_class_roster)
        // {
        //     let find_this_index = eval_class_roster_sorted[i];
        //     class_roster[eval_class_roster.indexOf(find_this_index)].push(undecided_class_roster[i]);
        // }
        console.log(class_roster);
        return class_roster;
    };
    GroupingComponent.prototype.smart_grouping = function () {
        for (var i = 0; i < this.selectedStudents.length; i++) {
            this.availableStudents = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.selectedStudents[i], this.availableStudents);
        }
        // console.log(this.availableStudents);
        var class_roster = this.formGroups(this.availableStudents, this.studentsPerGroup);
        for (var i = 0; i < class_roster.length; i++) {
            this.selectedStudents[i] = class_roster[i];
        }
        this.availableStudents = [];
    };
    GroupingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grouping',
            template: __webpack_require__(/*! raw-loader!./grouping.component.html */ "./node_modules/raw-loader/index.js!./src/app/grouping/grouping.component.html"),
            styles: [__webpack_require__(/*! ./grouping.component.css */ "./src/app/grouping/grouping.component.css")]
        })
    ], GroupingComponent);
    return GroupingComponent;
}());



/***/ }),

/***/ "./src/app/grouping/student.ts":
/*!*************************************!*\
  !*** ./src/app/grouping/student.ts ***!
  \*************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student(image_source, name, gender, collaboration, problem, communication, group_discussion, project_management) {
        if (image_source === void 0) { image_source = "blank"; }
        if (name === void 0) { name = "blank"; }
        if (gender === void 0) { gender = "blank"; }
        if (collaboration === void 0) { collaboration = "blank"; }
        if (problem === void 0) { problem = "blank"; }
        if (communication === void 0) { communication = "blank"; }
        if (group_discussion === void 0) { group_discussion = "blank"; }
        if (project_management === void 0) { project_management = "blank"; }
        this.student_header = new Array();
        this.image_source = image_source;
        this.name = name;
        this.gender = gender;
        this.collaboration = collaboration;
        this.communication = communication;
        this.problem = problem;
        this.group_discussion = group_discussion;
        this.project_management = project_management;
        this.student_header = [this.collaboration, this.communication, this.problem, this.project_management, this.group_discussion];
    }
    Student.ctorParameters = function () { return [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]; };
    return Student;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-component\r\n{\r\n    z-index: 1;\r\n}\r\nimg#klab-logo\r\n{\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    margin-bottom: 5%;\r\n}\r\nimg#klab-name\r\n{\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    \r\n    margin-bottom: 7%;\r\n    margin-left: -4%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFVBQVU7QUFDZDtBQUNBOztJQUVJLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksNkJBQXFCO1lBQXJCLHFCQUFxQjs7SUFFckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29tcG9uZW50XHJcbntcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuaW1nI2tsYWItbG9nb1xyXG57XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuaW1nI2tsYWItbmFtZVxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IDclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.homepage\r\n{\r\n    background-image: url(\"https://anima-uploads.s3.amazonaws.com/projects/5d280040f3c1a5b03fe80ee2/releases/5d2de932b8a66527697c8b55/img/home-vintage-texture-15.png\");\r\n    position: fixed;\r\n    top: 10%;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    overflow: auto;\r\n}\r\n\r\nh1\r\n{\r\n    color: white;\r\n    font-size: 72px;\r\n    margin-left: 15%;\r\n    font-family: 'Trebuchet MS';\r\n}\r\n\r\n.button {\r\n    border-width: 3px;\r\n    border-color: black;\r\n    background-image: url(\"https://anima-uploads.s3.amazonaws.com/projects/5d280040f3c1a5b03fe80ee2/releases/5d2de932b8a66527697c8b55/img/home-vintage-texture-15.png\");\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 25px;\r\n    width : 200px;\r\n    height : 100px;\r\n    margin-right: 50px;\r\n    border-radius: 30px;\r\n    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.6);   \r\n    cursor: pointer; \r\n  }\r\n\r\n.button:active {\r\n    \r\n    background-color: gray;\r\n    box-shadow: inset 0px 0px 5px #c1c1c1;\r\n  }\r\n\r\n.courses\r\n  {\r\n    margin-top: 7%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n\r\n.welcomediv\r\n  {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLG1LQUFtSztJQUNuSyxlQUFlO0lBQ2YsUUFBUTtJQUNSLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtJQUNSLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtS0FBbUs7SUFDbkssWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDhDQUE4QztJQUM5QyxlQUFlO0VBQ2pCOztBQUVBOztJQUVFLHNCQUFzQjtJQUdoQixxQ0FBcUM7RUFDN0M7O0FBQ0E7O0lBRUUsY0FBYztJQUNkLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0FBRUE7O0lBRUUsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ob21lcGFnZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2FuaW1hLXVwbG9hZHMuczMuYW1hem9uYXdzLmNvbS9wcm9qZWN0cy81ZDI4MDA0MGYzYzFhNWIwM2ZlODBlZTIvcmVsZWFzZXMvNWQyZGU5MzJiOGE2NjUyNzY5N2M4YjU1L2ltZy9ob21lLXZpbnRhZ2UtdGV4dHVyZS0xNS5wbmdcIik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5oMVxyXG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDcycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnO1xyXG59XHJcbi5idXR0b24ge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9hbmltYS11cGxvYWRzLnMzLmFtYXpvbmF3cy5jb20vcHJvamVjdHMvNWQyODAwNDBmM2MxYTViMDNmZTgwZWUyL3JlbGVhc2VzLzVkMmRlOTMyYjhhNjY1Mjc2OTdjOGI1NS9pbWcvaG9tZS12aW50YWdlLXRleHR1cmUtMTUucG5nXCIpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgd2lkdGggOiAyMDBweDtcclxuICAgIGhlaWdodCA6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7ICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbjphY3RpdmUge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCAjYzFjMWMxO1xyXG4gICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggI2MxYzFjMTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4ICNjMWMxYzE7XHJcbiAgfVxyXG4gIC5jb3Vyc2VzXHJcbiAge1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAud2VsY29tZWRpdlxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/overtable/overtable.component.css":
/*!***************************************************!*\
  !*** ./src/app/overtable/overtable.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 90%;\r\n    margin-top: 5%;\r\n    margin-left: 5%;\r\n    border-radius: 20px;\r\n  }\r\n  \r\n  th.mat-sort-header-sorted {\r\n    color: black;\r\n  }\r\n  \r\n  .mat-row:nth-child(even){\r\n    background-color:white;\r\n    }\r\n  \r\n  .mat-row:nth-child(odd){\r\n    background-color:rgba(247,247,247,1.0);\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcnRhYmxlL292ZXJ0YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCOztFQUVKO0lBQ0ksc0NBQXNDO0lBQ3RDIiwiZmlsZSI6InNyYy9hcHAvb3ZlcnRhYmxlL292ZXJ0YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgfVxyXG5cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ3LDI0NywyNDcsMS4wKTtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/overtable/overtable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/overtable/overtable.component.ts ***!
  \**************************************************/
/*! exports provided: OvertableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertableComponent", function() { return OvertableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");




var ELEMENT_DATA = [
    { serial_no: 1, name: 'Ariana Campbell', last_evaluation: false, last_check_in: 'Jun 13th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 2, name: 'Dan Smith', last_evaluation: true, last_check_in: 'Jun 15th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 3, name: 'Max Goldstein', last_evaluation: true, last_check_in: 'Jun 13th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 4, name: 'Paige Voss', last_evaluation: true, last_check_in: 'Jun 2nd', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 5, name: 'Sawyer Strong', last_evaluation: false, last_check_in: 'Jun 13th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 6, name: 'Sam Smiley', last_evaluation: false, last_check_in: 'Jun 18th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 7, name: 'Eadric Granok', last_evaluation: true, last_check_in: 'Jun 13th', collaboration: 'Good', communication: 'Fair', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 8, name: 'Darby Gillett', last_evaluation: true, last_check_in: 'Jun 13th', collaboration: 'Good', communication: 'Good', problem_solving: 'Needs work', group_discussion: '20% more' },
    { serial_no: 9, name: 'Isabell Plotsker', last_evaluation: false, last_check_in: 'Jun 15th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 10, name: 'Chris Campbell', last_evaluation: true, last_check_in: 'Jun 8th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 11, name: 'Chris Xie', last_evaluation: true, last_check_in: 'Jun 13th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 12, name: 'Erika Welda', last_evaluation: true, last_check_in: 'Jun 18th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
];
var OvertableComponent = /** @class */ (function () {
    function OvertableComponent() {
        this.displayedColumns = ['serial_no', 'name', 'last_evaluation', 'last_check_in', 'collaboration', 'communication', 'problem_solving', 'group_discussion'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
    }
    OvertableComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], OvertableComponent.prototype, "sort", void 0);
    OvertableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overtable',
            template: __webpack_require__(/*! raw-loader!./overtable.component.html */ "./node_modules/raw-loader/index.js!./src/app/overtable/overtable.component.html"),
            styles: [__webpack_require__(/*! ./overtable.component.css */ "./src/app/overtable/overtable.component.css")]
        })
    ], OvertableComponent);
    return OvertableComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rishi\Desktop\Final Project - Capstone\coalesce2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map