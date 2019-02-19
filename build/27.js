webpackJsonp([27],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderPageModule", function() { return ConfirmOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_order__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConfirmOrderPageModule = /** @class */ (function () {
    function ConfirmOrderPageModule() {
    }
    ConfirmOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_order__["a" /* ConfirmOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm_order__["a" /* ConfirmOrderPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ConfirmOrderPageModule);
    return ConfirmOrderPageModule;
}());

//# sourceMappingURL=confirm-order.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rooms_service_rooms_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__ = __webpack_require__(41);
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
 * Generated class for the ConfirmOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmOrderPage = /** @class */ (function () {
    function ConfirmOrderPage(navCtrl, navParams, roomsProvider, hotelProvider, toolsProvider, alertCtrl, reservationProvider, notificationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.roomsProvider = roomsProvider;
        this.hotelProvider = hotelProvider;
        this.toolsProvider = toolsProvider;
        this.alertCtrl = alertCtrl;
        this.reservationProvider = reservationProvider;
        this.notificationProvider = notificationProvider;
        this.nonEmptyOrder = true;
        this.ordersList = [];
        this.total = 0;
        this.currencySymbol = this.hotelProvider.objHotel.currency.signo; // currency symbol
        this.showBackButton = true;
    }
    ConfirmOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmOrderPage');
    };
    ConfirmOrderPage.prototype.ionViewWillEnter = function () {
        this.showBackButton = true;
        this.ordersList = this.roomsProvider.objRoomService.currentOrderList;
        this.nonEmptyOrder = (this.ordersList) && (this.ordersList.length > 0) ? true : false;
        this.fnCalculateCartTotal();
    };
    ConfirmOrderPage.prototype.ionViewWillLeave = function () {
        this.showBackButton = false;
    };
    //to calculate total price of all cart items
    ConfirmOrderPage.prototype.fnCalculateCartTotal = function () {
        this.total = 0;
        for (var i = 0; i < this.ordersList.length; i++) {
            for (var j = 0; j < this.ordersList[i].availableItems.length; j++) {
                this.total = this.total + (this.ordersList[i].availableItems[j].quantity * this.ordersList[i].availableItems[j].price);
            }
        }
        this.total = this.total.toFixed(this.hotelProvider.objHotel.currency.decimales);
        this.nonEmptyOrder = this.roomsProvider.objRoomService.cartTotal > 0 ? true : false; //to set if cart empty after delete operation or not
    };
    //function to delete items
    ConfirmOrderPage.prototype.fnDeleteOrder = function (itemId, availableItemId) {
        if (itemId > 0 && availableItemId > 0) {
            this.roomsProvider.objRoomService.cartTotal = this.roomsProvider.objRoomService.cartTotal - this.ordersList.filter(function (x) { return x.id == itemId; })[0].availableItems.filter(function (y) { return y.id == availableItemId; })[0].quantity;
            this.ordersList.filter(function (x) { return x.id == itemId; })[0].availableItems.filter(function (y) { return y.id == availableItemId; })[0].quantity = 0;
            this.ordersList.filter(function (x) { return x.id == itemId; })[0].isSelected = false;
            this.roomsProvider.objRoomService.serviceItemsList.filter(function (x) { return x.id == availableItemId; })[0].quantity = 0;
        }
        else {
            for (var i = 0; i < this.ordersList.length; i++) {
                for (var j = 0; j < this.ordersList[i].availableItems.length; j++) {
                    this.ordersList[i].availableItems[j].quantity = 0;
                    this.ordersList[i].isSelected = false;
                }
            }
            for (var i = 0; i < this.roomsProvider.objRoomService.serviceItemsList.length; i++) {
                this.roomsProvider.objRoomService.serviceItemsList[i].quantity = 0;
            }
            this.roomsProvider.objRoomService.cartTotal = 0;
        }
        this.fnCalculateCartTotal();
    };
    //function to go to next page
    ConfirmOrderPage.prototype.fnContinue = function () {
        var _this = this;
        this.roomsProvider.objRoomService.currentOrderList = this.ordersList;
        // check reservation is in a valid date range
        var createdDate = this.reservationProvider.objReservation.createdDate, noOfNightsStay = this.reservationProvider.objReservation.nights, noStayGuest = this.reservationProvider.objReservation.noStayGuest;
        var dateRange = this.toolsProvider.getValidReservationDateRange(createdDate, noOfNightsStay, noStayGuest);
        if (this.roomsProvider.objRoomService.cartTotal > 0) {
            if (dateRange == null) {
                // error message translate
                var msg = this.toolsProvider.fnLanguageTranslate(["common.error", "view.reservation.error.dateRange", "buttons.ok"]); //  message translation
                msg.subscribe(function (value) {
                    var alertnew = _this.alertCtrl.create({
                        title: value['common.error'],
                        message: value["view.reservation.error.dateRange"],
                        cssClass: 'cls_alrt',
                        buttons: [
                            {
                                text: value['buttons.ok'],
                                role: 'cancel'
                            }
                        ]
                    });
                    alertnew.present();
                    setTimeout(function () { alertnew.dismiss(); }, 5000);
                });
            }
            else {
                this.navCtrl.push("RoomServiceBookingPage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
            }
        }
    };
    //function to go to previous page
    ConfirmOrderPage.prototype.fnBack = function () {
        this.roomsProvider.objRoomService.currentOrderList = this.ordersList;
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    ConfirmOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-order',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/confirm-order/confirm-order.html"*/'<ion-header class="header_menu nobrdr_menu_hdr">\n  <ion-navbar>\n    <ion-title>{{\'view.servicioHabitacion.title\' | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr" *ngIf="showBackButton">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle hidden="false" class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="service_bsc_info" no-bounce>\n  <ion-item *ngIf="nonEmptyOrder" class="order_confirmation_hdr">\n    <h2 class="ordr_cnfrmtnhdr_hdg">{{\'view.servicioHabitacion.carrito.check\' | translate}}</h2>\n    <span class="curnt_ordr_strip">{{\'view.servicioHabitacion.carrito.order\' | translate}}\n      <button (click)="fnDeleteOrder()" class="crnt_ordr_dlt">\n        <i class="icon-bin2"></i>\n      </button>\n    </span>\n  </ion-item>\n  <div class *ngIf="nonEmptyOrder" class="cnfrm_ordrlst_wrpr">\n    <div *ngFor="let item of ordersList" class="cnfrm_ordrlsts">\n      <ng-container *ngFor="let data of item.availableItems">\n        <div *ngIf="data.quantity>0" class="cnfrm_ordrlst_sub">\n          <button (click)="fnDeleteOrder(item.id,data.id)" class="dlt_ordrs"><i class="icon-Cancel"></i></button>\n          <span class="order_name">{{data.nombre}}</span>\n          <span class="order_details">{{data.quantity}} X {{data.price}} {{currencySymbol}}</span>\n        </div>\n      </ng-container>\n    </div>\n    <ion-item *ngIf="nonEmptyOrder" class="confrm_orderttl">\n        <label class="ttl_lbl">{{\'view.servicioHabitacion.carrito.total\' | translate}}</label>\n        <label>{{total}} {{currencySymbol}}</label>\n      </ion-item>\n  </div>\n\n  <div *ngIf="!nonEmptyOrder" class="empty_order">{{\'view.servicioHabitacion.carrito.empty\' | translate}}</div>\n  <ion-item class="footerfixed_btn">\n    <button class="cmn_btn" ion-button (click)="fnContinue()">{{"common.continue" | translate}}</button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/confirm-order/confirm-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rooms_service_rooms_service__["a" /* RoomsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__["a" /* NotificationProvider */]])
    ], ConfirmOrderPage);
    return ConfirmOrderPage;
}());

//# sourceMappingURL=confirm-order.js.map

/***/ })

});
//# sourceMappingURL=27.js.map