webpackJsonp([11],{

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomServiceBookingPageModule", function() { return RoomServiceBookingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_service_booking__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RoomServiceBookingPageModule = /** @class */ (function () {
    function RoomServiceBookingPageModule() {
    }
    RoomServiceBookingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__room_service_booking__["a" /* RoomServiceBookingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__room_service_booking__["a" /* RoomServiceBookingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], RoomServiceBookingPageModule);
    return RoomServiceBookingPageModule;
}());

//# sourceMappingURL=room-service-booking.module.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomServiceBookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rooms_service_rooms_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_service_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_notification_notification__ = __webpack_require__(41);
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
 * Generated class for the RoomServiceBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomServiceBookingPage = /** @class */ (function () {
    function RoomServiceBookingPage(navCtrl, navParams, formBuilder, toolsPvdr, alertCtrl, sanitized, roomsProvider, commonProvider, reservationProvider, notificationProvider, loadingCtrl, platForm) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toolsPvdr = toolsPvdr;
        this.alertCtrl = alertCtrl;
        this.sanitized = sanitized;
        this.roomsProvider = roomsProvider;
        this.commonProvider = commonProvider;
        this.reservationProvider = reservationProvider;
        this.notificationProvider = notificationProvider;
        this.loadingCtrl = loadingCtrl;
        this.platForm = platForm;
        this.timeSlots = [];
        this.monthShortNames = []; // for month short names
        this.minDate = new Date();
        this.platFormIsIOS = false;
        this.roomServiceBookingForm = this.formBuilder.group({
            'comments': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            'date': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            'time': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
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
        if (this.platForm.is("ios")) {
            this.platFormIsIOS = true;
        }
    }
    RoomServiceBookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomServiceBookingPage');
        console.log(this.roomsProvider.objRoomService);
        this.itemList = this.roomsProvider.objRoomService.currentOrderList;
        for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.isSelected == true) {
                this.backgroundImage = item.imgPath;
                break;
            }
        }
        this.maxDate = this.toolsPvdr.fnDateFormatChange(this.commonProvider.calculateMaxDate());
        this.minDate = this.toolsPvdr.fnGetToday();
        var defaultTextTranslate = this.toolsPvdr.fnLanguageTranslate("view.reservation.label.roomservice"); // language translation
        var defaultText = '';
        defaultTextTranslate.subscribe(function (value) {
            defaultText = value;
        });
        // bypass HTML tags 
        this.descriptionHtml = this.sanitized.bypassSecurityTrustHtml(defaultText);
        //inserts all time intervals into array timeSlots
        this.timeSlots = this.roomsProvider.fnGetTimeSlotsForRoomService();
        //to set start date based on time slots available
        var lastTimeInterval = this.timeSlots.length > 0 ? this.timeSlots[this.timeSlots.length - 1] : "0:00";
        this.minDate = this.toolsPvdr.fnSetStartDate(lastTimeInterval);
        this.fnCheckPreEnteredFormData();
    };
    // fetch pre-entered data into fields from model
    RoomServiceBookingPage.prototype.fnCheckPreEnteredFormData = function () {
        if (this.commonProvider.objFormData && this.commonProvider.objFormData.roomservice) {
            this.commonProvider.objFormData.roomservice.bookingCompleted = false;
            this.roomServiceBookingForm.get("date").setValue(this.commonProvider.objFormData.roomservice.date);
            this.roomServiceBookingForm.controls['time'] && this.roomServiceBookingForm.get("time").setValue(this.commonProvider.objFormData.roomservice.time);
            this.roomServiceBookingForm.get("comments").setValue(this.commonProvider.objFormData.roomservice.comments);
        }
    };
    // store entered data into model before leaving page
    RoomServiceBookingPage.prototype.ionViewWillLeave = function () {
        if (this.commonProvider.objFormData.roomservice.bookingCompleted != true) {
            this.commonProvider.objFormData.roomservice.date = this.roomServiceBookingForm.get('date').value;
            this.commonProvider.objFormData.roomservice.time = this.roomServiceBookingForm.controls['time'] && this.roomServiceBookingForm.get('time').value;
            this.commonProvider.objFormData.roomservice.comments = this.roomServiceBookingForm.get('comments').value;
        }
    };
    RoomServiceBookingPage.prototype.fnDateChange = function () {
        var date = this.toolsPvdr.fnDateFormatChange(this.roomServiceBookingForm.controls['date'] && new Date(this.roomServiceBookingForm.get('date').value));
        var isToday;
        var today = this.toolsPvdr.fnGetToday();
        if (date == today) {
            isToday = true;
        }
        else {
            isToday = false;
        }
        //inserts all time intervals into array timeSlots
        this.timeSlots = this.roomsProvider.fnGetTimeSlotsForRoomService(isToday);
    };
    //function to go to previous page
    RoomServiceBookingPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    RoomServiceBookingPage.prototype.fnSubmit = function () {
        var _this = this;
        // if already check-out completed 
        if (this.reservationProvider.objReservation.alreadyVerifiedCheckOut) {
            var checkinMsg = this.toolsPvdr.fnLanguageTranslate(['common.error', "view.reservation.error.checkoutYaRealizado", "buttons.ok"]);
            checkinMsg.subscribe(function (value) {
                var alertCheckin = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: value['view.reservation.error.checkoutYaRealizado'],
                    cssClass: 'cls_alrt',
                    buttons: [
                        {
                            text: value['buttons.ok'],
                            role: 'cancel',
                            handler: function (data) {
                            }
                        }
                    ]
                });
                alertCheckin.present();
                setTimeout(function () { alertCheckin.dismiss(); }, 5000);
            });
            return;
        }
        else {
            if (this.roomServiceBookingForm.controls['date'].hasError('required')) {
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
                                    var time = _this.roomServiceBookingForm.controls['time'] && _this.roomServiceBookingForm.get('time').value ? _this.roomServiceBookingForm.get('time').value + ':00' : '00:00:00';
                                    bookingDate = _this.toolsPvdr.dateFormatChangeForService(_this.roomServiceBookingForm.controls['date'] && new Date(_this.roomServiceBookingForm.get('date').value)).split(" ")[0] + ' ' + time;
                                    var date = bookingDate;
                                    var comments = _this.roomServiceBookingForm.get('comments').value;
                                    _this.roomsProvider.sendRoomServiceRequest(date, comments).subscribe(function (data) {
                                        _this.loading.dismiss();
                                        if (data.success == true) {
                                            _this.roomServiceBookingForm.reset();
                                            _this.commonProvider.objFormData.restaurant = [];
                                            _this.commonProvider.objFormData.roomservice.bookingCompleted = true;
                                            //set selected quantity as 0
                                            for (var i = 0; i < _this.roomsProvider.objRoomService.currentOrderList.length; i++) {
                                                for (var j = 0; j < _this.roomsProvider.objRoomService.currentOrderList[i].availableItems.length; j++) {
                                                    _this.roomsProvider.objRoomService.currentOrderList[i].availableItems[j].quantity = 0;
                                                    _this.roomsProvider.objRoomService.currentOrderList[i].isSelected = false;
                                                }
                                            }
                                            for (var i = 0; i < _this.roomsProvider.objRoomService.serviceItemsList.length; i++) {
                                                _this.roomsProvider.objRoomService.serviceItemsList[i].quantity = 0;
                                            }
                                            _this.roomsProvider.objRoomService.cartTotal = 0;
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
        }
    };
    //Loader
    RoomServiceBookingPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    RoomServiceBookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-room-service-booking',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/room-service-booking/room-service-booking.html"*/'<ion-content id="homecontent" class="home_container">\n  <ion-header>\n    <ion-navbar>\n      <ion-title>{{\'view.servicioHabitacion.title\' | translate}}</ion-title>\n      <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n        <i class="icon-arrow-left2"></i>\n      </button>\n      <ion-buttons end>\n        <button ion-button menuToggle hidden="false" class="main_menu">\n          <i class="icon-Menu"></i>\n          <span class="x-badge" *ngIf="notificationProvider.hasNotifications"></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <form class="service_details" [class.iosbookingcls]="platFormIsIOS" [formGroup]="roomServiceBookingForm">\n    <ion-item class="serve_bgimg roomservive_bkng_bnr" [style.backgroundImage]="\'url(\' + backgroundImage + \')\'">\n    </ion-item>\n    <div class="servc_bk_title">\n        <div class="btnPageCotainer">\n      <ion-item>\n        <p [innerHtml]="descriptionHtml"></p>\n      </ion-item>\n\n      <div class="service_date_turn">\n        <ion-item class="half_item name lft_padno">\n          <ion-label stacked>{{"view.reservation.label.date.title" | translate }}</ion-label>\n          <ion-datetime displayFormat="DDD D MMM" pickerFormat="DD/MMMM/YYYY" formControlName="date" type="text" placeholder="{{\'view.reservation.label.date.placeHolder\' | translate }}"\n            [min]="minDate" [max]="maxDate" cancelText="{{\'buttons.cancel\'  | translate }}" doneText="{{\'buttons.done\'  | translate }}"\n            [monthNames]="monthNames" [monthShortNames]="monthShortNames" (ionChange)="fnDateChange()"></ion-datetime>\n        </ion-item>\n        <ion-item class="half_item last_name">\n          <ion-label stacked>{{"view.reservation.label.time.title" | translate }}</ion-label>\n          <ion-select class="act_turn" interface="action-sheet" formControlName="time" placeholder="{{\'view.reservation.label.time.placeHolder\' | translate }}"\n            cancelText="{{\'buttons.cancel\'  | translate }}" okText="{{\'buttons.done\'  | translate }}">\n            <ion-option [value]="time" *ngFor="let time of timeSlots">{{time | translate}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n      <ion-item class="room_service_textarea">\n        <ion-label stacked>{{\'view.reservation.label.comments.title\' | translate}} </ion-label>\n        <ion-textarea formControlName="comments" placeholder="{{\'view.reservation.label.comments.placeHolder\' | translate}}"></ion-textarea>\n      </ion-item>\n    </div>\n    </div>\n    <ion-item class="footer_btn">\n      <button class="cmn_btn" (click)="fnSubmit()" ion-button>{{\'common.book\' | translate}}</button>\n    </ion-item>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/room-service-booking/room-service-booking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_5__providers_rooms_service_rooms_service__["a" /* RoomsServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_common_service_common_service__["a" /* CommonServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], RoomServiceBookingPage);
    return RoomServiceBookingPage;
}());

//# sourceMappingURL=room-service-booking.js.map

/***/ })

});
//# sourceMappingURL=11.js.map