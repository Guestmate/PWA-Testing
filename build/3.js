webpackJsonp([3],{

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinBasicinfoPageModule", function() { return CheckinBasicinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkin_basicinfo__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckinBasicinfoPageModule = /** @class */ (function () {
    function CheckinBasicinfoPageModule() {
    }
    CheckinBasicinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkin_basicinfo__["a" /* CheckinBasicinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkin_basicinfo__["a" /* CheckinBasicinfoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CheckinBasicinfoPageModule);
    return CheckinBasicinfoPageModule;
}());

//# sourceMappingURL=checkin-basicinfo.module.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinBasicinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auto_complete_country_auto_complete_country__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_guest_service_guest_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_checkin_service_checkin_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auto_complete_spain_provinces_auto_complete_spain_provinces__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__model_checkin_model__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_notification_notification__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_country_service_country_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_native_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var CheckinBasicinfoPage = /** @class */ (function () {
    //Constructor
    function CheckinBasicinfoPage(navCtrl, navParams, events, commonProvider, datePipe, formBuilder, tools, alertCtrl, countryService, reservation, santizer, cdRef, hotel, modalCtrl, guestProvider, checkinProvider, loadingCtrl, notificationProvider, nativeStorage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.commonProvider = commonProvider;
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.tools = tools;
        this.alertCtrl = alertCtrl;
        this.countryService = countryService;
        this.reservation = reservation;
        this.santizer = santizer;
        this.cdRef = cdRef;
        this.hotel = hotel;
        this.modalCtrl = modalCtrl;
        this.guestProvider = guestProvider;
        this.checkinProvider = checkinProvider;
        this.loadingCtrl = loadingCtrl;
        this.notificationProvider = notificationProvider;
        this.nativeStorage = nativeStorage;
        this.isAddButtonEnable = false;
        this.isRemoveButtonEnable = false;
        this.isAllGuestDataAdded = true;
        this.isMandatoryValidationCompleted = false;
        this.pageCounter = 1;
        this.selectedNationality = '';
        this.selectedCountry = '';
        this.selectedResidence = '';
        this.photoTemplateHtml = '';
        this.monthShortNames = []; // for month short names
        this.dayShortNames = [];
        console.log('Constructor CheckinBasicinfoPage');
        //checkinPreEnteredDetails
        if (!this.checkinProvider.objCheckin) {
            this.checkinProvider.objCheckin = new __WEBPACK_IMPORTED_MODULE_13__model_checkin_model__["a" /* CheckinData */]();
        }
        //Creating Default Form in Form Array
        this.frmBasicInfoFormGroup = this.formBuilder.group({
            items: this.formBuilder.array([this.createItem()])
        });
        //Setting Default Values to the controls
        this.items = this.frmBasicInfoFormGroup.get('items');
        this.events.subscribe('mainMenuClick', function (action) {
            _this.commonProvider.doAction(action);
        });
        // translate month names
        var monthList = this.tools.fnLanguageTranslate("common.monthNames");
        monthList.subscribe(function (value) {
            _this.monthNames = value;
        });
        //translated month short names
        for (var i = 0; i < 12; i++) {
            this.monthShortNames.push(this.tools.getShortMonthName(i));
        }
        //translated day short names
        for (var j = 0; j < 7; j++) {
            this.dayShortNames.push(this.tools.getShortDayName(j));
        }
        if (this.commonProvider.objFormData.checkin && this.commonProvider.objFormData.checkin.PageCounter) {
            for (var i = 0; i < this.commonProvider.objFormData.checkin.PageCounter - 1; i++) {
                this.items.push(this.createItem());
            }
        }
        this.fnCheckPreEnteredFormData();
    }
    CheckinBasicinfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CheckinBasicinfoPage');
        this.maxDate = this.tools.fnGetToday();
        this.dobMinDate = (new Date()).getFullYear() - 90;
        this.docMinDate = (new Date()).getFullYear() - 15;
        var dt = this.reservation.objReservation.createdDate; // gets created date from reservation object
        var rmTime = dt.split(" ");
        var newDate = rmTime[0].split("-").reverse().join("-");
        var date = this.datePipe.transform(newDate, 'dd/MMM/yyyy'); // use datepipe to transform the date to required format
        this.noOfGuests = this.reservation.objReservation.noOfPersons;
        this.formIndex = 0; // Variable for handling slide functionality
        this.isAddButtonEnable = this.noOfGuests > 1;
        //Building the welcome message string
        var welcomeMsgTranslate = this.tools.fnLanguageTranslate("view.checkin.template.welcome");
        var messageHtml = '';
        welcomeMsgTranslate.subscribe(function (value) {
            messageHtml = value;
        });
        var photoTemplate = this.tools.fnLanguageTranslate("view.checkin.template.foto");
        photoTemplate.subscribe(function (value) {
            _this.photoTemplateHtml = value;
        });
        var dropdownValues = this.tools.fnLanguageTranslate(["common.man", "common.woman", "view.checkin.label.tipoDocumentoIdentidad.types.dni", "view.checkin.label.tipoDocumentoIdentidad.types.passport", "view.checkin.label.tipoDocumentoIdentidad.types.other"]);
        var dropdownText = '';
        dropdownValues.subscribe(function (value) {
            dropdownText = value;
        });
        this.gender = [
            { name: dropdownText["common.man"], value: "HOMBRE" },
            { name: dropdownText["common.woman"], value: "MUJER" }
        ];
        this.document = [
            { name: dropdownText["view.checkin.label.tipoDocumentoIdentidad.types.dni"], value: "DNI" },
            { name: dropdownText["view.checkin.label.tipoDocumentoIdentidad.types.passport"], value: "Passport" },
            { name: dropdownText["view.checkin.label.tipoDocumentoIdentidad.types.other"], value: "Other" }
        ];
        this.checkinProvider.objCheckin.entry = date;
        this.welcomeMessage = messageHtml != "" ? messageHtml.replace('{nombreHuesped}', this.reservation.objReservation.guestName) : "";
        this.welcomeMessage = this.santizer.bypassSecurityTrustHtml(this.welcomeMessage); //By Passing the Security Trust
        //Building the header card html string
        this.cardHtml = this.tools.fnLanguageTranslateWithParam("view.checkin.template.card", {
            localizadorHotel: this.reservation.objReservation.hotelLocation,
            fechaEntrada: date,
            noches: this.reservation.objReservation.nights,
            tipoHabitacion: this.reservation.objReservation.roomType,
            habitaciones: this.reservation.objReservation.bedrooms != undefined ? this.reservation.objReservation.bedrooms : '',
            personas: this.reservation.objReservation.noOfPersons,
            precio: this.reservation.objReservation.price,
            moneda: this.hotel.objHotel.currency.signo
        }); // translate of html content with common funtion
        this.cardHtml.subscribe(function (value) {
            _this.cardHtmlTranslated = _this.santizer.bypassSecurityTrustHtml(value); // bypass html content to avoid losing html attributes
        });
        this.isSliderPagerVisible = false;
        if (this.commonProvider.objFormData.checkin && this.commonProvider.objFormData.checkin.Name && this.commonProvider.objFormData.checkin.Name.length > 1) {
            this.slides.lockSwipes(false);
            this.pageCounter = this.commonProvider.objFormData.checkin.PageCounter;
            this.formIndex = this.commonProvider.objFormData.checkin.ActiveIndex;
            setTimeout(function () {
                _this.slides.slideTo(_this.formIndex, 500);
            }, 300);
            this.isSliderPagerVisible = true;
        }
        else {
            this.slides.lockSwipes(true);
        }
        if (this.commonProvider.objFormData.checkin && this.commonProvider.objFormData.checkin.PageCounter) {
            if (this.commonProvider.objFormData.checkin.PageCounter == this.noOfGuests) {
                this.isAddButtonEnable = false;
            }
        }
        this.cdRef.detectChanges();
    };
    CheckinBasicinfoPage.prototype.createItem = function () {
        return this.formBuilder.group({
            txtName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            txtLastName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            txtAddress: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            txtZipCode: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            txtCity: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            selCountry: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            txtIdNumber: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            selDocument: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            selNationality: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            selResidence: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            dtpDOB: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            selGender: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            selDateOfIssue: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])
        });
    };
    CheckinBasicinfoPage.prototype.fnAddGuest = function (index) {
        var _this = this;
        this.slides.lockSwipes(false);
        this.isSliderPagerVisible = true;
        this.pageCounter++;
        this.isRemoveButtonEnable = true;
        if (this.noOfGuests != this.items.controls.length) {
            this.items.push(this.createItem());
        }
        this.formIndex = index + 1;
        setTimeout(function () {
            _this.slides.slideTo(_this.pageCounter - 1, 500);
        }, 300);
    };
    CheckinBasicinfoPage.prototype.fnRemoveGuest = function (index) {
        this.pageCounter--;
        this.isAddButtonEnable = true;
        this.items.removeAt(index);
        this.formIndex = index - 1;
        this.slides.slidePrev(500);
    };
    // Function to Validate and navigates to next Page
    CheckinBasicinfoPage.prototype.fnOnContinueClick = function () {
        var _this = this;
        this.items = this.frmBasicInfoFormGroup.get('items');
        for (var i = 0; i < this.pageCounter; i++) {
            this.isMandatoryValidationCompleted = false;
            this.fnMandatoryValidation(i);
            if (!this.isMandatoryValidationCompleted) {
                break;
            }
        }
        this.isAllGuestDataAdded = true;
        if (this.noOfGuests != this.pageCounter) {
            this.isAllGuestDataAdded = false;
        }
        if (this.isMandatoryValidationCompleted && !this.isAllGuestDataAdded) {
            var msg = this.tools.fnLanguageTranslate(["view.checkin.incomplete", "common.error", "buttons.ok"]); // translate of html content with common funtion
            msg.subscribe(function (value) {
                var alertnew = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: value['view.checkin.incomplete'],
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
        if (this.isMandatoryValidationCompleted && this.isAllGuestDataAdded) {
            //TODO:
            this.countryService.fnshowCountryList().subscribe(function (data) {
                for (var i = 0; i <= _this.formIndex; i++) {
                    for (var j = 0; j < data.Country.length; j++) {
                        if (data.Country[j].text === _this.items.controls[i].controls.selCountry.value) {
                            _this.checkinProvider.objCheckin.addressCountry[i] = data.Country[j].value;
                        }
                    }
                }
            });
            for (var i = 0; i <= this.formIndex; i++) {
                this.checkinProvider.objCheckin.firstName[i] = this.items.controls[i].controls.txtName.value;
                this.checkinProvider.objCheckin.surname[i] = this.items.controls[i].controls.txtLastName.value;
                this.checkinProvider.objCheckin.addressStreet[i] = this.items.controls[i].controls.txtAddress.value;
                this.checkinProvider.objCheckin.addressPostalCode[i] = this.items.controls[i].controls.txtZipCode.value;
                this.checkinProvider.objCheckin.addressCity[i] = this.items.controls[i].controls.txtCity.value;
                this.checkinProvider.objCheckin.idNumber[i] = this.items.controls[i].controls.txtIdNumber.value;
                this.checkinProvider.objCheckin.identityDocument[i] = this.items.controls[i].controls.selDocument.value;
                this.checkinProvider.objCheckin.birthDate[i] = this.items.controls[i].controls.dtpDOB.value;
                this.checkinProvider.objCheckin.sex[i] = this.items.controls[i].controls.selGender.value;
                this.checkinProvider.objCheckin.dateOfIssue[i] = this.items.controls[i].controls.selDateOfIssue.value;
                this.checkinProvider.objCheckin.addressCountry[i] = this.items.controls[i].controls.selCountry.value;
                this.checkinProvider.objCheckin.nationality[i] = this.items.controls[i].controls.selNationality.value;
                this.checkinProvider.objCheckin.cityResidence[i] = this.items.controls[i].controls.selResidence.value;
            }
            console.log('FNCONTINUE::::', this.checkinProvider.objCheckin);
            this.navCtrl.push("CheckinArrivaltimePage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
        }
    };
    //Mandatory Field Validation
    CheckinBasicinfoPage.prototype.fnMandatoryValidation = function (formIndex) {
        var _this = this;
        this.items = this.frmBasicInfoFormGroup.get('items');
        var emptyFields = []; // to add empty fields in the form
        var alertMessage; // to show alert message on validation
        var validateMessages = this.tools.fnLanguageTranslate(['view.checkin.label.nombre.title',
            'view.checkin.label.apellidos.title',
            'view.checkin.label.address_street.title',
            'view.checkin.label.address_postalcode.title',
            'view.checkin.label.address_city.title',
            'view.checkin.label.address_country.title',
            'view.checkin.label.documentoIdentidad.title',
            'view.checkin.label.tipoDocumentoIdentidad.title',
            'view.checkin.label.nacionalidadDocumentoIdentidad.title',
            'view.checkin.label.residencia.title',
            'view.checkin.label.fechaNacimiento.title',
            'view.checkin.label.sexo.title',
            'view.checkin.label.fechaDocumentoIdentidad.title']);
        {
            if (this.items.controls[formIndex].controls.txtName.hasError('required'))
                validateMessages.subscribe(function (value) {
                    emptyFields.push(value['view.checkin.label.nombre.title']);
                });
        }
        if (this.items.controls[formIndex].controls.txtLastName.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.apellidos.title']);
            });
        }
        if (this.items.controls[formIndex].controls.txtAddress.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.address_street.title']);
            });
        }
        if (this.items.controls[formIndex].controls.txtZipCode.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.address_postalcode.title']);
            });
        }
        if (this.items.controls[formIndex].controls.txtCity.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.address_city.title']);
            });
        }
        if (this.items.controls[formIndex].controls.selCountry.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.address_country.title']);
            });
        }
        if (this.items.controls[formIndex].controls.txtIdNumber.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.documentoIdentidad.title']);
            });
        }
        if (this.items.controls[formIndex].controls.selDocument.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.tipoDocumentoIdentidad.title']);
            });
        }
        if (this.items.controls[formIndex].controls.selNationality.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.nacionalidadDocumentoIdentidad.title']);
            });
        }
        if (this.items.controls[formIndex].controls.selResidence.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.residencia.title']);
            });
        }
        if (this.items.controls[formIndex].controls.dtpDOB.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.fechaNacimiento.title']);
            });
        }
        if (this.items.controls[formIndex].controls.selGender.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.sexo.title']);
            });
        }
        if (this.items.controls[formIndex].controls.selDateOfIssue.hasError('required')) {
            validateMessages.subscribe(function (value) {
                emptyFields.push(value['view.checkin.label.fechaDocumentoIdentidad.title']);
            });
        }
        var msg = this.tools.fnLanguageTranslateWithParam(["common.mandatoryFields", "view.login.error.emptyMail",
            "common.error", "buttons.ok"], { fields: emptyFields });
        if (this.items.controls[formIndex].controls.txtName.hasError('required') ||
            this.items.controls[formIndex].controls.txtLastName.hasError('required') ||
            this.items.controls[formIndex].controls.txtAddress.hasError('required') ||
            this.items.controls[formIndex].controls.txtZipCode.hasError('required') ||
            this.items.controls[formIndex].controls.txtCity.hasError('required') ||
            this.items.controls[formIndex].controls.selCountry.hasError('required') ||
            this.items.controls[formIndex].controls.txtIdNumber.hasError('required') ||
            this.items.controls[formIndex].controls.selDocument.hasError('required') ||
            this.items.controls[formIndex].controls.selNationality.hasError('required') ||
            this.items.controls[formIndex].controls.selResidence.hasError('required') ||
            this.items.controls[formIndex].controls.dtpDOB.hasError('required') ||
            this.items.controls[formIndex].controls.selGender.hasError('required') ||
            this.items.controls[formIndex].controls.selDateOfIssue.hasError('required')) {
            msg.subscribe(function (value) {
                alertMessage = value['common.mandatoryFields'];
            });
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
            this.slides.slideTo(formIndex, 500);
        }
        else if (this.checkinProvider.objCheckin.pictureFront[formIndex] == undefined) {
            var msg_1 = this.tools.fnLanguageTranslate(["view.checkin.template.foto", "common.error", "buttons.ok"]); // translate of html content with common funtion
            msg_1.subscribe(function (value) {
                var alertnew = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: value['view.checkin.template.foto'],
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
            this.slides.slideTo(formIndex, 500);
        }
        else {
            this.isMandatoryValidationCompleted = true;
        }
    };
    //To Populate Country List
    CheckinBasicinfoPage.prototype.showCountryList = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__auto_complete_country_auto_complete_country__["a" /* AutoCompleteCountryPage */], { selectedItem: this.selectedCountry });
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.showLoading();
                _this.updateCountry(data);
                _this.loading.dismiss();
            }
        });
        modal.present();
    };
    //Adds Country to Text box and object Array
    CheckinBasicinfoPage.prototype.updateCountry = function (data) {
        this.items.controls[this.formIndex].controls.selCountry.setValue(data.text);
        this.checkinProvider.objCheckin.countryCode[this.formIndex] = data.value;
        this.checkinProvider.objCheckin.addressCountry[this.formIndex] = data.text;
        this.selectedCountry = data.value;
        console.log('UPDATE_CONTRY::::', this.checkinProvider.objCheckin);
    };
    //To Populate Nationality List
    CheckinBasicinfoPage.prototype.showNationalityList = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__auto_complete_country_auto_complete_country__["a" /* AutoCompleteCountryPage */], { selectedItem: this.selectedNationality });
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.updateNationality(data);
            }
        });
        modal.present();
    };
    //Adds Nationality to Text box and object Array
    CheckinBasicinfoPage.prototype.updateNationality = function (data) {
        this.items.controls[this.formIndex].controls.selNationality.setValue(data.text);
        this.checkinProvider.objCheckin.nationalityCode[this.formIndex] = data.value;
        this.checkinProvider.objCheckin.nationality[this.formIndex] = data.text;
        this.selectedNationality = data.value;
        this.items.controls[this.formIndex].controls.selResidence.setValue("");
    };
    //To Populate Residence List
    CheckinBasicinfoPage.prototype.showResidenceList = function () {
        var _this = this;
        if (this.selectedNationality == "Spain" || this.selectedNationality == "España" || this.selectedNationality == "ES") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__auto_complete_spain_provinces_auto_complete_spain_provinces__["a" /* AutoCompleteSpainProvincesPage */], { selectedItem: this.selectedResidence });
            modal.onDidDismiss(function (data) {
                if (data != null) {
                    _this.updateProvince(data);
                }
            });
            modal.present();
        }
        else {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__auto_complete_country_auto_complete_country__["a" /* AutoCompleteCountryPage */], { selectedItem: this.selectedResidence });
            modal.onDidDismiss(function (data) {
                if (data != null) {
                    _this.updateResidence(data);
                }
            });
            modal.present();
        }
    };
    //Adds Residence to Text box and object Array
    CheckinBasicinfoPage.prototype.updateResidence = function (data) {
        this.items.controls[this.formIndex].controls.selResidence.setValue(data.text);
        this.checkinProvider.objCheckin.residenceCode[this.formIndex] = data.value;
        this.checkinProvider.objCheckin.cityResidence[this.formIndex] = data.text;
        this.selectedResidence = data.value;
    };
    //Adds Province to Text box and object Array
    CheckinBasicinfoPage.prototype.updateProvince = function (data) {
        this.items.controls[this.formIndex].controls.selResidence.setValue(data.text);
        this.checkinProvider.objCheckin.residenceCode[this.formIndex] = data.value;
        this.checkinProvider.objCheckin.cityResidence[this.formIndex] = data.text;
    };
    //Function to make a dummy array for a loop in the html page
    CheckinBasicinfoPage.prototype.counter = function (i) {
        return new Array(i);
    };
    //Navigates to photo page
    CheckinBasicinfoPage.prototype.fnGotoPhotoPage = function () {
        this.items = this.frmBasicInfoFormGroup.get('items');
        var documentType = this.items.controls[this.formIndex].controls.selDocument.value;
        this.navCtrl.push("PassportPicturePage", { formIndex: this.formIndex, documentType: documentType }, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
    };
    //Navigates to the previous page
    CheckinBasicinfoPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    //Event occured when a slide is changed
    CheckinBasicinfoPage.prototype.fnOnSlideChanged = function () {
        var controlCount = this.items.controls.length;
        this.formIndex = this.slides.getActiveIndex();
        if (this.formIndex == 0) {
            this.isRemoveButtonEnable = false;
        }
        else if (controlCount == this.noOfGuests) {
            this.isAddButtonEnable = false;
            this.isRemoveButtonEnable = true;
        }
        else if (this.formIndex < controlCount) {
            this.isAddButtonEnable = true;
            this.isRemoveButtonEnable = true;
        }
    };
    //Loader
    CheckinBasicinfoPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    CheckinBasicinfoPage.prototype.fnCheckNationality = function () {
        var _this = this;
        if (this.selectedNationality == "") {
            var resMsg = this.tools.fnLanguageTranslate(["view.checkin.template.Nationalityfirst", "common.error", "buttons.ok"]); // translate of html content with common funtion
            resMsg.subscribe(function (value) {
                var resAlert = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: value['view.checkin.template.Nationalityfirst'],
                    cssClass: 'cls_alrt',
                    buttons: [
                        {
                            text: value['buttons.ok'],
                            role: 'cancel'
                        }
                    ]
                });
                resAlert.present();
                setTimeout(function () { resAlert.dismiss(); }, 5000);
            });
        }
        else {
            this.showResidenceList();
        }
    };
    // store entered data into model before leaving page
    CheckinBasicinfoPage.prototype.ionViewWillLeave = function () {
        this.items = this.frmBasicInfoFormGroup.get('items');
        if ((this.commonProvider.objFormData.checkin) && !this.commonProvider.objFormData.checkin.checkinCompleted) {
            this.commonProvider.objFormData.checkin.Name = [];
            this.commonProvider.objFormData.checkin.LastName = [];
            this.commonProvider.objFormData.checkin.Address = [];
            this.commonProvider.objFormData.checkin.ZipCode = [];
            this.commonProvider.objFormData.checkin.City = [];
            this.commonProvider.objFormData.checkin.Country = [];
            this.commonProvider.objFormData.checkin.idNumber = [];
            this.commonProvider.objFormData.checkin.Document = [];
            this.commonProvider.objFormData.checkin.Nationality = [];
            this.commonProvider.objFormData.checkin.Residence = [];
            this.commonProvider.objFormData.checkin.DOB = [];
            this.commonProvider.objFormData.checkin.Gender = [];
            this.commonProvider.objFormData.checkin.DateOfIssue = [];
            this.commonProvider.objFormData.checkin.pictureFront = [];
            for (var i = 0; i < this.items.controls.length; i++) {
                this.commonProvider.objFormData.checkin.Name.push(this.items.controls[i].controls.txtName.value);
                this.commonProvider.objFormData.checkin.LastName.push(this.items.controls[i].controls.txtLastName.value);
                this.commonProvider.objFormData.checkin.Address.push(this.items.controls[i].controls.txtAddress.value);
                this.commonProvider.objFormData.checkin.ZipCode.push(this.items.controls[i].controls.txtZipCode.value);
                this.commonProvider.objFormData.checkin.City.push(this.items.controls[i].controls.txtCity.value);
                this.commonProvider.objFormData.checkin.Country.push(this.items.controls[i].controls.selCountry.value);
                this.commonProvider.objFormData.checkin.idNumber.push(this.items.controls[i].controls.txtIdNumber.value);
                this.commonProvider.objFormData.checkin.Document.push(this.items.controls[i].controls.selDocument.value);
                this.commonProvider.objFormData.checkin.Nationality.push(this.items.controls[i].controls.selNationality.value);
                this.commonProvider.objFormData.checkin.Residence.push(this.items.controls[i].controls.selResidence.value);
                this.commonProvider.objFormData.checkin.DOB.push(this.items.controls[i].controls.dtpDOB.value);
                this.commonProvider.objFormData.checkin.Gender.push(this.items.controls[i].controls.selGender.value);
                this.commonProvider.objFormData.checkin.DateOfIssue.push(this.items.controls[i].controls.selDateOfIssue.value);
                this.commonProvider.objFormData.checkin.PageCounter = this.pageCounter;
                this.commonProvider.objFormData.checkin.ActiveIndex = this.formIndex;
                if (this.checkinProvider.objCheckin.pictureFront[i] != undefined) {
                    this.commonProvider.objFormData.checkin.pictureFront.push(this.checkinProvider.objCheckin.pictureFront[i]);
                }
            }
            this.commonProvider.objFormData.checkin.NoOfGuests = this.items.controls.length;
            this.checkinProvider.storeCheckinData(this.commonProvider.objFormData.checkin);
        }
    };
    // fetch pre-entered data into fields from model
    CheckinBasicinfoPage.prototype.fnCheckPreEnteredFormData = function () {
        if (this.items.controls[0].controls.txtName.value == "") {
            this.items.controls[0].controls.txtName.value = this.reservation.objReservation.guestName;
        }
        if (this.items.controls[0].controls.txtLastName.value == "") {
            this.items.controls[0].controls.txtLastName.value = this.reservation.objReservation.lastName;
        }
        if (this.guestProvider.objGuest != undefined) {
            if (this.items.controls[0].controls.txtCity.value == "") {
                this.items.controls[0].controls.txtCity.value = this.guestProvider.objGuest.cityResidence != undefined ? this.guestProvider.objGuest.cityResidence : '';
            }
            if (this.items.controls[0].controls.selCountry.value == "") {
                this.items.controls[0].controls.selCountry.value = this.guestProvider.objGuest.addressCountry != undefined ? this.guestProvider.objGuest.addressCountry : '';
            }
            if (this.items.controls[0].controls.dtpDOB.value == "") {
                this.items.controls[0].controls.dtpDOB.value = this.guestProvider.objGuest.dateOfBirth != undefined ? this.tools.formatDate(this.guestProvider.objGuest.dateOfBirth).split(' ')[0] : '';
            }
            if (this.items.controls[0].controls.selGender.value == "") {
                this.items.controls[0].controls.selGender.value = this.guestProvider.objGuest.gender != undefined ? this.guestProvider.objGuest.gender : '';
            }
        }
        if (this.commonProvider.objFormData && this.commonProvider.objFormData.checkin) {
            this.commonProvider.objFormData.checkin.checkinCompleted = false;
            if (this.commonProvider.objFormData.checkin.Name) {
                for (var i = 0; i < this.items.controls.length; i++) {
                    this.checkinProvider.objCheckin.pictureFront[i] = this.commonProvider.objFormData.checkin.pictureFront[i] != "" ?
                        this.commonProvider.objFormData.checkin.pictureFront[i] : '';
                    this.items.controls[i].controls.txtName.value = this.commonProvider.objFormData.checkin.Name[i]
                        && this.commonProvider.objFormData.checkin.Name[i] != "" ?
                        this.commonProvider.objFormData.checkin.Name[i] : '';
                    this.items.controls[i].controls.txtLastName.value = this.commonProvider.objFormData.checkin.LastName[i]
                        && this.commonProvider.objFormData.checkin.LastName[i] != "" ?
                        this.commonProvider.objFormData.checkin.LastName[i] : '';
                    this.items.controls[i].controls.txtAddress.value = this.commonProvider.objFormData.checkin.Address[i]
                        && this.commonProvider.objFormData.checkin.Address[i] != "" ?
                        this.commonProvider.objFormData.checkin.Address[i] : '';
                    this.items.controls[i].controls.txtZipCode.value = this.commonProvider.objFormData.checkin.ZipCode[i]
                        && this.commonProvider.objFormData.checkin.ZipCode[i] != "" ?
                        this.commonProvider.objFormData.checkin.ZipCode[i] : '';
                    this.items.controls[i].controls.txtCity.value = this.commonProvider.objFormData.checkin.City[i]
                        && this.commonProvider.objFormData.checkin.City[i] != "" ?
                        this.commonProvider.objFormData.checkin.City[i] : '';
                    this.items.controls[i].controls.selCountry.value = this.commonProvider.objFormData.checkin.Country[i]
                        && this.commonProvider.objFormData.checkin.Country[i] != "" ?
                        this.commonProvider.objFormData.checkin.Country[i] : '';
                    this.items.controls[i].controls.txtIdNumber.value = this.commonProvider.objFormData.checkin.idNumber[i]
                        && this.commonProvider.objFormData.checkin.idNumber[i] != "" ?
                        this.commonProvider.objFormData.checkin.idNumber[i] : '';
                    this.items.controls[i].controls.selDocument.value = this.commonProvider.objFormData.checkin.Document[i]
                        && this.commonProvider.objFormData.checkin.Document[i] != "" ?
                        this.commonProvider.objFormData.checkin.Document[i] : '';
                    this.items.controls[i].controls.selNationality.value = this.commonProvider.objFormData.checkin.Nationality[i]
                        && this.commonProvider.objFormData.checkin.Nationality[i] != "" ?
                        this.commonProvider.objFormData.checkin.Nationality[i] : '';
                    this.items.controls[i].controls.selResidence.value = this.commonProvider.objFormData.checkin.Residence[i]
                        && this.commonProvider.objFormData.checkin.Residence[i] != "" ?
                        this.commonProvider.objFormData.checkin.Residence[i] : '';
                    this.items.controls[i].controls.dtpDOB.value = this.commonProvider.objFormData.checkin.DOB[i]
                        && this.commonProvider.objFormData.checkin.DOB[i] != "" ?
                        this.commonProvider.objFormData.checkin.DOB[i] : '';
                    this.items.controls[i].controls.selGender.setValue(this.commonProvider.objFormData.checkin.Gender[i]
                        && this.commonProvider.objFormData.checkin.Gender[i] != "" ?
                        this.commonProvider.objFormData.checkin.Gender[i] : '');
                    this.items.controls[i].controls.selDateOfIssue.value = this.commonProvider.objFormData.checkin.DateOfIssue[i]
                        && this.commonProvider.objFormData.checkin.DateOfIssue[i] != "" ?
                        this.commonProvider.objFormData.checkin.DateOfIssue[i] : '';
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], CheckinBasicinfoPage.prototype, "slides", void 0);
    CheckinBasicinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkin-basicinfo',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/checkin-basicinfo/checkin-basicinfo.html"*/'<ion-header class="header_menu">\n  <ion-navbar>\n    <ion-title>{{\'view.checkin.title\' | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle hidden="false" class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="service_bsc_info" no-bounce>\n  <ion-item class="info_hdg">\n    <span>{{"view.checkin.subtitle.requestInfo" | translate}}</span>\n    <ul class="chckin_navbtn">\n      <li class="active"></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </ion-item>\n  <span [innerHtml]="cardHtmlTranslated" class="chkn_chkoutinfo_data">\n\n  </span>\n  <ion-item class="welcome_msg">\n    <span [innerHtml]="welcomeMessage" class="welcome_msg_inr">\n    </span>\n  </ion-item>\n\n  <form [formGroup]="frmBasicInfoFormGroup">\n    <div class="add_rmv_btnwrpr">\n      <button ion-button (click)="fnRemoveGuest(formIndex)" [disabled]="!isRemoveButtonEnable" class="add_ppl">\n        <i class="icon-Del_people"></i>\n      </button>\n      <button ion-button (click)="fnAddGuest(formIndex)" [disabled]="!isAddButtonEnable" class="del_ppl">\n        <i class="icon-Add_people"></i>\n      </button>\n    </div>\n    <ion-slides [pager]="isSliderPagerVisible" (ionSlideDidChange)="fnOnSlideChanged()" class="chekn_basicinfo_slides">\n      <ion-slide formArrayName="items" *ngFor="let item of frmBasicInfoFormGroup.get(\'items\').controls; let i = index;">\n        <div [formGroupName]="i">\n          <ion-item class="half_item name">\n            <ion-label stacked>{{"view.checkin.label.nombre.title" | translate}}</ion-label>\n            <ion-input type="text" formControlName="txtName"></ion-input>\n          </ion-item>\n          <ion-item class="half_item last_name">\n            <ion-label stacked>{{"view.checkin.label.apellidos.title"| translate}}</ion-label>\n            <ion-input type="text" formControlName="txtLastName"></ion-input>\n          </ion-item>\n          <ion-item class="half_item addrs">\n            <ion-label stacked>{{"view.checkin.label.address_street.title" | translate}}</ion-label>\n            <ion-input type="text" formControlName="txtAddress"></ion-input>\n          </ion-item>\n          <ion-item class="half_item zip_code">\n            <ion-label stacked>{{"view.checkin.label.address_postalcode.title" | translate}}</ion-label>\n            <ion-input type="text" formControlName="txtZipCode"></ion-input>\n          </ion-item>\n          <ion-item class="half_item city">\n            <ion-label stacked>{{"view.checkin.label.address_city.title" | translate}}</ion-label>\n            <ion-input type="text" formControlName="txtCity"></ion-input>\n          </ion-item>\n          <ion-item class="half_item id_number">\n            <ion-label stacked>{{"view.checkin.label.address_country.title" | translate}}</ion-label>\n            <ion-input formControlName="selCountry" type="text" (touchstart)="showCountryList()"></ion-input>\n          </ion-item>\n          <ion-item class="half_item document">\n            <ion-label stacked>{{"view.checkin.label.documentoIdentidad.title" | translate}}</ion-label>\n            <ion-input type="text" formControlName="txtIdNumber"></ion-input>\n          </ion-item>\n          <ion-item class="half_item nationality">\n            <ion-label stacked>{{"view.checkin.label.tipoDocumentoIdentidad.title" | translate}}</ion-label>\n            <ion-select formControlName="selDocument" interface="action-sheet" cancelText="{{\'buttons.cancel\'  | translate }}">\n              <ion-option *ngFor="let item of document" [value]="item.value">{{item.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item class="half_item residence">\n            <ion-label stacked>{{"view.checkin.label.nacionalidadDocumentoIdentidad.title" | translate}}</ion-label>\n            <ion-input formControlName="selNationality" type="text" (touchstart)="showNationalityList()"></ion-input>\n          </ion-item>\n          <ion-item class="half_item residence">\n            <ion-label stacked>{{"view.checkin.label.residencia.title" | translate}}</ion-label>\n            <ion-input formControlName="selResidence" type="text" (touchstart)="fnCheckNationality()"></ion-input>\n          </ion-item>\n          <ion-item class="half_item date_brth">\n            <ion-label stacked>{{"view.checkin.label.fechaNacimiento.title" | translate}}</ion-label>\n            <ion-datetime displayFormat="DD/MMM/YYYY" pickerFormat="DD/MMMM/YYYY" type="text" formControlName="dtpDOB" [max]="maxDate"\n              [min]="dobMinDate" cancelText="{{\'buttons.cancel\'  | translate }}" doneText="{{\'buttons.done\'  | translate }}"\n              [monthNames]="monthNames" [monthShortNames]="monthShortNames" [dayShortNames]="dayShortNames"></ion-datetime>\n          </ion-item>\n\n          <ion-item class="half_item gender">\n            <ion-label stacked>{{"view.checkin.label.sexo.title" | translate}}</ion-label>\n            <ion-select formControlName="selGender" interface="action-sheet" cancelText="{{\'buttons.cancel\'  | translate }}">\n              <ion-option *ngFor="let item of gender" [value]="item.value">{{item.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item class="half_item datof_isu">\n            <ion-label stacked>{{"view.checkin.label.fechaDocumentoIdentidad.title" | translate}}</ion-label>\n            <ion-datetime displayFormat="DD/MMM/YYYY" pickerFormat="DD/MMMM/YYYY" type="text" formControlName="selDateOfIssue" [max]="maxDate"\n              [min]="docMinDate" cancelText="{{\'buttons.cancel\'  | translate }}" doneText="{{\'buttons.done\'  | translate }}"\n              [monthNames]="monthNames" [monthShortNames]="monthShortNames" [dayShortNames]="dayShortNames"></ion-datetime>\n          </ion-item>\n          <ion-item class="pic_caption">\n            <ion-label stacked [innerHtml]="photoTemplateHtml"></ion-label>\n          </ion-item>\n          <div [ngClass]="this.checkinProvider.objCheckin.pictureFront[this.formIndex] != undefined ? \'passport_pic_added checkin_xprs_btnwrpr\' : \'checkin_xprs_btnwrpr\'">\n            <button ion-button (click)="fnGotoPhotoPage()" class="camera_btn">\n              <i class="icon-Activities"></i>\n            </button>\n            <span class="photo_submited">\n              <img src="assets/imgs/check-mark.png">\n            </span>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <ion-item class="btn_wrpr">\n      <button ion-button (click)="fnOnContinueClick()" class="cmn_btn">{{\'common.continue\' | translate}}</button>\n    </ion-item>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/checkin-basicinfo/checkin-basicinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__["a" /* CommonServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_15__providers_country_service_country_service__["a" /* CountryServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_6__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__providers_guest_service_guest_service__["a" /* GuestServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_14__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], CheckinBasicinfoPage);
    return CheckinBasicinfoPage;
}());

//# sourceMappingURL=checkin-basicinfo.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinData; });
var CheckinData = /** @class */ (function () {
    function CheckinData() {
        this.guests = [];
        this.addressCity = [];
        this.addressCountry = [];
        this.addressPostalCode = [];
        this.addressStreet = [];
        this.surname = [];
        this.cityResidence = [];
        this.identityDocument = [];
        this.birthDate = [];
        this.nationality = [];
        this.firstName = [];
        this.pictureFront = [];
        this.sex = [];
        this.extraServices = [];
        this.tokenArray = [];
        this.countryCode = [];
        this.idNumber = [];
        this.nationalityCode = [];
        this.residenceCode = [];
        this.dateOfIssue = [];
        this.ancillarySummaryList = [];
    }
    return CheckinData;
}());

//# sourceMappingURL=checkin-model.js.map

/***/ })

});
//# sourceMappingURL=3.js.map