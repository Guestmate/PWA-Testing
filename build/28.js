webpackJsonp([28],{

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPaymentPageModule", function() { return CheckoutPaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_payment__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutPaymentPageModule = /** @class */ (function () {
    function CheckoutPaymentPageModule() {
    }
    CheckoutPaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout_payment__["a" /* CheckoutPaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout_payment__["a" /* CheckoutPaymentPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CheckoutPaymentPageModule);
    return CheckoutPaymentPageModule;
}());

//# sourceMappingURL=checkout-payment.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_stripe__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_checkin_service_checkin_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_checkout_service_checkout_service__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_service_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_notification_notification__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CheckoutPaymentPage = /** @class */ (function () {
    function CheckoutPaymentPage(navCtrl, navParams, formBuilder, stripeService, toolsProvider, alertCtrl, loadingCtrl, checkinProvider, checkoutProvider, nativeStorage, reservation, commonProvider, notificationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.stripeService = stripeService;
        this.toolsProvider = toolsProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.checkinProvider = checkinProvider;
        this.checkoutProvider = checkoutProvider;
        this.nativeStorage = nativeStorage;
        this.reservation = reservation;
        this.commonProvider = commonProvider;
        this.notificationProvider = notificationProvider;
        this.isCheckedAgree = false;
        this.buttonEnable = true;
        this.paymentDataForm = this.formBuilder.group({
            'cardHolder': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
        this.getStoredCheckinDetails();
    }
    CheckoutPaymentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CheckoutPaymentPage');
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
                _this.card.mount('#checkoutcard-element');
            }
        });
        this.fnCheckPreEnteredFormData();
    };
    //function to execute on button 'continue' click
    CheckoutPaymentPage.prototype.fnContinue = function () {
        var _this = this;
        //checking card holder validation at the success of card number validation
        if (this.paymentDataForm.controls["cardHolder"].value == null ||
            this.paymentDataForm.controls["cardHolder"].value == "") {
            var msg = this.toolsProvider.fnLanguageTranslate(["common.error", "view.reservation.label.cardHolderEmpty", "buttons.ok"]); // translate of error message
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
        else if (this.isCheckedAgree == false) {
            var msg = this.toolsProvider.fnLanguageTranslate(["common.error", "view.checkin.error.mustAgree", "buttons.ok"]); // translate of error message
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
        else if (this.card != null && this.card != undefined) {
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
                    _this.checkoutProvider.objCheckOut.Token = result.token.id;
                    _this.checkoutProvider.objCheckOut.cardExpirationDate = result.token.card.exp_year.toString() + '-' + result.token.card.exp_month.toString();
                    _this.checkoutProvider.objCheckOut.cardHolder = _this.paymentDataForm.controls.cardHolder.value;
                    _this.checkoutProvider.objCheckOut.cardNumber = null; //this.paymentDataForm.controls.cardNumber.value;
                    _this.checkoutProvider.objCheckOut.cvv = null; //this.paymentDataForm.controls.cvv.value;
                    _this.checkoutProvider.objCheckOut.postalCode = result.token.card.address_zip;
                    _this.checkoutProvider.objCheckOut.guestData = _this.storedCheckinDetails != null ? _this.storedCheckinDetails.find(function (item) { return item.reservationID === _this.reservation.objReservation.reservationId; }).guests : null;
                    var msg_1 = _this.toolsProvider.fnLanguageTranslate(["common.requestReceived", "view.checkout.success", "common.connectionError", "buttons.ok"]); //  message translation
                    _this.checkoutProvider.sendCheckOutData().subscribe(function (data) {
                        _this.loading.dismiss();
                        if (data.success) {
                            _this.commonProvider.objFormData.checkout = [];
                            _this.commonProvider.objFormData.checkout.checkoutCompleted = true;
                            _this.reservation.objReservation.alreadyVerifiedCheckOut = true;
                            _this.updateLocalStorage();
                            _this.buttonEnable = false;
                            msg_1.subscribe(function (value) {
                                var alertnew = _this.alertCtrl.create({
                                    title: value['common.requestReceived'],
                                    message: value["view.checkout.success"],
                                    cssClass: 'cls_alrt',
                                    buttons: [
                                        {
                                            text: value['buttons.ok'],
                                            role: 'cancel',
                                            handler: function (data) {
                                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
                                            }
                                        }
                                    ]
                                });
                                alertnew.present();
                                setTimeout(function () {
                                    alertnew.dismiss();
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
                                }, 5000);
                            });
                        }
                        else {
                            // error message translate
                            msg_1.subscribe(function (value) {
                                var alertnew = _this.alertCtrl.create({
                                    title: value['common.error'],
                                    message: value["common.connectionError"],
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
                    });
                }
            });
        }
    };
    CheckoutPaymentPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    //function to handle checking of radio button
    CheckoutPaymentPage.prototype.fnOnRadioSelectAgree = function ($event) {
        this.isCheckedAgree = !this.isCheckedAgree;
    };
    //Navigates to the previous page
    CheckoutPaymentPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    CheckoutPaymentPage.prototype.getStoredCheckinDetails = function () {
        var _this = this;
        this.nativeStorage.getItem('checkinDetails').then(function (Data) {
            if (Data && Data != undefined) {
                _this.storedCheckinDetails = Data;
            }
        });
    };
    CheckoutPaymentPage.prototype.updateLocalStorage = function () {
        var _this = this;
        var tempData;
        this.nativeStorage.getItem('reservationData').then(function (reservation) {
            if (reservation != undefined) {
                tempData = reservation;
                tempData.response.huespedYaCheckOutRealizado = true;
                _this.nativeStorage.setItem('reservationData', tempData)
                    .then(function () { return console.log('Local storage updated.'); }, function (error) { return console.error('Error storing item', error); });
            }
        });
    };
    CheckoutPaymentPage.prototype.ionViewWillLeave = function () {
        if (this.commonProvider.objFormData && this.commonProvider.objFormData.checkout.checkoutCompleted != true) {
            this.commonProvider.objFormData.checkout.cardHolder = this.paymentDataForm.controls['cardHolder'] && this.paymentDataForm.get('cardHolder').value;
            this.commonProvider.objFormData.checkout.isCheckedAgree = this.isCheckedAgree;
            this.commonProvider.objFormData.checkout.checkoutCompleted = false;
        }
    };
    // fetch pre-entered data into fields from model
    CheckoutPaymentPage.prototype.fnCheckPreEnteredFormData = function () {
        this.commonProvider.objFormData.checkout.checkoutCompleted = false;
        var cardHolder = (this.commonProvider.objFormData.checkout.cardHolder) ? this.commonProvider.objFormData.checkout.cardHolder : this.paymentDataForm.controls['cardHolder'].value;
        var isChecked = (this.commonProvider.objFormData.checkout.isCheckedAgree) ? this.commonProvider.objFormData.checkout.isCheckedAgree : this.isCheckedAgree;
        this.paymentDataForm.controls['cardHolder'] && this.paymentDataForm.get("cardHolder").setValue(cardHolder);
        this.isCheckedAgree = isChecked;
    };
    CheckoutPaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout-payment',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/checkout-payment/checkout-payment.html"*/'<ion-header class="header_menu">\n  <ion-navbar>\n    <ion-title>{{"view.checkout.title" | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="homecontent" class="home_container" no-bounce>\n  <form [formGroup]="paymentDataForm" class="payment_data_form">\n    <div class="servc_bk_title reqst_ckin">\n      <ion-item class="info_hdg">\n        <span>{{\'view.checkin.subtitle.payment\' | translate}}</span>\n        <ul class="chckin_navbtn">\n          <li></li>\n          <li class="active"></li>\n        </ul>\n      </ion-item>\n      <div class="reqst_ckin_inr">\n        <ion-item class="card_holder">\n          <ion-label stacked>{{"view.reservation.label.cardHolder.title" | translate}}</ion-label>\n          <ion-input type="text" formControlName="cardHolder"></ion-input>\n        </ion-item>\n\n        <span class="card_holder_wrpr">\n          <ion-label stacked class="card_holder">{{"view.checkin.label.numeroTarjetaCredito.title" | translate}}</ion-label>\n        </span>\n        <div id="checkoutcard-element" class="field"></div>\n        <span class="ser_pci ">\n          <img src="assets/imgs/pci_compliant.png">\n          <ion-label>{{"view.reservation.label.pciCompliant" | translate}}</ion-label>\n        </span>\n\n        <ion-item class="chckoutchange_data">\n          <p>{{"view.checkout.label.signature.title" | translate}}</p>\n        </ion-item>\n\n        <ion-list class="rdo_btn">\n          <ion-radio checked={{isCheckedAgree}} (ionSelect)="fnOnRadioSelectAgree($event)" item-left></ion-radio>\n        </ion-list>\n        <ion-item class="rdo_txt">\n          <P>{{"view.checkin.label.agree.title" | translate}}</P>\n        </ion-item>\n      </div>\n    </div>\n    <ion-item class="footerfixed_btn">\n      <button class="cmn_btn" (click)="fnContinue()" [disabled]="!buttonEnable">{{"view.checkout.request" | translate}}</button>\n    </ion-item>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/checkout-payment/checkout-payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_stripe__["b" /* StripeService */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_checkout_service_checkout_service__["a" /* CheckoutServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_8__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_common_service_common_service__["a" /* CommonServiceProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_notification_notification__["a" /* NotificationProvider */]])
    ], CheckoutPaymentPage);
    return CheckoutPaymentPage;
}());

//# sourceMappingURL=checkout-payment.js.map

/***/ })

});
//# sourceMappingURL=28.js.map