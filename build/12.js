webpackJsonp([12],{

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoommakeupPageModule", function() { return RoommakeupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_makeup__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RoommakeupPageModule = /** @class */ (function () {
    function RoommakeupPageModule() {
    }
    RoommakeupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__room_makeup__["a" /* RoommakeupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__room_makeup__["a" /* RoommakeupPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], RoommakeupPageModule);
    return RoommakeupPageModule;
}());

//# sourceMappingURL=room-makeup.module.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoommakeupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_notification__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_roommakeup_service_roommakeup_service__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//Xevi

/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoommakeupPage = /** @class */ (function () {
    function RoommakeupPage(transfer, file, navCtrl, navParams, roommakeupProvider, toolsProvider, loadingCtrl, notificationProvider, platForm, toastCtrl) {
        this.transfer = transfer;
        this.file = file;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.roommakeupProvider = roommakeupProvider;
        this.toolsProvider = toolsProvider;
        this.loadingCtrl = loadingCtrl;
        this.notificationProvider = notificationProvider;
        this.platForm = platForm;
        this.toastCtrl = toastCtrl;
        this.dontdisturbtime = '';
    }
    RoommakeupPage.prototype.ionViewDidLoad = function () {
        this.dontdisturbtime = this.roommakeupProvider.getDontDisturbTime();
    };
    RoommakeupPage.prototype.ionViewWillLeave = function () {
    };
    //function to go to previous page
    RoommakeupPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    RoommakeupPage.prototype.goToDetails = function (value) {
        this.navCtrl.push("RoommakeupDetailsPage", { itemId: value }, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
    };
    //Xevi
    RoommakeupPage.prototype.fndebug = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    RoommakeupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roommakeup',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/room-makeup/room-makeup.html"*/'<ion-header class="header_menu">\n  <ion-navbar>\n    <ion-title>{{\'view.roommakeup.title\' | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle hidden="false" class="main_menu">\n        <i class="icon-Menu"></i>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="homecontent" class="home_container" no-bounce>\n  <ion-card class="card-makeup" (click)=\'goToDetails(1)\'>\n    <ion-row justify-content-center align-items-center>\n      <ion-col>\n        <img *ngIf="dontdisturbtime==\'\'" style="width: 70%;" src="assets/imgs/housekeeping/dont_disturb_black.png" />\n        <img *ngIf="dontdisturbtime!=\'\'"style="width: 70%;" src="assets/imgs/housekeeping/dont_disturb_red.png" />\n      </ion-col>\n      <ion-col>\n        <h2>{{\'view.roommakeup.dontdisturb_title\' | translate}}</h2>\n        <p>{{\'view.roommakeup.dontdisturb_description1\' | translate}}</p>\n        <p>{{\'view.roommakeup.dontdisturb_description2\' | translate}}</p>\n        <p *ngIf="dontdisturbtime!=\'\'">{{\'view.roommakeup.dontdisturb_activated_until\' | translate}}</p>\n        <h1 *ngIf="dontdisturbtime!=\'\'">{{dontdisturbtime | async}}</h1>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class="card-makeup" (click)=\'goToDetails(2)\'>\n    <ion-row justify-content-center align-items-center>\n      <ion-col>\n        <img style="width: 70%;" src="assets/imgs/housekeeping/makeup_room.png" />\n      </ion-col>\n      <ion-col>\n        <h2>{{\'view.roommakeup.cleanroom_title\' | translate}}</h2>\n        <p>{{\'view.roommakeup.cleanroom_description1\' | translate}}</p>\n        <p>{{\'view.roommakeup.cleanroom_description2\' | translate}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/room-makeup/room-makeup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_roommakeup_service_roommakeup_service__["a" /* RoommakeupServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], RoommakeupPage);
    return RoommakeupPage;
}());

//# sourceMappingURL=room-makeup.js.map

/***/ })

});
//# sourceMappingURL=12.js.map