webpackJsonp([33],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesPageModule", function() { return ActivitiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activities__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ActivitiesPageModule = /** @class */ (function () {
    function ActivitiesPageModule() {
    }
    ActivitiesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activities__["a" /* ActivitiesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activities__["a" /* ActivitiesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ActivitiesPageModule);
    return ActivitiesPageModule;
}());

//# sourceMappingURL=activities.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_service_activity_service__ = __webpack_require__(104);
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
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivitiesPage = /** @class */ (function () {
    function ActivitiesPage(navCtrl, navParams, activityProvider, hotelProvider, menuCtrl, loadingCtrl, notificationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activityProvider = activityProvider;
        this.hotelProvider = hotelProvider;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.notificationProvider = notificationProvider;
        this.activityList = []; // for storing activity list data
        this.displayPagination = true; // slider pagination bullets
        this.currencySymbol = this.hotelProvider.objHotel.currency.signo; // currency symbol
        //set previously viewed slider
        if (this.activityProvider.objActivity && this.activityProvider.objActivity.activeSlider) {
            this.activeSlider = this.activityProvider.objActivity.activeSlider;
        }
        //get activity list
        this.activityList = this.activityProvider.objActivity.data;
    }
    ActivitiesPage.prototype.ionViewWillLoad = function () {
    };
    ActivitiesPage.prototype.ionViewWillLeave = function () {
        //save active slider index
        this.activityProvider.objActivity.activeSlider = this.slides.getActiveIndex();
    };
    ActivitiesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.activeSlider) {
            setTimeout(function () {
                _this.slides.slideTo(_this.activeSlider, 0);
            }, 200);
        }
    };
    //moves to next slide
    ActivitiesPage.prototype.slideNext = function () {
        this.slides.slideNext();
    };
    //moves to previous slide
    ActivitiesPage.prototype.slidePrev = function () {
        this.slides.slidePrev();
    };
    ActivitiesPage.prototype.fnGotoDetailsPage = function (itemId) {
        this.navCtrl.push("ActivitiesDetailsPage", { itemId: itemId }, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
    };
    // slide changed
    ActivitiesPage.prototype.slideChanged = function () {
        // add class if last slide
        if (this.slides.isEnd()) {
            document.getElementById("headerNav").classList.add('header_menu');
        }
        else {
            document.getElementById("headerNav").classList.remove('header_menu');
        }
    };
    ActivitiesPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    //Loader
    ActivitiesPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], ActivitiesPage.prototype, "slides", void 0);
    ActivitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activities',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/activities/activities.html"*/'<ion-content id="homecontent" class="home_container" no-bounce>\n  <ion-header id="headerNav">\n    <ion-navbar>\n      <ion-title>{{\'view.actividadCarousel.title\' | translate}}</ion-title>\n      <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n        <i class="icon-arrow-left2"></i>\n      </button>\n      <ion-buttons end>\n        <button ion-button menuToggle hidden="false" class="main_menu">\n          <i class="icon-Menu"></i>\n          <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-slides class="cm_slider_wrpr" [pager]="!slides.isEnd()" (ionSlideDidChange)="slideChanged()">\n    <ng-container *ngFor="let item of activityList">\n      <ion-slide *ngIf="item.esTop" [style.backgroundImage]="\'url(\' + item.imgPath + \')\'">\n        <div class="slider_caption">\n          <h2>{{item.nombre}}</h2>\n          <span class="slider_lbl">\n            <svg version="1.1" id="Capa_1" x="0px" y="0px"\n              width="28px" height="28px" viewBox="0 0 2048 2048" enable-background="new 0 0 2048 2048" xml:space="preserve">\n              <g>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M342,783.8c-37.6-5.3-72.7-10.3-107.9-15.1c-20.8-2.9-34.1-13.6-38.6-31.6\n               c-4.6-18.2,2.6-35.7,20.2-47.3c96.6-63.5,198.1-118,305.3-161.5c5.7-2.3,11.5-4.3,17.3-6.1c24.7-7.4,43.8-0.8,54.2,22.7\n               c16.6,37.6,33.5,75.5,45.6,114.7c22.5,73.3,41.7,147.6,61.9,221.5c2.3,8.4,3.9,17.8,2.9,26.3c-4,34.4-39.7,48.5-69.5,27.5\n               c-15.5-10.9-30-23.1-45.1-34.6c-15.4-11.8-30.9-23.4-48.8-36.9c-28.8,72.4-37.5,145.9-31.7,220.5\n               c10.1,130.2,60.7,243.8,152.9,336.5c199.5,200.4,508.1,216.5,724.1,38.3c216.8-178.8,253.4-479.6,112.6-703\n               C1350.8,523.2,1017,415.5,738.5,600.9c-2.7-6.8-5.7-13.1-7.8-19.7c-18.2-56.1-35.9-112.3-54.5-168.3c-4.1-12.4-1.7-18.7,10.1-25\n               c85.7-46.3,176.4-75.3,273.4-86.6c132.7-15.4,260,4.1,382,56.7c114.1,49.2,209.7,123.7,287.3,221c80.6,101,131.5,215.4,152.8,342.4\n               c14,83.3,13.9,167.2-1.6,250.8c-43.6,234.4-171.5,409-376.7,527.2c-83.7,48.2-175.2,75.7-271.5,87.2\n               c-107.2,12.8-212.3,2.7-314.8-29.8c-104.5-33.1-197.4-87.1-278-161.5c-120.1-110.7-196.9-246.4-229.1-406.4\n               c-22.2-110.2-18.7-220.3,9.4-329.4C325.6,834.9,333.8,810.8,342,783.8z" />\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M1252.1,1333.2c-17.1,2.7-33.4-2-47.7-14.9c-75.4-67.9-150.8-135.7-226.4-203.4\n               c-20.1-18-25.9-41.1-23.9-66.6c8.9-113.6,18.4-227.2,27.6-340.7c0.6-7.2,1-14.4,1.6-21.6c3.1-33.9,28.2-57.9,60.1-57.6\n               c30.3,0.3,56.6,25.3,60.2,56.7c10.6,91.3,23.7,182.4,31.1,274c3.3,41.4,16.1,75.3,40.6,108.2c38.2,51.3,73,105.1,109.2,158\n               c5.3,7.8,10.5,15.8,14.6,24.3C1317.2,1286.9,1294.8,1327.7,1252.1,1333.2z" />\n              </g>\n            </svg>\n            <ion-label class="time_icon">{{item.duracion}}</ion-label>\n          </span>\n          <span class="slider_lbl">\n            <svg version="1.1" id="Capa_1" x="0px" y="0px"\n              width="28px" height="28px" viewBox="0 0 2048 2048" enable-background="new 0 0 2048 2048" xml:space="preserve">\n              <g>\n                <g>\n                  <path d="M1583.2,1201.7c0-33.1-10.8-62-32.5-86.8l-627-680.8c-22.2-24.2-52.1-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3\n                 H366.8c-30.4,0-56.7,12.1-79,36.3c-22.2,24.1-33.3,52.7-33.3,85.8v396.7c0,33.7,7.8,70.9,23.3,111.6\n                 c15.5,40.7,34.4,72.8,56.5,96.3l627.1,682.8c21.7,23.5,48,35.3,79,35.3c30.4,0,57-11.8,79.8-35.3l430.6-469.2\n                 C1572.4,1264,1583.2,1235.5,1583.2,1201.7z M614.5,738.8c-21.9,23.8-48.4,35.8-79.4,35.8c-31,0-57.4-11.9-79.4-35.8\n                 c-21.9-23.8-32.9-52.6-32.9-86.3c0-33.7,10.9-62.4,32.9-86.3c21.9-23.8,48.4-35.8,79.4-35.8c31,0,57.4,11.9,79.4,35.8\n                 c21.9,23.8,32.9,52.6,32.9,86.3C647.4,686.2,636.4,715,614.5,738.8z" />\n                  <path d="M1887.5,1115l-627.1-680.9c-22.2-24.2-52-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3H871.9c31,0,65.2,8.4,102.6,25.3\n                 c37.4,16.9,67.2,37.3,89.5,61.5l627.1,680.9c21.7,24.8,32.5,53.7,32.5,86.8c0,33.7-10.8,62.3-32.5,85.8l-412.2,448.2\n                 c17.6,19.7,33.1,34,46.5,42.9c13.4,8.9,30.7,13.4,51.7,13.4c30.4,0,57-11.8,79.8-35.3l430.7-469.2c21.6-23.5,32.5-52.1,32.5-85.8\n                 C1920,1168.7,1909.2,1139.8,1887.5,1115z" />\n                </g>\n              </g>\n            </svg>\n            <!-- <ion-icon ios="ios-pricetags" md="md-pricetags"></ion-icon> -->\n            <ion-label class="price_icon">{{item.price}} {{currencySymbol}}</ion-label>\n          </span>\n          <button class="slider_plus_btn" ion-button (click)="fnGotoDetailsPage(item.id)">+</button>\n        </div>\n        <button class="slider_arrow sl_left" type="submit" float-left ion-button color="primary" (click)="slidePrev()"></button>\n        <button class="slider_arrow sl_rgt" type="submit" float-right ion-button color="primary" (click)="slideNext()"></button>\n      </ion-slide>\n    </ng-container>\n    <ion-slide>\n\n      <ion-list class="service_list">\n        <!-- <ion-item *ngFor="let item of activityList" (click)="fnGotoDetailsPage(item.id)"> -->\n        <ion-item *ngFor="let item of activityList" (click)="fnGotoDetailsPage(item.id)">\n          <div class="service_thumb">\n            <ion-thumbnail item-start>\n              <img [src]="item.imgPath">\n            </ion-thumbnail>\n            <div class="serve_time">\n              <span class="duracion">\n                <svg version="1.1" id="Capa_1"  x="0px" y="0px"\n                  width="18px" height="18px" viewBox="0 0 2048 2048" enable-background="new 0 0 2048 2048" xml:space="preserve">\n                  <g>\n                    <path fill-rule="evenodd" clip-rule="evenodd" d="M342,783.8c-37.6-5.3-72.7-10.3-107.9-15.1c-20.8-2.9-34.1-13.6-38.6-31.6\n               c-4.6-18.2,2.6-35.7,20.2-47.3c96.6-63.5,198.1-118,305.3-161.5c5.7-2.3,11.5-4.3,17.3-6.1c24.7-7.4,43.8-0.8,54.2,22.7\n               c16.6,37.6,33.5,75.5,45.6,114.7c22.5,73.3,41.7,147.6,61.9,221.5c2.3,8.4,3.9,17.8,2.9,26.3c-4,34.4-39.7,48.5-69.5,27.5\n               c-15.5-10.9-30-23.1-45.1-34.6c-15.4-11.8-30.9-23.4-48.8-36.9c-28.8,72.4-37.5,145.9-31.7,220.5\n               c10.1,130.2,60.7,243.8,152.9,336.5c199.5,200.4,508.1,216.5,724.1,38.3c216.8-178.8,253.4-479.6,112.6-703\n               C1350.8,523.2,1017,415.5,738.5,600.9c-2.7-6.8-5.7-13.1-7.8-19.7c-18.2-56.1-35.9-112.3-54.5-168.3c-4.1-12.4-1.7-18.7,10.1-25\n               c85.7-46.3,176.4-75.3,273.4-86.6c132.7-15.4,260,4.1,382,56.7c114.1,49.2,209.7,123.7,287.3,221c80.6,101,131.5,215.4,152.8,342.4\n               c14,83.3,13.9,167.2-1.6,250.8c-43.6,234.4-171.5,409-376.7,527.2c-83.7,48.2-175.2,75.7-271.5,87.2\n               c-107.2,12.8-212.3,2.7-314.8-29.8c-104.5-33.1-197.4-87.1-278-161.5c-120.1-110.7-196.9-246.4-229.1-406.4\n               c-22.2-110.2-18.7-220.3,9.4-329.4C325.6,834.9,333.8,810.8,342,783.8z" />\n                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1252.1,1333.2c-17.1,2.7-33.4-2-47.7-14.9c-75.4-67.9-150.8-135.7-226.4-203.4\n               c-20.1-18-25.9-41.1-23.9-66.6c8.9-113.6,18.4-227.2,27.6-340.7c0.6-7.2,1-14.4,1.6-21.6c3.1-33.9,28.2-57.9,60.1-57.6\n               c30.3,0.3,56.6,25.3,60.2,56.7c10.6,91.3,23.7,182.4,31.1,274c3.3,41.4,16.1,75.3,40.6,108.2c38.2,51.3,73,105.1,109.2,158\n               c5.3,7.8,10.5,15.8,14.6,24.3C1317.2,1286.9,1294.8,1327.7,1252.1,1333.2z" />\n                  </g>\n                </svg>\n                {{item.duracion}}\n              </span>\n              <span class="precio">\n                <svg version="1.1" id="Capa_1" x="0px" y="0px"\n                  width="18px" height="18px" viewBox="0 0 2048 2048" enable-background="new 0 0 2048 2048" xml:space="preserve">\n                  <g>\n                    <g>\n                      <path d="M1583.2,1201.7c0-33.1-10.8-62-32.5-86.8l-627-680.8c-22.2-24.2-52.1-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3\n                       H366.8c-30.4,0-56.7,12.1-79,36.3c-22.2,24.1-33.3,52.7-33.3,85.8v396.7c0,33.7,7.8,70.9,23.3,111.6\n                       c15.5,40.7,34.4,72.8,56.5,96.3l627.1,682.8c21.7,23.5,48,35.3,79,35.3c30.4,0,57-11.8,79.8-35.3l430.6-469.2\n                       C1572.4,1264,1583.2,1235.5,1583.2,1201.7z M614.5,738.8c-21.9,23.8-48.4,35.8-79.4,35.8c-31,0-57.4-11.9-79.4-35.8\n                       c-21.9-23.8-32.9-52.6-32.9-86.3c0-33.7,10.9-62.4,32.9-86.3c21.9-23.8,48.4-35.8,79.4-35.8c31,0,57.4,11.9,79.4,35.8\n                       c21.9,23.8,32.9,52.6,32.9,86.3C647.4,686.2,636.4,715,614.5,738.8z" />\n                      <path d="M1887.5,1115l-627.1-680.9c-22.2-24.2-52-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3H871.9c31,0,65.2,8.4,102.6,25.3\n                       c37.4,16.9,67.2,37.3,89.5,61.5l627.1,680.9c21.7,24.8,32.5,53.7,32.5,86.8c0,33.7-10.8,62.3-32.5,85.8l-412.2,448.2\n                       c17.6,19.7,33.1,34,46.5,42.9c13.4,8.9,30.7,13.4,51.7,13.4c30.4,0,57-11.8,79.8-35.3l430.7-469.2c21.6-23.5,32.5-52.1,32.5-85.8\n                       C1920,1168.7,1909.2,1139.8,1887.5,1115z" />\n                    </g>\n                  </g>\n                </svg>\n                {{item.precio}} {{currencySymbol}}\n              </span>\n            </div>\n          </div>\n          <div class="service_title">\n            <h2>{{item.nombre}}</h2>\n            <p>{{item.descripcion}}</p>\n            <button ion-button clear item-end>+</button>\n          </div>\n        </ion-item>\n      </ion-list>\n\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/activities/activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_activity_service_activity_service__["a" /* ActivityServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__["a" /* NotificationProvider */]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());

//# sourceMappingURL=activities.js.map

/***/ })

});
//# sourceMappingURL=33.js.map