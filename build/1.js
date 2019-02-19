webpackJsonp([1],{

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantBookingPageModule", function() { return RestaurantBookingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurant_booking__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RestaurantBookingPageModule = /** @class */ (function () {
    function RestaurantBookingPageModule() {
    }
    RestaurantBookingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__restaurant_booking__["a" /* RestaurantBookingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__restaurant_booking__["a" /* RestaurantBookingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], RestaurantBookingPageModule);
    return RestaurantBookingPageModule;
}());

//# sourceMappingURL=restaurant-booking.module.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceForm; });
var ServiceForm = /** @class */ (function () {
    function ServiceForm() {
        this.tokenArray = [];
    }
    return ServiceForm;
}());

//# sourceMappingURL=service-form-model.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantBookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_service_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_service_form_model__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_restaurant_service_restaurant_service__ = __webpack_require__(182);
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
 * Generated class for the RestaurantBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantBookingPage = /** @class */ (function () {
    function RestaurantBookingPage(navCtrl, navParams, formBuilder, toolsPvdr, sanitized, commonProvider, reservationProvider, alertCtrl, restaurantProvider, cdRef, notificationProvider, loadingCtrl, platForm) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toolsPvdr = toolsPvdr;
        this.sanitized = sanitized;
        this.commonProvider = commonProvider;
        this.reservationProvider = reservationProvider;
        this.alertCtrl = alertCtrl;
        this.restaurantProvider = restaurantProvider;
        this.cdRef = cdRef;
        this.notificationProvider = notificationProvider;
        this.loadingCtrl = loadingCtrl;
        this.platForm = platForm;
        this.item = [];
        this.personArray = []; // to store person for select option 
        this.timeSlots = [];
        this.turnList = []; //turn list
        this.monthShortNames = []; // for month short names
        this.minDate = new Date();
        this.dayShortNames = [];
        this.platFormIsIOS = false;
        this.showBackButton = true;
        this.item = this.navParams.get('item'); // gets item 
        this.bookingForm = this.formBuilder.group({
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
    RestaurantBookingPage.prototype.ionViewWillEnter = function () {
        this.showBackButton = true;
    };
    RestaurantBookingPage.prototype.ionViewDidLoad = function () {
        console.log(this.commonProvider.objFormData);
        console.log('ionViewDidLoad RestaurantBookingPage');
        this.backgroundImage = this.item.imgPath; // returns image url
        var minPersons = this.item.modoReserva.minPersonas ? this.item.modoReserva.minPersonas : 0; // to set minimum value to select option of person
        var maxPersons = this.item.modoReserva.maxPersonas ? this.item.modoReserva.maxPersonas : 10; // to set maximum value to select option of person
        this.bookingForm.get("noOfPersons").setValue(this.item.modoReserva.minPersonas); // set minimum number of person as default value
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
            this.minDate = this.toolsPvdr.fnSetStartDate(lastTimeInterval);
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
    // fetch pre-entered data into fields from model
    RestaurantBookingPage.prototype.fnCheckPreEnteredFormData = function () {
        if (this.commonProvider.objFormData && this.commonProvider.objFormData.restaurant) {
            this.commonProvider.objFormData.restaurant.bookingCompleted = false;
            if (this.commonProvider.objFormData.restaurant.id == this.item.id) {
                this.bookingForm.get("date").setValue(this.commonProvider.objFormData.restaurant.date);
                this.bookingForm.controls['time'] && this.bookingForm.get("time").setValue(this.commonProvider.objFormData.restaurant.time);
                this.bookingForm.controls['turn'] && this.bookingForm.get("turn").setValue(this.commonProvider.objFormData.restaurant.turn);
                this.bookingForm.get("noOfPersons").setValue(this.commonProvider.objFormData.restaurant.noOfPersons);
                this.bookingForm.get("specialRequests").setValue(this.commonProvider.objFormData.restaurant.comments);
            }
        }
    };
    // store entered data into model before leaving page
    RestaurantBookingPage.prototype.ionViewWillLeave = function () {
        if (this.commonProvider.objFormData.restaurant.bookingCompleted != true) {
            this.commonProvider.objFormData.restaurant.id = this.item.id;
            this.commonProvider.objFormData.restaurant.date = this.bookingForm.get('date').value;
            this.commonProvider.objFormData.restaurant.time = this.bookingForm.controls['time'] && this.bookingForm.get('time').value;
            this.commonProvider.objFormData.restaurant.turn = this.bookingForm.controls['turn'] && this.bookingForm.get('turn').value;
            this.commonProvider.objFormData.restaurant.noOfPersons = this.bookingForm.get('noOfPersons').value;
            this.commonProvider.objFormData.restaurant.comments = this.bookingForm.get('specialRequests').value;
        }
        this.showBackButton = false;
    };
    //function to go to previous page
    RestaurantBookingPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    RestaurantBookingPage.prototype.fnSubmit = function (item) {
        var _this = this;
        if (this.bookingForm.controls['date'].hasError('required')) {
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
                                var bookingDate;
                                var time = _this.bookingForm.controls['time'] && _this.bookingForm.get('time').value ? _this.bookingForm.get('time').value + ':00' : '00:00:00';
                                bookingDate = _this.toolsPvdr.dateFormatChangeForService(_this.bookingForm.controls['date'] && new Date(_this.bookingForm.get('date').value)).split(" ")[0] + ' ' + time;
                                if ((item.paymentRequiredNoStay && _this.reservationProvider.objReservation.noStayGuest) || (item.paymentRequired && !_this.reservationProvider.objReservation.noStayGuest)) {
                                    //commonProvider
                                    _this.commonProvider.objServiceForm = new __WEBPACK_IMPORTED_MODULE_7__model_service_form_model__["a" /* ServiceForm */]();
                                    _this.commonProvider.objServiceForm.serviceId = item.id;
                                    _this.commonProvider.objServiceForm.date = bookingDate;
                                    _this.commonProvider.objServiceForm.turn = _this.bookingForm.controls['turn'] && _this.bookingForm.get('turn').value ? _this.bookingForm.get('turn').value : '';
                                    _this.commonProvider.objServiceForm.noOfPersons = _this.bookingForm.get('noOfPersons').value;
                                    _this.commonProvider.objServiceForm.comments = _this.bookingForm.get('specialRequests').value;
                                    _this.navCtrl.push("RestaurantPaymentPage", { item: item }, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
                                }
                                else {
                                    // if payment required is false 
                                    _this.showLoading();
                                    var serviceId = item.id;
                                    var date = bookingDate;
                                    var turn = _this.bookingForm.controls['turn'] && _this.bookingForm.get('turn').value ? _this.bookingForm.get('turn').value : '';
                                    var person = _this.bookingForm.get('noOfPersons').value, comments = _this.bookingForm.get('specialRequests').value, reservationId = _this.reservationProvider.objReservation.reservationId;
                                    _this.restaurantProvider.sendRestaurantReservation(serviceId, date, turn, person, comments, reservationId).subscribe(function (data) {
                                        _this.loading.dismiss();
                                        if (data.success == true) {
                                            _this.bookingForm.reset();
                                            _this.commonProvider.objFormData.restaurant = [];
                                            _this.commonProvider.objFormData.restaurant.bookingCompleted = true;
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
                        }
                    ]
                });
                alertnew.present();
                setTimeout(function () { alertnew.dismiss(); }, 5000);
            });
        }
    };
    RestaurantBookingPage.prototype.fnDateChange = function () {
        var date = this.toolsPvdr.fnDateFormatChange(this.bookingForm.controls['date'] && new Date(this.bookingForm.get('date').value));
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
    //Loader
    RestaurantBookingPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    RestaurantBookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurant-booking',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/restaurant-booking/restaurant-booking.html"*/'<ion-content id="homecontent" class="home_container" no-bounce>\n  <ion-header>\n    <ion-navbar>\n      <ion-title>{{\'view.restaurantCarousel.title\' | translate}}</ion-title>\n      <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr" *ngIf="showBackButton">\n        <i class="icon-arrow-left2"></i>\n      </button>\n      <ion-buttons end>\n        <button ion-button menuToggle hidden="false" class="main_menu">\n          <i class="icon-Menu"></i>\n          <span class="x-badge" *ngIf="notificationProvider.hasNotifications"></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <form class="service_details" [class.iosbookingcls]="platFormIsIOS" [formGroup]="bookingForm">\n    <ion-item class="serve_bgimg" [style.backgroundImage]="\'url(\' + backgroundImage + \')\'">\n      <div class="slider_caption">\n        <h2>{{item.nombre}}</h2>\n        <span class="slider_lbl" *ngIf="item.horario!=\'\'">\n          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            width="18px" height="18px" viewBox="0 0 2048 2048" enable-background="new 0 0 2048 2048" xml:space="preserve">\n            <g>\n              <path fill-rule="evenodd" clip-rule="evenodd" d="M342,783.8c-37.6-5.3-72.7-10.3-107.9-15.1c-20.8-2.9-34.1-13.6-38.6-31.6\n               c-4.6-18.2,2.6-35.7,20.2-47.3c96.6-63.5,198.1-118,305.3-161.5c5.7-2.3,11.5-4.3,17.3-6.1c24.7-7.4,43.8-0.8,54.2,22.7\n               c16.6,37.6,33.5,75.5,45.6,114.7c22.5,73.3,41.7,147.6,61.9,221.5c2.3,8.4,3.9,17.8,2.9,26.3c-4,34.4-39.7,48.5-69.5,27.5\n               c-15.5-10.9-30-23.1-45.1-34.6c-15.4-11.8-30.9-23.4-48.8-36.9c-28.8,72.4-37.5,145.9-31.7,220.5\n               c10.1,130.2,60.7,243.8,152.9,336.5c199.5,200.4,508.1,216.5,724.1,38.3c216.8-178.8,253.4-479.6,112.6-703\n               C1350.8,523.2,1017,415.5,738.5,600.9c-2.7-6.8-5.7-13.1-7.8-19.7c-18.2-56.1-35.9-112.3-54.5-168.3c-4.1-12.4-1.7-18.7,10.1-25\n               c85.7-46.3,176.4-75.3,273.4-86.6c132.7-15.4,260,4.1,382,56.7c114.1,49.2,209.7,123.7,287.3,221c80.6,101,131.5,215.4,152.8,342.4\n               c14,83.3,13.9,167.2-1.6,250.8c-43.6,234.4-171.5,409-376.7,527.2c-83.7,48.2-175.2,75.7-271.5,87.2\n               c-107.2,12.8-212.3,2.7-314.8-29.8c-104.5-33.1-197.4-87.1-278-161.5c-120.1-110.7-196.9-246.4-229.1-406.4\n               c-22.2-110.2-18.7-220.3,9.4-329.4C325.6,834.9,333.8,810.8,342,783.8z" />\n              <path fill-rule="evenodd" clip-rule="evenodd" d="M1252.1,1333.2c-17.1,2.7-33.4-2-47.7-14.9c-75.4-67.9-150.8-135.7-226.4-203.4\n               c-20.1-18-25.9-41.1-23.9-66.6c8.9-113.6,18.4-227.2,27.6-340.7c0.6-7.2,1-14.4,1.6-21.6c3.1-33.9,28.2-57.9,60.1-57.6\n               c30.3,0.3,56.6,25.3,60.2,56.7c10.6,91.3,23.7,182.4,31.1,274c3.3,41.4,16.1,75.3,40.6,108.2c38.2,51.3,73,105.1,109.2,158\n               c5.3,7.8,10.5,15.8,14.6,24.3C1317.2,1286.9,1294.8,1327.7,1252.1,1333.2z" />\n            </g>\n          </svg>\n          <label>{{item.horario}}</label>\n        </span>\n      </div>\n    </ion-item>\n    <div class="servc_bk_title">\n          <div class="btnPageCotainer btnPageactivitys">\n\n      <ion-item>\n        <p [innerHtml]="descriptionHtml"></p>\n      </ion-item>\n\n\n      <div class="service_date_turn">\n        <ion-item [class.select_full]="dateType==\'D\'" class="half_item name lft_padno">\n          <ion-label stacked>{{"view.reservation.label.date.title" | translate }}</ion-label>\n          <ion-datetime displayFormat="DDD D MMM" pickerFormat="DD/MMMM/YYYY" formControlName="date" type="text" placeholder="{{\'view.reservation.label.date.placeHolder\' | translate }}"\n            [min]="minDate" [max]="maxDate" cancelText="{{\'buttons.cancel\'  | translate }}" doneText="{{\'buttons.done\'  | translate }}"\n            [monthNames]="monthNames" [monthShortNames]="monthShortNames" [dayShortNames]="dayShortNames" (ionChange)="fnDateChange()"></ion-datetime>\n        </ion-item>\n        <ion-item *ngIf="dateType==\'C\'" class="half_item last_name">\n          <ion-label stacked>{{"view.reservation.label.time.title" | translate }}</ion-label>\n          <ion-select class="act_turn" interface="action-sheet" formControlName="time" placeholder="{{\'view.reservation.label.time.placeHolder\' | translate }}"\n            cancelText="{{\'buttons.cancel\'  | translate }}" okText="{{\'buttons.done\'  | translate }}">\n            <ion-option [value]="time" *ngFor="let time of timeSlots">{{time | translate}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf="dateType==\'T\'" class="half_item last_name">\n          <ion-label stacked>{{"view.reservation.label.turn.title" | translate }}</ion-label>\n          <ion-select class="act_turn" interface="action-sheet" formControlName="turn" placeholder="{{\'view.reservation.label.turn.placeHolder\' | translate }}"\n            cancelText="{{\'buttons.cancel\'  | translate }}" okText="{{\'buttons.done\'  | translate }}">\n            <ion-option [value]="turn.turno" *ngFor="let turn of turnList">{{turn.nombre | translate}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n      <ion-item class="person_chkbox name lft_padno">\n        <ion-label stacked>{{\'view.reservation.label.people.title\' | translate}} </ion-label>\n        <ion-select interface="action-sheet" formControlName="noOfPersons" cancelText="{{\'buttons.cancel\'  | translate }}">\n          <ion-option *ngFor="let item of personArray" [value]="item.value" [selected]="item.checked">{{item.text}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item class="service_spl_rqsts">\n        <ion-label stacked>{{\'view.reservation.label.comments.title\' | translate}} </ion-label>\n        <ion-textarea formControlName="specialRequests" placeholder="{{\'view.reservation.label.comments.placeHolder\' | translate}}"></ion-textarea>\n      </ion-item>\n    </div>\n    </div>\n    <ion-item class="footer_btn">\n      <button class="cmn_btn" (click)="fnSubmit(item)" ion-button>{{\'common.book\' | translate}}</button>\n    </ion-item>\n  </form>\n</ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/restaurant-booking/restaurant-booking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_6__providers_common_service_common_service__["a" /* CommonServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_restaurant_service_restaurant_service__["a" /* RestaurantServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_9__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], RestaurantBookingPage);
    return RestaurantBookingPage;
}());

//# sourceMappingURL=restaurant-booking.js.map

/***/ })

});
//# sourceMappingURL=1.js.map