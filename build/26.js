webpackJsonp([26],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotIdPageModule", function() { return ForgotIdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_id__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForgotIdPageModule = /** @class */ (function () {
    function ForgotIdPageModule() {
    }
    ForgotIdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_id__["a" /* ForgotIdPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_id__["a" /* ForgotIdPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ForgotIdPageModule);
    return ForgotIdPageModule;
}());

//# sourceMappingURL=forgot-id.module.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotIdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForgotIdPage = /** @class */ (function () {
    function ForgotIdPage(keyboard, navCtrl, navParams, formBuilder, sanitized, alertCtrl, iab, tools, cdRef, platForm) {
        var _this = this;
        this.keyboard = keyboard;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.sanitized = sanitized;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.tools = tools;
        this.cdRef = cdRef;
        this.platForm = platForm;
        this.isChecked = false;
        this.isCheckedPrivacy = false;
        this.htmlData = null; // to manage html content
        this.isKeyboardOpen = false;
        this.devicePlatForm = "android";
        this.forgotResevationIdForm = formBuilder.group({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            'surName': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            'locator': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('')
        });
        window.addEventListener('keyboardWillHide', function (event) {
            _this.isKeyboardOpen = false;
            _this.content.scrollToBottom();
        });
        if (this.platForm.is("ios")) {
            this.devicePlatForm = "ios";
        }
    }
    ForgotIdPage.prototype.fnKeyboardOpen = function () {
        this.isKeyboardOpen = true;
    };
    ForgotIdPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var current = this;
        this.res2 = this.tools.fnLanguageTranslate("view.login.label.privacy");
        this.res2.subscribe(function (value) {
            _this.htmlDataPrivacy = _this.sanitized.bypassSecurityTrustHtml(value);
            _this.cdRef.detectChanges();
            /* click binding to termsofservice span element and redirection */
            var termsElmnt1 = document.querySelector('ion-nav').querySelectorAll("#privacyPolicy");
            for (var i = 0; i < termsElmnt1.length; i++) {
                if (termsElmnt1[i]) {
                    termsElmnt1[i].addEventListener('click', function (e) {
                        current.iab.create(current.tools.getPrivacyUrl(), "_blank", "location=yes,toolbar=yes,hardwareback=yes");
                    });
                }
            }
            /* click binding to termsofservice span element and redirection */
            var termsElmnt = document.querySelector('ion-nav').querySelectorAll("#termsOfService");
            for (var i = 0; i < termsElmnt.length; i++) {
                if (termsElmnt[i]) {
                    termsElmnt[i].addEventListener('click', function (e) {
                        current.iab.create(current.tools.getLegalUrl(), "_blank", "location=yes,toolbar=yes,hardwareback=yes");
                    });
                }
            }
        });
    };
    ForgotIdPage.prototype.ionViewDidEnter = function () {
        this.keyboard.disableScroll(true);
    };
    /**
    * Function to go back to previous page
    */
    ForgotIdPage.prototype.fnGoBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    /**
     * function to select or deselect the radio button
     * @param  event
     */
    ForgotIdPage.prototype.fnOnRadioSelect = function ($event) {
        this.isChecked = !this.isChecked;
    };
    ForgotIdPage.prototype.fnOnRadioSelectPrivacy = function ($event) {
        this.isCheckedPrivacy = !this.isCheckedPrivacy;
    };
    /**
     * function to valdate and execute after submitting the form
     */
    ForgotIdPage.prototype.fnSubmit = function () {
        var _this = this;
        if (!this.forgotResevationIdForm.controls['email'].valid && !this.isCheckedPrivacy) {
            // if email is empty show error
            var msg = this.tools.fnLanguageTranslate(["view.login.error.emptyMail", "common.error", "buttons.ok"]); // translate of html content with common funtion
            msg.subscribe(function (value) {
                var alertnew = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: value['view.login.error.emptyMail'],
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
            // common error message - service unavailable
            var errmsg = this.tools.fnLanguageTranslate(["common.serviceIsUnavailable", "common.error", "buttons.ok"]); // translate of html content with common funtion
            errmsg.subscribe(function (value) {
                var alertnew = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: value['common.serviceIsUnavailable'],
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ForgotIdPage.prototype, "content", void 0);
    ForgotIdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-id',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/forgot-id/forgot-id.html"*/'<ion-content padding class="app_start_wrpr frgt_id_wrpr" no-bounce>\n\n  <form class="form_forgot" [formGroup]="forgotResevationIdForm">\n    <a href="" class="frgt_logo"></a>\n    <div class="app_start_inner app_start_adtn_inner">\n      <ion-item>\n        <ion-label>{{\'view.login.label.name.title\' | translate}}</ion-label>\n        <ion-input tappable (tap)="fnKeyboardOpen()" formControlName="name" id="name" type="text" placeholder="{{\'view.login.label.name.placeHolder\' | translate}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{\'view.login.label.surname.title\' | translate}}</ion-label>\n        <ion-input tappable (tap)="fnKeyboardOpen()" formControlName="surName" id="surName" type="text" placeholder="{{\'view.login.label.surname.placeHolder\' | translate}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{\'view.login.label.mail.title\' | translate}}</ion-label>\n        <ion-input tappable (tap)="fnKeyboardOpen()" formControlName="email" id="email" type="email" placeholder="{{\'view.login.label.mail.placeHolder\' | translate}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{\'view.login.label.locator.title\' | translate}}</ion-label>\n        <ion-input tappable (tap)="fnKeyboardOpen()" formControlName="locator" id="locator" type="text" placeholder="{{\'view.login.label.locator.placeHolder\' | translate}}"></ion-input>\n      </ion-item>\n      <ion-item  class="frgt_goback">\n        <a (click)="fnGoBack()">{{\'view.login.label.backview\' | translate}}</a>\n      </ion-item>\n      <ion-item class="serve_agree_btn forceFullWidth" *ngIf="devicePlatForm==\'android\'">\n        <ion-row >\n          <ion-col col-2 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines>\n              <ion-radio checked={{isChecked}} (ionSelect)="fnOnRadioSelect($event)" item-left></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-10 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines text-wrap>\n              <span>{{\'view.login.label.newsletter\' | translate}}</span>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item class="serve_agree_btn rdo_btn forceFullWidth" *ngIf="devicePlatForm==\'ios\'">\n        <ion-row >\n          <ion-col col-2 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines>\n              <ion-radio checked={{isChecked}} (ionSelect)="fnOnRadioSelect($event)" item-left></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-10 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines text-wrap>\n              <span>{{\'view.login.label.newsletter\' | translate}}</span>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item class="serve_agree_btn" *ngIf="devicePlatForm==\'android\'">\n        <ion-row >\n          <ion-col col-2 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines>\n              <ion-radio checked={{isCheckedPrivacy}} (ionSelect)="fnOnRadioSelectPrivacy($event)" item-left></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-10 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines text-wrap>\n              <span [innerHtml]="htmlDataPrivacy"></span>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item class="serve_agree_btn rdo_btn" *ngIf="devicePlatForm==\'ios\'">\n        <ion-row>\n          <ion-col col-2 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines>\n              <ion-radio checked={{isCheckedPrivacy}} (ionSelect)="fnOnRadioSelectPrivacy($event)" item-left></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-10 no-padding no-margin>\n            <ion-item no-padding no-margin no-lines text-wrap>\n              <span [innerHtml]="htmlDataPrivacy"></span>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div>\n    <span class="login_footer login_land_scpftr">\n      <ion-item class="login_btn_wrpr">\n        <button ion-button type="submit" (click)="fnSubmit()">{{\'view.login.label.login\' | translate}}</button>\n      </ion-item>\n    </span>\n  </form>\n  <span [class.login_footer_added]="isKeyboardOpen" class="login_footer login_prtrt_scpftr">\n    <ion-item class="login_btn_wrpr">\n      <button ion-button type="submit" (click)="fnSubmit()">{{\'view.login.label.requestId.button\' | translate}}</button>\n    </ion-item>\n  </span>\n\n  <!-- <span [class.login_footer_added]="isKeyboardOpen" class="login_footer">\n    <ion-item class="login_btn_wrpr">\n      <button ion-button type="submit" (click)="fnSubmit()">{{\'view.login.label.requestId.button\' | translate}}</button>\n    </ion-item>\n    <span [innerHtml]="htmlData" class="login_ftr_content">\n    </span>\n  </span> -->\n</ion-content>\n\n\n<!--<ion-footer>\n  <span class="login_footer">\n    <ion-item class="login_btn_wrpr">\n      <button ion-button type="submit" (click)="fnSubmit()">{{\'view.login.label.requestId.button\' | translate}}</button>\n    </ion-item>\n    <span [innerHtml]="htmlData" class="login_ftr_content">\n    </span>\n  </span>\n</ion-footer>-->\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/forgot-id/forgot-id.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], ForgotIdPage);
    return ForgotIdPage;
}());

//# sourceMappingURL=forgot-id.js.map

/***/ })

});
//# sourceMappingURL=26.js.map