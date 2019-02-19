webpackJsonp([22],{

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDataPageModule", function() { return PaymentDataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_data__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PaymentDataPageModule = /** @class */ (function () {
    function PaymentDataPageModule() {
    }
    PaymentDataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment_data__["a" /* PaymentDataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_data__["a" /* PaymentDataPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], PaymentDataPageModule);
    return PaymentDataPageModule;
}());

//# sourceMappingURL=payment-data.module.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_stripe__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_checkin_service_checkin_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_upgrade_room_service_upgrade_room_service__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_upgrade_room_model__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_ancillary_service_ancillary_service__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_notification_notification__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_common_service_common_service__ = __webpack_require__(58);
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
 * Generated class for the PaymentDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentDataPage = /** @class */ (function () {
    function PaymentDataPage(navCtrl, navParams, loadingCtrl, alertCtrl, formBuilder, toolsProvider, stripeService, checkinProvider, hotelProvider, upgradeRoomServiceProvider, serviceProvider, notificationProvider, commonProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.toolsProvider = toolsProvider;
        this.stripeService = stripeService;
        this.checkinProvider = checkinProvider;
        this.hotelProvider = hotelProvider;
        this.upgradeRoomServiceProvider = upgradeRoomServiceProvider;
        this.serviceProvider = serviceProvider;
        this.notificationProvider = notificationProvider;
        this.commonProvider = commonProvider;
        this.isCheckedAgree = false;
        this.isChecked = true;
        this.upgradeRoomList = [];
        this.serviceList = [];
        this.paymentDataForm = this.formBuilder.group({
            'cardHolder': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
    }
    PaymentDataPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PaymentDataPage');
        this.calculateMaxDate();
        this.stripeService.elements()
            .subscribe(function (elements) {
            _this.elements = elements;
            // Only mount the element the first time
            if (!_this.card) {
                _this.card = _this.elements.create('card', {
                    style: {
                        base: {
                            iconColor: '#666EE8',
                            color: '#31325F',
                            lineHeight: '40px',
                            fontWeight: 300,
                            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                            fontSize: '15px',
                            '::placeholder': {
                                color: '#CFD7E0'
                            }
                        }
                    }
                });
                _this.card.mount('#card-element');
            }
        });
        this.fnCheckPreEnteredFormData();
    };
    //function to handle checking of radio button 
    PaymentDataPage.prototype.fnOnRadioSelect = function ($event) {
        this.isChecked = !this.isChecked;
    };
    //function to handle checking of radio button
    PaymentDataPage.prototype.fnOnRadioSelectAgree = function ($event) {
        this.isCheckedAgree = !this.isCheckedAgree;
    };
    //function to calculate max date 
    PaymentDataPage.prototype.calculateMaxDate = function () {
        this.maxDate = ((new Date()).getFullYear() + 20) + '-12-30';
    };
    PaymentDataPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    //function to execute on button 'continue' click
    PaymentDataPage.prototype.fnContinue = function () {
        var _this = this;
        // service call
        if (this.card != null && this.card != undefined) {
            this.showLoading();
            var name_1 = this.paymentDataForm.get('cardHolder').value;
            this.stripeService.createToken(this.card, { name: name_1 }).subscribe(function (result) {
                if (result.error) {
                    var errorMessages = _this.toolsProvider.fnLanguageTranslate([result.error.message, "common.error", "buttons.ok"]);
                    _this.loading.dismiss();
                    // Error creating the token
                    errorMessages.subscribe(function (value) {
                        var alerterror = _this.alertCtrl.create({
                            title: value['common.error'],
                            message: value[result.error.message],
                            cssClass: 'cls_alrt',
                            buttons: [
                                {
                                    text: value['buttons.ok'],
                                    role: 'cancel'
                                }
                            ]
                        });
                        alerterror.present();
                        setTimeout(function () { alerterror.dismiss(); }, 5000);
                    });
                }
                else if (result.token) {
                    _this.checkinProvider.objCheckin.token = result.token.id;
                    _this.checkinProvider.objCheckin.cardExpirationDate = result.token.card.exp_year.toString() + '-' + result.token.card.exp_month.toString();
                    //checking card holder validation at the success of card number validation
                    if (_this.paymentDataForm.controls["cardHolder"].value == null ||
                        _this.paymentDataForm.controls["cardHolder"].value == "") {
                        _this.loading.dismiss();
                        var msg = _this.toolsProvider.fnLanguageTranslate(["common.error", "view.reservation.label.cardHolderEmpty", "buttons.ok"]); // translate of error message
                        msg.subscribe(function (value) {
                            var alertnew = _this.alertCtrl.create({
                                title: value['common.error'],
                                message: value["view.reservation.label.cardHolderEmpty"],
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
                    else if (_this.isCheckedAgree == false) {
                        _this.loading.dismiss();
                        var msg = _this.toolsProvider.fnLanguageTranslate(["common.error", "view.checkin.error.mustAgree", "buttons.ok"]); // translate of error message
                        msg.subscribe(function (value) {
                            var alertnew = _this.alertCtrl.create({
                                title: value['common.error'],
                                message: value["view.checkin.error.mustAgree"],
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
                        //service call to get Upgrade Room Information
                        _this.fnUpgradeRoomInfo();
                    }
                }
            });
        }
    };
    //service call
    PaymentDataPage.prototype.fnUpgradeRoomInfo = function () {
        var _this = this;
        this.checkinProvider.objCheckin.agreeCheckboxField = this.isCheckedAgree;
        this.checkinProvider.objCheckin.assignCreditCardToTheRooms = this.isChecked;
        this.checkinProvider.objCheckin.cardHolder = this.paymentDataForm.controls["cardHolder"].value;
        var preEnteredUpgrade = '';
        if (this.upgradeRoomServiceProvider.objUpgradeRoom && this.upgradeRoomServiceProvider.objUpgradeRoom.preEnteredUpgrade) {
            preEnteredUpgrade = this.upgradeRoomServiceProvider.objUpgradeRoom.preEnteredUpgrade;
        }
        this.upgradeRoomServiceProvider.sendUpgradeRoomInfo().subscribe(function (data) {
            _this.loading.dismiss();
            if (data.success == true && (data.response.length > 0)) {
                _this.upgradeRoomServiceProvider.objUpgradeRoom = new __WEBPACK_IMPORTED_MODULE_8__model_upgrade_room_model__["a" /* UpgradeRoomData */]();
                _this.upgradeRoomServiceProvider.objUpgradeRoom.name = data.response[0].nombre;
                var imagePath = _this.toolsProvider.getImagePath(data.response[0].foto.id);
                _this.upgradeRoomServiceProvider.objUpgradeRoom.photo = imagePath;
                _this.upgradeRoomServiceProvider.objUpgradeRoom.description = data.response[0].descripcion;
                _this.upgradeRoomServiceProvider.objUpgradeRoom.price = data.response[0].precio;
                _this.upgradeRoomServiceProvider.objUpgradeRoom.roomUpgradeId = data.response[0].id;
                _this.upgradeRoomServiceProvider.objUpgradeRoom.preEnteredUpgrade = preEnteredUpgrade;
                //submit form and redirection to next form at validation success
                _this.navCtrl.push("RoomUpgradePage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
            }
            else if (data.response.length == 0) {
                _this.navCtrl.push("ServiceUpgradePage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
            }
        });
        (function (error) {
            _this.loading.dismiss();
        });
    };
    //function to go to previous page
    PaymentDataPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    // store entered data into model before leaving page
    PaymentDataPage.prototype.ionViewWillLeave = function () {
        if ((this.commonProvider.objFormData.checkin) && !this.commonProvider.objFormData.checkin.checkinCompleted) {
            this.commonProvider.objFormData.checkin.cardHolder = this.paymentDataForm.controls['cardHolder'] && this.paymentDataForm.get('cardHolder').value ? this.paymentDataForm.get('cardHolder').value : '';
            this.commonProvider.objFormData.checkin.assignCard = this.isChecked;
            this.commonProvider.objFormData.checkin.agreeTerms = this.isCheckedAgree;
            this.checkinProvider.storeCheckinData(this.commonProvider.objFormData.checkin);
        }
    };
    // fetch pre-entered data into fields from model
    PaymentDataPage.prototype.fnCheckPreEnteredFormData = function () {
        if (this.commonProvider.objFormData && this.commonProvider.objFormData.checkin) {
            this.paymentDataForm.get("cardHolder").setValue(this.commonProvider.objFormData.checkin.cardHolder);
            this.isChecked = this.commonProvider.objFormData.checkin.assignCard;
            this.isCheckedAgree = this.commonProvider.objFormData.checkin.agreeTerms;
        }
    };
    PaymentDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment-data',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/payment-data/payment-data.html"*/'<ion-header class="header_menu">\n  <ion-navbar>\n    <ion-title>{{"view.checkin.title" | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="homecontent" class="home_container" no-bounce>\n  <form [formGroup]="paymentDataForm" class="payment_data_form">\n    <div class="servc_bk_title reqst_ckin">\n      <ion-item class="info_hdg"><span>{{\'view.checkin.subtitle.payment\' | translate}}</span>\n        <ul class="chckin_navbtn">\n            <li></li>\n            <li></li>\n            <li class="active"></li>\n            <li></li>\n            <li></li>\n          </ul>\n      </ion-item>\n\n      <div class="reqst_ckin_inr">\n        <ion-item class="card_holder">\n          <ion-label stacked>{{"view.reservation.label.cardHolder.title" | translate}}</ion-label>\n          <ion-input type="text" formControlName="cardHolder"></ion-input>\n        </ion-item>\n\n        <span class="card_holder_wrpr">\n          <ion-label stacked class="card_holder">{{"view.checkin.label.numeroTarjetaCredito.title" | translate}}</ion-label>\n        </span>\n        <div id="card-element" class="field"></div>\n        <span class="ser_pci">\n          <img src="assets/imgs/pci_compliant.png">\n          <ion-label>{{"view.reservation.label.pciCompliant" | translate}}</ion-label>\n        </span>\n\n        <ion-list class="rdo_btn">\n          <ion-radio checked={{isChecked}} (ionSelect)="fnOnRadioSelect($event)"></ion-radio>\n        </ion-list>\n        <ion-item class="rdo_txt">\n          <p>{{"view.checkin.label.asignarTarjetaCreditoATodasLasHabitaciones.title" | translate}}</p>\n        </ion-item>\n        <ion-item class="change_data">\n          <p>{{"view.checkin.label.changes.title" | translate}}</p>\n        </ion-item>\n\n        <ion-list class="rdo_btn">\n          <ion-radio checked={{isCheckedAgree}} (ionSelect)="fnOnRadioSelectAgree($event)" item-left></ion-radio>\n        </ion-list>\n        <ion-item class="rdo_txt agree">\n          <P>{{"view.checkin.label.agree.title" | translate}}</P>\n        </ion-item>\n      </div>\n    </div>\n    <ion-item class="footer_btn">\n      <button class="cmn_btn" (click)="fnContinue()">{{"common.continue" | translate}}</button>\n    </ion-item>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/payment-data/payment-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4_ngx_stripe__["b" /* StripeService */], __WEBPACK_IMPORTED_MODULE_5__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_upgrade_room_service_upgrade_room_service__["a" /* UpgradeRoomServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_ancillary_service_ancillary_service__["a" /* AncillaryServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_common_service_common_service__["a" /* CommonServiceProvider */]])
    ], PaymentDataPage);
    return PaymentDataPage;
}());

//# sourceMappingURL=payment-data.js.map

/***/ })

});
//# sourceMappingURL=22.js.map