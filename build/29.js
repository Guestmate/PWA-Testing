webpackJsonp([29],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutBasicinfoPageModule", function() { return CheckoutBasicinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_basicinfo__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutBasicinfoPageModule = /** @class */ (function () {
    function CheckoutBasicinfoPageModule() {
    }
    CheckoutBasicinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout_basicinfo__["a" /* CheckoutBasicinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout_basicinfo__["a" /* CheckoutBasicinfoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CheckoutBasicinfoPageModule);
    return CheckoutBasicinfoPageModule;
}());

//# sourceMappingURL=checkout-basicinfo.module.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutBasicinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_service_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__ = __webpack_require__(41);
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
 * Generated class for the CheckoutBasicinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckoutBasicinfoPage = /** @class */ (function () {
    function CheckoutBasicinfoPage(navCtrl, navParams, tools, reservation, santizer, cdRef, formBuilder, alertCtrl, commonProvider, notificationProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tools = tools;
        this.reservation = reservation;
        this.santizer = santizer;
        this.cdRef = cdRef;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.commonProvider = commonProvider;
        this.notificationProvider = notificationProvider;
        this.monthShortNames = []; // for month short names
        this.isCheckedAgree = false;
        this.frmCheckoutBasicInfo = formBuilder.group({
            'txtFirstName': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]),
            'txtLastName': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]),
            'txtEmail': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]),
        });
        this.frmCheckoutBasicInfo.controls.txtFirstName.setValue(this.reservation.objReservation.guestName);
        this.frmCheckoutBasicInfo.controls.txtLastName.setValue(this.reservation.objReservation.lastName);
        this.frmCheckoutBasicInfo.controls.txtEmail.setValue(this.reservation.objReservation.email);
        // translate month names
        var monthList = this.tools.fnLanguageTranslate("common.monthNames");
        monthList.subscribe(function (value) {
            _this.monthNames = value;
        });
        //translated month short names
        for (var i = 0; i < 12; i++) {
            this.monthShortNames.push(this.tools.getShortMonthName(i));
        }
    }
    CheckoutBasicinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutBasicinfoPage');
        this.fnCheckPreEnteredFormData();
        var welcomeMsgTranslate = this.tools.fnLanguageTranslate("view.checkout.template.welcome");
        var messageHtml = '';
        welcomeMsgTranslate.subscribe(function (value) {
            messageHtml = value;
        });
        this.welcomeMessage = messageHtml != "" ? messageHtml.replace('{nombreHuesped}', this.reservation.objReservation.guestName) : "";
        this.welcomeMessage = this.santizer.bypassSecurityTrustHtml(this.welcomeMessage); //By Passing the Security Trust
        this.cdRef.detectChanges();
    };
    //Navigates to the previous page
    CheckoutBasicinfoPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    CheckoutBasicinfoPage.prototype.ionViewWillLeave = function () {
        if (this.commonProvider.objFormData && this.commonProvider.objFormData.checkout.checkoutCompleted != true) {
            this.commonProvider.objFormData.checkout.firstName = this.frmCheckoutBasicInfo.controls['txtFirstName'] && this.frmCheckoutBasicInfo.get('txtFirstName').value;
            this.commonProvider.objFormData.checkout.lastName = this.frmCheckoutBasicInfo.controls['txtLastName'] && this.frmCheckoutBasicInfo.get('txtLastName').value;
            this.commonProvider.objFormData.checkout.email = this.frmCheckoutBasicInfo.controls['txtEmail'] && this.frmCheckoutBasicInfo.get('txtEmail').value;
            this.commonProvider.objFormData.checkout.isCheckedAgree = this.isCheckedAgree;
            this.commonProvider.objFormData.checkout.checkoutCompleted = false;
        }
    };
    // fetch pre-entered data into fields from model
    CheckoutBasicinfoPage.prototype.fnCheckPreEnteredFormData = function () {
        this.commonProvider.objFormData.checkout.checkoutCompleted = false;
        var firstName = (this.commonProvider.objFormData.checkout.firstName) ? this.commonProvider.objFormData.checkout.firstName : this.frmCheckoutBasicInfo.controls['txtFirstName'].value;
        var lastName = (this.commonProvider.objFormData.checkout.lastName) ? this.commonProvider.objFormData.checkout.lastName : this.frmCheckoutBasicInfo.controls['txtLastName'].value;
        var email = (this.commonProvider.objFormData.checkout.email) ? this.commonProvider.objFormData.checkout.email : this.frmCheckoutBasicInfo.controls['txtEmail'].value;
        var isChecked = (this.commonProvider.objFormData.checkout.isCheckedAgree) ? this.commonProvider.objFormData.checkout.isCheckedAgree : this.isCheckedAgree;
        this.frmCheckoutBasicInfo.controls['txtFirstName'] && this.frmCheckoutBasicInfo.get("txtFirstName").setValue(firstName);
        this.frmCheckoutBasicInfo.controls['txtLastName'] && this.frmCheckoutBasicInfo.get("txtLastName").setValue(lastName);
        this.frmCheckoutBasicInfo.controls['txtEmail'] && this.frmCheckoutBasicInfo.get("txtEmail").setValue(email);
        this.isCheckedAgree = isChecked;
    };
    //Triggers while clicking the continue button
    CheckoutBasicinfoPage.prototype.fnOnContinueClick = function () {
        var _this = this;
        var emptyFields = []; // to add empty fields in the form
        var alertMessage; // to show alert message on validation
        var validateMessages = this.tools.fnLanguageTranslate(['view.checkin.label.nombre.title',
            'view.checkin.label.apellidos.title'
        ]);
        if (this.frmCheckoutBasicInfo.controls.txtFirstName.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.nombre.title']);
            });
        }
        if (this.frmCheckoutBasicInfo.controls.txtLastName.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.apellidos.title']);
            });
        }
        var msg = this.tools.fnLanguageTranslateWithParam(["common.mandatoryFields", "view.login.error.emptyMail",
            "common.error", "buttons.ok"], { fields: emptyFields });
        if (this.frmCheckoutBasicInfo.controls.txtFirstName.hasError('required') ||
            this.frmCheckoutBasicInfo.controls.txtLastName.hasError('required')) {
            msg.subscribe(function (value) {
                alertMessage = value['common.mandatoryFields'];
            });
            msg.subscribe(function (value) {
                var alertnew = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: alertMessage,
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
        } //checking if agreed to terms at the success of card no & card holder validations
        else if (this.isCheckedAgree == false) {
            var msg_1 = this.tools.fnLanguageTranslate(["common.error", "view.checkin.error.mustAgree", "buttons.ok"]); // translate of error message
            msg_1.subscribe(function (value) {
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
            this.navCtrl.push("CheckoutPaymentPage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
        }
    };
    //function to handle checking of radio button
    CheckoutBasicinfoPage.prototype.fnOnRadioSelectAgree = function ($event) {
        this.isCheckedAgree = !this.isCheckedAgree;
    };
    CheckoutBasicinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout-basicinfo',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/checkout-basicinfo/checkout-basicinfo.html"*/'<ion-header class="header_menu">\n  <ion-navbar>\n    <ion-title>{{\'view.checkout.title\' | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle hidden="false" class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationProvider.hasNotifications"></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="service_bsc_info" no-bounce>\n  <form class="reg_frm" [formGroup]="frmCheckoutBasicInfo">\n    <div class="btnPageCotainer">\n    <ion-item class="info_hdg">\n      <span>{{"view.checkout.subtitle.requestInfo" | translate}}</span>\n      <ul class="chckin_navbtn">\n        <li class="active"></li>\n        <li></li>\n      </ul>\n    </ion-item>\n    <span [innerHtml]="welcomeMessage" class="chkn_chkoutinfo_data ckoutdata"></span>\n    <ion-item class="half_item name">\n      <ion-label stacked>{{\'view.checkin.label.nombre.title\' | translate}}</ion-label>\n      <ion-input formControlName="txtFirstName" type="text"></ion-input>\n    </ion-item>\n    <ion-item class="half_item last_name">\n      <ion-label stacked>{{\'view.checkin.label.apellidos.title\' | translate}}</ion-label>\n      <ion-input formControlName="txtLastName" type="text"></ion-input>\n    </ion-item>\n    <ion-item class="reg_email">\n      <ion-label stacked>{{\'view.checkin.label.mail.title\' | translate}}</ion-label>\n      <ion-input formControlName="txtEmail" type="email" placeholder="{{\'view.checkin.label.mail.placeHolder\' | translate}}"></ion-input>\n    </ion-item>\n    <p class="chkn_chkoutinfo_para">{{"view.checkout.label.legal.title" | translate}}</p>\n    <div class="rdo_btn_wrpr">\n      <ion-list class="rdo_btn">\n        <ion-radio checked={{isCheckedAgree}} (ionSelect)="fnOnRadioSelectAgree($event)" item-left></ion-radio>\n      </ion-list>\n      <ion-item class="rdo_txt">\n        <P>{{"view.checkin.label.agree.title" | translate}}</P>\n      </ion-item>\n    </div>\n    </div>\n  </form>\n  <ion-item class="footerfixed_btn">\n    <button ion-button (click)="fnOnContinueClick()" class="cmn_btn">{{\'common.continue\' | translate}}</button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/checkout-basicinfo/checkout-basicinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_common_service_common_service__["a" /* CommonServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__["a" /* NotificationProvider */]])
    ], CheckoutBasicinfoPage);
    return CheckoutBasicinfoPage;
}());

//# sourceMappingURL=checkout-basicinfo.js.map

/***/ })

});
//# sourceMappingURL=29.js.map