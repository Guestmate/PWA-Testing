webpackJsonp([25],{

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoStayInHotelPageModule", function() { return NoStayInHotelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_stay_in_hotel__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NoStayInHotelPageModule = /** @class */ (function () {
    function NoStayInHotelPageModule() {
    }
    NoStayInHotelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__no_stay_in_hotel__["a" /* NoStayInHotelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__no_stay_in_hotel__["a" /* NoStayInHotelPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], NoStayInHotelPageModule);
    return NoStayInHotelPageModule;
}());

//# sourceMappingURL=no-stay-in-hotel.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoStayInHotelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_nostay_service_nostay_service__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_hotel_model__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__model_reservation_model__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__model_guest_data_model__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_guest_service_guest_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_keyboard__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var NoStayInHotelPage = /** @class */ (function () {
    function NoStayInHotelPage(keyboard, navCtrl, navParams, formBuilder, alertCtrl, sanitized, toolsPvdr, cdRef, iab, translate, noStayPvdr, reservationPvdr, hotelPvdr, events, loadingCtrl, nativeStorage, guestPvdr, transfer, file, platForm) {
        var _this = this;
        this.keyboard = keyboard;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.sanitized = sanitized;
        this.toolsPvdr = toolsPvdr;
        this.cdRef = cdRef;
        this.iab = iab;
        this.translate = translate;
        this.noStayPvdr = noStayPvdr;
        this.reservationPvdr = reservationPvdr;
        this.hotelPvdr = hotelPvdr;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.guestPvdr = guestPvdr;
        this.transfer = transfer;
        this.file = file;
        this.platForm = platForm;
        this.isKeyboardOpen = false;
        this.isChecked = false; // to manage radio button
        this.htmlData = null; // to manage html content
        this.radioBtnCls = "serve_agree_btn";
        this.devicePlatForm = "android";
        this.isCheckedPrivacy = false;
        this.noStayInHotelForm = formBuilder.group({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            'surName': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])
        });
        window.addEventListener('keyboardWillHide', function (event) {
            _this.isKeyboardOpen = false;
            _this.content.scrollToBottom();
        });
        if (this.platForm.is("ios")) {
            this.radioBtnCls = "serve_agree_btn rdo_btn nostay_rdo_btn";
            this.devicePlatForm = "ios";
        }
    }
    NoStayInHotelPage.prototype.fnKeyboardOpen = function () {
        this.isKeyboardOpen = true;
    };
    NoStayInHotelPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var current = this;
        this.res2 = this.toolsPvdr.fnLanguageTranslate("view.login.label.privacy");
        this.res2.subscribe(function (value) {
            _this.htmlDataPrivacy = _this.sanitized.bypassSecurityTrustHtml(value);
            _this.cdRef.detectChanges();
            /* click binding to termsofservice span element and redirection */
            var termsElmnt1 = document.querySelector('ion-nav').querySelectorAll("#privacyPolicy");
            for (var i = 0; i < termsElmnt1.length; i++) {
                if (termsElmnt1[i]) {
                    termsElmnt1[i].addEventListener('click', function (e) {
                        current.iab.create(current.toolsPvdr.getPrivacyUrl(), "_blank", "location=yes,toolbar=yes,hardwareback=yes");
                    });
                }
            }
            /* click binding to termsofservice span element and redirection */
            var termsElmnt = document.querySelector('ion-nav').querySelectorAll("#termsOfService");
            for (var i = 0; i < termsElmnt.length; i++) {
                if (termsElmnt[i]) {
                    termsElmnt[i].addEventListener('click', function (e) {
                        current.iab.create(current.toolsPvdr.getLegalUrl(), "_blank", "location=yes,toolbar=yes,hardwareback=yes");
                    });
                }
            }
        });
    };
    NoStayInHotelPage.prototype.ionViewDidEnter = function () {
        this.keyboard.disableScroll(true);
    };
    /**
     * Function to go back to previous page
     */
    NoStayInHotelPage.prototype.fnGoBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    /**
     * function to select and deselect the radio button
     * @param  event
     */
    NoStayInHotelPage.prototype.fnOnRadioSelect = function ($event) {
        this.isChecked = !this.isChecked;
    };
    NoStayInHotelPage.prototype.fnOnRadioSelectPrivacy = function ($event) {
        this.isCheckedPrivacy = !this.isCheckedPrivacy;
    };
    /**
     * function to valdate and execute after submitting the form
     */
    NoStayInHotelPage.prototype.fnSubmit = function () {
        var _this = this;
        if (!this.noStayInHotelForm.valid && !this.isCheckedPrivacy) {
            var emptyFields_1 = []; // to add empty fields in the form
            var alertMessage_1; // to show alert message on validation
            if (this.noStayInHotelForm.controls['name'].hasError('required')) {
                this.toolsPvdr.fnLanguageTranslate("view.login.label.name.title").subscribe(function (res) {
                    emptyFields_1.push(res);
                });
            }
            if (this.noStayInHotelForm.controls['surName'].hasError('required')) {
                this.toolsPvdr.fnLanguageTranslate("view.login.label.surname.title").subscribe(function (res) {
                    emptyFields_1.push(res);
                });
            }
            if (this.noStayInHotelForm.controls['email'].hasError('required')) {
                this.toolsPvdr.fnLanguageTranslate("view.login.label.mail.title").subscribe(function (res) {
                    emptyFields_1.push(res);
                });
            }
            // for language translation
            var msg = this.toolsPvdr.fnLanguageTranslateWithParam(["common.mandatoryFields", "view.login.error.emptyMail", "common.error", "buttons.ok"], { fields: emptyFields_1 }); // translate of html content with common funtion
            if (this.noStayInHotelForm.controls['name'].hasError('required')
                || this.noStayInHotelForm.controls['surName'].hasError('required')
                || this.noStayInHotelForm.controls['email'].hasError('required')) {
                msg.subscribe(function (value) {
                    alertMessage_1 = value['common.mandatoryFields'];
                });
                console.log("testerror");
            }
            else {
                msg.subscribe(function (value) {
                    alertMessage_1 = value['view.login.error.emptyMail'];
                });
            }
            msg.subscribe(function (value) {
                var alertnew = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: alertMessage_1,
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
            var name_1 = this.noStayInHotelForm.get('name').value;
            var surname = this.noStayInHotelForm.get('surName').value;
            var email = this.noStayInHotelForm.get('email').value;
            var contactphone = '';
            var newsletter = this.isChecked;
            this.showLoading();
            this.noStayPvdr.fnNoStayLoginProceed(name_1, surname, email, newsletter, contactphone).subscribe(function (data) {
                if (data.success == true) {
                    _this.hotelPvdr.objHotel = new __WEBPACK_IMPORTED_MODULE_12__model_hotel_model__["a" /* Hotel */](); //hotel model object
                    _this.reservationPvdr.objReservation = new __WEBPACK_IMPORTED_MODULE_13__model_reservation_model__["a" /* Reservation */](); //hotel model object
                    _this.guestPvdr.objGuest = new __WEBPACK_IMPORTED_MODULE_14__model_guest_data_model__["a" /* GuestData */](); // nostay guest object
                    // set guest data to guest object
                    _this.guestPvdr.objGuest.name = data.response.name;
                    _this.guestPvdr.objGuest.reservationId = data.response.reservaId;
                    _this.guestPvdr.objGuest.lastName = data.response.surname;
                    _this.guestPvdr.objGuest.email = data.response.email;
                    _this.guestPvdr.objGuest.phone = data.response.contactphone;
                    _this.reservationPvdr.objReservation.noStayGuest = true;
                    _this.reservationPvdr.objReservation.createdDate = data.response.entrada;
                    _this.reservationPvdr.objReservation.hotelName = data.response.nombreHotel;
                    _this.reservationPvdr.objReservation.reservationId = data.response.reservaId;
                    _this.reservationPvdr.objReservation.guestName = data.response.name;
                    _this.reservationPvdr.objReservation.alreadyRegistered = true;
                    _this.reservationPvdr.objReservation.registrationCompleted = true;
                    // set loacl storage
                    _this.nativeStorage.setItem('reservationData', { 'localizer': '', 'reservationId': data.response.reservaId, 'name': data.response.name, 'lastname': data.response.surname, 'email': data.response.email, 'registrationCompleted': true, 'alreadyRegistered': true, 'noStayGuest': true, 'response': data.response })
                        .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
                    _this.reservationPvdr.getHotelDetails(_this.reservationPvdr.objReservation.reservationId).subscribe(function (data) {
                        if (data) {
                            _this.reservationPvdr.getHotelInfo(data);
                            // default receptionist Text translate
                            var defaultTextTranslate = _this.toolsPvdr.fnLanguageTranslate("view.reception.message");
                            var defaultText_1 = '';
                            defaultTextTranslate.subscribe(function (value) {
                                defaultText_1 = value;
                            });
                            //replace guestname and receptionist name in receptionist Text
                            var receptionText = _this.hotelPvdr.objHotel.receptionistText ? _this.hotelPvdr.objHotel.receptionistText : defaultText_1;
                            _this.hotelPvdr.objHotel.receptionistText = receptionText.replace('{nombreHuesped}', _this.reservationPvdr.objReservation.guestName).replace('{nombreRecepcionista}', _this.hotelPvdr.objHotel.receptionistName);
                            _this.downloadHomePagebackgroundImage();
                        }
                        // hotel details
                    });
                }
                else if (data) {
                    _this.loading.dismiss();
                    var errmsg = _this.toolsPvdr.fnLanguageTranslate(["common.error", "view.login." + data.errorCode, "buttons.ok"], "view.login.error.credentials"); // translate of error message
                    errmsg.subscribe(function (value) {
                        var alertnew = _this.alertCtrl.create({
                            title: value['common.error'],
                            message: value["view.login." + data.errorCode] ? value["view.login." + data.errorCode] : value["view.login.error.credentials"],
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
            }, function (error) {
                _this.loading.dismiss();
            });
        }
    };
    // download home page background image
    NoStayInHotelPage.prototype.downloadHomePagebackgroundImage = function () {
        var _this = this;
        var backgroundImage = this.toolsPvdr.getImagePath(this.hotelPvdr.objHotel.mainImage);
        this.file.checkFile(this.file.cacheDirectory, this.hotelPvdr.objHotel.mainImage + ".jpg").then(function () {
            _this.loading.dismiss();
            _this.hotelPvdr.objHotel.mainImageUrl = _this.file.cacheDirectory + _this.hotelPvdr.objHotel.mainImage + ".jpg";
            if (_this.platForm.is('ios')) {
                _this.hotelPvdr.objHotel.mainImageUrl = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(_this.file.cacheDirectory + _this.hotelPvdr.objHotel.mainImage + ".jpg");
            }
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */], {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
        }, function (error) {
            var fileTransfer = _this.transfer.create();
            fileTransfer.download(backgroundImage, _this.file.cacheDirectory + _this.hotelPvdr.objHotel.mainImage + ".jpg").then(function (entry) {
                _this.loading.dismiss();
                _this.hotelPvdr.objHotel.mainImageUrl = entry.toURL();
                if (_this.platForm.is('ios')) {
                    _this.hotelPvdr.objHotel.mainImageUrl = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(entry.toURL());
                }
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */], {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
            }, function (error) {
            });
        });
    };
    //loader
    NoStayInHotelPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], NoStayInHotelPage.prototype, "content", void 0);
    NoStayInHotelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-no-stay-in-hotel',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/no-stay-in-hotel/no-stay-in-hotel.html"*/'<ion-content padding class="app_start_wrpr nt_nstay_wrpr" no-bounce>\n\n  <form [formGroup]="noStayInHotelForm">\n    <span class="frgt_logo"></span>\n    <div class="app_start_inner app_start_adtn_inner">\n      <ion-item>\n        <ion-label>{{\'view.login.label.name.title\' | translate}}</ion-label>\n        <ion-input tappable (tap)="fnKeyboardOpen()" formControlName="name" type="text" placeholder="{{\'view.login.label.name.placeHolder\' | translate}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{\'view.login.label.surname.title\' | translate}}</ion-label>\n        <ion-input tappable (tap)="fnKeyboardOpen()" formControlName="surName" type="text" placeholder="{{\'view.login.label.surname.placeHolder\' | translate}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{\'view.login.label.mail.title\' | translate}}</ion-label>\n        <ion-input tappable (tap)="fnKeyboardOpen()" formControlName="email" type="email" placeholder="{{\'view.login.label.mail.placeHolder\' | translate}}"></ion-input>\n      </ion-item>\n      <ion-item class="frgt_goback">\n        <a (click)="fnGoBack()">{{\'view.login.label.backview\' | translate}}</a>\n      </ion-item>\n      <ion-item class="serve_agree_btn forceFullWidth" *ngIf="devicePlatForm==\'android\'">\n        <ion-row >\n          <ion-col col-2 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines>\n              <ion-radio checked={{isChecked}} (ionSelect)="fnOnRadioSelect($event)" item-left></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-10 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines text-wrap>\n              <span>{{\'view.login.label.newsletter\' | translate}}</span>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item class="serve_agree_btn rdo_btn forceFullWidth" *ngIf="devicePlatForm==\'ios\'">\n        <ion-row >\n          <ion-col col-2 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines>\n              <ion-radio checked={{isChecked}} (ionSelect)="fnOnRadioSelect($event)" item-left></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-10 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines text-wrap>\n              <span>{{\'view.login.label.newsletter\' | translate}}</span>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item class="serve_agree_btn" *ngIf="devicePlatForm==\'android\'">\n        <ion-row >\n          <ion-col col-2 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines>\n              <ion-radio checked={{isCheckedPrivacy}} (ionSelect)="fnOnRadioSelectPrivacy($event)" item-left></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-10 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines text-wrap>\n              <span [innerHtml]="htmlDataPrivacy"></span>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item class="serve_agree_btn rdo_btn" *ngIf="devicePlatForm==\'ios\'">\n        <ion-row>\n          <ion-col col-2 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines>\n              <ion-radio checked={{isCheckedPrivacy}} (ionSelect)="fnOnRadioSelectPrivacy($event)" item-left></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-10 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines text-wrap>\n              <span [innerHtml]="htmlDataPrivacy"></span>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div>\n    <span class="login_footer login_land_scpftr">\n      <ion-item class="login_btn_wrpr">\n        <button ion-button type="submit" (click)="fnSubmit()">{{\'view.login.label.login\' | translate}}</button>\n      </ion-item>\n      </span>\n  </form>\n  <span [class.login_footer_added]="isKeyboardOpen" class="login_footer login_prtrt_scpftr">\n    <ion-item class="login_btn_wrpr">\n      <button ion-button type="submit" (click)="fnSubmit()">{{\'view.login.label.login\' | translate}}</button>\n    </ion-item>\n    </span>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/no-stay-in-hotel/no-stay-in-hotel.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_16__ionic_native_keyboard__["a" /* Keyboard */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_16__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__providers_nostay_service_nostay_service__["a" /* NostayServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_15__providers_guest_service_guest_service__["a" /* GuestServiceProvider */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], NoStayInHotelPage);
    return NoStayInHotelPage;
}());

//# sourceMappingURL=no-stay-in-hotel.js.map

/***/ })

});
//# sourceMappingURL=25.js.map