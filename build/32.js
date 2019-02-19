webpackJsonp([32],{

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPaymentPageModule", function() { return ActivityPaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_payment__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ActivityPaymentPageModule = /** @class */ (function () {
    function ActivityPaymentPageModule() {
    }
    ActivityPaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activity_payment__["a" /* ActivityPaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity_payment__["a" /* ActivityPaymentPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ActivityPaymentPageModule);
    return ActivityPaymentPageModule;
}());

//# sourceMappingURL=activity-payment.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_activity_service_activity_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_stripe__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_service_common_service__ = __webpack_require__(58);
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
 * Generated class for the ActivityPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivityPaymentPage = /** @class */ (function () {
    function ActivityPaymentPage(navCtrl, navParams, formBuilder, toolsProvider, sanitized, activityProvider, reservationProvider, loadingCtrl, stripeService, deviceProvider, alertCtrl, commonProvider, cdRef, notificationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toolsProvider = toolsProvider;
        this.sanitized = sanitized;
        this.activityProvider = activityProvider;
        this.reservationProvider = reservationProvider;
        this.loadingCtrl = loadingCtrl;
        this.stripeService = stripeService;
        this.deviceProvider = deviceProvider;
        this.alertCtrl = alertCtrl;
        this.commonProvider = commonProvider;
        this.cdRef = cdRef;
        this.notificationProvider = notificationProvider;
        this.chargeText = false; // for payment type
        this.isChecked = false; // accept terms radio check
        this.lang = this.deviceProvider.preferredLanguage;
        this.hideBackButton = false;
        this.elementsOptions = {
            locale: this.lang
        };
        this.paymentForm = formBuilder.group({
            'cardHolder': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            'acceptTermsCheck': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
    }
    ActivityPaymentPage.prototype.ionViewWillEnter = function () {
        this.hideBackButton = false;
    };
    ActivityPaymentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showLoading();
        var me = this;
        this.item = this.navParams.get('item'); // gets item 
        this.hideBackButton = false;
        // payment type check
        if (this.item.paymentType == "GUARANTEE") {
            this.chargeText = false;
        }
        else {
            this.chargeText = true;
        }
        // stripe implementation
        this.stripeService.elements(this.elementsOptions)
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
        var reservationId = this.reservationProvider.objReservation.reservationId; //reservation id
        //translate cancellation text and accept terms
        var res = this.toolsProvider.fnLanguageTranslate(['view.reservation.label.CancellationTermsTitle', 'view.reservation.label.acceptTerms']);
        res.subscribe(function (value) {
            _this.cancellationTitle = _this.sanitized.bypassSecurityTrustHtml(value['view.reservation.label.CancellationTermsTitle']);
            _this.acceptTerms = _this.sanitized.bypassSecurityTrustHtml(value['view.reservation.label.acceptTerms']);
            _this.cdRef.detectChanges(); // Checks the view and its children.
            /* click binding to termsofservice span element and redirection */
            var termsElmnt = document.querySelector('ion-nav').querySelectorAll("#termsOfService");
            for (var i = 0; i < termsElmnt.length; i++) {
                if (termsElmnt[i]) {
                    termsElmnt[i].addEventListener('click', function (e) {
                        me.navCtrl.push("TermsAndConditionsPage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
                    });
                }
            }
            // get cancellation policy text
            _this.commonProvider.getCancellationPolicy(reservationId).subscribe(function (data) {
                _this.loading.dismiss();
                if (data.success == true) {
                    _this.cancellationText = data.response;
                }
            });
        });
        this.fnCheckPreEnteredFormData();
    };
    // store entered data into model before leaving page
    ActivityPaymentPage.prototype.ionViewWillLeave = function () {
        if (this.commonProvider.objFormData.activity.bookingCompleted != true) {
            this.commonProvider.objFormData.activity.cardHolder = this.paymentForm.get('cardHolder').value;
            this.commonProvider.objFormData.activity.agreeTerms = this.isChecked;
        }
        this.hideBackButton = true;
    };
    // fetch pre-entered data into fields from model
    ActivityPaymentPage.prototype.fnCheckPreEnteredFormData = function () {
        if (this.commonProvider.objFormData && this.commonProvider.objFormData.activity) {
            this.commonProvider.objFormData.activity.bookingCompleted = false;
            if (this.commonProvider.objFormData.activity.id == this.item.id) {
                this.paymentForm.get("cardHolder").setValue(this.commonProvider.objFormData.activity.cardHolder);
                this.isChecked = this.commonProvider.objFormData.activity.agreeTerms;
            }
        }
    };
    //Loader
    ActivityPaymentPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    ActivityPaymentPage.prototype.fnSubmit = function () {
        var _this = this;
        if (this.paymentForm.controls['cardHolder'].hasError('required')) {
            var validateMessage1 = this.toolsProvider.fnLanguageTranslate(['view.reservation.label.cardHolderEmpty', "common.error", "buttons.ok"]);
            validateMessage1.subscribe(function (value) {
                var alertnew1 = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: value['view.reservation.label.cardHolderEmpty'],
                    cssClass: 'cls_alrt',
                    buttons: [
                        {
                            text: value['buttons.ok'],
                            role: 'cancel'
                        }
                    ]
                });
                alertnew1.present();
                setTimeout(function () { alertnew1.dismiss(); }, 5000);
            });
        }
        else if (this.isChecked == false) {
            var validateMessage2 = this.toolsProvider.fnLanguageTranslate(['view.reservation.label.mustAgreeTerms', "common.error", "buttons.ok"]);
            validateMessage2.subscribe(function (value) {
                var alertnew2 = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: value['view.reservation.label.mustAgreeTerms'],
                    cssClass: 'cls_alrt',
                    buttons: [
                        {
                            text: value['buttons.ok'],
                            role: 'cancel'
                        }
                    ]
                });
                alertnew2.present();
                setTimeout(function () { alertnew2.dismiss(); }, 5000);
            });
        }
        else {
            // service call
            if (this.card != null && this.card != undefined) {
                this.showLoading();
                //create stripe token
                this.commonProvider.objServiceForm.cardHolder = this.paymentForm.get('cardHolder').value;
                var name_1 = this.paymentForm.get('cardHolder').value;
                this.stripeService.createToken(this.card, { name: name_1 }).subscribe(function (result) {
                    if (result.token) {
                        _this.commonProvider.objServiceForm.token = result.token.id;
                        _this.commonProvider.objServiceForm.tokenArray = result.token;
                        _this.loading.dismiss();
                        var confirmMessages = _this.toolsProvider.fnLanguageTranslate(['view.reservation.confirm', "common.confirm", "buttons.modify", "buttons.send"]);
                        confirmMessages.subscribe(function (value) {
                            var alertconfirm = _this.alertCtrl.create({
                                title: value['common.confirm'],
                                message: value['view.reservation.confirm'],
                                cssClass: 'cls_alrt',
                                buttons: [
                                    {
                                        text: value['buttons.modify'],
                                        role: 'cancel',
                                    },
                                    {
                                        text: value['buttons.send'],
                                        role: 'cancel',
                                        handler: function (data) {
                                            _this.showLoading();
                                            var serviceId = _this.commonProvider.objServiceForm.serviceId, date = _this.commonProvider.objServiceForm.date, turn = _this.commonProvider.objServiceForm.turn, noOfPersons = _this.commonProvider.objServiceForm.noOfPersons, comments = _this.commonProvider.objServiceForm.comments, cardholder = _this.paymentForm.get('cardHolder').value, token = result.token.id, reservationId = _this.reservationProvider.objReservation.reservationId;
                                            // service call for reservation booking with payment
                                            _this.activityProvider.sendServiceReservationWithPayment(reservationId, serviceId, date, turn, noOfPersons, comments, cardholder, token).subscribe(function (data) {
                                                _this.loading.dismiss();
                                                if (data.success == true) {
                                                    _this.commonProvider.objFormData.activity = [];
                                                    _this.commonProvider.objFormData.activity.bookingCompleted = true;
                                                    // success message translate
                                                    var successMessages = _this.toolsProvider.fnLanguageTranslate(['view.reservation.success', "common.requestReceived", "buttons.ok"]);
                                                    successMessages.subscribe(function (value) {
                                                        var alertsuccess = _this.alertCtrl.create({
                                                            title: value['common.requestReceived'],
                                                            message: value['view.reservation.success'],
                                                            cssClass: 'cls_alrt',
                                                            buttons: [
                                                                {
                                                                    text: value['buttons.ok'],
                                                                    role: 'cancel',
                                                                    handler: function (data) {
                                                                        _this.navCtrl.popTo(_this.navCtrl.getByIndex(1), { animate: true, animation: 'transition', duration: 500, direction: 'back' });
                                                                    }
                                                                }
                                                            ]
                                                        });
                                                        alertsuccess.present();
                                                        setTimeout(function () {
                                                            alertsuccess.dismiss();
                                                            _this.navCtrl.popTo(_this.navCtrl.getByIndex(1), { animate: true, animation: 'transition', duration: 500, direction: 'back' });
                                                        }, 5000);
                                                    });
                                                }
                                            });
                                        }
                                    }
                                ]
                            });
                            alertconfirm.present();
                            setTimeout(function () { alertconfirm.dismiss(); }, 5000);
                        });
                    }
                    else if (result.error) {
                        // Error creating the token
                        console.log(result.error.message);
                        _this.loading.dismiss();
                        // error message translate
                        var errorMessages = _this.toolsProvider.fnLanguageTranslate([result.error.message, "common.error", "buttons.ok"]);
                        errorMessages.subscribe(function (value) {
                            var alertsuccess = _this.alertCtrl.create({
                                title: value['common.error'],
                                message: value[result.error.message],
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
                });
            }
        }
    };
    ActivityPaymentPage.prototype.fnOnRadioSelect = function ($event) {
        this.isChecked = !this.isChecked;
    };
    ActivityPaymentPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ActivityPaymentPage.prototype, "content", void 0);
    ActivityPaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity-payment',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/activity-payment/activity-payment.html"*/'<ion-header class="header_menu">\n  <ion-navbar>\n    <ion-title>{{\'view.actividadLearnMore.title\' | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr" *ngIf="!hideBackButton">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle hidden="false" class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="homecontent" class="home_container" no-bounce>\n  <form class="service_payment" [formGroup]="paymentForm">\n    <div class="servc_bk_title">\n    <ion-item>\n      <ion-label stacked>{{\'view.reservation.label.cardHolder.title\' | translate}} </ion-label>\n      <ion-input class="card_holder_input" formControlName="cardHolder" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item class="card_holder">\n      <ion-label stacked>{{\'view.checkin.label.numeroTarjetaCredito.title\' | translate}}</ion-label>\n    </ion-item>\n    <div id="card-element" class="card_element"></div>\n\n    <span class="ser_pci">\n      <img src="assets/imgs/pci_compliant.png">\n      <ion-label>{{\'view.reservation.label.pciCompliant\' | translate}}</ion-label>\n    </span>\n    <ion-item class="activity_pymnt_para">\n      <p *ngIf="!chargeText">\n        {{\'view.reservation.label.guaranteeText\' | translate}}\n      </p>\n      <p *ngIf="chargeText">\n        {{\'view.reservation.label.chargeText\' | translate}}\n      </p>\n    </ion-item>\n\n    <ion-item class="ser_pay_can" [innerHtml]="cancellationTitle">\n    </ion-item>\n\n    <ion-item><p [innerHtml]="cancellationText"></p></ion-item>\n\n    <ion-list  class="rdo_btn" radio-group formControlName="acceptTermsCheck">\n      <ion-radio checked={{isChecked}} (ionSelect)="fnOnRadioSelect($event)"></ion-radio>\n    </ion-list>\n\n    <ion-item class="rdo_txt activity_pymnt" [innerHtml]="acceptTerms">\n    </ion-item>\n</div>\n    <ion-item class="footerfixed_btn ios_footer_fixed">\n      <button class="cmn_btn" (click)="fnSubmit()">{{\'common.book\' | translate }}</button>\n    </ion-item>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/activity-payment/activity-payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_5__providers_activity_service_activity_service__["a" /* ActivityServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7_ngx_stripe__["b" /* StripeService */], __WEBPACK_IMPORTED_MODULE_8__providers_device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__providers_common_service_common_service__["a" /* CommonServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_10__providers_notification_notification__["a" /* NotificationProvider */]])
    ], ActivityPaymentPage);
    return ActivityPaymentPage;
}());

//# sourceMappingURL=activity-payment.js.map

/***/ })

});
//# sourceMappingURL=32.js.map