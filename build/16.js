webpackJsonp([16],{

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsPageModule", function() { return RestaurantsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurants__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RestaurantsPageModule = /** @class */ (function () {
    function RestaurantsPageModule() {
    }
    RestaurantsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__restaurants__["a" /* RestaurantsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__restaurants__["a" /* RestaurantsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], RestaurantsPageModule);
    return RestaurantsPageModule;
}());

//# sourceMappingURL=restaurants.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_service_restaurant_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(60);
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
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantsPage = /** @class */ (function () {
    function RestaurantsPage(transfer, file, navCtrl, navParams, restaurants, toolsProvider, loadingCtrl, notificationProvider, platForm) {
        this.transfer = transfer;
        this.file = file;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restaurants = restaurants;
        this.toolsProvider = toolsProvider;
        this.loadingCtrl = loadingCtrl;
        this.notificationProvider = notificationProvider;
        this.platForm = platForm;
        this.restaurantsList = [];
        this.imagePath = '';
        if (this.restaurants.objRestaurant && this.restaurants.objRestaurant.activeSlider) {
            this.activeSlider = this.restaurants.objRestaurant.activeSlider;
        }
        //get restaurants list
        this.restaurantsList = this.restaurants.objRestaurant.data;
    }
    RestaurantsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.activeSlider) {
            setTimeout(function () {
                _this.slides.slideTo(_this.activeSlider, 0);
            }, 200);
        }
    };
    //moves to next slide
    RestaurantsPage.prototype.slideNext = function () {
        this.slides.slideNext();
    };
    //moves to previous slide
    RestaurantsPage.prototype.slidePrev = function () {
        this.slides.slidePrev();
    };
    RestaurantsPage.prototype.download = function (itemId, url, fname, i) {
        var _this = this;
        this.file.checkFile(this.file.cacheDirectory, fname).then(function () {
            _this.loading.dismiss();
            var imgUrl = _this.file.cacheDirectory + fname;
            if (_this.platForm.is('ios')) {
                imgUrl = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(_this.file.cacheDirectory + fname);
            }
            _this.navCtrl.push("RestaurantDetailsPage", { itemId: itemId, img: imgUrl }, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
        }, function (error) {
            var fileTransfer = _this.transfer.create();
            fileTransfer.download(url, _this.file.cacheDirectory + fname).then(function (entry) {
                _this.loading.dismiss();
                var imgUrl = entry.toURL();
                if (_this.platForm.is('ios')) {
                    imgUrl = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(entry.toURL());
                }
                _this.navCtrl.push("RestaurantDetailsPage", { itemId: itemId, img: imgUrl }, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
            }, function (error) {
                _this.loading.dismiss();
                _this.navCtrl.push("RestaurantDetailsPage", { itemId: itemId, img: "" }, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
            });
        });
    };
    RestaurantsPage.prototype.fnGotoDetailsPage = function (itemId) {
        this.showLoading();
        var itemData = this.restaurants.objRestaurant.data; // get all item list
        itemData = itemData.find(function (x) { return x.id == itemId; }); // get item from item list with given item id
        for (var _i = 0, _a = itemData.availableDishes; _i < _a.length; _i++) {
            var item = _a[_i];
            var itemArray = void 0;
            itemArray = item;
            var imagePath = this.toolsProvider.getImagePath(item.foto.id); // image path using image id
            this.download(itemId, imagePath, item.foto.id + ".jpg", 0);
            break;
        }
    };
    RestaurantsPage.prototype.ionViewWillLeave = function () {
        //save active slider index
        this.restaurants.objRestaurant.activeSlider = this.slides.getActiveIndex();
    };
    //function to go to previous page
    RestaurantsPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    //Loader
    RestaurantsPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], RestaurantsPage.prototype, "slides", void 0);
    RestaurantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurants',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/restaurants/restaurants.html"*/'<ion-content id="homecontent" class="home_container" no-bounce>\n  <ion-header id="headerNav">\n    <ion-navbar>\n      <ion-title>{{\'view.restaurantCarousel.title\' | translate}}</ion-title>\n      <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n        <i class="icon-arrow-left2"></i>\n      </button>\n      <ion-buttons end>\n        <button ion-button menuToggle hidden="false" class="main_menu">\n          <i class="icon-Menu"></i>\n          <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-slides class="cm_slider_wrpr" pager>\n    <ng-container *ngFor="let item of restaurantsList">\n      <ion-slide [style.backgroundImage]="\'url(\' + item.imgPath + \')\'">\n        <div class="slider_caption">\n          <h2>{{item.nombre}}</h2>\n          <span class="slider_lbl" *ngIf="item.horario!=\'\'">\n            <svg version="1.1" id="Capa_1" x="0px" y="0px"\n              width="28px" height="28px" viewBox="0 0 2048 2048" enable-background="new 0 0 2048 2048" xml:space="preserve">\n              <g>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M342,783.8c-37.6-5.3-72.7-10.3-107.9-15.1c-20.8-2.9-34.1-13.6-38.6-31.6\n               c-4.6-18.2,2.6-35.7,20.2-47.3c96.6-63.5,198.1-118,305.3-161.5c5.7-2.3,11.5-4.3,17.3-6.1c24.7-7.4,43.8-0.8,54.2,22.7\n               c16.6,37.6,33.5,75.5,45.6,114.7c22.5,73.3,41.7,147.6,61.9,221.5c2.3,8.4,3.9,17.8,2.9,26.3c-4,34.4-39.7,48.5-69.5,27.5\n               c-15.5-10.9-30-23.1-45.1-34.6c-15.4-11.8-30.9-23.4-48.8-36.9c-28.8,72.4-37.5,145.9-31.7,220.5\n               c10.1,130.2,60.7,243.8,152.9,336.5c199.5,200.4,508.1,216.5,724.1,38.3c216.8-178.8,253.4-479.6,112.6-703\n               C1350.8,523.2,1017,415.5,738.5,600.9c-2.7-6.8-5.7-13.1-7.8-19.7c-18.2-56.1-35.9-112.3-54.5-168.3c-4.1-12.4-1.7-18.7,10.1-25\n               c85.7-46.3,176.4-75.3,273.4-86.6c132.7-15.4,260,4.1,382,56.7c114.1,49.2,209.7,123.7,287.3,221c80.6,101,131.5,215.4,152.8,342.4\n               c14,83.3,13.9,167.2-1.6,250.8c-43.6,234.4-171.5,409-376.7,527.2c-83.7,48.2-175.2,75.7-271.5,87.2\n               c-107.2,12.8-212.3,2.7-314.8-29.8c-104.5-33.1-197.4-87.1-278-161.5c-120.1-110.7-196.9-246.4-229.1-406.4\n               c-22.2-110.2-18.7-220.3,9.4-329.4C325.6,834.9,333.8,810.8,342,783.8z" />\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M1252.1,1333.2c-17.1,2.7-33.4-2-47.7-14.9c-75.4-67.9-150.8-135.7-226.4-203.4\n               c-20.1-18-25.9-41.1-23.9-66.6c8.9-113.6,18.4-227.2,27.6-340.7c0.6-7.2,1-14.4,1.6-21.6c3.1-33.9,28.2-57.9,60.1-57.6\n               c30.3,0.3,56.6,25.3,60.2,56.7c10.6,91.3,23.7,182.4,31.1,274c3.3,41.4,16.1,75.3,40.6,108.2c38.2,51.3,73,105.1,109.2,158\n               c5.3,7.8,10.5,15.8,14.6,24.3C1317.2,1286.9,1294.8,1327.7,1252.1,1333.2z" />  \n              </g>\n            </svg>\n            <ion-label>{{item.horario}}</ion-label>\n          </span>\n          <button class="slider_plus_btn" ion-button clear item-end (click)="fnGotoDetailsPage(item.id)">+</button>\n        </div>\n        <button class="slider_arrow sl_left" type="submit" float-left ion-button color="primary" (click)="slidePrev()"></button>\n        <button class="slider_arrow sl_rgt" type="submit" float-right ion-button color="primary" (click)="slideNext()"></button>\n      </ion-slide>\n    </ng-container>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/restaurants/restaurants.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_service_restaurant_service__["a" /* RestaurantServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], RestaurantsPage);
    return RestaurantsPage;
}());

//# sourceMappingURL=restaurants.js.map

/***/ })

});
//# sourceMappingURL=16.js.map