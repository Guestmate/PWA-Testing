webpackJsonp([20],{

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionsDetailsPageModule", function() { return PromotionsDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promotions_details__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PromotionsDetailsPageModule = /** @class */ (function () {
    function PromotionsDetailsPageModule() {
    }
    PromotionsDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__promotions_details__["a" /* PromotionsDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__promotions_details__["a" /* PromotionsDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], PromotionsDetailsPageModule);
    return PromotionsDetailsPageModule;
}());

//# sourceMappingURL=promotions-details.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_promotions_service_promotions_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__ = __webpack_require__(44);
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
 * Generated class for the PromotionsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PromotionsDetailsPage = /** @class */ (function () {
    function PromotionsDetailsPage(navCtrl, navParams, promotionsProvider, toolsProvider, alertCtrl, hotelProvider, sanitized, cdRef, reservationProvider, notificationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.promotionsProvider = promotionsProvider;
        this.toolsProvider = toolsProvider;
        this.alertCtrl = alertCtrl;
        this.hotelProvider = hotelProvider;
        this.sanitized = sanitized;
        this.cdRef = cdRef;
        this.reservationProvider = reservationProvider;
        this.notificationProvider = notificationProvider;
        this.item = []; // to store full item list
        this.itemArray = []; // to store single item from items list
        this.currencySymbol = this.hotelProvider.objHotel.currency.signo; // for currency symbol
    }
    PromotionsDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PromotionsDetailsPage');
        this.itemId = this.navParams.get('itemId'); // get item id 
        this.item = this.promotionsProvider.objPromotions.data; // get all item list
        this.itemArray = this.item.find(function (x) { return x.id == _this.itemId; }); // get item from item list with given item id
        this.backgroundImage = this.itemArray.imgPath; // returns image url
        this.description = this.itemArray.descripcionAmpliada; // returns description message
        this.res = this.toolsProvider.fnLanguageTranslate('view.reservation.label.descriptionPrefix'); // for language translation
        this.res.subscribe(function (value) {
            _this.descriptionHtml = _this.sanitized.bypassSecurityTrustHtml(value);
            _this.cdRef.detectChanges();
        });
    };
    PromotionsDetailsPage.prototype.fnGotoPromotionBooking = function (item) {
        var _this = this;
        // check reservation is in a valid date range
        var createdDate = this.reservationProvider.objReservation.createdDate, noOfNightsStay = this.reservationProvider.objReservation.nights, noStayGuest = this.reservationProvider.objReservation.noStayGuest;
        var dateRange = this.toolsProvider.getValidReservationDateRange(createdDate, noOfNightsStay, noStayGuest);
        //if date range is not valid then show error message
        if (dateRange == null) {
            var stayOverMsg = this.toolsProvider.fnLanguageTranslate(['view.reservation.error.dateRange', "common.error", "buttons.ok"]);
            stayOverMsg.subscribe(function (value) {
                var alertsuccess = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: value['view.reservation.error.dateRange'],
                    cssClass: 'cls_alrt',
                    buttons: [
                        {
                            text: value['buttons.ok'],
                            role: 'cancel',
                        }
                    ]
                });
                alertsuccess.present();
                setTimeout(function () { alertsuccess.dismiss(); }, 5000);
            });
        }
        else {
            //if date range is valid then go to booking page
            this.navCtrl.push("PromotionsBookingPage", { item: item }, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
        }
    };
    PromotionsDetailsPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    PromotionsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-promotions-details',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/promotions-details/promotions-details.html"*/'<ion-content id="homecontent" class="home_container" no-bounce>\n  <ion-header>\n    <ion-navbar>\n      <ion-title>{{\'view.ofertaLearnMore.title\' | translate}}</ion-title>\n      <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n        <i class="icon-arrow-left2"></i>\n      </button>\n      <ion-buttons end>\n        <button ion-button menuToggle hidden="false" class="main_menu">\n          <i class="icon-Menu"></i>\n          <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <div class="service_details serviceadtnl_dtls">\n    <ion-item class="serve_bgimg" [style.backgroundImage]="\'url(\' + backgroundImage + \')\'">\n      <div class="slider_caption">\n        <h2>{{itemArray.nombre}}</h2>\n        <span class="slider_lbl">\n          <svg version="1.1" id="Capa_1" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 2048 2048" enable-background="new 0 0 2048 2048"\n            xml:space="preserve">\n            <g>\n              <g>\n                <path d="M1583.2,1201.7c0-33.1-10.8-62-32.5-86.8l-627-680.8c-22.2-24.2-52.1-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3\n             H366.8c-30.4,0-56.7,12.1-79,36.3c-22.2,24.1-33.3,52.7-33.3,85.8v396.7c0,33.7,7.8,70.9,23.3,111.6\n             c15.5,40.7,34.4,72.8,56.5,96.3l627.1,682.8c21.7,23.5,48,35.3,79,35.3c30.4,0,57-11.8,79.8-35.3l430.6-469.2\n             C1572.4,1264,1583.2,1235.5,1583.2,1201.7z M614.5,738.8c-21.9,23.8-48.4,35.8-79.4,35.8c-31,0-57.4-11.9-79.4-35.8\n             c-21.9-23.8-32.9-52.6-32.9-86.3c0-33.7,10.9-62.4,32.9-86.3c21.9-23.8,48.4-35.8,79.4-35.8c31,0,57.4,11.9,79.4,35.8\n             c21.9,23.8,32.9,52.6,32.9,86.3C647.4,686.2,636.4,715,614.5,738.8z" />\n                <path d="M1887.5,1115l-627.1-680.9c-22.2-24.2-52-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3H871.9c31,0,65.2,8.4,102.6,25.3\n             c37.4,16.9,67.2,37.3,89.5,61.5l627.1,680.9c21.7,24.8,32.5,53.7,32.5,86.8c0,33.7-10.8,62.3-32.5,85.8l-412.2,448.2\n             c17.6,19.7,33.1,34,46.5,42.9c13.4,8.9,30.7,13.4,51.7,13.4c30.4,0,57-11.8,79.8-35.3l430.7-469.2c21.6-23.5,32.5-52.1,32.5-85.8\n             C1920,1168.7,1909.2,1139.8,1887.5,1115z" />\n              </g>\n            </g>\n          </svg>\n          <label *ngIf="itemArray.precio>0">{{itemArray.price}} {{currencySymbol}}</label>\n          <label *ngIf="itemArray.precio==0">--</label>\n        </span>\n      </div>\n    </ion-item>\n    <div class="service_descp sevice_descp_full">\n      <button class="cm_ylw_btn cart" ion-button icon-only (click)="fnGotoPromotionBooking(itemArray)">\n        <i class="icon-Carrito_in"></i>\n      </button>\n      <h3>\n        <ion-label>{{itemArray.descripcion}}</ion-label>\n      </h3>\n      <p>\n        <ion-label [innerHTML]="itemArray.descripcionAmpliada"></ion-label>\n      </p>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/promotions-details/promotions-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_promotions_service_promotions_service__["a" /* PromotionsServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__["a" /* NotificationProvider */]])
    ], PromotionsDetailsPage);
    return PromotionsDetailsPage;
}());

//# sourceMappingURL=promotions-details.js.map

/***/ })

});
//# sourceMappingURL=20.js.map