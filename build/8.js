webpackJsonp([8],{

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceUpgradePageModule", function() { return ServiceUpgradePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_upgrade__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServiceUpgradePageModule = /** @class */ (function () {
    function ServiceUpgradePageModule() {
    }
    ServiceUpgradePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__service_upgrade__["a" /* ServiceUpgradePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_upgrade__["a" /* ServiceUpgradePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ServiceUpgradePageModule);
    return ServiceUpgradePageModule;
}());

//# sourceMappingURL=service-upgrade.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceUpgradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ancillary_service_ancillary_service__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_checkin_service_checkin_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_upgrade_service_model__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_notification_notification__ = __webpack_require__(41);
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
 * Generated class for the ServiceUpgradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceUpgradePage = /** @class */ (function () {
    function ServiceUpgradePage(navCtrl, navParams, serviceProvider, toolsProvider, checkinProvider, hotelProvider, reservationProvider, notificationProvider, loadingCtrl, platForm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.toolsProvider = toolsProvider;
        this.checkinProvider = checkinProvider;
        this.hotelProvider = hotelProvider;
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
    ServiceUpgradePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showLoading();
        console.log('ionViewDidLoad ServiceUpgradePage');
        if (this.serviceProvider.objUpgradeService && this.serviceProvider.objUpgradeService.localData) {
            this.loadedData = this.serviceProvider.objUpgradeService.localData;
            for (var _i = 0, _a = this.loadedData; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.quantity) {
                    this.Qty[item.serviceId] = item.quantity;
                }
            }
        }
        //service call
        this.serviceProvider.sendUpgradeServiceInfo().subscribe(function (data) {
            _this.loading.dismiss();
            if (data.success == true && (data.response.length > 0)) {
                _this.serviceProvider.objUpgradeService = new __WEBPACK_IMPORTED_MODULE_7__model_upgrade_service_model__["a" /* UpgradeServiceData */]();
                for (var _i = 0, _a = data.response; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var itemArray = [];
                    var imagePath = _this.toolsProvider.getImagePath(item.foto.id); // image path using image id
                    itemArray.imgPath = imagePath;
                    itemArray.price = item.precio;
                    itemArray.id = item.id;
                    itemArray.order = item.orden;
                    itemArray.name = item.nombre;
                    itemArray.description = item.descripcion;
                    _this.servicesList.push(itemArray);
                }
                _this.serviceProvider.objUpgradeService.ancillaryList = _this.servicesList;
            }
        });
        //translate
        var defaultRateTranslate = this.toolsProvider.fnLanguageTranslate("common.porDia");
        var defaultRateText = '';
        defaultRateTranslate.subscribe(function (value) {
            defaultRateText = value;
        });
        //this.servicesList = this.serviceProvider.objUpgradeService.ancillaryList; //to get list of all ancillary services
        this.serviceRateText = this.currencySymbol + defaultRateText;
    };
    ServiceUpgradePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    // store entered data into model before leaving page
    ServiceUpgradePage.prototype.ionViewWillLeave = function () {
        var _this = this;
        this.listArray = this.servicesList;
        Object.keys(this.Qty).forEach(function (itemId) {
            if (itemId != undefined && _this.Qty[itemId] != undefined && _this.Qty[itemId] > 0) {
                _this.filteredServices = _this.listArray.filter(function (x) { return x.id == itemId; });
                //if service upgrade selected data updated into ancillary summary list
                var serviceArray = [];
                serviceArray.type = 'service';
                serviceArray.quantity = _this.Qty[itemId];
                serviceArray.serviceId = itemId;
                _this.localData.push(serviceArray);
            }
        });
        this.serviceProvider.objUpgradeService.localData = this.localData;
    };
    //to add quantity of an extra service
    ServiceUpgradePage.prototype.fnAddExtraServices = function (itemId) {
        this.Qty[itemId] = (this.Qty[itemId]) ? this.Qty[itemId] + 1 : 1;
    };
    //to subtract quantity of an extra service
    ServiceUpgradePage.prototype.fnRemoveExtraServices = function (itemId) {
        this.Qty[itemId] = (this.Qty[itemId]) ? this.Qty[itemId] - 1 : 0;
    };
    //click to go to next page
    ServiceUpgradePage.prototype.fnContinue = function () {
        var _this = this;
        this.filteredServices = [];
        this.selectedServices = [];
        this.listArray = this.servicesList;
        this.checkinProvider.objCheckin.ancillarySummaryList = this.checkinProvider.objCheckin.ancillarySummaryList.filter(function (e) { return e.type == "room"; });
        Object.keys(this.Qty).forEach(function (itemId) {
            if (itemId != undefined && _this.Qty[itemId] != undefined && _this.Qty[itemId] > 0) {
                _this.filteredServices = _this.listArray.filter(function (x) { return x.id == itemId; });
                //if service upgrade selected data updated into ancillary summary list
                var serviceArray = [];
                serviceArray.type = 'service';
                serviceArray.quantity = _this.Qty[itemId];
                serviceArray.serviceId = itemId;
                serviceArray.currency = _this.currencySymbol;
                serviceArray.pricePerDay = _this.filteredServices[0].price;
                serviceArray.serviceName = _this.filteredServices[0].name;
                serviceArray.nights = _this.reservationProvider.objReservation.nights;
                _this.selectedServices.push(serviceArray);
                _this.checkinProvider.objCheckin.ancillarySummaryList.push(serviceArray);
            }
        });
        this.navCtrl.push("CheckinSummaryPage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
    };
    //function to go to previous page
    ServiceUpgradePage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    ServiceUpgradePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-upgrade',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/service-upgrade/service-upgrade.html"*/'<ion-header class="header_menu">\n  <ion-navbar>\n    <ion-title>{{"view.checkin.title" | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content id="homecontent" class="home_container" no-bounce>\n  <form>\n    <ion-item class="info_hdg">\n      <span>{{\'view.checkin.subtitle.servicesUpgrade\' | translate}}</span>\n      <ul class="chckin_navbtn">\n          <li></li>\n          <li></li>\n          <li></li>\n          <li></li>\n          <li class="active"></li>\n        </ul>\n    </ion-item>\n    <ion-list class="service_list service_upgrade">\n      <ion-item *ngFor="let item of servicesList" [attr.id]="item.id">\n        <div class="service_thumb">\n          <ion-thumbnail item-start>\n            <img [src]="item.imgPath">\n          </ion-thumbnail>\n          <div class="serve_time">\n            <span class="duracion">\n              <svg version="1.1" id="Capa_1" x="0px" y="0px"\n                width="18px" height="18px" viewBox="0 0 2048 2048" enable-background="new 0 0 2048 2048" xml:space="preserve">\n                <g>\n                  <g>\n                    <path d="M1583.2,1201.7c0-33.1-10.8-62-32.5-86.8l-627-680.8c-22.2-24.2-52.1-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3\n                       H366.8c-30.4,0-56.7,12.1-79,36.3c-22.2,24.1-33.3,52.7-33.3,85.8v396.7c0,33.7,7.8,70.9,23.3,111.6\n                       c15.5,40.7,34.4,72.8,56.5,96.3l627.1,682.8c21.7,23.5,48,35.3,79,35.3c30.4,0,57-11.8,79.8-35.3l430.6-469.2\n                       C1572.4,1264,1583.2,1235.5,1583.2,1201.7z M614.5,738.8c-21.9,23.8-48.4,35.8-79.4,35.8c-31,0-57.4-11.9-79.4-35.8\n                       c-21.9-23.8-32.9-52.6-32.9-86.3c0-33.7,10.9-62.4,32.9-86.3c21.9-23.8,48.4-35.8,79.4-35.8c31,0,57.4,11.9,79.4,35.8\n                       c21.9,23.8,32.9,52.6,32.9,86.3C647.4,686.2,636.4,715,614.5,738.8z" />\n                    <path d="M1887.5,1115l-627.1-680.9c-22.2-24.2-52-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3H871.9c31,0,65.2,8.4,102.6,25.3\n                       c37.4,16.9,67.2,37.3,89.5,61.5l627.1,680.9c21.7,24.8,32.5,53.7,32.5,86.8c0,33.7-10.8,62.3-32.5,85.8l-412.2,448.2\n                       c17.6,19.7,33.1,34,46.5,42.9c13.4,8.9,30.7,13.4,51.7,13.4c30.4,0,57-11.8,79.8-35.3l430.7-469.2c21.6-23.5,32.5-52.1,32.5-85.8\n                       C1920,1168.7,1909.2,1139.8,1887.5,1115z" />\n                  </g>\n                </g>\n              </svg>\n              {{item.price}} {{serviceRateText}}\n            </span>\n\n          </div>\n        </div>\n        <div class="service_title">\n          <h2>{{item.name}}</h2>\n          <p>{{item.description}}</p>\n          <button ion-button clear item-end (click)="fnAddExtraServices(item.id)" class="add_btn">+</button>\n          <span *ngIf="Qty[item.id]>0" class="added_qlntity">{{Qty[item.id]}}</span>\n          <button ion-button clear item-end (click)="fnRemoveExtraServices(item.id)" class="mins_btn">-</button>\n        </div>\n      </ion-item>\n    </ion-list>\n    <ion-item class="footerfixed_btn" *ngIf="devicePlatForm!=\'ios\'">\n      <button (click)="fnContinue()" class="cmn_btn">{{"common.continue" | translate}}</button>\n    </ion-item>\n	<ion-item class="footerfixed_btn ios_footer_btn" *ngIf="devicePlatForm==\'ios\'">\n      <button (click)="fnContinue()" class="cmn_btn">{{"common.continue" | translate}}</button>\n    </ion-item>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/service-upgrade/service-upgrade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ancillary_service_ancillary_service__["a" /* AncillaryServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], ServiceUpgradePage);
    return ServiceUpgradePage;
}());

//# sourceMappingURL=service-upgrade.js.map

/***/ })

});
//# sourceMappingURL=8.js.map