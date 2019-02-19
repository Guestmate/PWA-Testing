webpackJsonp([30],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinArrivaltimePageModule", function() { return CheckinArrivaltimePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkin_arrivaltime__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckinArrivaltimePageModule = /** @class */ (function () {
    function CheckinArrivaltimePageModule() {
    }
    CheckinArrivaltimePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkin_arrivaltime__["a" /* CheckinArrivaltimePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkin_arrivaltime__["a" /* CheckinArrivaltimePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CheckinArrivaltimePageModule);
    return CheckinArrivaltimePageModule;
}());

//# sourceMappingURL=checkin-arrivaltime.module.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinArrivaltimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_checkin_service_checkin_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_notification_notification__ = __webpack_require__(44);
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
 * Generated class for the CheckinArrivaltimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckinArrivaltimePage = /** @class */ (function () {
    function CheckinArrivaltimePage(navCtrl, navParams, events, commonProvider, formBuilder, toolsProvider, sanitized, alertCtrl, hotelProvider, checkinProvider, notificationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.commonProvider = commonProvider;
        this.formBuilder = formBuilder;
        this.toolsProvider = toolsProvider;
        this.sanitized = sanitized;
        this.alertCtrl = alertCtrl;
        this.hotelProvider = hotelProvider;
        this.checkinProvider = checkinProvider;
        this.notificationProvider = notificationProvider;
        this.timeSlots = [];
        this.toolsProvider.setTranslateLanguage();
        this.arrivalTimeForm = formBuilder.group({
            'timeOfArrival': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            'specialRequests': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('')
        });
    }
    CheckinArrivaltimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckinArrivaltimePage');
        //writing arrival text to variable defaultText
        var defaultTextTranslate = this.toolsProvider.fnLanguageTranslate(["view.checkin.template.arrival", "view.checkin.label.comentario.placeHolder"]);
        var defaultText = '';
        defaultTextTranslate.subscribe(function (value) {
            defaultText = value;
        });
        //replace variable names by actual check-in and check-out values in default Text
        this.arrivalMsg = defaultText['view.checkin.template.arrival'][0] != "" ? defaultText['view.checkin.template.arrival'][0].replace('{horaEntrada}', this.hotelProvider.objHotel.defaultCheckinTime).replace('{horaSalida}', this.hotelProvider.objHotel.defaultCheckoutTime) : "";
        this.arrivalMsg = this.arrivalMsg + defaultText['view.checkin.template.arrival'][1] + defaultText['view.checkin.template.arrival'][2] + defaultText['view.checkin.template.arrival'][3];
        this.arrivalMsg = this.sanitized.bypassSecurityTrustHtml(this.arrivalMsg);
        this.specialRequestMsg = this.sanitized.bypassSecurityTrustHtml(defaultText['view.checkin.label.comentario.placeHolder']);
        this.timeSlots = this.commonProvider.getTimeIntervalWithAMPM();
        this.fnCheckPreEnteredFormData();
        console.log(this.timeSlots);
    };
    //function to go to next page
    CheckinArrivaltimePage.prototype.fnContinue = function () {
        var _this = this;
        var emptyFields = []; // to add empty fields in the form
        var alertMessage; // to show alert message on validation
        var validateMessages = this.toolsProvider.fnLanguageTranslate(['view.checkin.label.horaPrevistaCheckin.title']);
        if (!this.arrivalTimeForm.valid) {
            if (this.arrivalTimeForm.controls['timeOfArrival'].hasError('required')) {
                validateMessages.subscribe(function (value) {
                    emptyFields.push(value['view.checkin.label.horaPrevistaCheckin.title']);
                });
            }
            var msg = this.toolsProvider.fnLanguageTranslateWithParam(["common.mandatoryFields", "view.login.error.emptyMail", "common.error", "buttons.ok"], { fields: emptyFields });
            if (this.arrivalTimeForm.controls['timeOfArrival'].hasError('required')) {
                msg.subscribe(function (value) {
                    alertMessage = value['common.mandatoryFields'];
                });
            }
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
        }
        else {
            this.checkinProvider.objCheckin.comments = this.arrivalTimeForm.controls['specialRequests'] && this.arrivalTimeForm.get('specialRequests').value ? this.arrivalTimeForm.get('specialRequests').value : '';
            this.checkinProvider.objCheckin.checkinTime = this.arrivalTimeForm.controls['timeOfArrival'] && this.arrivalTimeForm.get('timeOfArrival').value ? this.arrivalTimeForm.get('timeOfArrival').value : '';
            this.navCtrl.push("PaymentDataPage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
        }
    };
    // store entered data into model before leaving page
    CheckinArrivaltimePage.prototype.ionViewWillLeave = function () {
        if ((this.commonProvider.objFormData.checkin) && !this.commonProvider.objFormData.checkin.checkinCompleted) {
            this.commonProvider.objFormData.checkin.arrivalTime = this.arrivalTimeForm.controls['timeOfArrival'] && this.arrivalTimeForm.get('timeOfArrival').value ? this.arrivalTimeForm.get('timeOfArrival').value : '';
            this.commonProvider.objFormData.checkin.specialRequest = this.arrivalTimeForm.controls['specialRequests'] && this.arrivalTimeForm.get('specialRequests').value ? this.arrivalTimeForm.get('specialRequests').value : '';
            this.checkinProvider.storeCheckinData(this.commonProvider.objFormData.checkin);
        }
    };
    //function to go to previous page
    CheckinArrivaltimePage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    CheckinArrivaltimePage.prototype.fnCheckPreEnteredFormData = function () {
        if (this.commonProvider.objFormData && this.commonProvider.objFormData.checkin) {
            this.arrivalTimeForm.get("timeOfArrival").setValue(this.commonProvider.objFormData.checkin.arrivalTime);
            this.arrivalTimeForm.get("specialRequests").setValue(this.commonProvider.objFormData.checkin.specialRequest);
        }
    };
    CheckinArrivaltimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkin-arrivaltime',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/checkin-arrivaltime/checkin-arrivaltime.html"*/'<ion-header class="header_menu">\n  <ion-navbar>\n    <ion-title>{{\'view.checkin.title\' | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle hidden="false" class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n  <ion-content id="homecontent" class="home_container" no-bounce>\n    <div class="check_inexp">\n      <form [formGroup]="arrivalTimeForm">\n        <ion-item class="arrival_time">\n          <span>{{"view.checkin.subtitle.arrival" | translate}}</span>\n          <ul class="chckin_navbtn">\n            <li></li>\n            <li class="active"></li>\n            <li></li>\n            <li></li>\n            <li></li>\n          </ul>\n        </ion-item>\n        <p [innerHtml]="arrivalMsg"></p>\n        <ion-item class="ionselect_full arvltime_input">\n          <ion-label>{{"view.checkin.label.horaPrevistaCheckin.title" | translate}}</ion-label>\n          <ion-select interface="action-sheet" formControlName="timeOfArrival" placeholder="{{\'view.reservation.label.time.placeHolder\' | translate }}"\n            cancelText="{{\'buttons.cancel\'  | translate }}" okText="{{\'buttons.done\'  | translate }}">\n            <ion-option *ngFor="let time of timeSlots">{{time}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item class="arrivaltm_rqst">\n          <ion-label>{{"view.checkin.label.comentario.title" | translate}}</ion-label>\n          <ion-textarea class="cm_textarea" formControlName="specialRequests" placeholder="{{\'view.checkin.label.comentario.placeHolder\' | translate}}">\n          </ion-textarea>\n        </ion-item>\n        \n      </form>\n\n    </div>\n    <ion-item class="footer_btn">\n        <button class="cmn_btn" (click)="fnContinue()">{{"common.continue" | translate}}</button>\n      </ion-item>\n\n  </ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/checkin-arrivaltime/checkin-arrivaltime.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__["a" /* CommonServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_notification_notification__["a" /* NotificationProvider */]])
    ], CheckinArrivaltimePage);
    return CheckinArrivaltimePage;
}());

//# sourceMappingURL=checkin-arrivaltime.js.map

/***/ })

});
//# sourceMappingURL=30.js.map