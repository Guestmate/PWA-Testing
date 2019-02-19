webpackJsonp([24],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDetailsPageModule", function() { return NotificationDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_details__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationDetailsPageModule = /** @class */ (function () {
    function NotificationDetailsPageModule() {
    }
    NotificationDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification_details__["a" /* NotificationDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification_details__["a" /* NotificationDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], NotificationDetailsPageModule);
    return NotificationDetailsPageModule;
}());

//# sourceMappingURL=notification-details.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NotificationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationDetailsPage = /** @class */ (function () {
    function NotificationDetailsPage(navCtrl, navParams, toolsProvider, reservationProvider, notificationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toolsProvider = toolsProvider;
        this.reservationProvider = reservationProvider;
        this.notificationProvider = notificationProvider;
        this.item = this.navParams.get('item'); // gets item 
    }
    NotificationDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationDetailsPage');
    };
    NotificationDetailsPage.prototype.formatNotificationDate = function (serviceDate) {
        var today = new Date(), reservaDate = new Date(this.toolsProvider.formatDate(serviceDate)), date = '';
        var dateDiff = this.toolsProvider.date_diff_indays(today, reservaDate);
        var dateTextTranslate = this.toolsProvider.fnLanguageTranslate(["common.today", "common.yesterday", "common.dateFormat.long"]); // language translation
        var todayText = '';
        var yesterdayText = '';
        var dateLongFormat = "";
        dateTextTranslate.subscribe(function (value) {
            todayText = value["common.today"];
            yesterdayText = value["common.yesterday"];
            dateLongFormat = value["common.dateFormat.long"].replace(/\\\\/g, '');
        });
        if (dateDiff == 0) {
            date = todayText;
        }
        else if (dateDiff == -1) {
            date = yesterdayText;
        }
        else {
            //change into date format 
            var dayName = this.toolsProvider.getDayName(reservaDate.getDay());
            var monthName = this.toolsProvider.getMonthName(reservaDate.getMonth());
            var dayValue = reservaDate.getDate();
            var dayModified = this.getOrdinalNum(dayValue);
            var year = reservaDate.getFullYear();
            dateLongFormat = dateLongFormat.replace("l", dayName).replace("j", dayValue).replace("jS", dayModified).replace("F", monthName).replace("Y", year);
            date = dateLongFormat.replace(/\\/g, '');
        }
        var hours = reservaDate.getHours() > 12 ? reservaDate.getHours() - 12 : reservaDate.getHours();
        var am_pm = reservaDate.getHours() >= 12 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;
        var minutes = reservaDate.getMinutes() < 10 ? "0" + reservaDate.getMinutes() : reservaDate.getMinutes();
        var time = hours + ":" + minutes + " " + am_pm;
        //add time to date
        date = date + ', ' + time;
        return date;
    };
    NotificationDetailsPage.prototype.getOrdinalNum = function (n) {
        return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
    };
    NotificationDetailsPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    NotificationDetailsPage.prototype.getImage = function (item) {
        var reservationId = this.reservationProvider.objReservation.reservationId;
        var QRImage = this.toolsProvider.getQRImagePath(item.picture, reservationId), PushImage = this.toolsProvider.getImagePath(item.picture);
        if ((item.tipo == 'CHECKIN')) {
            console.log("path QRImage: " + QRImage);
            return QRImage;
        }
        else if (item.tipo == 'MENSAJE_PLANIFICADO' && item.picture != null) {
            console.log("path PushImage: " + PushImage);
            return PushImage;
        }
    };
    NotificationDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification-details',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/notification-details/notification-details.html"*/'<ion-header class="header_menu">\n  <ion-navbar>\n    <ion-title>{{\'view.mensajes.title\' | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle hidden="false" class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="homecontent" class="home_container" no-bounce>\n    <div class="notification_details">\n        <h2 class="notificatn_hdng">{{item.titulo}}</h2>\n        <p class="notificatn_time">{{formatNotificationDate(item.fecha)}}</p>\n        <span [innerHtml]="item.cuerpo" class="notification_lists"></span>\n        <img [src]="getImage(item)" *ngIf="item.tipo==\'CHECKIN\' && item.picture !== null" class="ntfctn_qrimage">\n        <img [src]="getImage(item)" *ngIf="item.tipo==\'MENSAJE_PLANIFICADO\' && item.picture !== null" class="ntfctn_pushimage">\n        <span *ngIf="item.tipo==\'CHECKIN\' && item.locator !== null" class="ntfctn_locator">LOC:{{item.locator}}</span>\n        <span *ngIf="item.tipo==\'CHECKIN\' && item.instructions !== null" class="ntfctn_instrctn">{{item.instructions}}</span>\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/notification-details/notification-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__["a" /* NotificationProvider */]])
    ], NotificationDetailsPage);
    return NotificationDetailsPage;
}());

//# sourceMappingURL=notification-details.js.map

/***/ })

});
//# sourceMappingURL=24.js.map