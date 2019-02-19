webpackJsonp([9],{

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomUpgradePageModule", function() { return RoomUpgradePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_upgrade__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RoomUpgradePageModule = /** @class */ (function () {
    function RoomUpgradePageModule() {
    }
    RoomUpgradePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__room_upgrade__["a" /* RoomUpgradePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__room_upgrade__["a" /* RoomUpgradePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], RoomUpgradePageModule);
    return RoomUpgradePageModule;
}());

//# sourceMappingURL=room-upgrade.module.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomUpgradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_upgrade_room_service_upgrade_room_service__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_ancillary_service_ancillary_service__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_checkin_service_checkin_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_notification_notification__ = __webpack_require__(44);
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
 * Generated class for the RoomUpgradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomUpgradePage = /** @class */ (function () {
    function RoomUpgradePage(navCtrl, navParams, formBuilder, toolsProvider, sanitized, hotelProvider, checkinProvider, upgradeRoomProvider, serviceProvider, loadingCtrl, reservationProvider, notificationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toolsProvider = toolsProvider;
        this.sanitized = sanitized;
        this.hotelProvider = hotelProvider;
        this.checkinProvider = checkinProvider;
        this.upgradeRoomProvider = upgradeRoomProvider;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.reservationProvider = reservationProvider;
        this.notificationProvider = notificationProvider;
        this.currencySymbol = this.hotelProvider.objHotel.currency.signo;
        this.roomTitleText = '';
        this.imagePath = '';
        this.roomName = '';
        this.roomDescription = '';
        this.serviceList = [];
        this.roomUpgradeForm = this.formBuilder.group({
            rdoUpgrade: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
    }
    RoomUpgradePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomUpgradePage');
        //language translate
        var defaultTextTranslate = this.toolsProvider.fnLanguageTranslate(["view.checkin.template.acceptUpgrade", "view.checkin.label.whyThisRoom.title"]);
        var defaultText = '';
        defaultTextTranslate.subscribe(function (value) {
            defaultText = value;
        });
        //replace variable names by actual price in default Text
        this.acceptUpgradeText = defaultText['view.checkin.template.acceptUpgrade'] != "" ? defaultText['view.checkin.template.acceptUpgrade'].replace('{precio}', this.upgradeRoomProvider.objUpgradeRoom.price).replace('{moneda}', this.currencySymbol) : "";
        this.acceptUpgradeText = this.sanitized.bypassSecurityTrustHtml(this.acceptUpgradeText);
        // bypass HTML tags 
        this.roomTitleText = this.sanitized.bypassSecurityTrustHtml(defaultText['view.checkin.label.whyThisRoom.title']);
        this.roomName = this.upgradeRoomProvider.objUpgradeRoom.name;
        this.imagePath = this.upgradeRoomProvider.objUpgradeRoom.photo;
        this.roomDescription = this.upgradeRoomProvider.objUpgradeRoom.description;
        var rdoUpgradeValue = (this.upgradeRoomProvider.objUpgradeRoom.preEnteredUpgrade != '') ? this.upgradeRoomProvider.objUpgradeRoom.preEnteredUpgrade : 'rejectUpgrade';
        this.roomUpgradeForm.get('rdoUpgrade').setValue(rdoUpgradeValue);
    };
    RoomUpgradePage.prototype.ionViewWillLeave = function () {
        this.upgradeRoomProvider.objUpgradeRoom.preEnteredUpgrade = this.roomUpgradeForm.get('rdoUpgrade').value;
    };
    RoomUpgradePage.prototype.fnContinueAncillary = function () {
        this.checkinProvider.objCheckin.ancillarySummaryList = [];
        this.serviceProvider.objUpgradeService.ancillaryList = [];
        //if room upgrade selected, data updated into ancillary summary list to display in checkin summary page
        var roomChoice = this.roomUpgradeForm.get('rdoUpgrade').value;
        if (roomChoice == 'acceptUpgrade') {
            var roomArray = [];
            roomArray.type = 'room';
            roomArray.roomName = this.upgradeRoomProvider.objUpgradeRoom.name;
            roomArray.price = this.upgradeRoomProvider.objUpgradeRoom.price;
            roomArray.currency = this.currencySymbol;
            roomArray.roomId = this.upgradeRoomProvider.objUpgradeRoom.roomUpgradeId;
            roomArray.nights = this.reservationProvider.objReservation.nights;
            roomArray.noOfPersons = this.reservationProvider.objReservation.noOfPersons;
            this.checkinProvider.objCheckin.ancillarySummaryList.push(roomArray);
        }
        this.navCtrl.push("ServiceUpgradePage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
    };
    RoomUpgradePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    //function to go to previous page
    RoomUpgradePage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    RoomUpgradePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-room-upgrade',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/room-upgrade/room-upgrade.html"*/'<ion-header class="header_menu">\n  <ion-navbar>\n    <ion-title>{{"view.checkin.title" | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle hidden="false" class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="homecontent" class="home_container" no-bounce>\n  <div class="serv_upgrade">\n\n    <form [formGroup]="roomUpgradeForm" class="service_upgrade_frm">\n      <div class="service_upgrade_frm_inr">\n        <ion-item class="info_hdg">\n          <span>{{\'view.checkin.subtitle.roomUpgrade\' | translate}}</span>\n          <ul class="chckin_navbtn">\n            <li></li>\n            <li></li>\n            <li></li>\n            <li class="active"></li>\n            <li></li>\n          </ul>\n        </ion-item>\n        <ion-item class="service_upgrade_brn">\n          <ion-label>\n            <div class="service_upgrade_brn_inr" [style.backgroundImage]="\'url(\' + imagePath + \')\'">\n              <p class="slider_caption bnr_cptn"> {{roomName}}</p>\n            </div>\n          </ion-label>\n        </ion-item>\n\n\n        <div class="hdg_txt">\n          <h3 [innerHtml]="roomTitleText" class="sub_hdng">\n          </h3>\n          <p class="cmn_para">{{roomDescription}}\n          </p>\n        </div>\n        <ion-list radio-group formControlName="rdoUpgrade" class="radio_list">\n          <div class="radio_wrpr">\n            <ion-item class="rdo_btn">\n              <ion-radio value="acceptUpgrade" class="radio_btn">\n              </ion-radio>\n            </ion-item>\n            <ion-item class="rdo_txt">\n              <p [innerHtml]="acceptUpgradeText">\n              </p>\n            </ion-item>\n          </div>\n          <div class="radio_wrpr">\n            <ion-item class="rdo_btn">\n              <ion-radio value="rejectUpgrade" class="radio_btn">\n              </ion-radio>\n            </ion-item>\n            <ion-item class="rdo_txt">\n              <p>\n                {{\'view.checkin.label.rejectUpgrade.title\' | translate}}\n              </p>\n            </ion-item>\n          </div>\n        </ion-list>\n        <p class="cntr_txt">{{\'view.checkin.label.available.title\' | translate}}</p>\n      </div>\n\n      <ion-item class="btn_wrpr">\n        <button (click)="fnContinueAncillary()" class="cmn_btn">{{"common.continue" | translate}}</button>\n      </ion-item>\n\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/room-upgrade/room-upgrade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_5__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_upgrade_room_service_upgrade_room_service__["a" /* UpgradeRoomServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_ancillary_service_ancillary_service__["a" /* AncillaryServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_notification_notification__["a" /* NotificationProvider */]])
    ], RoomUpgradePage);
    return RoomUpgradePage;
}());

//# sourceMappingURL=room-upgrade.js.map

/***/ })

});
//# sourceMappingURL=9.js.map