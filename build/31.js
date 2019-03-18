webpackJsonp([31],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenitiesPageModule", function() { return AmenitiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amenities__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AmenitiesPageModule = /** @class */ (function () {
    function AmenitiesPageModule() {
    }
    AmenitiesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__amenities__["a" /* AmenitiesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__amenities__["a" /* AmenitiesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AmenitiesPageModule);
    return AmenitiesPageModule;
}());

//# sourceMappingURL=amenities.module.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmenitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ancillary_service_ancillary_service__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_checkin_service_checkin_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_amenities_service_amenities_service__ = __webpack_require__(396);
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
 * Generated class for the ServiceUpgradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AmenitiesPage = /** @class */ (function () {
    function AmenitiesPage(navCtrl, navParams, serviceProvider, toolsProvider, checkinProvider, hotelProvider, amenitiesProvider, alertCtrl, toastCtrl, reservationProvider, notificationProvider, loadingCtrl, platForm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.toolsProvider = toolsProvider;
        this.checkinProvider = checkinProvider;
        this.hotelProvider = hotelProvider;
        this.amenitiesProvider = amenitiesProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.reservationProvider = reservationProvider;
        this.notificationProvider = notificationProvider;
        this.loadingCtrl = loadingCtrl;
        this.platForm = platForm;
        this.serviceRateText = '';
        this.servicesList = [];
        this.currencySymbol = this.hotelProvider.objHotel.currency.signo;
        this.Qty = [];
        this.selectedServices = [];
        this.filteredServices = [];
        this.tempList = [];
        this.localData = [];
        this.devicePlatForm = "android";
        if (this.platForm.is('ios')) {
            this.devicePlatForm = "ios";
        }
    }
    AmenitiesPage.prototype.ionViewDidLoad = function () {
        this.showLoading();
        console.log('ionViewDidLoad ServiceUpgradePage');
        //service call
        this.servicesList = this.amenitiesProvider.getStaticAmenitiesList();
        //translate
        var defaultRateTranslate = this.toolsProvider.fnLanguageTranslate("common.porDia");
        var defaultRateText = '';
        defaultRateTranslate.subscribe(function (value) {
            defaultRateText = value;
        });
        this.serviceRateText = this.currencySymbol + defaultRateText;
        this.loading.dismiss();
    };
    AmenitiesPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    // store entered data into model before leaving page
    AmenitiesPage.prototype.ionViewWillLeave = function () {
    };
    //to add quantity of an extra service
    AmenitiesPage.prototype.fnAddExtraServices = function (itemId) {
        this.Qty[itemId] = (this.Qty[itemId]) ? this.Qty[itemId] + 1 : 1;
    };
    //to subtract quantity of an extra service
    AmenitiesPage.prototype.fnRemoveExtraServices = function (itemId) {
        this.Qty[itemId] = (this.Qty[itemId]) ? this.Qty[itemId] - 1 : 0;
    };
    //click to go to next page
    AmenitiesPage.prototype.fnSubmit = function () {
        var _this = this;
        this.fndebug("ARRIBO1");
        this.filteredServices = [];
        this.selectedServices = [];
        this.listArray = this.servicesList;
        Object.keys(this.Qty).forEach(function (itemId) {
            if (itemId != undefined && _this.Qty[itemId] != undefined && _this.Qty[itemId] > 0) {
                _this.filteredServices = _this.listArray.filter(function (x) { return x.id == itemId; });
                //if service upgrade selected data updated into ancillary summary list
                var serviceArray = [];
                serviceArray.type = 'service';
                serviceArray.quantity = _this.Qty[itemId];
                serviceArray.serviceId = itemId;
                serviceArray.serviceName = _this.filteredServices[0].name;
                _this.selectedServices.push(serviceArray);
            }
        });
        this.fndebug("ARRIBO2");
        this.amenitiesProvider.sendAmenitiesRequest(1, this.selectedServices, 201).subscribe(function (data) {
            _this.fndebug("ARRIBO3");
            var alertnew = _this.alertCtrl.create({
                title: 'ALERT',
                message: 'ALERT OK',
                cssClass: 'cls_alrt',
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancel'
                    }
                ]
            });
            alertnew.present();
            setTimeout(function () { alertnew.dismiss(); }, 5000);
        });
    };
    //function to go to previous page
    AmenitiesPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    //Xevi
    AmenitiesPage.prototype.fndebug = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    AmenitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-amenities',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/amenities/amenities.html"*/'<ion-header class="header_menu">\n  <ion-navbar>\n    <ion-title>{{"view.checkin.title" | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content id="homecontent" class="home_container" no-bounce>\n  <form>\n    <ion-list class="service_list service_upgrade">\n      <ion-item *ngFor="let item of servicesList" [attr.id]="item.id">\n        <div class="service_thumb">\n          <ion-thumbnail item-start>\n            <img [src]="item.imgPath">\n          </ion-thumbnail>\n        </div>\n        <div class="service_title">\n          <h2>{{item.name}}</h2>\n          <p>{{item.description}}</p>\n          <button ion-button clear item-end (click)="fnAddExtraServices(item.id)" class="add_btn">+</button>\n          <span *ngIf="Qty[item.id]>0" class="added_qlntity">{{Qty[item.id]}}</span>\n          <button ion-button clear item-end (click)="fnRemoveExtraServices(item.id)" class="mins_btn">-</button>\n        </div>\n      </ion-item>\n    </ion-list>\n    <ion-item class="footer_btn" *ngIf="devicePlatForm!=\'ios\'">\n      <button (click)="fnSubmit()" class="cmn_btn">{{"common.SEND" | translate}}</button>\n    </ion-item>\n	<ion-item class="footer_btn ios_footer_btn" *ngIf="devicePlatForm==\'ios\'">\n      <button (click)="fnSubmit()" class="cmn_btn">{{"common.SEND" | translate}}</button>\n    </ion-item>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/amenities/amenities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ancillary_service_ancillary_service__["a" /* AncillaryServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_amenities_service_amenities_service__["a" /* AmenitiesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], AmenitiesPage);
    return AmenitiesPage;
}());

//# sourceMappingURL=amenities.js.map

/***/ })

});
//# sourceMappingURL=31.js.map