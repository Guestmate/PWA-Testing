webpackJsonp([23],{

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassportPicturePageModule", function() { return PassportPicturePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passport_picture__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PassportPicturePageModule = /** @class */ (function () {
    function PassportPicturePageModule() {
    }
    PassportPicturePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__passport_picture__["a" /* PassportPicturePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__passport_picture__["a" /* PassportPicturePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], PassportPicturePageModule);
    return PassportPicturePageModule;
}());

//# sourceMappingURL=passport-picture.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassportPicturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_checkin_service_checkin_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(26);
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
 * Generated class for the PassportPicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PassportPicturePage = /** @class */ (function () {
    function PassportPicturePage(navCtrl, navParams, camera, checkinProvider, tools, platForm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.checkinProvider = checkinProvider;
        this.tools = tools;
        this.platForm = platForm;
        this.passportImage = 'assets/imgs/background_photo.jpg';
        this.isPhotoAdded = false;
        this.photoTemplateHtml = '';
        this.devicePlatForm = "android";
        if (this.platForm.is('ios')) {
            this.devicePlatForm = "ios";
        }
    }
    PassportPicturePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.formIndex = this.navParams.get('formIndex');
        this.documentType = this.navParams.get('documentType');
        console.log('ionViewDidLoad PassportPicturePage');
        var photoTemplate = this.tools.fnLanguageTranslate("view.checkin.template.foto");
        photoTemplate.subscribe(function (value) {
            _this.photoTemplateHtml = value;
        });
        if (this.checkinProvider.objCheckin && this.checkinProvider.objCheckin.pictureFront[this.formIndex]) {
            var prevImageData = this.checkinProvider.objCheckin.pictureFront[this.formIndex];
            this.passportImage = "data:image/jpeg;base64," + prevImageData;
        }
    };
    PassportPicturePage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    PassportPicturePage.prototype.fnGetPassportPicture = function () {
        this.fnAttachFile(this.camera.PictureSourceType.CAMERA);
        this.isPhotoAdded = true;
    };
    PassportPicturePage.prototype.fnAttachFile = function (sourceType) {
        var _this = this;
        var imageoptions = {
            quality: 30,
            targetWidth: 500,
            targetHeight: 500,
            allowEdit: true,
            sourceType: sourceType,
            mediaType: this.camera.MediaType.PICTURE,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        return this.camera.getPicture(imageoptions)
            .then(function (imageData) {
            console.log('fileUri: ' + imageData);
            _this.passportImage = "data:image/jpeg;base64," + imageData;
            _this.checkinProvider.objCheckin.pictureFront[_this.formIndex] = imageData;
        }).catch(function (error) {
            console.log("Camera error" + error);
        });
    };
    PassportPicturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-passport-picture',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/passport-picture/passport-picture.html"*/'<ion-header class="header_menu hdr_wtout_mnu">\n  <ion-navbar>\n    <ion-title>{{\'view.checkin.title\' | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n      <img src="assets/svg/left-arrow.svg" class="hdr_back_btn">\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="passport_pic_wrpr" no-bounce>\n  <ion-item class="info_hdg">\n    {{documentType}}\n  </ion-item>\n  <div [style.backgroundImage]="\'url(\' + passportImage + \')\'"  class="passport_pic_inr">\n    <button (click)="fnGetPassportPicture()" class="passport_btn">\n      <i class="icon-Activities"></i>\n    </button>\n  </div>\n\n  <ion-item class="footerfixed_btn" *ngIf="devicePlatForm!=\'ios\'">\n    <p class="checkin_ftr_txt passprt_pic_text"  [innerHtml]="photoTemplateHtml"></p>\n    <button class="cmn_btn" (click)="fnBack()" ion-button>{{\'misc.back\' | translate}}</button>\n  </ion-item>\n  <ion-item class="footerfixed_btn ios_footer_btn" *ngIf="devicePlatForm==\'ios\'">\n    <p class="checkin_ftr_txt passprt_pic_text"  [innerHtml]="photoTemplateHtml"></p>\n    <button class="cmn_btn" (click)="fnBack()" ion-button>{{\'misc.back\' | translate}}</button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/passport-picture/passport-picture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], PassportPicturePage);
    return PassportPicturePage;
}());

//# sourceMappingURL=passport-picture.js.map

/***/ })

});
//# sourceMappingURL=23.js.map