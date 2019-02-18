webpackJsonp([19],{

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionsPageModule", function() { return PromotionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promotions__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PromotionsPageModule = /** @class */ (function () {
    function PromotionsPageModule() {
    }
    PromotionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__promotions__["a" /* PromotionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__promotions__["a" /* PromotionsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], PromotionsPageModule);
    return PromotionsPageModule;
}());

//# sourceMappingURL=promotions.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_promotions_service_promotions_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hotel_service_hotel_service__ = __webpack_require__(28);
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
 * Generated class for the PromotionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PromotionsPage = /** @class */ (function () {
    function PromotionsPage(navCtrl, navParams, promotionsProvider, hotelProvider, menuCtrl, loadingCtrl, notificationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.promotionsProvider = promotionsProvider;
        this.hotelProvider = hotelProvider;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.notificationProvider = notificationProvider;
        this.promotionsList = [];
        this.currencySymbol = this.hotelProvider.objHotel.currency.signo; // currency symbol
        if (this.promotionsProvider.objPromotions && this.promotionsProvider.objPromotions.activeSlider) {
            this.activeSlider = this.promotionsProvider.objPromotions.activeSlider;
        }
        //get promotion list
        this.promotionsList = this.promotionsProvider.objPromotions.data;
    }
    PromotionsPage.prototype.ionViewWillLeave = function () {
        //save active slider index
        this.promotionsProvider.objPromotions.activeSlider = this.slides.getActiveIndex();
    };
    PromotionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.activeSlider) {
            setTimeout(function () {
                _this.slides.slideTo(_this.activeSlider, 0);
            }, 200);
        }
    };
    //moves to next slide
    PromotionsPage.prototype.slideNext = function () {
        this.slides.slideNext();
    };
    //moves to previous slide
    PromotionsPage.prototype.slidePrev = function () {
        this.slides.slidePrev();
    };
    PromotionsPage.prototype.fnGotoDetailsPage = function (itemId) {
        this.navCtrl.push("PromotionsDetailsPage", { itemId: itemId }, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
    };
    PromotionsPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    //Loader
    PromotionsPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], PromotionsPage.prototype, "slides", void 0);
    PromotionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-promotions',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/promotions/promotions.html"*/'<ion-content id="homecontent" class="home_container" no-bounce>\n  <ion-header id="headerNav">\n    <ion-navbar>\n      <ion-title>{{\'view.ofertaCarousel.title\' | translate}}</ion-title>\n      <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n        <i class="icon-arrow-left2"></i>\n      </button>\n      <ion-buttons end>\n        <button ion-button menuToggle hidden="false" class="main_menu">\n          <i class="icon-Menu"></i>\n          <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-slides class="cm_slider_wrpr" pager>\n    <ng-container *ngFor="let item of promotionsList">\n      <ion-slide [style.backgroundImage]="\'url(\' + item.imgPath + \')\'">\n        <div class="slider_caption">\n          <h2>{{item.nombre}}</h2>\n          <span class="slider_lbl">\n            <svg version="1.1" id="Capa_1" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 2048 2048" enable-background="new 0 0 2048 2048"\n              xml:space="preserve">\n              <g>\n                <g>\n                  <path d="M1583.2,1201.7c0-33.1-10.8-62-32.5-86.8l-627-680.8c-22.2-24.2-52.1-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3\n                 H366.8c-30.4,0-56.7,12.1-79,36.3c-22.2,24.1-33.3,52.7-33.3,85.8v396.7c0,33.7,7.8,70.9,23.3,111.6\n                 c15.5,40.7,34.4,72.8,56.5,96.3l627.1,682.8c21.7,23.5,48,35.3,79,35.3c30.4,0,57-11.8,79.8-35.3l430.6-469.2\n                 C1572.4,1264,1583.2,1235.5,1583.2,1201.7z M614.5,738.8c-21.9,23.8-48.4,35.8-79.4,35.8c-31,0-57.4-11.9-79.4-35.8\n                 c-21.9-23.8-32.9-52.6-32.9-86.3c0-33.7,10.9-62.4,32.9-86.3c21.9-23.8,48.4-35.8,79.4-35.8c31,0,57.4,11.9,79.4,35.8\n                 c21.9,23.8,32.9,52.6,32.9,86.3C647.4,686.2,636.4,715,614.5,738.8z" />\n                  <path d="M1887.5,1115l-627.1-680.9c-22.2-24.2-52-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3H871.9c31,0,65.2,8.4,102.6,25.3\n                 c37.4,16.9,67.2,37.3,89.5,61.5l627.1,680.9c21.7,24.8,32.5,53.7,32.5,86.8c0,33.7-10.8,62.3-32.5,85.8l-412.2,448.2\n                 c17.6,19.7,33.1,34,46.5,42.9c13.4,8.9,30.7,13.4,51.7,13.4c30.4,0,57-11.8,79.8-35.3l430.7-469.2c21.6-23.5,32.5-52.1,32.5-85.8\n                 C1920,1168.7,1909.2,1139.8,1887.5,1115z" />\n                </g>\n              </g>\n            </svg>\n            <ion-label class="price_icon" *ngIf="item.precio>0">{{item.price}} {{currencySymbol}}</ion-label>\n            <ion-label class="price_icon" *ngIf="item.precio==0">--</ion-label>\n          </span>\n          <button class="slider_plus_btn" ion-button (click)="fnGotoDetailsPage(item.id)">+</button>\n        </div>\n        <button class="slider_arrow sl_left" type="submit" float-left ion-button color="primary" (click)="slidePrev()"></button>\n        <button class="slider_arrow sl_rgt" type="submit" float-right ion-button color="primary" (click)="slideNext()"></button>\n      </ion-slide>\n    </ng-container>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/promotions/promotions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_promotions_service_promotions_service__["a" /* PromotionsServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__["a" /* NotificationProvider */]])
    ], PromotionsPage);
    return PromotionsPage;
}());

//# sourceMappingURL=promotions.js.map

/***/ })

});
//# sourceMappingURL=19.js.map