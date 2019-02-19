webpackJsonp([15],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomissueDetailsPageModule", function() { return RoomissueDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_issue_details__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RoomissueDetailsPageModule = /** @class */ (function () {
    function RoomissueDetailsPageModule() {
    }
    RoomissueDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__room_issue_details__["a" /* RoomissueDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__room_issue_details__["a" /* RoomissueDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], RoomissueDetailsPageModule);
    return RoomissueDetailsPageModule;
}());

//# sourceMappingURL=room-issue-details.module.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomissueDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_roomissue_service_roomissue_service__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(391);
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
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomissueDetailsPage = /** @class */ (function () {
    function RoomissueDetailsPage(transfer, file, navCtrl, navParams, roomissueProvider, toolsProvider, loadingCtrl, notificationProvider, platForm, formBuilder, camera, alertCtrl, toastCtrl) {
        this.transfer = transfer;
        this.file = file;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.roomissueProvider = roomissueProvider;
        this.toolsProvider = toolsProvider;
        this.loadingCtrl = loadingCtrl;
        this.notificationProvider = notificationProvider;
        this.platForm = platForm;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.issueImage = 'assets/imgs/background_photo.jpg';
        this.isPhotoAdded = false;
        this.photoTemplateHtml = '';
        this.devicePlatForm = "android";
        this.issueDetailsForm = formBuilder.group({
            'comments': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('')
        });
    }
    RoomissueDetailsPage.prototype.ionViewDidLoad = function () {
    };
    RoomissueDetailsPage.prototype.ionViewWillLeave = function () {
        //save active slider index
    };
    //function to go to previous page
    RoomissueDetailsPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    RoomissueDetailsPage.prototype.fnGetPicture = function () {
        this.fnAttachFile(this.camera.PictureSourceType.CAMERA);
        this.isPhotoAdded = true;
    };
    RoomissueDetailsPage.prototype.fnSubmit = function () {
        if (this.issueDetailsForm.valid) {
            //Enviem la petició i esperem resposta....
            var alertnew_1 = this.alertCtrl.create({
                title: 'ALERT',
                message: 'ALERT OK',
                cssClass: 'cls_alrt',
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancel'
                    }
                ]
            });
            alertnew_1.present();
            setTimeout(function () { alertnew_1.dismiss(); }, 5000);
        }
    };
    RoomissueDetailsPage.prototype.fnAttachFile = function (sourceType) {
        var _this = this;
        var imageoptions = {
            quality: 30,
            targetWidth: 500,
            targetHeight: 500,
            allowEdit: false,
            sourceType: sourceType,
            mediaType: this.camera.MediaType.PICTURE,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        return this.camera.getPicture(imageoptions)
            .then(function (imageData) {
            console.log('fileUri: ' + imageData);
            _this.issueImage = "data:image/jpeg;base64," + imageData;
            //this.roomissueProvider.objRoomissue.pictureFront[this.formIndex] = imageData;
        }).catch(function (error) {
            console.log("Camera error" + error);
        });
    };
    //Xevi
    RoomissueDetailsPage.prototype.fndebug = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    RoomissueDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roomissuedetails',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/room-issue-details/room-issue-details.html"*/'<ion-header class="header_menu">\n  <ion-navbar>\n    <ion-title>{{\'view.roomissue.title\' | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle hidden="false" class="main_menu">\n        <i class="icon-Menu"></i>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="issue_pic_wrpr" no-bounce>\n  <ion-item class="pic_caption">\n    <ion-label>{{\'view.roomissue.picture_description\' | translate}}</ion-label>\n  </ion-item>\n  <div [style.backgroundImage]="\'url(\' + issueImage + \')\'"  class="issue_pic_inr">\n    <button (click)="fnGetPicture()" class="issue_btn">\n      <i class="icon-Activities"></i>\n    </button>\n  </div>\n  <form [formGroup]="issueDetailsForm">\n  <ion-item class="htl_info_textarea">\n    <ion-textarea class="cm_textarea" formControlName="comments" placeholder="{{\'view.roomissue.picture_description\' | translate}}">\n    </ion-textarea>\n  </ion-item>\n</form>\n<ion-item class="footer_btn ios_footer_btn">\n  <button ion-button  class="cmn_btn" (click)="fnSubmit()">{{\'view.roomissue.picture_send\' | translate}}</button>\n</ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/room-issue-details/room-issue-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_roomissue_service_roomissue_service__["a" /* RoomissueServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], RoomissueDetailsPage);
    return RoomissueDetailsPage;
}());

//# sourceMappingURL=room-issue-details.js.map

/***/ })

});
//# sourceMappingURL=15.js.map