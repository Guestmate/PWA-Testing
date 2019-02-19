webpackJsonp([21],{

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionsBookingPageModule", function() { return PromotionsBookingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promotions_booking__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PromotionsBookingPageModule = /** @class */ (function () {
    function PromotionsBookingPageModule() {
    }
    PromotionsBookingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__promotions_booking__["a" /* PromotionsBookingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__promotions_booking__["a" /* PromotionsBookingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], PromotionsBookingPageModule);
    return PromotionsBookingPageModule;
}());

//# sourceMappingURL=promotions-booking.module.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsBookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_service_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_promotions_service_promotions_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_notification_notification__ = __webpack_require__(44);
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
 * Generated class for the PromotionsBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PromotionsBookingPage = /** @class */ (function () {
    function PromotionsBookingPage(navCtrl, navParams, formBuilder, toolsPvdr, commonProvider, reservationProvider, alertCtrl, sanitized, promotionsProvider, hotelProvider, notificationProvider, loadingCtrl, platForm) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toolsPvdr = toolsPvdr;
        this.commonProvider = commonProvider;
        this.reservationProvider = reservationProvider;
        this.alertCtrl = alertCtrl;
        this.sanitized = sanitized;
        this.promotionsProvider = promotionsProvider;
        this.hotelProvider = hotelProvider;
        this.notificationProvider = notificationProvider;
        this.loadingCtrl = loadingCtrl;
        this.platForm = platForm;
        this.item = [];
        this.personArray = []; // to store person for select option 
        this.timeSlots = [];
        this.monthShortNames = []; // for month short names
        this.minDate = new Date();
        this.currencySymbol = this.hotelProvider.objHotel.currency.signo; // currency symbol
        this.dayShortNames = [];
        this.platFormIsIOS = false;
        this.item = this.navParams.get('item'); // gets item 
        this.promotionsBookingForm = this.formBuilder.group({
            'specialRequests': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            'date': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            'time': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            'noOfPersons': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
        // translate month names
        var monthList = this.toolsPvdr.fnLanguageTranslate("common.monthNames");
        monthList.subscribe(function (value) {
            _this.monthNames = value;
        });
        //translated month short names
        for (var i = 0; i < 12; i++) {
            this.monthShortNames.push(this.toolsPvdr.getShortMonthName(i));
        }
        //translated day short names
        for (var j = 0; j < 7; j++) {
            this.dayShortNames.push(this.toolsPvdr.getShortDayName(j));
        }
        if (this.platForm.is("ios")) {
            this.platFormIsIOS = true;
        }
    }
    PromotionsBookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PromotionsBookingPage');
        this.backgroundImage = this.item.imgPath; // returns image url
        var minPersons = this.item.modoReserva.minPersonas ? this.item.modoReserva.minPersonas : 0; // to set minimum value to select option of person
        var maxPersons = this.item.modoReserva.maxPersonas ? this.item.modoReserva.maxPersonas : 10; // to set maximum value to select option of person
        this.promotionsBookingForm.get("noOfPersons").setValue(this.item.modoReserva.minPersonas); // set minimum number of person as default value
        this.maxDate = this.toolsPvdr.fnDateFormatChange(this.commonProvider.calculateMaxDate());
        this.minDate = this.toolsPvdr.fnGetToday();
        var defaultTextTranslate = this.toolsPvdr.fnLanguageTranslate(["view.reservation.label.legal", "view.reservation.label.people.suffix", 'view.reservation.label.people.suffixFirst']); // language translation
        var defaultText = '';
        defaultTextTranslate.subscribe(function (value) {
            defaultText = value;
        });
        // bypass HTML tags 
        this.descriptionHtml = this.sanitized.bypassSecurityTrustHtml(defaultText['view.reservation.label.legal']);
        this.suffix = defaultText['view.reservation.label.people.suffix'];
        this.firstSuffix = defaultText['view.reservation.label.people.suffixFirst'];
        this.dateType = this.item.modoReserva.tipo;
        if (this.item.modoReserva.tipo == "T") {
            this.turnList = this.item.modoReserva.turnos;
        }
        //inserts time intervals using function into array timeSlots
        if (this.item.modoReserva.tipo == "C" && (this.item.modoReserva.franjas.length == 1)) {
            this.timeSlots = this.commonProvider.fnConvertToTimeSlotsArray(this.item.modoReserva.franjas[0].start, this.item.modoReserva.franjas[0].end, this.item.modoReserva.franjas[0].increment);
            //to set start date based on time slots available
            var lastTimeInterval = this.timeSlots.length > 0 ? this.timeSlots[this.timeSlots.length - 1] : "0:00";
            this.minDate = this.toolsPvdr.fnSetStartDate(lastTimeInterval);
        }
        //inserts all time intervals into array timeSlots when multiple time intervals are possible
        if (this.item.modoReserva.tipo == "C" && (this.item.modoReserva.franjas.length > 1)) {
            for (var i_1 = 0; i_1 < this.item.modoReserva.franjas.length; i_1++) {
                var tmpTimeArray = this.commonProvider.fnConvertToTimeSlotsArray(this.item.modoReserva.franjas[i_1].start, this.item.modoReserva.franjas[i_1].end, this.item.modoReserva.franjas[i_1].increment);
                tmpTimeArray = tmpTimeArray.indexOf("0:00") > -1 ? tmpTimeArray.filter(function (e) { return e != "0:00"; }) : tmpTimeArray; //filters out "0:00"
                this.timeSlots = this.timeSlots.concat(tmpTimeArray);
            }
            //to set start date based on time slots available
            var lastTimeInterval = this.timeSlots.length > 0 ? this.timeSlots[this.timeSlots.length - 1] : "0:00";
            this.minDate = this.timeSlots.length > 0 ? this.toolsPvdr.fnSetStartDate(lastTimeInterval) : "0:00";
        }
        //set values in personArray
        var minText = minPersons + ' ' + this.suffix;
        if (minPersons == 1) {
            minText = minPersons + ' ' + this.firstSuffix;
        }
        this.personArray.push({ text: minText, value: minPersons, checked: true });
        for (var i = minPersons + 1; i <= maxPersons; i++) {
            this.personArray.push({ text: i + ' ' + this.suffix, value: i, checked: false });
        }
        this.fnCheckPreEnteredFormData();
    };
    // store entered data into model before leaving page
    PromotionsBookingPage.prototype.ionViewWillLeave = function () {
        if (this.commonProvider.objFormData.promotions.bookingCompleted != true) {
            this.commonProvider.objFormData.promotions.id = this.item.id;
            this.commonProvider.objFormData.promotions.date = this.promotionsBookingForm.get('date').value;
            this.commonProvider.objFormData.promotions.time = this.promotionsBookingForm.controls['time'] && this.promotionsBookingForm.get('time').value;
            this.commonProvider.objFormData.promotions.turn = this.promotionsBookingForm.controls['turn'] && this.promotionsBookingForm.get('turn').value;
            this.commonProvider.objFormData.promotions.noOfPersons = this.promotionsBookingForm.get('noOfPersons').value;
            this.commonProvider.objFormData.promotions.comments = this.promotionsBookingForm.get('specialRequests').value;
            this.commonProvider.objFormData.promotions.bookingCompleted = false;
        }
    };
    // fetch pre-entered data into fields from model
    PromotionsBookingPage.prototype.fnCheckPreEnteredFormData = function () {
        if (this.commonProvider.objFormData && this.commonProvider.objFormData.promotions) {
            this.commonProvider.objFormData.promotions.bookingCompleted = false;
            if (this.commonProvider.objFormData.promotions.id == this.item.id) {
                this.promotionsBookingForm.get("date").setValue(this.commonProvider.objFormData.promotions.date);
                this.promotionsBookingForm.controls['time'] && this.promotionsBookingForm.get("time").setValue(this.commonProvider.objFormData.promotions.time);
                this.promotionsBookingForm.controls['turn'] && this.promotionsBookingForm.get("turn").setValue(this.commonProvider.objFormData.promotions.turn);
                this.promotionsBookingForm.get("noOfPersons").setValue(this.commonProvider.objFormData.promotions.noOfPersons);
                this.promotionsBookingForm.get("specialRequests").setValue(this.commonProvider.objFormData.promotions.comments);
            }
        }
    };
    //function to go to previous page
    PromotionsBookingPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    PromotionsBookingPage.prototype.fnSubmit = function (item) {
        var _this = this;
        if (this.promotionsBookingForm.controls['date'].hasError('required')) {
            var validateMessages = this.toolsPvdr.fnLanguageTranslate(['view.reservation.error.nullDate', "common.error", "buttons.ok"]);
            validateMessages.subscribe(function (value) {
                var alertnew = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: value['view.reservation.error.nullDate'],
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
        else if (this.reservationProvider.objReservation.alreadyVerifiedCheckOut) {
            var cantBookMsg = this.toolsPvdr.fnLanguageTranslate(['view.reservation.error.checkoutYaRealizado', "common.error", "buttons.ok"]);
            cantBookMsg.subscribe(function (value) {
                var alertbook = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: value['view.reservation.error.checkoutYaRealizado'],
                    cssClass: 'cls_alrt',
                    buttons: [
                        {
                            text: value['buttons.ok'],
                            role: 'cancel'
                        }
                    ]
                });
                alertbook.present();
                setTimeout(function () { alertbook.dismiss(); }, 5000);
            });
        }
        else {
            var confirmMessages = this.toolsPvdr.fnLanguageTranslate(['buttons.send', 'buttons.modify', 'view.reservation.confirm', 'common.confirm']); //for language translation
            confirmMessages.subscribe(function (value) {
                var alertnew = _this.alertCtrl.create({
                    title: value['common.confirm'],
                    message: value['view.reservation.confirm'],
                    cssClass: 'cls_alrt',
                    buttons: [
                        {
                            text: value['buttons.modify'],
                            role: 'cancel',
                            handler: function (data) {
                            }
                        },
                        {
                            text: value['buttons.send'],
                            handler: function (data) {
                                //date format changes for nostay user
                                _this.showLoading();
                                var bookingDate;
                                var time = _this.promotionsBookingForm.controls['time'] && _this.promotionsBookingForm.get('time').value ? _this.promotionsBookingForm.get('time').value + ':00' : '00:00:00';
                                bookingDate = _this.toolsPvdr.dateFormatChangeForService(_this.promotionsBookingForm.controls['date'] && new Date(_this.promotionsBookingForm.get('date').value)).split(" ")[0] + ' ' + time;
                                var serviceId = item.id;
                                var turn = _this.promotionsBookingForm.controls['turn'] && _this.promotionsBookingForm.get('turn').value ? _this.promotionsBookingForm.get('turn').value : '', person = _this.promotionsBookingForm.get('noOfPersons').value, comments = _this.promotionsBookingForm.get('specialRequests').value, reservationId = _this.reservationProvider.objReservation.reservationId;
                                _this.promotionsProvider.sendPromotionsReservation(serviceId, bookingDate, turn, person, comments, reservationId).subscribe(function (data) {
                                    _this.loading.dismiss();
                                    if (data.success == true) {
                                        _this.promotionsBookingForm.reset();
                                        _this.commonProvider.objFormData.promotions = [];
                                        _this.commonProvider.objFormData.promotions.bookingCompleted = true;
                                        // success message translate
                                        var successMessages = _this.toolsPvdr.fnLanguageTranslate(['view.reservation.success', "common.requestReceived", "buttons.ok"]);
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
                alertnew.present();
                setTimeout(function () { alertnew.dismiss(); }, 5000);
            });
        }
    };
    //Loader
    PromotionsBookingPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    PromotionsBookingPage.prototype.fnDateChange = function () {
        var date = this.toolsPvdr.fnDateFormatChange(this.promotionsBookingForm.controls['date'] && new Date(this.promotionsBookingForm.get('date').value));
        var isToday;
        var today = this.toolsPvdr.fnGetToday();
        if (date == today) {
            isToday = true;
        }
        else {
            isToday = false;
        }
        //inserts all time intervals into array timeSlots when multiple time intervals are possible
        if (this.item.modoReserva.tipo == "C" && (this.item.modoReserva.franjas.length > 0)) {
            this.timeSlots = [];
            for (var i = 0; i < this.item.modoReserva.franjas.length; i++) {
                var tmpTimeArray = this.commonProvider.fnConvertToTimeSlotsArray(this.item.modoReserva.franjas[i].start, this.item.modoReserva.franjas[i].end, this.item.modoReserva.franjas[i].increment, isToday);
                tmpTimeArray = tmpTimeArray.indexOf("0:00") > -1 ? tmpTimeArray.filter(function (e) { return e != "0:00"; }) : tmpTimeArray; //filters out "0:00"
                this.timeSlots = this.timeSlots.concat(tmpTimeArray);
            }
        }
    };
    PromotionsBookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-promotions-booking',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/promotions-booking/promotions-booking.html"*/'<ion-content id="homecontent" class="home_container" no-bounce>\n  <ion-header>\n    <ion-navbar>\n      <ion-title>{{\'view.ofertaLearnMore.title\' | translate}}</ion-title>\n      <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n        <i class="icon-arrow-left2"></i>\n      </button>\n      <ion-buttons end>\n        <button ion-button menuToggle hidden="false" class="main_menu">\n          <i class="icon-Menu"></i>\n          <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <form class="service_details"  [class.iosbookingcls]="platFormIsIOS" [formGroup]="promotionsBookingForm">\n    <ion-item class="serve_bgimg" [style.backgroundImage]="\'url(\' + backgroundImage + \')\'">\n      <div class="slider_caption">\n        <h2>{{item.nombre}}</h2>\n        <span class="slider_lbl">\n          <svg version="1.1" id="Capa_1" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 2048 2048" enable-background="new 0 0 2048 2048"\n            xml:space="preserve">\n            <g>\n              <g>\n                <path d="M1583.2,1201.7c0-33.1-10.8-62-32.5-86.8l-627-680.8c-22.2-24.2-52.1-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3\n               H366.8c-30.4,0-56.7,12.1-79,36.3c-22.2,24.1-33.3,52.7-33.3,85.8v396.7c0,33.7,7.8,70.9,23.3,111.6\n               c15.5,40.7,34.4,72.8,56.5,96.3l627.1,682.8c21.7,23.5,48,35.3,79,35.3c30.4,0,57-11.8,79.8-35.3l430.6-469.2\n               C1572.4,1264,1583.2,1235.5,1583.2,1201.7z M614.5,738.8c-21.9,23.8-48.4,35.8-79.4,35.8c-31,0-57.4-11.9-79.4-35.8\n               c-21.9-23.8-32.9-52.6-32.9-86.3c0-33.7,10.9-62.4,32.9-86.3c21.9-23.8,48.4-35.8,79.4-35.8c31,0,57.4,11.9,79.4,35.8\n               c21.9,23.8,32.9,52.6,32.9,86.3C647.4,686.2,636.4,715,614.5,738.8z" />\n                <path d="M1887.5,1115l-627.1-680.9c-22.2-24.2-52-44.7-89.5-61.5c-37.4-16.8-71.6-25.3-102.6-25.3H871.9c31,0,65.2,8.4,102.6,25.3\n               c37.4,16.9,67.2,37.3,89.5,61.5l627.1,680.9c21.7,24.8,32.5,53.7,32.5,86.8c0,33.7-10.8,62.3-32.5,85.8l-412.2,448.2\n               c17.6,19.7,33.1,34,46.5,42.9c13.4,8.9,30.7,13.4,51.7,13.4c30.4,0,57-11.8,79.8-35.3l430.7-469.2c21.6-23.5,32.5-52.1,32.5-85.8\n               C1920,1168.7,1909.2,1139.8,1887.5,1115z" />\n              </g>\n            </g>\n          </svg>\n          <label class="price_icon" *ngIf="item.precio>0">{{item.price}} {{currencySymbol}}</label>\n          <label class="price_icon" *ngIf="item.precio==0">--</label>\n        </span>\n      </div>\n    </ion-item>\n    <div class="servc_bk_title">\n        <div class="btnPageCotainer">\n      <ion-item>\n        <p [innerHtml]="descriptionHtml"></p>\n      </ion-item>\n\n\n      <div class="service_date_turn">\n        <ion-item [class.select_full]="dateType==\'D\'" class="half_item name lft_padno">\n          <ion-label stacked>{{"view.reservation.label.date.title" | translate }}</ion-label>\n          <ion-datetime displayFormat="DDD D MMM" pickerFormat="DD/MMMM/YYYY" formControlName="date" type="text" placeholder="{{\'view.reservation.label.date.placeHolder\' | translate }}"\n            [min]="minDate" [max]="maxDate" cancelText="{{\'buttons.cancel\'  | translate }}" doneText="{{\'buttons.done\'  | translate }}"\n            [monthNames]="monthNames" [monthShortNames]="monthShortNames" [dayShortNames]="dayShortNames" (ionChange)="fnDateChange()"></ion-datetime>\n        </ion-item>\n        <ion-item *ngIf="dateType==\'C\'" class="half_item last_name">\n          <ion-label stacked>{{"view.reservation.label.time.title" | translate }}</ion-label>\n          <ion-select class="act_turn" interface="action-sheet" formControlName="time" placeholder="{{\'view.reservation.label.time.placeHolder\' | translate }}"\n            cancelText="{{\'buttons.cancel\'  | translate }}" okText="{{\'buttons.done\'  | translate }}">\n            <ion-option [value]="time" *ngFor="let time of timeSlots">{{time | translate}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf="dateType==\'T\'" class="half_item last_name">\n          <ion-label stacked>{{"view.reservation.label.turn.title" | translate }}</ion-label>\n          <ion-select class="act_turn" interface="action-sheet" formControlName="turn" placeholder="{{\'view.reservation.label.turn.placeHolder\' | translate }}"\n            cancelText="{{\'buttons.cancel\'  | translate }}" okText="{{\'buttons.done\'  | translate }}">\n            <ion-option [value]="turn.turno" *ngFor="let turn of turnList">{{turn.nombre | translate}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n      <ion-item class="person_chkbox name lft_padno">\n        <ion-label stacked>{{\'view.reservation.label.people.title\' | translate}} </ion-label>\n        <ion-select interface="action-sheet" formControlName="noOfPersons">\n          <ion-option *ngFor="let item of personArray" [value]="item.value" [selected]="item.checked">{{item.text}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item class="service_spl_rqsts">\n        <ion-label stacked>{{\'view.reservation.label.comments.title\' | translate}} </ion-label>\n        <ion-textarea formControlName="specialRequests" placeholder="{{\'view.reservation.label.comments.placeHolder\' | translate}}"></ion-textarea>\n      </ion-item>\n    </div>\n    </div>\n    <ion-item class="footer_btn">\n      <button class="cmn_btn" (click)="fnSubmit(item)" ion-button>{{\'common.book\' | translate}}</button>\n    </ion-item>\n  </form>\n</ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/promotions-booking/promotions-booking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_common_service_common_service__["a" /* CommonServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_7__providers_promotions_service_promotions_service__["a" /* PromotionsServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], PromotionsBookingPage);
    return PromotionsBookingPage;
}());

//# sourceMappingURL=promotions-booking.js.map

/***/ })

});
//# sourceMappingURL=21.js.map