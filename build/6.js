webpackJsonp([6],{

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellnessDetailsPageModule", function() { return WellnessDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wellness_details__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WellnessDetailsPageModule = /** @class */ (function () {
    function WellnessDetailsPageModule() {
    }
    WellnessDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wellness_details__["a" /* WellnessDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wellness_details__["a" /* WellnessDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], WellnessDetailsPageModule);
    return WellnessDetailsPageModule;
}());

//# sourceMappingURL=wellness-details.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WellnessDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_wellness_service_wellness_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__ = __webpack_require__(44);
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
 * Generated class for the WellnessDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WellnessDetailsPage = /** @class */ (function () {
    function WellnessDetailsPage(navCtrl, navParams, hotelProvider, toolsProvider, reservationProvider, alertCtrl, wellnessProvider, notificationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hotelProvider = hotelProvider;
        this.toolsProvider = toolsProvider;
        this.reservationProvider = reservationProvider;
        this.alertCtrl = alertCtrl;
        this.wellnessProvider = wellnessProvider;
        this.notificationProvider = notificationProvider;
        this.itemList = []; // to store dishes data
        this.itemData = []; // for service data
        this.isBookable = false; // for booking button show and hide
        this.currencySymbol = this.hotelProvider.objHotel.currency.signo; // for currency symbol
    }
    WellnessDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.itemId = this.navParams.get('itemId'); // get item id 
        var firstImage = this.navParams.get('img');
        this.itemData = this.wellnessProvider.objWellness.data; // get all item list
        this.itemData = this.itemData.find(function (x) { return x.id == _this.itemId; }); // get item from item list with given item id
        this.backgroundImage = this.itemData.imgPath; // returns image url
        if (this.reservationProvider.objReservation.noStayGuest) {
            this.isBookable = this.itemData.bookNoStay;
        }
        else {
            this.isBookable = this.itemData.esReservable;
        }
        var i = 0;
        for (var _i = 0, _a = this.itemData.availableItems; _i < _a.length; _i++) {
            var item = _a[_i];
            var itemArray = void 0;
            itemArray = item;
            var imagePath = this.toolsProvider.getImagePath(item.foto.id); // image path using image id
            itemArray.imgPath = imagePath;
            if (i == 0 && firstImage != "") {
                itemArray.imgPath = firstImage;
            }
            var price = item.precio.toFixed(this.hotelProvider.objHotel.currency.decimales); // adding decimal points to price
            itemArray.price = price;
            if ((!this.reservationProvider.objReservation.noStayGuest && item.esReservable == true) || (this.reservationProvider.objReservation.noStayGuest && item.bookNoStay == true)) {
                itemArray.bookableItem = true;
            }
            else {
                itemArray.bookableItem = false;
            }
            this.itemList.push(itemArray);
            i++;
        }
        var descTitle = this.toolsProvider.fnLanguageTranslate("view.reservation.label.descriptionPrefix");
        descTitle.subscribe(function (value) {
            _this.descriptionTitle = value;
        });
        console.log('ionViewDidLoad WellnessDetailsPage');
    };
    //moves to next slide
    WellnessDetailsPage.prototype.slideNext = function () {
        this.slides.slideNext();
    };
    //moves to previous slide
    WellnessDetailsPage.prototype.slidePrev = function () {
        this.slides.slidePrev();
    };
    //function to go to previous page
    WellnessDetailsPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    WellnessDetailsPage.prototype.fnGotoWellnessBooking = function (item) {
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
            this.navCtrl.push("WellnessBookingPage", { item: item }, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], WellnessDetailsPage.prototype, "slides", void 0);
    WellnessDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wellness-details',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/wellness-details/wellness-details.html"*/'<ion-content id="homecontent" class="home_container" no-bounce>\n  <ion-header>\n    <ion-navbar>\n      <ion-title>{{\'view.saludLearnMore.title\' | translate}}</ion-title>\n      <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n        <i class="icon-arrow-left2"></i>\n      </button>\n      <ion-buttons end>\n        <button ion-button menuToggle hidden="false" class="main_menu">\n          <i class="icon-Menu"></i>\n          <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <div class="service_details serviceadtnl_dtls">\n    <ion-item class="serve_bgimg" [style.backgroundImage]="\'url(\' + backgroundImage + \')\'">\n      <div class="slider_caption">\n        <h2>{{itemData.nombre}}</h2>\n        <span class="slider_lbl" *ngIf="itemData.horario!=\'\'">\n          <svg version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 2048 2048" enable-background="new 0 0 2048 2048"\n            xml:space="preserve">\n            <g>\n              <path fill-rule="evenodd" clip-rule="evenodd" d="M342,783.8c-37.6-5.3-72.7-10.3-107.9-15.1c-20.8-2.9-34.1-13.6-38.6-31.6\n             c-4.6-18.2,2.6-35.7,20.2-47.3c96.6-63.5,198.1-118,305.3-161.5c5.7-2.3,11.5-4.3,17.3-6.1c24.7-7.4,43.8-0.8,54.2,22.7\n             c16.6,37.6,33.5,75.5,45.6,114.7c22.5,73.3,41.7,147.6,61.9,221.5c2.3,8.4,3.9,17.8,2.9,26.3c-4,34.4-39.7,48.5-69.5,27.5\n             c-15.5-10.9-30-23.1-45.1-34.6c-15.4-11.8-30.9-23.4-48.8-36.9c-28.8,72.4-37.5,145.9-31.7,220.5\n             c10.1,130.2,60.7,243.8,152.9,336.5c199.5,200.4,508.1,216.5,724.1,38.3c216.8-178.8,253.4-479.6,112.6-703\n             C1350.8,523.2,1017,415.5,738.5,600.9c-2.7-6.8-5.7-13.1-7.8-19.7c-18.2-56.1-35.9-112.3-54.5-168.3c-4.1-12.4-1.7-18.7,10.1-25\n             c85.7-46.3,176.4-75.3,273.4-86.6c132.7-15.4,260,4.1,382,56.7c114.1,49.2,209.7,123.7,287.3,221c80.6,101,131.5,215.4,152.8,342.4\n             c14,83.3,13.9,167.2-1.6,250.8c-43.6,234.4-171.5,409-376.7,527.2c-83.7,48.2-175.2,75.7-271.5,87.2\n             c-107.2,12.8-212.3,2.7-314.8-29.8c-104.5-33.1-197.4-87.1-278-161.5c-120.1-110.7-196.9-246.4-229.1-406.4\n             c-22.2-110.2-18.7-220.3,9.4-329.4C325.6,834.9,333.8,810.8,342,783.8z" />\n              <path fill-rule="evenodd" clip-rule="evenodd" d="M1252.1,1333.2c-17.1,2.7-33.4-2-47.7-14.9c-75.4-67.9-150.8-135.7-226.4-203.4\n             c-20.1-18-25.9-41.1-23.9-66.6c8.9-113.6,18.4-227.2,27.6-340.7c0.6-7.2,1-14.4,1.6-21.6c3.1-33.9,28.2-57.9,60.1-57.6\n             c30.3,0.3,56.6,25.3,60.2,56.7c10.6,91.3,23.7,182.4,31.1,274c3.3,41.4,16.1,75.3,40.6,108.2c38.2,51.3,73,105.1,109.2,158\n             c5.3,7.8,10.5,15.8,14.6,24.3C1317.2,1286.9,1294.8,1327.7,1252.1,1333.2z" />\n            </g>\n          </svg>\n          <label>{{itemData.horario}}</label>\n        </span>\n        <span class="slider_lbl" *ngIf="itemData.precio!=0">\n          <svg version="1.1" id="Capa_1" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 2048 2048" enable-background="new 0 0 2048 2048"\n            xml:space="preserve">\n            <g>\n              <g>\n                <path d="M1583.2,1201.7c0-33.1-10.8-62-32.5-86.8l-627-680.8c-22.2-24.2-52.1-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3\n                   H366.8c-30.4,0-56.7,12.1-79,36.3c-22.2,24.1-33.3,52.7-33.3,85.8v396.7c0,33.7,7.8,70.9,23.3,111.6\n                   c15.5,40.7,34.4,72.8,56.5,96.3l627.1,682.8c21.7,23.5,48,35.3,79,35.3c30.4,0,57-11.8,79.8-35.3l430.6-469.2\n                   C1572.4,1264,1583.2,1235.5,1583.2,1201.7z M614.5,738.8c-21.9,23.8-48.4,35.8-79.4,35.8c-31,0-57.4-11.9-79.4-35.8\n                   c-21.9-23.8-32.9-52.6-32.9-86.3c0-33.7,10.9-62.4,32.9-86.3c21.9-23.8,48.4-35.8,79.4-35.8c31,0,57.4,11.9,79.4,35.8\n                   c21.9,23.8,32.9,52.6,32.9,86.3C647.4,686.2,636.4,715,614.5,738.8z" />\n                <path d="M1887.5,1115l-627.1-680.9c-22.2-24.2-52-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3H871.9c31,0,65.2,8.4,102.6,25.3\n                   c37.4,16.9,67.2,37.3,89.5,61.5l627.1,680.9c21.7,24.8,32.5,53.7,32.5,86.8c0,33.7-10.8,62.3-32.5,85.8l-412.2,448.2\n                   c17.6,19.7,33.1,34,46.5,42.9c13.4,8.9,30.7,13.4,51.7,13.4c30.4,0,57-11.8,79.8-35.3l430.7-469.2c21.6-23.5,32.5-52.1,32.5-85.8\n                   C1920,1168.7,1909.2,1139.8,1887.5,1115z" />\n              </g>\n            </g>\n          </svg>\n          <label>{{itemData.price}} {{currencySymbol}}</label>\n        </span>\n      </div>\n    </ion-item>\n    <div class="service_descp">\n      <button *ngIf="isBookable" class="cm_ylw_btn cart" ion-button icon-only (click)="fnGotoWellnessBooking(itemData)">\n        <i class="icon-Carrito_in"></i>\n      </button>\n      <span [innerHtml]="descriptionTitle"></span>\n      <h3>\n        <ion-label>{{itemData.descripcion}}</ion-label>\n      </h3>\n      <p>\n        <ion-label [innerHTML]="itemData.descripcionAmpliada"></ion-label>\n      </p>\n    </div>\n    <div class="wellness_slider_wrpr">\n      <div class="wellness_slider_inr">\n        <ion-slides pager="true" class="serviceadtnl_dtls_sldr">\n          <ng-container *ngFor="let item of itemList">\n            <ion-slide>\n              <div [style.backgroundImage]="\'url(\' + item.imgPath + \')\'" class="slide_img">\n                <div class="slide_img_disc">\n                  <h2>{{item.nombre}}</h2>\n                  <button *ngIf="item.bookableItem" class="cm_ylw_btn cart slide_img_disc_cart" ion-button icon-only (click)="fnGotoWellnessBooking(item)">\n                    <i class="icon-Carrito_in"></i>\n                  </button>\n                </div>\n              </div>\n              <div class="slide_dtls" [innerHTML]="item.descripcion">\n              </div>\n              <button class="slider_arrow sl_left" type="submit" float-left ion-button color="primary" (click)="slidePrev()"></button>\n              <button class="slider_arrow sl_rgt" type="submit" float-right ion-button color="primary" (click)="slideNext()"></button>\n            </ion-slide>\n          </ng-container>\n        </ion-slides>\n      </div>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/wellness-details/wellness-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_wellness_service_wellness_service__["a" /* WellnessServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__["a" /* NotificationProvider */]])
    ], WellnessDetailsPage);
    return WellnessDetailsPage;
}());

//# sourceMappingURL=wellness-details.js.map

/***/ })

});
//# sourceMappingURL=6.js.map