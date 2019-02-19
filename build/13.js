webpackJsonp([13],{

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoommakeupDetailsPageModule", function() { return RoommakeupDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_makeup_details__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RoommakeupDetailsPageModule = /** @class */ (function () {
    function RoommakeupDetailsPageModule() {
    }
    RoommakeupDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__room_makeup_details__["a" /* RoommakeupDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__room_makeup_details__["a" /* RoommakeupDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], RoommakeupDetailsPageModule);
    return RoommakeupDetailsPageModule;
}());

//# sourceMappingURL=room-makeup-details.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoommakeupDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_service_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_roommakeup_service_roommakeup_service__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//Xevi

/**
 * Generated class for the RestaurantBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoommakeupDetailsPage = /** @class */ (function () {
    function RoommakeupDetailsPage(navCtrl, navParams, formBuilder, toolsPvdr, sanitized, commonProvider, roommakeupProvider, alertCtrl, toastCtrl, cdRef, notificationProvider, loadingCtrl, platForm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toolsPvdr = toolsPvdr;
        this.sanitized = sanitized;
        this.commonProvider = commonProvider;
        this.roommakeupProvider = roommakeupProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
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
        this.type = this.navParams.get('itemId');
        //this.item = this.navParams.get('item'); // gets item
        if (this.type == 1) {
            this.descriptionHtml = 'Selecione hasta que hora no desea ser molestado y agregue los comentarios que considere oportunos. Nuestro staff se encargará de gestionarlo.';
            this.backgroundImage = 'assets/imgs/housekeeping/nodisturb_background.jpg';
        }
        else {
            this.descriptionHtml = 'Agregue los comentarios que considere oportunos. Nuestro staff se encargará de gestionarlo.';
            this.backgroundImage = 'assets/imgs/housekeeping/room_makeup_background.jpg';
        }
        this.makeupForm = this.formBuilder.group({
            'specialRequests': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            'time': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required]),
        });
    }
    RoommakeupDetailsPage.prototype.ionViewDidLoad = function () {
        var hour = new Date().getHours();
        var minute = new Date().getMinutes();
        if (minute >= 30) {
            hour = hour + 1;
            minute = 0;
        }
        else {
            minute = 30;
        }
        //this.fndebug(hour + ":" + minute);
        this.timeSlots = this.commonProvider.fnConvertToTimeSlotsArray(hour + ":" + minute, "23:30", 30);
        //this.fndebug(this.timeSlots);
    };
    // store entered data into model before leaving page
    RoommakeupDetailsPage.prototype.ionViewWillLeave = function () {
    };
    //function to go to previous page
    RoommakeupDetailsPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    RoommakeupDetailsPage.prototype.fnSubmit = function () {
        var _this = this;
        if (this.makeupForm.valid) {
            //Dont Disturb
            if (this.type == 1) {
                //Enviem la petició i esperem resposta....
                this.roommakeupProvider.sendDontDisturbData('', this.makeupForm.get('time').value, this.makeupForm.get('specialRequests').value, 202, 122332)
                    .subscribe(function (data) {
                    _this.fndebug(data);
                    var alertnew = _this.alertCtrl.create({
                        title: 'ALERT',
                        message: _this.makeupForm.status,
                        cssClass: 'cls_alrt',
                        buttons: [
                            {
                                text: 'OK',
                                role: 'cancel'
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
    RoommakeupDetailsPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    //Xevi
    RoommakeupDetailsPage.prototype.fndebug = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    RoommakeupDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roommakeupdetails',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/room-makeup-details/room-makeup-details.html"*/'<ion-content id="homecontent" class="home_container" no-bounce>\n  <ion-header>\n    <ion-navbar>\n      <ion-title>TITLE</ion-title>\n      <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n        <i class="icon-arrow-left2"></i>\n      </button>\n      <ion-buttons end>\n        <button ion-button menuToggle hidden="false" class="main_menu">\n          <i class="icon-Menu"></i>\n          <span class="x-badge" *ngIf="notificationProvider.hasNotifications"></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <form class="service_details" [class.iosbookingcls]="platFormIsIOS" [formGroup]="makeupForm">\n    <ion-item class="serve_bgimg" [style.backgroundImage]="\'url(\' + backgroundImage + \')\'">\n    </ion-item>\n    <div class="servc_bk_title">\n          <div class="btnPageCotainer">\n\n      <ion-item>\n        <p [innerHtml]="descriptionHtml"></p>\n      </ion-item>\n\n\n      <div class="service_date_turn" *ngIf="type==1">\n        <ion-item class="last_name">\n          <ion-label stacked>Time</ion-label>\n          <ion-select class="act_turn" interface="action-sheet" formControlName="time" placeholder="{{\'view.reservation.label.time.placeHolder\' | translate }}"\n            cancelText="{{\'buttons.cancel\'  | translate }}" okText="{{\'buttons.done\'  | translate }}">\n            <ion-option [value]="time" *ngFor="let time of timeSlots">{{time | translate}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n      <ion-item class="service_spl_rqsts">\n        <ion-textarea formControlName="specialRequests" placeholder="{{\'view.reservation.label.comments.placeHolder\' | translate}}"></ion-textarea>\n      </ion-item>\n    </div>\n    </div>\n    <ion-item class="footer_btn">\n      <button class="cmn_btn" (click)="fnSubmit()" ion-button>SEND</button>\n    </ion-item>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/room-makeup-details/room-makeup-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_4__providers_common_service_common_service__["a" /* CommonServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_roommakeup_service_roommakeup_service__["a" /* RoommakeupServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], RoommakeupDetailsPage);
    return RoommakeupDetailsPage;
}());

//# sourceMappingURL=room-makeup-details.js.map

/***/ })

});
//# sourceMappingURL=13.js.map