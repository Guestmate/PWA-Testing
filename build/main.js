webpackJsonp([42],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ActivityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ActivityServiceProvider = /** @class */ (function () {
    function ActivityServiceProvider(http, constant, communicationProvider, deviceProvider) {
        this.http = http;
        this.constant = constant;
        this.communicationProvider = communicationProvider;
        this.deviceProvider = deviceProvider;
        console.log('Hello ActivityServiceProvider Provider');
    }
    ActivityServiceProvider.prototype.getActivityList = function (hotelId, reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/cacheable/hotel/' + hotelId + '/actividades';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.get(url, Params, observer); // http get service call
        });
    };
    ActivityServiceProvider.prototype.sendActivityReservation = function (serviceId, date, turn, person, comments, reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'CREATE_ACTIVITY_RESERVATION'; // service type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('serviceId', serviceId); // params
            Params = Params.append('fecha', date);
            Params = Params.append('turno', turn);
            Params = Params.append('pax', person);
            Params = Params.append('comentario', comments);
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer, service); // http get service call
        });
    };
    ActivityServiceProvider.prototype.sendServiceReservationWithPayment = function (reservationId, serviceId, date, turn, noOfPersons, comments, cardholder, token) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'CREATE_ACTIVITY_RESERVATION_PAYMENT';
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('serviceId', serviceId);
            Params = Params.append('fecha', date);
            Params = Params.append('turno', turn);
            Params = Params.append('pax', noOfPersons);
            Params = Params.append('comentario', comments);
            Params = Params.append('titularTarjeta', cardholder);
            Params = Params.append('tokenTarjeta', token);
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer, service);
        });
    };
    ActivityServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__communication_service_communication_service__["a" /* CommunicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__["a" /* DeviceServiceProvider */]])
    ], ActivityServiceProvider);
    return ActivityServiceProvider;
}());

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__communication_service_communication_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the RoomsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RoomsServiceProvider = /** @class */ (function () {
    function RoomsServiceProvider(http, hotelProvider, reservationProvider, constant, deviceProvider, communicationProvider) {
        this.http = http;
        this.hotelProvider = hotelProvider;
        this.reservationProvider = reservationProvider;
        this.constant = constant;
        this.deviceProvider = deviceProvider;
        this.communicationProvider = communicationProvider;
        console.log('Hello RoomsServiceProvider Provider');
    }
    //to set all Room Services data
    RoomsServiceProvider.prototype.getRoomServiceInfo = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/cacheable/hotel/' + _this.hotelProvider.objHotel.id + '/servicios-habitacion';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', _this.reservationProvider.objReservation.reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            _this.communicationProvider.get(url, Params, observer); // http get service call
        });
    };
    //to set all items under a room service
    RoomsServiceProvider.prototype.getServiceItems = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/cacheable/hotel/' + _this.hotelProvider.objHotel.id + '/servicios-habitacion/items';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', _this.reservationProvider.objReservation.reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            _this.communicationProvider.get(url, Params, observer); // http get service call
        });
    };
    RoomsServiceProvider.prototype.fnGetTimeSlotsForRoomService = function (today) {
        var startTime = "00:00", endTime = "23:45", increment = 15;
        var hourDecimal = parseInt(increment) / 60;
        var turns = '';
        var defaultDate = new Date();
        var nextDate = new Date();
        var newDate;
        var timeSlots = [];
        var currentHour = defaultDate.getHours() == 0 ? 24 : defaultDate.getHours();
        var startReminder = defaultDate.getMinutes() % increment;
        var startMinute = (defaultDate.getMinutes() - startReminder) + increment;
        if (today == true) {
            startTime = currentHour + ':' + startMinute;
            var startTimeTokens_1 = startTime.split(':');
            newDate = new Date(defaultDate.getFullYear(), defaultDate.getMonth(), defaultDate.getDate(), startTimeTokens_1[0], startTimeTokens_1[1]); //date format
            nextDate = new Date(newDate.getTime() + (1000 * 60 * 30)); //get incremented date time
            startTime = nextDate.getHours() + ":" + nextDate.getMinutes(); //extract time part
            startTime = startTime.replace(":0", ":00");
        }
        timeSlots.push(startTime); //push start time to array
        // end time to timedata
        var endTimeTokens = endTime.split(':');
        var endDate = new Date(defaultDate.getFullYear(), defaultDate.getMonth(), defaultDate.getDate(), endTimeTokens[0], endTimeTokens[1]); //date format
        var endHour = endDate.getHours() == 0 ? 24 : endDate.getHours();
        // start time to timedata
        var startTimeTokens = startTime.split(':');
        var startDate = new Date(defaultDate.getFullYear(), defaultDate.getMonth(), defaultDate.getDate(), startTimeTokens[0], startTimeTokens[1]); //date format
        var startHour = startDate.getHours();
        turns = (endHour - startHour) / hourDecimal; //to calculate number of time intervals that should be shown
        for (var i = 0; i < turns; i++) {
            var timeTokens = startTime.split(':');
            newDate = new Date(defaultDate.getFullYear(), defaultDate.getMonth(), defaultDate.getDate(), timeTokens[0], timeTokens[1]); //date format
            nextDate = new Date(newDate.getTime() + (1000 * 60 * increment)); //get incremented date time
            startTime = nextDate.getHours() + ":" + nextDate.getMinutes(); //extract time part
            startTime = startTime.replace(":0", ":00");
            //change start time is selected date is today
            timeSlots.push(startTime); //push time to array
        }
        return timeSlots; // returns time slots as array
    };
    //service call to request check-in
    RoomsServiceProvider.prototype.sendRoomServiceRequest = function (date, comments) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var itemObj = [];
            if (_this.objRoomService != null) {
                var itemList = _this.objRoomService.serviceItemsList;
                for (var i = 0; i < itemList.length; i++) {
                    if (itemList[i].quantity > 0) {
                        var itemArray = {};
                        itemArray.cantidad = itemList[i].quantity;
                        itemArray.precio = itemList[i].price;
                        itemArray.id = itemList[i].id;
                        itemObj.push(itemArray);
                    }
                }
            }
            var serviceData = {
                'items': itemObj
            };
            var service = 'CREATE_ROOMSERVICE_RESERVATION';
            var qryParams = 'fechaHora=' + date + '&comentario=' + comments + '&uuid=' + _this.deviceProvider.uuid + '&reservaId=' + _this.reservationProvider.objReservation.reservationId;
            var url = _this.constant.URL_TRANSACTION_SERVER;
            _this.communicationProvider.post(url, serviceData, observer, service, qryParams); // http post service call
        });
    };
    RoomsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__hotel_service_hotel_service__["a" /* HotelServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */],
            __WEBPACK_IMPORTED_MODULE_6__device_service_device_service__["a" /* DeviceServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__communication_service_communication_service__["a" /* CommunicationServiceProvider */]])
    ], RoomsServiceProvider);
    return RoomsServiceProvider;
}());

//# sourceMappingURL=rooms-service.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_service_device_service__ = __webpack_require__(12);
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





var CountryServiceProvider = /** @class */ (function () {
    function CountryServiceProvider(http, device, tools) {
        this.http = http;
        this.device = device;
        this.tools = tools;
        console.log('Hello CountryServiceProvider Provider');
    }
    /**
     * Function to show country list based on device preferred language
     */
    CountryServiceProvider.prototype.fnshowCountryList = function () {
        var _this = this;
        this.language = this.device.preferredLanguage;
        this.tools.isLanguageFromSpain(this.language) ? this.url = "assets/countries/countriesES.json" : this.url = "assets/countries/countries.json";
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _this.http.get(_this.url)
                .subscribe(function (data) {
                observer.next(data);
                observer.complete();
                return data;
            });
        });
    };
    CountryServiceProvider.prototype.fnshowProvinceList = function () {
        var _this = this;
        this.language = this.device.preferredLanguage;
        this.url = "assets/countries/provincies.json";
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _this.http.get(_this.url)
                .subscribe(function (data) {
                observer.next(data);
                observer.complete();
                return data;
            });
        });
    };
    CountryServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */]])
    ], CountryServiceProvider);
    return CountryServiceProvider;
}());

//# sourceMappingURL=country-service.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*****************************************************
 * File containing the main constants definition used*
 */ ///////////////////////////////////////////////////

var Constant = /** @class */ (function () {
    function Constant() {
        this.devHost = "dev.guestmate-app.com";
        this.testHost = "localhost";
        this.prodHost = "localhost";
        this.environment = 'dev';
        this.local = {
            INFO_SERVER: "localhost",
            INFO_SERVER_PORT: "80",
            TRANSACTION_SERVER: "localhost",
            TRANSACTION_SERVER_PORT: "80",
            NOTIFICATION_SERVER: "localhost",
            NOTIFICATION_SERVER_PORT: "80",
            INFO_SERVER_PROTOCOL: "https",
            TRANSACTION_SERVER_PROTOCOL: "https",
            NOTIFICATION_SERVER_PROTOCOL: "https",
            SENDER_ID: 212097733749,
            MAX_TIME_BEFORE_RELOAD: 600000,
            MIN_TIME_BETWEEN_COLDSTART_NOTIFICATIONS: 5000,
            MIN_TIME_BETWEEN_BACKGROUND_NOTIFICATIONS: 5000,
            URL_INFO_SERVER: this.urlPrefix() + "resources/images",
            URL_TRANSACTION_SERVER: this.urlPrefix() + "resources/services",
            URL_NOTIFICATION_SERVER: this.urlPrefix() + "resources/services"
        };
        this.dev = {
            INFO_SERVER: this.devHost,
            INFO_SERVER_PORT: "443",
            TRANSACTION_SERVER: this.devHost,
            TRANSACTION_SERVER_PORT: "443",
            NOTIFICATION_SERVER: this.devHost,
            NOTIFICATION_SERVER_PORT: "443",
            INFO_SERVER_PROTOCOL: "https",
            TRANSACTION_SERVER_PROTOCOL: "https",
            NOTIFICATION_SERVER_PROTOCOL: "https",
            SENDER_ID: 212097733749,
            MAX_TIME_BEFORE_RELOAD: 60000,
            MIN_TIME_BETWEEN_COLDSTART_NOTIFICATIONS: 5000,
            MIN_TIME_BETWEEN_BACKGROUND_NOTIFICATIONS: 5000 // milliseconds
        };
        this.test = {
            INFO_SERVER: this.testHost,
            INFO_SERVER_PORT: "8080",
            TRANSACTION_SERVER: this.testHost,
            TRANSACTION_SERVER_PORT: "8080",
            NOTIFICATION_SERVER: this.testHost,
            NOTIFICATION_SERVER_PORT: "8080",
            INFO_SERVER_PROTOCOL: "http",
            TRANSACTION_SERVER_PROTOCOL: "http",
            NOTIFICATION_SERVER_PROTOCOL: "http",
            SENDER_ID: 212097733749,
            MAX_TIME_BEFORE_RELOAD: 60000,
            MIN_TIME_BETWEEN_COLDSTART_NOTIFICATIONS: 5000,
            MIN_TIME_BETWEEN_BACKGROUND_NOTIFICATIONS: 5000 // milliseconds
        };
        this.prod = {
            INFO_SERVER: this.prodHost,
            INFO_SERVER_PORT: "443",
            TRANSACTION_SERVER: this.prodHost,
            TRANSACTION_SERVER_PORT: "443",
            NOTIFICATION_SERVER: this.prodHost,
            NOTIFICATION_SERVER_PORT: "443",
            INFO_SERVER_PROTOCOL: "https",
            TRANSACTION_SERVER_PROTOCOL: "https",
            NOTIFICATION_SERVER_PROTOCOL: "https",
            SENDER_ID: 212097733749,
            MAX_TIME_BEFORE_RELOAD: 300000,
            MIN_TIME_BETWEEN_COLDSTART_NOTIFICATIONS: 5000,
            MIN_TIME_BETWEEN_BACKGROUND_NOTIFICATIONS: 5000 // milliseconds
        };
        /* Default values ​​or common to all environments */
        this._API_VERSION = 1;
        this._DEFAULT_MASK_START_MILLIS = 1500;
        this.PRIVACY_URL_ES = "http://www.guestpilot.com/es/legal/privacidad.html";
        this.PRIVACY_URL_WORLD = "http://www.guestpilot.com/legal/privacy.html";
        this.LEGAL_URL_ES = "http://www.guestpilot.com/es/legal/terms.html";
        this.LEGAL_URL_WORLD = "http://www.guestpilot.com/legal/terms.html";
        this.LOCAL_STORAGE = "GEN_";
        this.LANGUAGES = {
            es: { key: "es", name: "español" },
            ca: { key: "ca", name: "català" },
            en: { key: "en", name: "english" },
            de: { key: "de", name: "deutsch" },
            fr: { key: "fr", name: "français" },
            gl: { key: "gl", name: "galego" },
            it: { key: "it", name: "italiano" },
            pl: { key: "pl", name: "polski" },
            pt: { key: "pt", name: "português" },
            ru: { key: "ru", name: "русский" },
            nl: { key: "nl", name: "nederlands" },
            eu: { key: "eu", name: "euskera" },
            zh: { key: "zh", name: "中國" }
        };
        this.DEFAULT_LANGUAGE = "en";
        this.SPANISH = "es";
        this.localDelayMin = 100; //minimum delay time
        this.localDelayMax = 1000; // maximum delay time
        this.VERSION_APP = "1.0.1";
        this.RELEASE = {
            YEAR: "2017",
            MONTH: "08",
            DAY: "22",
            MAJOR: "1",
            MINOR: "0",
            BUILD: "1"
        };
        this.SERVICE_RESTAURANT = "RESTAURANTE";
        this.SERVICE_ACTIVITY = "ACTIVIDAD";
        this.SERVICE_OFFER = "OFERTA";
        this.SERVICE_WELLNESS = "SERVICIO_SALUD";
        this.SERVICE_ITEM_WELLNESS = "ITEM_SERVICIO_SALUD";
        this.SERVICE_ROOM = "SERVICIO_HABITACIONES";
        this.SERVICE_DESCONOCIDO = "**DESCONOCIDO**";
        this.APP_NAME = "Guestmate";
        this.APP_DOMAIN = "com.guestmate.Guestmate";
        //guestmate prod--> PUSH_KEY = "60816727-edf8-4df3-9c5a-b9b2c26af5c5";
        this.PUSH_KEY = "3ae88d10-d238-4705-963d-7c56fd3861d1";
        this._URL_INFO_SERVER = this.get('INFO_SERVER_PROTOCOL') + "://" + this.get('INFO_SERVER') + ":" + this.get('INFO_SERVER_PORT') + "/info-server/" + this.get('_API_VERSION') + "/info";
        this._URL_TRANSACTION_SERVER = this.get('TRANSACTION_SERVER_PROTOCOL') + "://" + this.get('TRANSACTION_SERVER') + ":" + this.get('TRANSACTION_SERVER_PORT') + "/transaction-services/" + this.get('_API_VERSION') + "/ts";
        this._URL_NOTIFICATION_SERVER = this.get('NOTIFICATION_SERVER_PROTOCOL') + "://" + this.get('NOTIFICATION_SERVER') + ":" + this.get('NOTIFICATION_SERVER_PORT') + "/notification-services/" + this.get('_API_VERSION') + "/notification";
        this.PRE_FLIGHT = true;
        this.ALLOWOPTIONNOSTAY = true;
        this.API_VERSION = this.get('_API_VERSION');
        this.WEB_MODE = this.get('_WEB_MODE');
        this.INFO_SERVER_PROTOCOL = this.get('INFO_SERVER_PROTOCOL');
        this.INFO_SERVER = this.get('INFO_SERVER');
        this.INFO_SERVER_PORT = this.get('INFO_SERVER_PORT');
        this.TRANSACTION_SERVER_PROTOCOL = this.get('TRANSACTION_SERVER_PROTOCOL');
        this.TRANSACTION_SERVER = this.get('TRANSACTION_SERVER');
        this.TRANSACTION_SERVER_PORT = this.get('TRANSACTION_SERVER_PORT');
        this.NOTIFICATION_SERVER_PROTOCOL = this.get('TRANSACTION_SERVER_PROTOCOL');
        this.NOTIFICATION_SERVER = this.get('NOTIFICATION_SERVER');
        this.NOTIFICATION_SERVER_PORT = this.get('NOTIFICATION_SERVER_PORT');
        this.MAXDAYS_BOOKING_NOSTAY = 60;
        this.URL_INFO_SERVER = this._URL_INFO_SERVER;
        this.URL_TRANSACTION_SERVER = this._URL_TRANSACTION_SERVER;
        this.URL_NOTIFICATION_SERVER = this._URL_NOTIFICATION_SERVER;
        // Push Notifications
        this.SENDER_ID = this.get('SENDER_ID');
        this.MAX_TIME_BEFORE_RELOAD = this.get('MAX_TIME_BEFORE_RELOAD');
        this.MIN_TIME_BETWEEN_COLDSTART_NOTIFICATIONS = this.get('MIN_TIME_BETWEEN_COLDSTART_NOTIFICATIONS');
        this.MIN_TIME_BETWEEN_BACKGROUND_NOTIFICATIONS = this.get('MIN_TIME_BETWEEN_BACKGROUND_NOTIFICATIONS');
        this.DEFAULT_MASK_START_MILLIS = this.get('_DEFAULT_MASK_START_MILLIS');
        this.MESSAGE_TYPE = {
            CHECKIN_NOTIFICACION: "CHECKIN_NOTIFICACION",
            CHECKIN: "CHECKIN",
            CHECKOUT_NOTIFICACION: "CHECKOUT_NOTIFICACION",
            CHECKOUT: "CHECKOUT",
            MESSAGE: "MESSAGE"
        };
        /*
        Returns true if we are running the application in web environment. Returns false if the App is running in the
               device
        */
        this._WEB_MODE = this.isWebMode();
        this.TIPO_MENSAJE = {
            NOTIFICACION_APERTURA_CHECKIN: "NOTIFICACION_APERTURA_CHECKIN",
            CHECKIN: "CHECKIN",
            NOTIFICACION_APERTURA_CHECKOUT: "NOTIFICACION_APERTURA_CHECKOUT",
            CHECKOUT: "CHECKOUT",
            MENSAJE_PLANIFICADO: "MENSAJE_PLANIFICADO"
        };
    }
    Constant.prototype.urlPrefix = function () {
        var re = new RegExp("^" + this.APP_NAME);
        if (re.test(navigator.userAgent) == true) {
            return "file://android_asset/www/";
        }
        else {
            return "";
        }
    };
    Constant.prototype.get = function (configVar) {
        var configValue = typeof this[this.environment][configVar] == "undefined" ? this[configVar] : this[this.environment][configVar];
        return typeof configValue == "function" ? configValue() : configValue;
    };
    Constant.prototype.isWebMode = function () {
        var re = new RegExp("^" + this.APP_NAME);
        return !re.test(navigator.userAgent);
    };
    Constant = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Constant);
    return Constant;
}());

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DeviceServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DeviceServiceProvider = /** @class */ (function () {
    function DeviceServiceProvider(device) {
        this.device = device;
        //Device preferred language, accessible at all component
        this.preferredLanguage = "en";
        this.uuid = "";
        this.Online = true;
        this.btnCheckInEnabled = false;
        this.model = this.device.model;
        this.platForm = this.device.platform;
        this.osVersion = this.device.version;
        this.cordovaVersion = this.device.cordova;
    }
    //set device preferred language 
    DeviceServiceProvider.prototype.setPreferredLanguage = function (preferredLanguage) {
        this.preferredLanguage = preferredLanguage;
    };
    //set device unique ID
    DeviceServiceProvider.prototype.setUniqueDeviceID = function (uuid) {
        this.uuid = uuid;
    };
    DeviceServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */]])
    ], DeviceServiceProvider);
    return DeviceServiceProvider;
}());

//# sourceMappingURL=device-service.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the BookingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BookingServiceProvider = /** @class */ (function () {
    function BookingServiceProvider(http, constant, communicationProvider, deviceProvider) {
        this.http = http;
        this.constant = constant;
        this.communicationProvider = communicationProvider;
        this.deviceProvider = deviceProvider;
        console.log('Hello BookingServiceProvider Provider');
    }
    BookingServiceProvider.prototype.fnGetBookingInfo = function (reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/online/huesped/mis-reservas-de-servicio';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.get(url, Params, observer); // http get service call
        });
    };
    BookingServiceProvider.prototype.getQRImagePath = function (qrId, reservationId) {
        return this.constant.URL_INFO_SERVER + "/qr/" + qrId + "/" + this.deviceProvider.uuid + "/" + reservationId + "/";
    };
    BookingServiceProvider.prototype.sendCancellation = function (reservationId, serviceId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'CANCEL_CALL';
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('callId', serviceId);
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer, service); // http get service call
        });
    };
    BookingServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__communication_service_communication_service__["a" /* CommunicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__["a" /* DeviceServiceProvider */]])
    ], BookingServiceProvider);
    return BookingServiceProvider;
}());

//# sourceMappingURL=booking-service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_service_login_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_home_service_home_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_globalization__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__model_reservation_model__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_keyboard__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__model_hotel_model__ = __webpack_require__(188);
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



















var LoginPage = /** @class */ (function () {
    function LoginPage(transfer, file, hotelPvdr, events, keyboard, platform, navCtrl, navParams, formBuilder, sanitized, cdRef, toolsProvider, alertCtrl, iab, loginProvider, reservationProvider, globalization, translate, constant, nativeStorage, loadingCtrl, homeProvider) {
        var _this = this;
        this.transfer = transfer;
        this.file = file;
        this.hotelPvdr = hotelPvdr;
        this.events = events;
        this.keyboard = keyboard;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.sanitized = sanitized;
        this.cdRef = cdRef;
        this.toolsProvider = toolsProvider;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.loginProvider = loginProvider;
        this.reservationProvider = reservationProvider;
        this.globalization = globalization;
        this.translate = translate;
        this.constant = constant;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.homeProvider = homeProvider;
        this.htmlData = null; // to manage html content
        this.isKeyboardOpen = false;
        this.allowOptionNoStay = this.constant.ALLOWOPTIONNOSTAY;
        this.toolsProvider.setTranslateLanguage();
        // form initialization and validations
        this.loginForm = formBuilder.group({
            'reservationId': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
        window.addEventListener('keyboardWillHide', function (event) {
            _this.isKeyboardOpen = false;
            //this.content.scrollToBottom();
        });
    }
    LoginPage.prototype.fnKeyboardOpen = function () {
        this.isKeyboardOpen = true;
    };
    LoginPage.prototype.fnShowFooter = function () {
        this.isKeyboardOpen = false;
    };
    //initial page load
    LoginPage.prototype.ionViewWillEnter = function () {
        console.log("Device height is - " + this.platform.height());
        console.log("Device width is - " + this.platform.width());
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.keyboard.disableScroll(true);
        //send device information to service
        this.sendDeviceDetails();
        var locale = this.constant.DEFAULT_LANGUAGE;
        this.globalization.getPreferredLanguage()
            .then(function (res) {
            console.log(res);
            if (res.value.indexOf('-') !== -1) {
                locale = res.value.substring(0, 2);
            }
            else {
                locale = res.value;
            }
            if (!_this.toolsProvider.isValidLanguage(locale)) {
                if (_this.toolsProvider.isLanguageFromSpain(locale))
                    locale = _this.constant.SPANISH;
                else
                    locale = _this.constant.DEFAULT_LANGUAGE;
            }
            _this.translate.use(locale);
            _this.initialLoad();
        })
            .catch(function (e) {
            console.log(e);
            locale = _this.constant.DEFAULT_LANGUAGE;
            _this.translate.use(locale);
        });
    };
    LoginPage.prototype.initialLoad = function () {
        var _this = this;
        var current = this;
        this.res = this.toolsProvider.fnLanguageTranslate("view.login.label.legal"); // translate of html content with common funtion
        this.res.subscribe(function (value) {
            _this.htmlData = _this.sanitized.bypassSecurityTrustHtml(value); // bypass html content to avoid losing html attributes
            _this.cdRef.detectChanges(); // Checks the view and its children.
            /* click binding to termsofservice span element and redirection */
            var termsElmnt = document.querySelector('ion-nav').querySelectorAll("#termsOfService");
            for (var i = 0; i < termsElmnt.length; i++) {
                if (termsElmnt[i]) {
                    termsElmnt[i].addEventListener('click', function (e) {
                        current.iab.create(current.toolsProvider.getLegalUrl(), "_blank", "location=yes,toolbar=yes,hardwareback=yes");
                    });
                }
            }
            /* click binding to privacyPolicy span element and redirection */
            var privacyElmnt = document.querySelector('ion-nav').querySelectorAll('#privacyPolicy');
            for (var j = 0; j < termsElmnt.length; j++) {
                if (privacyElmnt[j]) {
                    privacyElmnt[j].addEventListener('click', function (e) {
                        current.iab.create(current.toolsProvider.getPrivacyUrl(), "_blank", "location=yes,toolbar=yes,hardwareback=yes");
                    });
                }
            }
        });
    };
    //function for sending device information to service
    LoginPage.prototype.sendDeviceDetails = function () {
        this.loginProvider.sendDeviceData().subscribe(function (data) {
            if (data.success == true) {
                console.log("device information sent successfully!");
            }
        });
    };
    LoginPage.prototype.checkReservationIDValid = function () {
        var _this = this;
        // check reservation id is null
        if (this.loginForm.get('reservationId').value == undefined || this.loginForm.get('reservationId').value == null) {
            var msg = this.toolsProvider.fnLanguageTranslate(["view.login.error.empty", "common.error", "buttons.ok"]); // translate of html content with common funtion
            msg.subscribe(function (value) {
                var alertnew = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: value['view.login.error.empty'],
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
            var reservationId_1 = this.loginForm.get('reservationId').value;
            this.showLoading();
            this.loginProvider.fnLoginProceed(reservationId_1).subscribe(function (data) {
                if (data.success == true) {
                    // set reservation data to reservation object
                    _this.reservationProvider.objReservation = new __WEBPACK_IMPORTED_MODULE_13__model_reservation_model__["a" /* Reservation */]();
                    _this.reservationProvider.objReservation.localizer = reservationId_1;
                    _this.reservationProvider.objReservation.guestName = data.response.nombreHuesped;
                    _this.reservationProvider.objReservation.reservationId = data.response.reservaId;
                    _this.reservationProvider.objReservation.email = data.response.mail;
                    _this.reservationProvider.objReservation.roomType = data.response.tipoHabitacion;
                    _this.reservationProvider.objReservation.nights = data.response.noches;
                    _this.reservationProvider.objReservation.noOfPersons = data.response.personas;
                    _this.reservationProvider.objReservation.price = data.response.precio;
                    _this.reservationProvider.objReservation.createdDate = data.response.entrada;
                    _this.reservationProvider.objReservation.alreadyRegistered = data.response.huespedYaRegistrado;
                    _this.reservationProvider.objReservation.registrationCompleted = data.response.formularioRegistroEnviado;
                    _this.reservationProvider.objReservation.tripTypeReserve = data.response.tipoViajeReservaYaDefinido;
                    _this.reservationProvider.objReservation.roomNumber = data.response.numeroHabitacion;
                    _this.reservationProvider.objReservation.hotelName = data.response.nombreHotel;
                    _this.reservationProvider.objReservation.alreadyCheckIn = data.response.huespedYaCheckInRealizado;
                    _this.reservationProvider.objReservation.alreadyVerifiedCheckOut = data.response.huespedYaCheckOutRealizado;
                    _this.reservationProvider.objReservation.hotelLocation = data.response.localizadorHotel;
                    _this.reservationProvider.objReservation.lastName = data.response.apellidos;
                    _this.fnAlreadyCheckIn(data);
                }
                else if (data) {
                    // if error occurs, alert common error message
                    var errmsg = _this.toolsProvider.fnLanguageTranslate(["common.error", "view.login." + data.errorCode, "buttons.ok"], "view.login.error.credentials"); // translate of error message
                    _this.loading.dismiss();
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
    LoginPage.prototype.fnAlreadyCheckIn = function (dataResponse) {
        var _this = this;
        this.homeProvider.alreadyCheckIn().subscribe(function (data) {
            if (data.success) {
                if (data.response) {
                    _this.reservationProvider.objReservation.alreadyCheckIn = true;
                }
            }
            //store login data to local storage
            _this.nativeStorage.setItem('reservationData', {
                'localizer': _this.loginForm.get('reservationId').value, 'reservationId': dataResponse.response.reservaId, 'name': dataResponse.response.nombreHuesped, 'lastname': dataResponse.response.apellidos, 'email': dataResponse.response.mail, 'registrationCompleted': dataResponse.response.formularioRegistroEnviado, 'alreadyRegistered': dataResponse.response.huespedYaRegistrado, 'noStayGuest': false, 'response': dataResponse.response
            })
                .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
            _this.prepareReceptionpage();
        });
    };
    LoginPage.prototype.prepareReceptionpage = function () {
        var _this = this;
        this.hotelPvdr.objHotel = new __WEBPACK_IMPORTED_MODULE_16__model_hotel_model__["a" /* Hotel */]();
        this.events.subscribe("receptionEvent", function (status) {
            if (status) {
                _this.events.unsubscribe('receptionEvent');
                _this.downloadreceptionistImage();
            }
        });
        var type = 'reception';
        this.reservationProvider.getHotelDetails(this.reservationProvider.objReservation.reservationId).subscribe(function (data) {
            if (data) {
                _this.reservationProvider.getHotelInfo(data, type);
            }
        });
    };
    LoginPage.prototype.downloadreceptionistImage = function () {
        var _this = this;
        this.receptionistImage = this.toolsProvider.getImagePath(this.hotelPvdr.objHotel.receptionistImage);
        this.file.checkFile(this.file.cacheDirectory, this.hotelPvdr.objHotel.receptionistImage + ".jpg").then(function () {
            _this.receptionistImage = _this.file.cacheDirectory + _this.hotelPvdr.objHotel.receptionistImage + ".jpg";
            if (_this.platform.is('ios')) {
                _this.receptionistImage = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(_this.file.cacheDirectory + _this.hotelPvdr.objHotel.receptionistImage + ".jpg");
            }
            _this.downloadbackgroundImage();
        }, function (error) {
            var fileTransfer = _this.transfer.create();
            fileTransfer.download(_this.receptionistImage, _this.file.cacheDirectory + _this.hotelPvdr.objHotel.receptionistImage + ".jpg").then(function (entry) {
                _this.receptionistImage = entry.toURL();
                if (_this.platform.is('ios')) {
                    _this.receptionistImage = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(entry.toURL());
                }
                _this.downloadbackgroundImage();
            }, function (error) {
                _this.downloadbackgroundImage();
            });
        });
    };
    LoginPage.prototype.downloadbackgroundImage = function () {
        var _this = this;
        this.backgroundImage = this.toolsProvider.getImagePath(this.hotelPvdr.objHotel.mainImage);
        this.file.checkFile(this.file.cacheDirectory, this.hotelPvdr.objHotel.mainImage + ".jpg").then(function () {
            _this.backgroundImage = _this.file.cacheDirectory + _this.hotelPvdr.objHotel.mainImage + ".jpg";
            if (_this.platform.is('ios')) {
                _this.backgroundImage = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(_this.file.cacheDirectory + _this.hotelPvdr.objHotel.mainImage + ".jpg");
            }
            _this.fnGoToReceptionPage();
        }, function (error) {
            var fileTransfer = _this.transfer.create();
            fileTransfer.download(_this.backgroundImage, _this.file.cacheDirectory + _this.hotelPvdr.objHotel.mainImage + ".jpg").then(function (entry) {
                _this.backgroundImage = entry.toURL();
                if (_this.platform.is('ios')) {
                    _this.backgroundImage = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(entry.toURL());
                }
                _this.fnGoToReceptionPage();
            }, function (error) {
                _this.fnGoToReceptionPage();
            });
        });
    };
    LoginPage.prototype.fnGoToReceptionPage = function () {
        this.hotelPvdr.objHotel.mainImageUrl = this.backgroundImage;
        this.loading.dismiss();
        this.navCtrl.push("ReceptionPage", { backgroundImage: this.backgroundImage, receptionistImage: this.receptionistImage }, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
    };
    LoginPage.prototype.fnGotoForgotReservation = function () {
        this.navCtrl.push('ForgotIdPage', {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
    };
    LoginPage.prototype.fnGotoNoStay = function () {
        this.navCtrl.push('NoStayInHotelPage', {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], LoginPage.prototype, "content", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/login/login.html"*/'<ion-content class="app_start_wrpr login_wrpr" overflow-scroll="true" scroll="true" no-bounce>\n  <form [formGroup]="loginForm" class="loginform">\n    <span class="login_logo"></span>\n    <div class="app_start_inner">\n      <ion-item class="user_id">\n        <ion-icon ios="ios-lock" md="md-lock"></ion-icon>\n        <ion-label>\n          {{"view.login.label.reserva.title" | translate}}\n        </ion-label>\n        <ion-input tappable (tap)="fnKeyboardOpen()" (blur)="fnShowFooter()" formControlName="reservationId" type="text" placeholder="{{\'view.login.label.reserva.placeHolder\' | translate}}"></ion-input>\n      </ion-item>\n\n      <ion-item (tap)="fnGotoForgotReservation()">\n        <ion-label>\n          {{"view.login.label.forgot.title" | translate}}\n        </ion-label>\n      </ion-item>\n      <ion-item (tap)="fnGotoNoStay()" *ngIf="allowOptionNoStay">\n        <ion-label>\n          {{"view.login.label.nostay.title" | translate}}\n        </ion-label>\n      </ion-item>\n    </div>\n    <span class="login_footer login_land_scpftr">\n      <ion-item class="login_btn_wrpr">\n        <button (click)="checkReservationIDValid()">{{"view.login.label.login" | translate}}</button>\n      </ion-item>\n      <span [innerHtml]="htmlData" class="login_ftr_content">\n      </span>\n    </span>\n  </form>\n  <span [class.login_footer_added]="isKeyboardOpen" class="login_footer login_prtrt_scpftr">\n    <ion-item class="login_btn_wrpr">\n      <button (click)="checkReservationIDValid()">{{"view.login.label.login" | translate}}</button>\n    </ion-item>\n    <span [innerHtml]="htmlData" class="login_ftr_content">\n    </span>\n  </span>\n</ion-content>\n\n\n\n<!-- <ion-content  class="app_start_wrpr" overflow-scroll="true" scroll="true">\n  <form [formGroup]="loginForm">\n    <span class="login_logo"></span>\n    <div class="app_start_inner">\n      <ion-item class="user_id">\n        <ion-icon ios="ios-lock" md="md-lock"></ion-icon>\n        <ion-label>\n          {{"view.login.label.reserva.title" | translate}}\n        </ion-label>\n        <ion-input  formControlName="reservationId" type="text" placeholder="{{\'view.login.label.reserva.placeHolder\' | translate}}"></ion-input>\n      </ion-item>\n\n      <ion-item (tap)="fnGotoForgotReservation()">\n        <ion-label>\n          {{"view.login.label.forgot.title" | translate}}\n        </ion-label>\n      </ion-item>\n      <ion-item (tap)="fnGotoNoStay()">\n        <ion-label>\n          {{"view.login.label.nostay.title" | translate}}\n        </ion-label>\n      </ion-item>\n    </div>\n    <span class="login_footer login_land_scpftr">\n      <ion-item class="login_btn_wrpr">\n        <button (click)="checkReservationIDValid()">{{"view.login.label.login" | translate}}</button>\n      </ion-item>\n      <span [innerHtml]="htmlData" class="login_ftr_content">\n      </span>\n    </span>\n  </form>\n</ion-content>\n<ion-footer>\n  <span class="login_footer login_prtrt_scpftr">\n    <ion-item class="login_btn_wrpr">\n      <button (click)="checkReservationIDValid()">{{"view.login.label.login" | translate}}</button>\n    </ion-item>\n    <span [innerHtml]="htmlData" class="login_ftr_content">\n    </span>\n  </span>\n</ion-footer> -->'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_14__ionic_native_keyboard__["a" /* Keyboard */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_15__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_5__providers_login_service_login_service__["a" /* LoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_globalization__["a" /* Globalization */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_10__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_home_service_home_service__["a" /* HomeServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reservation_service_reservation_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the HomeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HomeServiceProvider = /** @class */ (function () {
    function HomeServiceProvider(http, communication, constant, deviceProvider, reservationProvider) {
        this.http = http;
        this.communication = communication;
        this.constant = constant;
        this.deviceProvider = deviceProvider;
        this.reservationProvider = reservationProvider;
        console.log('Hello HomeServiceProvider Provider');
    }
    HomeServiceProvider.prototype.checkCheckInCheckOutAvailability = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'AVAILABILITY_CHECK_IN_OUT'; // service type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', _this.reservationProvider.objReservation.reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            _this.communication.get(url, Params, observer, service); // http get service call
        });
    };
    HomeServiceProvider.prototype.checkRoomServiceAvailability = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'FICHA_RESERVA'; // service type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', _this.reservationProvider.objReservation.reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            _this.communication.get(url, Params, observer, service); // http get service call
        });
    };
    HomeServiceProvider.prototype.alreadyCheckIn = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'CHECKIN'; // service type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', _this.reservationProvider.objReservation.reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            _this.communication.get(url, Params, observer, service); // http get service call
        });
    };
    HomeServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__communication_service_communication_service__["a" /* CommunicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__reservation_service_reservation_service__["a" /* ReservationServiceProvider */]])
    ], HomeServiceProvider);
    return HomeServiceProvider;
}());

//# sourceMappingURL=home-service.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_http__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errorhandler_guestmate_error_handler__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_tools__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the CommunicationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommunicationServiceProvider = /** @class */ (function () {
    function CommunicationServiceProvider(http, httpClient, app, alertCtrl, tools, platForm) {
        this.http = http;
        this.httpClient = httpClient;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.tools = tools;
        this.platForm = platForm;
        this.URL = {
            HELLO_I_AM_BUNDLE: '/online/hello-i-am-bundle',
            HELLO_I_AM_IN: '/online/hello-i-am-in',
            COMPLETE_REGISTER: '/online/huesped/registro/completa',
            VALID_RESERVATION: '/online/huesped/reserva/valida',
            RESERVATION_FORM: '/online/huesped/reserva/ficha',
            TMS_LAST_CHANGES: '/online/timestamp-ultimos-cambios',
            REQUEST_LOCALIZER: '/online/envia-mail',
            CREATE_RESTAURANT_RESERVATION: '/online/call/reserva-restaurante/create',
            CREATE_RESTAURANT_RESERVATION_PAYMENT: '/online/call/reserva-restaurante/payment/create',
            CREATE_OFFER_RESERVATION: '/online/call/reserva-oferta/create',
            CREATE_ACTIVITY_RESERVATION: '/online/call/reserva-actividad/create',
            CREATE_ACTIVITY_RESERVATION_PAYMENT: '/online/call/reserva-actividad/payment/create',
            CREATE_HEALTH_RESERVATION: '/online/call/reserva-servicio-salud/create',
            CREATE_HEALTH_RESERVATION_PAYMENT: '/online/call/reserva-servicio-salud/payment/create',
            CREATE_HEALTH_RESERVATION_ITEM: '/online/call/reserva-item-servicio-salud/create',
            CREATE_HEALTH_RESERVATION_ITEM_PAYMENT: '/online/call/reserva-item-servicio-salud/payment/create',
            CREATE_ROOMSERVICE_RESERVATION: '/online/call/servicio-habitaciones/create',
            SEND_MESSAGE: '/online/huesped/envia-mensaje',
            CANCEL_CALL: '/online/call/cancel',
            AVAILABILITY_CHECK_IN_OUT: '/online/checkin-checkout-disponibilidad',
            CHECKIN: '/online/checkin',
            CHECKOUT: '/online/checkout',
            HOTEL_RESERVATION: '/cacheable/hotel/reserva/',
            FICHA_RESERVA: '/online/huesped/reserva/ficha',
            CREATE_ROOMISSUE: 'xxxxxxx',
            CREATE_ROOMMAKEUP: 'xxxxxxx',
        };
        console.log('Hello CommunicationServiceProvider Provider');
    }
    /*
  common function for http get
  */
    CommunicationServiceProvider.prototype.get = function (url, Params, observer, service, reservationId) {
        var _this = this;
        if (service)
            url = url + this.getUrlConstant(service);
        if (reservationId)
            url = url + reservationId;
        // for ios
        if (this.platForm.is('ios')) {
            var paramsObject = Params.keys().reduce(function (object, key) {
                object[key] = Params.get(key).toString();
                return object;
            }, {});
            this.http.get(url, paramsObject, {})
                .then(function (data) {
                observer.next(JSON.parse(data.data));
                observer.complete();
                console.log(new Date() + ' success');
                return data;
            })
                .catch(function (error) {
                error.noNetwork = true;
                new __WEBPACK_IMPORTED_MODULE_3__errorhandler_guestmate_error_handler__["a" /* GuestmateErrorHandlerProvider */](_this.app, _this.alertCtrl, _this.tools).handleError(error);
                observer.next(false);
            });
        }
        else {
            this.httpClient.get(url, { params: Params }).subscribe(function (data) {
                observer.next(data);
                observer.complete();
                return data;
            }, function (error) {
                error.noNetwork = true;
                new __WEBPACK_IMPORTED_MODULE_3__errorhandler_guestmate_error_handler__["a" /* GuestmateErrorHandlerProvider */](_this.app, _this.alertCtrl, _this.tools).handleError(error);
                observer.next(false);
            });
        }
    };
    /*
     common function for http post
    */
    CommunicationServiceProvider.prototype.post = function (url, params, observer, service, qryParams) {
        var _this = this;
        if (service)
            url = url + this.getUrlConstant(service);
        if (qryParams) {
            url = url + '?' + qryParams;
            url = encodeURI(url);
        }
        //for ios
        if (this.platForm.is('ios')) {
            var paramsObject = void 0;
            try {
                paramsObject = params.keys().reduce(function (object, key) {
                    object[key] = params.get(key);
                    return object;
                }, {});
            }
            catch (e) {
                paramsObject = JSON.parse(JSON.stringify(params));
                this.http.setDataSerializer('json');
            }
            this.http.post(url, paramsObject, {})
                .then(function (data) {
                observer.next(JSON.parse(data.data));
                observer.complete();
                console.log(new Date() + ' success');
                return data;
            })
                .catch(function (error) {
                error.noNetwork = true;
                new __WEBPACK_IMPORTED_MODULE_3__errorhandler_guestmate_error_handler__["a" /* GuestmateErrorHandlerProvider */](_this.app, _this.alertCtrl, _this.tools).handleError(error);
                observer.next(false);
            });
        }
        else {
            this.httpClient.post(url, params).subscribe(function (data) {
                observer.next(data);
                observer.complete();
                return data;
            }, function (error) {
                error.noNetwork = true;
                new __WEBPACK_IMPORTED_MODULE_3__errorhandler_guestmate_error_handler__["a" /* GuestmateErrorHandlerProvider */](_this.app, _this.alertCtrl, _this.tools).handleError(error);
                observer.next(false);
            });
        }
    };
    /* for retrieving service URLs */
    CommunicationServiceProvider.prototype.getUrlConstant = function (constant) {
        return this.URL[constant];
    };
    CommunicationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */]])
    ], CommunicationServiceProvider);
    return CommunicationServiceProvider;
}());

//# sourceMappingURL=communication-service.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hotel_service_hotel_service__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the RestaurantServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestaurantServiceProvider = /** @class */ (function () {
    function RestaurantServiceProvider(http, constant, deviceProvider, communicationProvider, reservationProvider, hotelProvider) {
        this.http = http;
        this.constant = constant;
        this.deviceProvider = deviceProvider;
        this.communicationProvider = communicationProvider;
        this.reservationProvider = reservationProvider;
        this.hotelProvider = hotelProvider;
        console.log('Hello RestaurantServiceProvider Provider');
    }
    //to set all restaurant data
    RestaurantServiceProvider.prototype.getRestaurantInfo = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/cacheable/hotel/' + _this.hotelProvider.objHotel.id + '/restaurantes';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', _this.reservationProvider.objReservation.reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            _this.communicationProvider.get(url, Params, observer); // http get service call
        });
    };
    RestaurantServiceProvider.prototype.getDishesInfo = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/cacheable/hotel/' + _this.hotelProvider.objHotel.id + '/restaurantes/platos';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', _this.reservationProvider.objReservation.reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            _this.communicationProvider.get(url, Params, observer); // http get service call
        });
    };
    RestaurantServiceProvider.prototype.sendServiceReservationWithPayment = function (reservationId, serviceId, date, turn, noOfPersons, comments, cardholder, token) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'CREATE_RESTAURANT_RESERVATION_PAYMENT';
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('serviceId', serviceId);
            Params = Params.append('fecha', date);
            Params = Params.append('turno', turn);
            Params = Params.append('pax', noOfPersons);
            Params = Params.append('comentario', comments);
            Params = Params.append('titularTarjeta', cardholder);
            Params = Params.append('tokenTarjeta', token);
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer, service);
        });
    };
    RestaurantServiceProvider.prototype.sendRestaurantReservation = function (serviceId, date, turn, person, comments, reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'CREATE_RESTAURANT_RESERVATION'; // service type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('serviceId', serviceId); // params
            Params = Params.append('fecha', date);
            Params = Params.append('turno', turn);
            Params = Params.append('pax', person);
            Params = Params.append('comentario', comments);
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer, service); // http get service call
        });
    };
    RestaurantServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__["a" /* DeviceServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__communication_service_communication_service__["a" /* CommunicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__reservation_service_reservation_service__["a" /* ReservationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__hotel_service_hotel_service__["a" /* HotelServiceProvider */]])
    ], RestaurantServiceProvider);
    return RestaurantServiceProvider;
}());

//# sourceMappingURL=restaurant-service.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WellnessServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__communication_service_communication_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the WellnessServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WellnessServiceProvider = /** @class */ (function () {
    function WellnessServiceProvider(http, constant, deviceProvider, communicationProvider) {
        this.http = http;
        this.constant = constant;
        this.deviceProvider = deviceProvider;
        this.communicationProvider = communicationProvider;
        console.log('Hello WellnessServiceProvider Provider');
    }
    // Wellness data
    WellnessServiceProvider.prototype.getWellnessInfo = function (hotelId, reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/cacheable/hotel/' + hotelId + '/servicios-salud';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.get(url, Params, observer); // http get service call
        });
    };
    // welness item data
    WellnessServiceProvider.prototype.getItemList = function (hotelId, reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/cacheable/hotel/' + hotelId + '/servicios-salud/items';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.get(url, Params, observer); // http get service call
        });
    };
    WellnessServiceProvider.prototype.sendWellnessReservation = function (serviceId, date, turn, person, comments, reservationId, itemServiceId) {
        var _this = this;
        var serviceText = "";
        serviceText = (itemServiceId != null && itemServiceId != "") ? 'CREATE_HEALTH_RESERVATION_ITEM' : 'CREATE_HEALTH_RESERVATION'; // service type
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var service = serviceText;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('serviceId', serviceId); // params
            Params = Params.append('fecha', date);
            Params = Params.append('turno', turn);
            Params = Params.append('pax', person);
            Params = Params.append('comentario', comments);
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer, service); // http get service call
        });
    };
    WellnessServiceProvider.prototype.sendServiceWellnessWithPayment = function (reservationId, serviceId, date, turn, noOfPersons, comments, cardholder, token, itemServiceId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = "";
            service = (itemServiceId != null && itemServiceId != "") ? 'CREATE_HEALTH_RESERVATION_ITEM_PAYMENT' : 'CREATE_HEALTH_RESERVATION_PAYMENT'; // service type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('serviceId', serviceId);
            Params = Params.append('fecha', date);
            Params = Params.append('turno', turn);
            Params = Params.append('pax', noOfPersons);
            Params = Params.append('comentario', comments);
            Params = Params.append('titularTarjeta', cardholder);
            Params = Params.append('tokenTarjeta', token);
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer, service);
        });
    };
    WellnessServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__["a" /* DeviceServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__communication_service_communication_service__["a" /* CommunicationServiceProvider */]])
    ], WellnessServiceProvider);
    return WellnessServiceProvider;
}());

//# sourceMappingURL=wellness-service.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the PromotionsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PromotionsServiceProvider = /** @class */ (function () {
    function PromotionsServiceProvider(http, constant, communicationProvider, deviceProvider) {
        this.http = http;
        this.constant = constant;
        this.communicationProvider = communicationProvider;
        this.deviceProvider = deviceProvider;
        console.log('Hello PromotionsServiceProvider Provider');
    }
    PromotionsServiceProvider.prototype.getPromotionsList = function (hotelId, reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/cacheable/hotel/' + hotelId + '/ofertas';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.get(url, Params, observer); // http get service call
        });
    };
    PromotionsServiceProvider.prototype.sendPromotionsReservation = function (serviceId, date, turn, person, comments, reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'CREATE_OFFER_RESERVATION'; // service type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('serviceId', serviceId); // params
            Params = Params.append('fecha', date);
            Params = Params.append('turno', turn);
            Params = Params.append('pax', person);
            Params = Params.append('comentario', comments);
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer, service); // http get service call
        });
    };
    PromotionsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__communication_service_communication_service__["a" /* CommunicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__["a" /* DeviceServiceProvider */]])
    ], PromotionsServiceProvider);
    return PromotionsServiceProvider;
}());

//# sourceMappingURL=promotions-service.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GuestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GuestServiceProvider = /** @class */ (function () {
    function GuestServiceProvider(http) {
        this.http = http;
        console.log('Hello GuestServiceProvider Provider');
    }
    GuestServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], GuestServiceProvider);
    return GuestServiceProvider;
}());

//# sourceMappingURL=guest-service.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reservation; });
var Reservation = /** @class */ (function () {
    function Reservation() {
        this.alreadyCheckIn = false;
        this.alreadyVerifiedCheckOut = false;
        this.noStayGuest = false;
    }
    return Reservation;
}());

//# sourceMappingURL=reservation-model.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hotel; });
var Hotel = /** @class */ (function () {
    function Hotel() {
        this.defaultCheckinTime = '16: 00 ';
        this.defaultCheckoutTime = '12: 00';
        this.healthService = false;
        this.roomService = false;
        this.offerService = false;
        this.chatService = false;
        this.activityService = false;
        this.restaurantService = false;
        this.checkinService = false;
        this.checkoutService = false;
        this.noStayHealthService = false;
        this.noStayOfferService = false;
        this.noStayChatService = false;
        this.noStayActivityService = false;
        this.noStayRestaurantService = false;
    }
    return Hotel;
}());

//# sourceMappingURL=hotel-model.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomServiceExtraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RoomServiceExtraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RoomServiceExtraProvider = /** @class */ (function () {
    function RoomServiceExtraProvider(http) {
        this.http = http;
    }
    RoomServiceExtraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], RoomServiceExtraProvider);
    return RoomServiceExtraProvider;
}());

//# sourceMappingURL=room-service-extra.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCompleteCountryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_country_service_country_service__ = __webpack_require__(107);
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
 * Generated class for the AutoCompleteCountryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AutoCompleteCountryPage = /** @class */ (function () {
    function AutoCompleteCountryPage(navCtrl, navParams, loadingCtrl, viewCtrl, http, countryService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.countryService = countryService;
        this.selectedCountry = navParams.get('selectedItem');
        this.fnGetCountryList();
    }
    AutoCompleteCountryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AutoCompleteCountryPage');
    };
    AutoCompleteCountryPage.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss(item);
    };
    /**
     * Function to load country list
     */
    AutoCompleteCountryPage.prototype.fnGetCountryList = function () {
        var _this = this;
        this.showLoading();
        this.countryService.fnshowCountryList().subscribe(function (data) {
            _this.autocompleteItems = data.Country;
            _this.loading.dismiss();
        });
    };
    AutoCompleteCountryPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    AutoCompleteCountryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AutoCompleteCountryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auto-complete-country',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/auto-complete-country/auto-complete-country.html"*/'<ion-header class="search_header">\n  <ion-navbar hideBackButton="true">\n    <span class="back_header bk_hdr_btn reg_header">\n      <!-- <button ion-button (click)="dismiss()" class="back_btn">\n        <img src="assets/svg/white-back.svg">\n      </button> -->\n      <button (click)=\'dismiss()\' class="hdr_back_btn_wrpr">\n        <i class="icon-arrow-left2"></i>\n      </button>\n      Choose a Country\n    </span>\n    <span class="cntry_search">\n      <i class="icon-City_area"></i>\n      <input #txtFname placeholder="search country here" />\n    </span>\n    <!--     \n    <button(click)="dismiss()">\n      <img src="assets/svg/white_close.svg"/>\n      </button>  -->\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="search_cntry" no-bounce>\n  <form>\n    <ion-list>\n      <ion-item *ngFor="let item of autocompleteItems | searchpipe: \'text\' : txtFname.value " tappable (click)="chooseItem(item)"\n        [ngClass]="{\'country_selct\' : item.value==selectedCountry}">\n        {{ item.text }}\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/auto-complete-country/auto-complete-country.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_country_service_country_service__["a" /* CountryServiceProvider */]])
    ], AutoCompleteCountryPage);
    return AutoCompleteCountryPage;
}());

//# sourceMappingURL=auto-complete-country.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_stripe__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_tools_tools__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/*
  Generated class for the ReservationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReservationServiceProvider = /** @class */ (function () {
    function ReservationServiceProvider(transfer, file, tools, http, communicationProvider, constant, hotelProvider, events, deviceProvider, stripeService, platForm) {
        this.transfer = transfer;
        this.file = file;
        this.tools = tools;
        this.http = http;
        this.communicationProvider = communicationProvider;
        this.constant = constant;
        this.hotelProvider = hotelProvider;
        this.events = events;
        this.deviceProvider = deviceProvider;
        this.stripeService = stripeService;
        this.platForm = platForm;
    }
    // set hotel data
    ReservationServiceProvider.prototype.getHotelInfo = function (data, type) {
        this.hotelProvider.objHotel.hotelName = data.response.nombre;
        this.hotelProvider.objHotel.id = data.response.id;
        this.hotelProvider.objHotel.category = data.response.categoria;
        this.hotelProvider.objHotel.telephone = data.response.telefono;
        this.hotelProvider.objHotel.address = data.response.direccion;
        this.hotelProvider.objHotel.location = data.response.poblacion;
        this.hotelProvider.objHotel.postalCode = data.response.codigoPostal;
        this.hotelProvider.objHotel.province = data.response.provincia;
        this.hotelProvider.objHotel.country = data.response.pais.nombre;
        this.hotelProvider.objHotel.lat = data.response.lat;
        this.hotelProvider.objHotel.lon = data.response.lon;
        this.hotelProvider.objHotel.currency = data.response.moneda;
        this.hotelProvider.objHotel.urlWeb = data.response.urlWeb;
        this.hotelProvider.objHotel.userFacebook = data.response.usuarioFacebook;
        this.hotelProvider.objHotel.twitterUser = data.response.usuarioTwitter;
        this.hotelProvider.objHotel.logo = data.response.logotipo;
        this.hotelProvider.objHotel.receptionistName = data.response.nombreRecepcionista;
        this.hotelProvider.objHotel.receptionistPosition = data.response.cargoRecepcionista;
        this.hotelProvider.objHotel.receptionistText = data.response.textoRecepcionista;
        this.hotelProvider.objHotel.defaultCheckinTime = data.response.horaCheckinPorDefecto;
        this.hotelProvider.objHotel.defaultCheckoutTime = data.response.horaCheckoutPorDefecto;
        this.hotelProvider.objHotel.stripePublicKey = data.response.stripePublicKey;
        this.hotelProvider.objHotel.healthService = data.response.serviceSalud;
        this.hotelProvider.objHotel.roomService = data.response.serviceRoom;
        this.hotelProvider.objHotel.offerService = data.response.serviceOferta;
        this.hotelProvider.objHotel.chatService = data.response.serviceChat;
        this.hotelProvider.objHotel.activityService = data.response.serviceActividad;
        this.hotelProvider.objHotel.checkinService = data.response.serviceCheckin;
        this.hotelProvider.objHotel.checkoutService = data.response.serviceCheckout;
        this.hotelProvider.objHotel.restaurantService = data.response.serviceRestaurante;
        this.hotelProvider.objHotel.noStayHealthService = data.response.serviceSaludNoStay;
        this.hotelProvider.objHotel.noStayOfferService = data.response.serviceOfertaNoStay;
        this.hotelProvider.objHotel.noStayChatService = data.response.serviceChatNoStay;
        this.hotelProvider.objHotel.noStayActivityService = data.response.serviceActividadNoStay;
        this.hotelProvider.objHotel.noStayRestaurantService = data.response.serviceRestauranteNoStay;
        this.hotelProvider.objHotel.mainImage = data.response.imagenPrincipal.id;
        this.hotelProvider.objHotel.imageInformation = data.response.imagenInformacion.id;
        this.hotelProvider.objHotel.receptionistImage = data.response.imagenRecepcionista.id;
        //to set key for credit card validation
        this.stripeService.setKey(data.response.stripePublicKey);
        if (type == "session") {
            this.downloadbackgroundImage();
        }
        else if (type == "reception") {
            this.events.publish("receptionEvent", true);
        }
        else if (type == "nostay") {
            this.events.publish("nostayEvent", true);
        }
    };
    ReservationServiceProvider.prototype.downloadbackgroundImage = function () {
        var _this = this;
        var backgroundImage = this.tools.getImagePath(this.hotelProvider.objHotel.mainImage);
        this.file.checkFile(this.file.cacheDirectory, this.hotelProvider.objHotel.mainImage + ".jpg").then(function () {
            backgroundImage = _this.file.cacheDirectory + _this.hotelProvider.objHotel.mainImage + ".jpg";
            _this.hotelProvider.objHotel.mainImageUrl = backgroundImage;
            if (_this.platForm.is('ios')) {
                _this.hotelProvider.objHotel.mainImageUrl = Object(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["s" /* normalizeURL */])(backgroundImage);
            }
            _this.fnGoToHome();
        }, function (error) {
            var fileTransfer = _this.transfer.create();
            fileTransfer.download(backgroundImage, _this.file.cacheDirectory + _this.hotelProvider.objHotel.mainImage + ".jpg").then(function (entry) {
                backgroundImage = entry.toURL();
                _this.hotelProvider.objHotel.mainImageUrl = backgroundImage;
                if (_this.platForm.is('ios')) {
                    _this.hotelProvider.objHotel.mainImageUrl = Object(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["s" /* normalizeURL */])(backgroundImage);
                }
                _this.fnGoToHome();
            }, function (error) {
                _this.hotelProvider.objHotel.mainImageUrl = backgroundImage;
                if (_this.platForm.is('ios')) {
                    _this.hotelProvider.objHotel.mainImageUrl = Object(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["s" /* normalizeURL */])(backgroundImage);
                }
                _this.fnGoToHome();
            });
        });
    };
    ReservationServiceProvider.prototype.fnGoToHome = function () {
        this.events.publish("reservationEvent", true);
    };
    ReservationServiceProvider.prototype.getHotelDetails = function (reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'HOTEL_RESERVATION'; // service type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            _this.communicationProvider.get(url, Params, observer, service, reservationId); // http get service call
        });
    };
    ReservationServiceProvider.prototype.fnLoginProceed = function (reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/online/huesped/registro/inicio';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('localizador', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            _this.communicationProvider.post(url, Params, observer);
        });
    };
    ReservationServiceProvider.prototype.updateReservationData = function (reservationId) {
        var _this = this;
        this.fnLoginProceed(reservationId).subscribe(function (data) {
            if (data.success == true) {
                // set reservation data to reservation object
                //this.reservationProvider.objReservation = new Reservation();
                _this.objReservation.roomType = data.response.tipoHabitacion;
                _this.objReservation.nights = data.response.noches;
                _this.objReservation.noOfPersons = data.response.personas;
                _this.objReservation.price = data.response.precio;
                _this.objReservation.createdDate = data.response.entrada;
                _this.objReservation.alreadyRegistered = data.response.huespedYaRegistrado;
                _this.objReservation.registrationCompleted = data.response.formularioRegistroEnviado;
                _this.objReservation.tripTypeReserve = data.response.tipoViajeReservaYaDefinido;
                _this.objReservation.roomNumber = data.response.numeroHabitacion;
                _this.objReservation.hotelName = data.response.nombreHotel;
                if (data.response.huespedYaCheckInRealizado) {
                    _this.objReservation.alreadyCheckIn = data.response.huespedYaCheckInRealizado;
                }
                if (data.response.huespedYaCheckOutRealizado) {
                    _this.objReservation.alreadyVerifiedCheckOut = data.response.huespedYaCheckOutRealizado;
                }
                _this.objReservation.hotelLocation = data.response.localizadorHotel;
                _this.objReservation.lastName = data.response.apellidos;
            }
        });
    };
    ReservationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_11__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__communication_service_communication_service__["a" /* CommunicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_5__hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_7__device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_8_ngx_stripe__["b" /* StripeService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* Platform */]])
    ], ReservationServiceProvider);
    return ReservationServiceProvider;
}());

//# sourceMappingURL=reservation-service.js.map

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activities-booking/activities-booking.module": [
		770,
		2
	],
	"../pages/activities-details/activities-details.module": [
		744,
		34
	],
	"../pages/activities/activities.module": [
		745,
		33
	],
	"../pages/activity-payment/activity-payment.module": [
		772,
		32
	],
	"../pages/amenities/amenities.module": [
		746,
		31
	],
	"../pages/checkin-arrivaltime/checkin-arrivaltime.module": [
		747,
		30
	],
	"../pages/checkin-basicinfo/checkin-basicinfo.module": [
		785,
		3
	],
	"../pages/checkin-summary/checkin-summary.module": [
		748,
		41
	],
	"../pages/checkout-basicinfo/checkout-basicinfo.module": [
		749,
		29
	],
	"../pages/checkout-payment/checkout-payment.module": [
		774,
		28
	],
	"../pages/confirm-order/confirm-order.module": [
		750,
		27
	],
	"../pages/forgot-id/forgot-id.module": [
		752,
		26
	],
	"../pages/hotel-info/hotel-info.module": [
		751,
		40
	],
	"../pages/login/login.module": [
		771,
		39
	],
	"../pages/my-bookings/my-bookings.module": [
		775,
		38
	],
	"../pages/no-stay-in-hotel/no-stay-in-hotel.module": [
		777,
		25
	],
	"../pages/notification-details/notification-details.module": [
		753,
		24
	],
	"../pages/notifications/notifications.module": [
		773,
		37
	],
	"../pages/passport-picture/passport-picture.module": [
		754,
		23
	],
	"../pages/payment-data/payment-data.module": [
		778,
		22
	],
	"../pages/promotions-booking/promotions-booking.module": [
		779,
		21
	],
	"../pages/promotions-details/promotions-details.module": [
		755,
		20
	],
	"../pages/promotions/promotions.module": [
		756,
		19
	],
	"../pages/reception/reception.module": [
		757,
		36
	],
	"../pages/registration/registration.module": [
		783,
		35
	],
	"../pages/restaurant-booking/restaurant-booking.module": [
		776,
		1
	],
	"../pages/restaurant-details/restaurant-details.module": [
		758,
		18
	],
	"../pages/restaurant-payment/restaurant-payment.module": [
		781,
		17
	],
	"../pages/restaurants/restaurants.module": [
		761,
		16
	],
	"../pages/room-issue-details/room-issue-details.module": [
		759,
		15
	],
	"../pages/room-issue/room-issue.module": [
		760,
		14
	],
	"../pages/room-makeup-details/room-makeup-details.module": [
		762,
		13
	],
	"../pages/room-makeup/room-makeup.module": [
		763,
		12
	],
	"../pages/room-service-booking/room-service-booking.module": [
		782,
		11
	],
	"../pages/room-service/room-service.module": [
		764,
		10
	],
	"../pages/room-upgrade/room-upgrade.module": [
		765,
		9
	],
	"../pages/service-upgrade/service-upgrade.module": [
		766,
		8
	],
	"../pages/terms-and-conditions/terms-and-conditions.module": [
		767,
		7
	],
	"../pages/wellness-booking/wellness-booking.module": [
		780,
		0
	],
	"../pages/wellness-details/wellness-details.module": [
		768,
		6
	],
	"../pages/wellness-payment/wellness-payment.module": [
		784,
		5
	],
	"../pages/wellness/wellness.module": [
		769,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ToolsProvider provider.
*/
var ToolsProvider = /** @class */ (function () {
    function ToolsProvider(http, translate, constant, device) {
        this.http = http;
        this.translate = translate;
        this.constant = constant;
        this.device = device;
    }
    ToolsProvider.prototype.setTranslateLanguage = function () {
        this.translate.use(this.device.preferredLanguage);
    };
    /* used for language translation with default value */
    ToolsProvider.prototype.fnLanguageTranslate = function (key, defaultvalue) {
        this.translate.use(this.device.preferredLanguage);
        if (defaultvalue)
            return this.translate.get(key) ? this.translate.get(key) : this.translate.get(defaultvalue);
        return this.translate.get(key);
    };
    /* used for language translation with parameters */
    ToolsProvider.prototype.fnLanguageTranslateWithParam = function (key, value) {
        return this.translate.get(key, value);
    };
    /* Returns true if it is a language supported by the App */
    ToolsProvider.prototype.isValidLanguage = function (language) {
        if (this.constant.LANGUAGES[language])
            return true;
        return false;
    };
    /*Returns true if it is a language of Spain */
    ToolsProvider.prototype.isLanguageFromSpain = function (language) {
        if (language == "es" || language == "ca" || language == "gl" || language == "eu")
            return true;
        return false;
    };
    /* Return the language es, en, fr, etc. */
    ToolsProvider.prototype.navigatorLanguage = function () {
        return navigator.language ? navigator.language.split('-')[0] : navigator['userLanguage'].split('-')[0];
    };
    /* to change first letter to lower case */
    ToolsProvider.prototype.unCapitalizeFirstLetter = function (string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    };
    /* Returns Privacy Policy url */
    ToolsProvider.prototype.getPrivacyUrl = function () {
        var language = this.navigatorLanguage();
        if (this.isLanguageFromSpain(language))
            return this.constant.PRIVACY_URL_ES;
        return this.constant.PRIVACY_URL_WORLD;
    };
    /* Returns Terms of service url */
    ToolsProvider.prototype.getLegalUrl = function () {
        var language = this.navigatorLanguage();
        if (this.isLanguageFromSpain(language))
            return this.constant.LEGAL_URL_ES;
        return this.constant.LEGAL_URL_WORLD;
    };
    ToolsProvider.prototype.getImagePath = function (imageId) {
        if (imageId != null) {
            return this.constant.URL_INFO_SERVER + '/imagen/' + imageId;
        }
        else {
            return '';
        }
    };
    ToolsProvider.prototype.formatDate = function (date) {
        if (date != null) {
            var dateSplit = date.split(' ');
            date = dateSplit[0];
            var time = dateSplit[1] ? dateSplit[1] : '00:00:00';
            return date.split('-')[2] + '-' + date.split('-')[1] + '-' +
                date.split('-')[0] + ' ' + time;
        }
        else {
            return date;
        }
    };
    ToolsProvider.prototype.formatTimeToShort = function (date) {
        if (date != null) {
            var dateSplit = date.split(' ');
            var time = dateSplit[1] ? dateSplit[1] : '00:00';
            if (time != "00:00" && time != "" && time != undefined) {
                var splittedTime = time.split(":");
                if (splittedTime.length > 1) {
                    time = splittedTime[0] + ":" + splittedTime[1];
                }
                else {
                    time = splittedTime[0];
                }
                time = this.timeConvert(time);
            }
            else {
                time = "00:00";
            }
            return time;
        }
        else {
            return date;
        }
    };
    ToolsProvider.prototype.timeConvert = function (time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) {
            time = time.slice(1); // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    };
    ToolsProvider.prototype.dateFormatChangeForService = function (date) {
        if (date != null)
            return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ' 00:00:00';
        return date;
    };
    ToolsProvider.prototype.getValidReservationDateRange = function (createdDate, noOfNightsStay, noStayGuest) {
        var checkInDate = new Date(this.formatDate(createdDate)); // reservation created date
        var todaysDate = new Date(); // today's date
        //for no stay guest
        if (noStayGuest == true) {
            noOfNightsStay = this.constant.MAXDAYS_BOOKING_NOSTAY;
            checkInDate = todaysDate;
        }
        //check out date
        var checkOutDate = new Date(checkInDate.getTime() + noOfNightsStay * 24 * 60 * 60 * 1000);
        //add one more day to the checkout date if the hour is greater than or equal to 23
        if (checkOutDate.getHours() >= 23) {
            checkOutDate = new Date(checkInDate.getTime() + 1 * 24 * 60 * 60 * 1000);
        }
        //time is set to 23hour 59 minutes and 59 seconds
        checkOutDate = new Date(checkOutDate.getFullYear(), checkOutDate.getMonth(), checkOutDate.getDate(), 23, 59, 59);
        //return null if stay is over
        if (todaysDate.getTime() >= checkOutDate.getTime())
            return null;
        if (todaysDate.getTime() > checkInDate.getTime())
            return { first: todaysDate, last: checkOutDate };
        return { first: checkInDate, last: checkOutDate };
    };
    ToolsProvider.prototype.getShortDayName = function (day) {
        var daysList = this.fnLanguageTranslate("common.dayNames");
        var daysArray = [];
        daysList.subscribe(function (value) {
            daysArray = value;
        });
        return daysArray[day].substring(0, 3);
    };
    ToolsProvider.prototype.getShortMonthName = function (month) {
        var monthList = this.fnLanguageTranslate("common.monthNames");
        var monthArray = [];
        monthList.subscribe(function (value) {
            monthArray = value;
        });
        return monthArray[month].substring(0, 3);
    };
    //Function to get the Current Date
    ToolsProvider.prototype.fnGetToday = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + dd;
        return today;
    };
    ToolsProvider.prototype.fnDateFormatChange = function (date) {
        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        date = yyyy + '-' + mm + '-' + dd;
        return date;
    };
    ToolsProvider.prototype.date_diff_indays = function (date1, date2) {
        return Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) / (1000 * 60 * 60 * 24));
    };
    ToolsProvider.prototype.getDayName = function (day) {
        var daysList = this.fnLanguageTranslate("common.dayNames");
        var daysArray = [];
        daysList.subscribe(function (value) {
            daysArray = value;
        });
        return daysArray[day];
    };
    ToolsProvider.prototype.getMonthName = function (month) {
        var monthList = this.fnLanguageTranslate("common.monthNames");
        var monthArray = [];
        monthList.subscribe(function (value) {
            monthArray = value;
        });
        return monthArray[month];
    };
    ToolsProvider.prototype.getQRImagePath = function (qrId, reservationId) {
        return this.constant.URL_INFO_SERVER + "/qr/" + qrId + "/" + this.device.uuid + "/" + reservationId + "/";
    };
    ToolsProvider.prototype.fnSetStartDate = function (lastTimeInterval) {
        var defaultDate = new Date();
        var endTimeTokens = lastTimeInterval.split(':');
        var endDate = new Date(defaultDate.getFullYear(), defaultDate.getMonth(), defaultDate.getDate(), endTimeTokens[0], endTimeTokens[1]); //date format
        //if last time interval is past current hour and minute 
        if ((endDate.getHours() < defaultDate.getHours()) || ((endDate.getHours() == defaultDate.getHours()) && (endDate.getMinutes() <= defaultDate.getMinutes()))) {
            //add one day to today and set that as minimum date for booking 
            var today = this.fnGetToday();
            var formattedDate = new Date(today);
            formattedDate.setDate(formattedDate.getDate() + 1);
            return this.fnDateFormatChange(formattedDate);
        }
        else {
            return this.fnGetToday();
        }
    };
    ToolsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__["a" /* DeviceServiceProvider */]])
    ], ToolsProvider);
    return ToolsProvider;
}());

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HotelServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HotelServiceProvider = /** @class */ (function () {
    function HotelServiceProvider(http) {
        this.http = http;
        console.log('Hello HotelServiceProvider Provider');
    }
    HotelServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], HotelServiceProvider);
    return HotelServiceProvider;
}());

//# sourceMappingURL=hotel-service.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestmateErrorHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GuestmateErrorHandlerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var GuestmateErrorHandlerProvider = /** @class */ (function () {
    function GuestmateErrorHandlerProvider(app, alertCtrl, tools) {
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.tools = tools;
    }
    GuestmateErrorHandlerProvider.prototype.handleError = function (err) {
        var _this = this;
        console.log(err);
        if (err.noNetwork) {
            var msg = this.tools.fnLanguageTranslate(["common.connectionError", "common.error", "buttons.ok"]); // translate of html content with common funtion
            msg.subscribe(function (value) {
                var alertnew = _this.alertCtrl.create({
                    title: value['common.error'],
                    message: value['common.connectionError'],
                    cssClass: 'cls_alrt',
                    buttons: [
                        {
                            text: value['buttons.ok'],
                            role: 'cancel',
                            handler: function (data) {
                                if (_this.loading) {
                                    _this.loading.dismiss();
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
    GuestmateErrorHandlerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */]])
    ], GuestmateErrorHandlerProvider);
    return GuestmateErrorHandlerProvider;
}());

//# sourceMappingURL=guestmate-error-handler.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notification_notification__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginServiceProvider = /** @class */ (function () {
    function LoginServiceProvider(notificationProvider, http, constant, deviceProvider, communication) {
        this.notificationProvider = notificationProvider;
        this.http = http;
        this.constant = constant;
        this.deviceProvider = deviceProvider;
        this.communication = communication;
        console.log('Hello LoginProvider Provider');
    }
    LoginServiceProvider.prototype.fnLoginProceed = function (reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/online/huesped/registro/inicio';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('localizador', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            _this.communication.post(url, Params, observer);
        });
    };
    LoginServiceProvider.prototype.sendDeviceData = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'HELLO_I_AM_BUNDLE'; // url type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            Params = Params.append('locale', _this.deviceProvider.preferredLanguage);
            Params = Params.append('versionApp', _this.constant.VERSION_APP);
            Params = Params.append('modelo', _this.deviceProvider.model);
            Params = Params.append('plataforma', _this.deviceProvider.platForm);
            Params = Params.append('versionPlataforma', _this.deviceProvider.osVersion);
            Params = Params.append('versionCordova', _this.deviceProvider.cordovaVersion);
            Params = Params.append('bundle', _this.constant.APP_DOMAIN);
            Params = Params.append('deviceNotificationId', _this.notificationProvider.RegId);
            Params = Params.append('notificationProviderDeviceId', _this.notificationProvider.NotificationProviderId);
            Params = Params.append('deviceNotificationIdProviderError', _this.notificationProvider.ErrorMsg);
            _this.communication.post(url, Params, observer, service);
        });
    };
    LoginServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__communication_service_communication_service__["a" /* CommunicationServiceProvider */]])
    ], LoginServiceProvider);
    return LoginServiceProvider;
}());

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__device_service_device_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegistrationServiceProvider = /** @class */ (function () {
    function RegistrationServiceProvider(http, communication, constant, hotel, reservation, deviceProvider) {
        this.http = http;
        this.communication = communication;
        this.constant = constant;
        this.hotel = hotel;
        this.reservation = reservation;
        this.deviceProvider = deviceProvider;
    }
    /**
     * Function to complete guest data registration
     * @param name
     * @param lastName
     * @param email
     * @param country
     * @param dateOfBirth
     * @param gender
     * @param typeOfTravel
     * @param newsLetter
     * @param city
     */
    RegistrationServiceProvider.prototype.sendFullRegistration = function (name, lastName, email, country, dateOfBirth, gender, typeOfTravel, newsLetter, city) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'COMPLETE_REGISTER'; // service type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            Params = Params.append('reservaId', _this.reservation.objReservation.reservationId);
            Params = Params.append('nombre', name);
            Params = Params.append('apellidos', lastName);
            Params = Params.append('fechaNacimiento', dateOfBirth);
            Params = Params.append('ciudadResidencia', city);
            Params = Params.append('sexo', gender);
            Params = Params.append('codigoPaisResidencia', country);
            Params = Params.append('tipoViaje', typeOfTravel);
            Params = Params.append('newsletter', newsLetter);
            _this.communication.post(url, Params, observer, service); // http post service call
        });
    };
    RegistrationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__communication_service_communication_service__["a" /* CommunicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_5__hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__device_service_device_service__["a" /* DeviceServiceProvider */]])
    ], RegistrationServiceProvider);
    return RegistrationServiceProvider;
}());

//# sourceMappingURL=registration-service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AncillaryServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_upgrade_service_model__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__device_service_device_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the AncillaryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AncillaryServiceProvider = /** @class */ (function () {
    function AncillaryServiceProvider(http, constant, reservation, communication, deviceProvider) {
        this.http = http;
        this.constant = constant;
        this.reservation = reservation;
        this.communication = communication;
        this.deviceProvider = deviceProvider;
        console.log('Hello AncillaryServiceProvider Provider');
        this.objUpgradeService = new __WEBPACK_IMPORTED_MODULE_4__model_upgrade_service_model__["a" /* UpgradeServiceData */]();
    }
    //service call to obtain list of all extra services
    AncillaryServiceProvider.prototype.sendUpgradeServiceInfo = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/cacheable/hotel/servicios-extra';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', _this.reservation.objReservation.reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            _this.communication.get(url, Params, observer); // http get service call
        });
    };
    AncillaryServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_5__reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__communication_service_communication_service__["a" /* CommunicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__device_service_device_service__["a" /* DeviceServiceProvider */]])
    ], AncillaryServiceProvider);
    return AncillaryServiceProvider;
}());

//# sourceMappingURL=ancillary-service.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoommakeupServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







//Xevi

/*
  Generated class for the ActivityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RoommakeupServiceProvider = /** @class */ (function () {
    function RoommakeupServiceProvider(http, constant, communicationProvider, deviceProvider, storage, toastCtrl) {
        this.http = http;
        this.constant = constant;
        this.communicationProvider = communicationProvider;
        this.deviceProvider = deviceProvider;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        console.log('Hello RoommakeupServiceProvider Provider');
    }
    RoommakeupServiceProvider.prototype.sendDontDisturbData = function (rqtype, time, comments, roomnum, reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'CREATE_DONTDISTURB';
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('rqtype', rqtype); // params
            Params = Params.append('comments', comments);
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('roomnum', roomnum);
            Params = Params.append('time', time);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer, service); // http get service call
        });
    };
    RoommakeupServiceProvider.prototype.getDontDisturbTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('dontdisturbTime')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RoommakeupServiceProvider.prototype.sendRoommakeupData = function (rqtype, comments, roomnum, reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'CREATE_ROOMMAKEUP'; // service type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('rqtype', rqtype); // params
            Params = Params.append('comments', comments);
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('roomnum', roomnum);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer, service); // http get service call
        });
    };
    //Xevi
    RoommakeupServiceProvider.prototype.fndebug = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    RoommakeupServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__communication_service_communication_service__["a" /* CommunicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["q" /* ToastController */]])
    ], RoommakeupServiceProvider);
    return RoommakeupServiceProvider;
}());

//# sourceMappingURL=roommakeup-service.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeRoomServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_upgrade_room_model__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__device_service_device_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the UpgradeRoomServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UpgradeRoomServiceProvider = /** @class */ (function () {
    function UpgradeRoomServiceProvider(http, constant, reservation, communication, deviceProvider) {
        this.http = http;
        this.constant = constant;
        this.reservation = reservation;
        this.communication = communication;
        this.deviceProvider = deviceProvider;
        console.log('Hello UpgradeRoomServiceProvider Provider');
        this.objUpgradeRoom = new __WEBPACK_IMPORTED_MODULE_4__model_upgrade_room_model__["a" /* UpgradeRoomData */]();
    }
    UpgradeRoomServiceProvider.prototype.sendUpgradeRoomInfo = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/cacheable/hotel/upgrades-habitacion';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', _this.reservation.objReservation.reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            _this.communication.get(url, Params, observer); // http get service call
        });
    };
    UpgradeRoomServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_5__reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__communication_service_communication_service__["a" /* CommunicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__device_service_device_service__["a" /* DeviceServiceProvider */]])
    ], UpgradeRoomServiceProvider);
    return UpgradeRoomServiceProvider;
}());

//# sourceMappingURL=upgrade-room-service.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeServiceData; });
var UpgradeServiceData = /** @class */ (function () {
    function UpgradeServiceData() {
        //service upgrade
        // public serviceUpgradeId: number;
        // public photo: string;
        // public price: any;
        // public name: string;
        // public description: string;
        this.ancillaryList = [];
        this.localData = [];
    }
    return UpgradeServiceData;
}());

//# sourceMappingURL=upgrade-service-model.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmenitiesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ActivityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AmenitiesServiceProvider = /** @class */ (function () {
    //objRoomissue: RoomissueData;
    function AmenitiesServiceProvider(http, constant, communicationProvider, deviceProvider) {
        this.http = http;
        this.constant = constant;
        this.communicationProvider = communicationProvider;
        this.deviceProvider = deviceProvider;
        console.log('Hello RoomissueServiceProvider Provider');
    }
    AmenitiesServiceProvider.prototype.getStaticAmenitiesList = function () {
        return [
            { id: 1, imgPath: 'assets/imgs/housekeeping/towels_sample.jpg', price: 100, name: 'Towels', description: 'The badge images can be pushed as buttons. That triggers the navigation to next screen.' },
            { id: 2, imgPath: 'assets/imgs/housekeeping/champoo_sample.jpg', price: 100, name: 'Champoo & Gel', description: 'The badge images can be pushed as buttons. That triggers the navigation to next screen.' },
        ];
    };
    AmenitiesServiceProvider.prototype.sendAmenitiesRequest = function (type, amenities, roomnum) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'CREATE_AMENITIESREQUEST'; // service type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('type', type); // params
            Params = Params.append('amenities', amenities);
            Params = Params.append('roomnum,', roomnum);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer, service); // http get service call
        });
    };
    AmenitiesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__communication_service_communication_service__["a" /* CommunicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__["a" /* DeviceServiceProvider */]])
    ], AmenitiesServiceProvider);
    return AmenitiesServiceProvider;
}());

//# sourceMappingURL=amenities-service.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_checkin_service_checkin_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_service_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_notification_notification__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_device_service_device_service__ = __webpack_require__(12);
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
 * Generated class for the CheckinSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckinSummaryPage = /** @class */ (function () {
    function CheckinSummaryPage(navCtrl, navParams, checkinProvider, toolsProvider, sanitized, reservationPvdr, alertCtrl, loadingCtrl, nativeStorage, commonProvider, notificationProvider, deviceProvider, platForm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checkinProvider = checkinProvider;
        this.toolsProvider = toolsProvider;
        this.sanitized = sanitized;
        this.reservationPvdr = reservationPvdr;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.commonProvider = commonProvider;
        this.notificationProvider = notificationProvider;
        this.deviceProvider = deviceProvider;
        this.platForm = platForm;
        this.ancillaryList = [];
        this.btnCntnueTriggered = false;
        this.devicePlatForm = "android";
        this.getStoredCheckinDetails();
        if (this.platForm.is('ios')) {
            this.devicePlatForm = "ios";
        }
    }
    CheckinSummaryPage.prototype.ionViewWillEnter = function () {
        var summaryTextTranslate = this.toolsProvider.fnLanguageTranslate("view.checkin.template.summary");
        var summaryTextContent = '';
        summaryTextTranslate.subscribe(function (value) {
            summaryTextContent = value;
        });
        this.reservationPvdr.objReservation.createdDate = this.reservationPvdr.objReservation.createdDate.split(' ')[0];
        //replace variable date and time with actual values
        this.summaryText = summaryTextContent.replace('{fechaEntrada}', this.reservationPvdr.objReservation.createdDate).replace('{horaPrevistaCheckin}', this.checkinProvider.objCheckin.checkinTime);
        this.summaryText = this.sanitized.bypassSecurityTrustHtml(this.summaryText);
        this.ancillaryList = this.checkinProvider.objCheckin.ancillarySummaryList;
        this.serviceData = this.ancillaryList.length > 0 ? true : false;
    };
    //Loader
    CheckinSummaryPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    CheckinSummaryPage.prototype.getStoredCheckinDetails = function () {
        var _this = this;
        this.nativeStorage.getItem('checkinDetails').then(function (Data) {
            console.log(Data);
            if (Data && Data != undefined) {
                _this.storedCheckinDetails = Data;
            }
        });
    };
    //click to request check-in of guest
    CheckinSummaryPage.prototype.fnOnRequestCheckin = function () {
        var _this = this;
        this.deviceProvider.btnCheckInEnabled = true; //to disable device back button click
        if (!this.btnCntnueTriggered) {
            this.btnCntnueTriggered = true; //to disable button to avoid multiple clicks
            this.showLoading();
            this.checkinProvider.sendCheckinData(this.storedCheckinDetails).subscribe(function (data) {
                var msg = _this.toolsProvider.fnLanguageTranslate(["common.requestReceived", "view.checkin.success", "common.connectionError", "buttons.ok"]); //  message translation
                if (data.success == true) {
                    _this.loading.dismiss();
                    _this.commonProvider.objFormData.checkin = [];
                    _this.commonProvider.objFormData.checkin.checkinCompleted = true;
                    _this.reservationPvdr.objReservation.alreadyCheckIn = true;
                    _this.updateLocalStorage();
                    msg.subscribe(function (value) {
                        var alertnew = _this.alertCtrl.create({
                            title: value['common.requestReceived'],
                            message: value["view.checkin.success"],
                            cssClass: 'cls_alrt',
                            buttons: [
                                {
                                    text: value['buttons.ok'],
                                    role: 'cancel',
                                    handler: function (data) {
                                        _this.navCtrl.popToRoot({ animate: true, animation: 'transition', duration: 500, direction: 'forward' });
                                    }
                                }
                            ]
                        });
                        alertnew.present();
                        setTimeout(function () {
                            alertnew.dismiss();
                            _this.navCtrl.popToRoot({ animate: true, animation: 'transition', duration: 500, direction: 'forward' });
                        }, 5000);
                    });
                }
                else {
                    _this.loading.dismiss();
                    // error message translate
                    _this.btnCntnueTriggered = false;
                    msg.subscribe(function (value) {
                        var alertnew = _this.alertCtrl.create({
                            title: value['common.error'],
                            message: value["common.connectionError"],
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
            });
            (function (error) {
                _this.btnCntnueTriggered = false;
                _this.loading.dismiss();
            });
        }
    };
    //function to go to previous page
    CheckinSummaryPage.prototype.fnBack = function () {
        this.navCtrl.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    CheckinSummaryPage.prototype.updateLocalStorage = function () {
        var _this = this;
        var tempData;
        this.nativeStorage.getItem('reservationData').then(function (reservation) {
            if (reservation != undefined) {
                tempData = reservation;
                tempData.response.huespedYaCheckInRealizado = true;
                _this.nativeStorage.setItem('reservationData', tempData)
                    .then(function () { return console.log('Local storage updated.'); }, function (error) { return console.error('Error storing item', error); });
            }
        });
    };
    CheckinSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkin-summary',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/checkin-summary/checkin-summary.html"*/'<ion-header class="header_menu">\n  <ion-navbar>\n    <ion-title>{{\'view.checkin.title\' | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle hidden="false" class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationProvider.hasNotifications"></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="service_bsc_info" no-bounce>\n  <ion-item class="info_hdg">\n    <span>{{\'view.checkin.subtitle.checkinSummary\' | translate}}</span>\n  </ion-item>\n  <div class="summary_container">\n    <p [innerHtml]="summaryText" class="smry_txt"></p>\n    <h2 class="smry_hdng" *ngIf="serviceData">{{\'view.checkin.label.order.title\' | translate}}</h2>\n    <ion-list class="smry_list" *ngIf="serviceData">\n      <ion-item *ngFor="let item of ancillaryList">\n        <div class="dv_smryroom" *ngIf="item.type==\'room\'">\n          <span>{{item.roomName}}</span>\n          <span class="anci_lft">1 X {{item.nights}} {{\'common.nights\' | translate}} X {{item.price}} {{item.currency}}</span>\n        </div>\n        <div class="dv_smryserv" *ngIf="item.type==\'service\'">\n          <span>{{item.serviceName}}</span>\n          <span class="anci_lft">{{item.quantity}} X {{item.nights}} {{\'common.nights\' | translate}} X {{item.pricePerDay}} {{item.currency}}</span>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-item class="footerfixed_btn" *ngIf="devicePlatForm != \'ios\'">\n    <button ion-button (click)="fnOnRequestCheckin()" class="cmn_btn">{{\'view.checkin.request\' | translate}}</button>\n  </ion-item>\n  <ion-item class="footerfixed_btn ios_footer_btn" *ngIf="devicePlatForm == \'ios\'">\n    <button ion-button (click)="fnOnRequestCheckin()" class="cmn_btn">{{\'view.checkin.request\' | translate}}</button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/checkin-summary/checkin-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_5__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_service_common_service__["a" /* CommonServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_notification_notification__["a" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], CheckinSummaryPage);
    return CheckinSummaryPage;
}());

//# sourceMappingURL=checkin-summary.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_service_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__ = __webpack_require__(44);
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
 * Generated class for the HotelInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HotelInfoPage = /** @class */ (function () {
    function HotelInfoPage(alertCtrl, platform, formBuilder, navCtrl, navParams, hotelProvider, toolsProvider, menuCtrl, commonProvider, loadingCtrl, notificationProvider) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hotelProvider = hotelProvider;
        this.toolsProvider = toolsProvider;
        this.menuCtrl = menuCtrl;
        this.commonProvider = commonProvider;
        this.loadingCtrl = loadingCtrl;
        this.notificationProvider = notificationProvider;
        this.backgroundImageUrl = "";
        this.nombre = "";
        this.telefono = "";
        this.direccion = "";
        this.poblacion = "";
        this.codigoPostal = "";
        this.provincia = "";
        this.paisNombre = "";
        this.lat = "";
        this.lon = "";
        this.textFocused = false;
        this.menuCtrl.close();
        this.backgroundImageUrl = this.toolsProvider.getImagePath(hotelProvider.objHotel.imageInformation);
        this.nombre = this.hotelProvider.objHotel.hotelName;
        this.id = this.hotelProvider.objHotel.id;
        this.telefono = this.hotelProvider.objHotel.telephone;
        this.direccion = this.hotelProvider.objHotel.address;
        this.poblacion = this.hotelProvider.objHotel.location;
        this.codigoPostal = this.hotelProvider.objHotel.postalCode;
        this.provincia = this.hotelProvider.objHotel.province;
        this.paisNombre = this.hotelProvider.objHotel.country;
        this.lat = this.hotelProvider.objHotel.lat;
        this.lon = this.hotelProvider.objHotel.lon;
        this.sendMessageForm = formBuilder.group({
            'commentsTextAreaField': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required])
        });
    }
    HotelInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HotelInfoPage');
    };
    HotelInfoPage.prototype.gotoCall = function () {
        var _this = this;
        if (this.telefono != null && this.telefono != undefined) {
            this.platform.ready().then(function () {
                if (_this.platform.is('ios')) {
                    window.open('tel:' + _this.telefono);
                }
                else {
                    //android and other platforms
                    window.open('tel://' + _this.telefono);
                }
            });
        }
        else {
            console.log("no phone number");
        }
    };
    HotelInfoPage.prototype.gotoMap = function () {
        var _this = this;
        if (this.lat != null && this.lat != undefined && this.lon != null && this.lon != undefined) {
            var hotelName_1 = this.nombre.trim().replace(/\s+/g, "+");
            this.platform.ready().then(function () {
                // ios
                if (_this.platform.is('ios')) {
                    window.open("maps://?q=" + hotelName_1 + "&ll=" + _this.lat + "," + _this.lon, '_system');
                }
                else if (_this.platform.is('android')) {
                    //android and other platforms
                    window.open('geo://' + _this.lat + ',' + _this.lon + '?q=' + _this.lat + ',' + _this.lon + '(' + hotelName_1 + ')', '_system');
                }
                else {
                    window.open('https://maps.google.com/maps?daddr=' + _this.lat + ',' + _this.lon + '&amp;ll="');
                }
            });
        }
        else {
            console.log("no lat or lon");
        }
    };
    //Back button
    HotelInfoPage.prototype.fnBack = function () {
        this.navCtrl.popToRoot({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    //Loader
    HotelInfoPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    HotelInfoPage.prototype.fnSend = function () {
        var _this = this;
        if (this.sendMessageForm.valid) {
            this.showLoading();
            this.commonProvider.sendMessage(this.sendMessageForm.value["commentsTextAreaField"]).subscribe(function (data) {
                _this.loading.dismiss();
                if (data.success == true) {
                    var checkoutMsg = _this.toolsProvider.fnLanguageTranslate(['common.requestReceived', "view.hotelInfo.successMsg", "buttons.ok"]);
                    checkoutMsg.subscribe(function (value) {
                        _this.showAlert(value['common.requestReceived'], value['view.hotelInfo.successMsg'], 'cls_alrt', value['buttons.ok']);
                        _this.sendMessageForm.setValue({ commentsTextAreaField: "" });
                    });
                }
                else {
                    var checkoutMsg = _this.toolsProvider.fnLanguageTranslate(['common.error', "view.reservation.error.noPossible", "buttons.ok"]);
                    checkoutMsg.subscribe(function (value) {
                        _this.showAlert(value['common.error'], value['view.reservation.error.noPossible'], 'cls_alrt', value['buttons.ok']);
                    });
                }
            });
        }
        else {
            var checkoutMsg = this.toolsProvider.fnLanguageTranslate(['common.error', "view.hotelInfo.emptyMsg", "buttons.ok"]);
            checkoutMsg.subscribe(function (value) {
                _this.showAlert(value['common.error'], value['view.hotelInfo.emptyMsg'], 'cls_alrt', value['buttons.ok']);
            });
        }
    };
    HotelInfoPage.prototype.showAlert = function (title, message, css, buttonText) {
        var alertCheckin = this.alertCtrl.create({
            title: title,
            message: message,
            cssClass: css,
            buttons: [
                {
                    text: buttonText,
                    role: 'cancel',
                    handler: function (data) {
                    }
                }
            ]
        });
        alertCheckin.present();
        setTimeout(function () { alertCheckin.dismiss(); }, 5000);
    };
    HotelInfoPage.prototype.textFocus = function () {
        this.textFocused = true;
    };
    HotelInfoPage.prototype.textBlur = function () {
        this.textFocused = false;
    };
    HotelInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hotel-info',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/hotel-info/hotel-info.html"*/'<!--\n  Generated template for the HotelInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content id="homecontent" class="home_container" no-bounce>\n  <ion-header>\n    <ion-navbar>\n      <ion-title class="tranprnt_page_hdng">{{\'view.hotelInfo.title\' | translate}}</ion-title>\n      <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr">\n        <i class="icon-arrow-left2"></i>\n      </button>\n      <ion-buttons end>\n        <button ion-button menuToggle hidden="false" class="main_menu">\n          <i class="icon-Menu"></i>\n          <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <div class="service_details">\n    <div class="service_upgrade hotel_info_msg_actve">\n      <ion-item class="serve_bgimg htl_infoslid" [style.backgroundImage]="\'url(\' + backgroundImageUrl + \')\'">\n        <div class="htlinfo_slider_content">\n          <h3 id="hotleinfo_nombre" class="hotel_name">{{nombre}}</h3>\n          <ul id="hotleinfo_direccion" class="htl_info_drctn">\n            <li id="hotleinfo_calle">{{direccion}}</li>\n            <li>\n              <span id="hotleinfo_cp">{{codigoPostal}}</span> &nbsp; <span id="hotleinfo_poblacion">{{poblacion}}</span>\n            </li>\n            <li id="hotleinfo_pais">{{paisNombre}}</li>\n          </ul>\n        </div>\n        <div class="hotelInfoTabButtons">\n          <span (tap)="gotoCall()" class="hotelInfoPhone"></span>\n          <span class="hotelInfoMessage active"></span>\n          <span (tap)="gotoMap()" class="hotelInfoMap"></span>\n        </div>\n      </ion-item>\n    </div>\n    <div class="hote_info">\n      <h3>\n        {{\'view.hotelInfo.help\' | translate}}\n      </h3>\n      <p>\n        {{\'view.hotelInfo.legal\' | translate}}\n      </p>\n    </div>\n    <form [formGroup]="sendMessageForm">\n      <div class="btnPageCotainer">\n        <ion-item class="htl_info_textarea">\n          <ion-textarea class="cm_textarea" formControlName="commentsTextAreaField" placeholder="{{\'view.hotelInfo.placeHolder\' | translate}}" (ionFocus)="textFocus()" (ionBlur)="textBlur()">\n          </ion-textarea>\n        </ion-item>\n      </div>\n      <ion-item *ngIf="!textFocused" class="footerfixed_btn">\n        <button class="cmn_btn" (click)="fnSend()">{{"common.send" | translate}}</button>\n      </ion-item>\n      <ion-item *ngIf="textFocused" class="footer_btn">\n        <button class="cmn_btn" (click)="fnSend()">{{"common.send" | translate}}</button>\n      </ion-item>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/hotel-info/hotel-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__providers_common_service_common_service__["a" /* CommonServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__["a" /* NotificationProvider */]])
    ], HotelInfoPage);
    return HotelInfoPage;
}());

//# sourceMappingURL=hotel-info.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(33);
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
 * Generated class for the ReceptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReceptionPage = /** @class */ (function () {
    function ReceptionPage(navCtrl, navParams, reservationPvdr, hotelPvdr, tools, events, loadingCtrl, transfer, file, sanitize, platForm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reservationPvdr = reservationPvdr;
        this.hotelPvdr = hotelPvdr;
        this.tools = tools;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.file = file;
        this.sanitize = sanitize;
        this.platForm = platForm;
    }
    ReceptionPage.prototype.ionViewDidLoad = function () {
        this.initialLoad();
    };
    ReceptionPage.prototype.initialLoad = function () {
        var defaultTextTranslate = this.tools.fnLanguageTranslate("view.reception.message");
        var defaultText = '';
        defaultTextTranslate.subscribe(function (value) {
            defaultText = value;
        });
        //replace guestname and receptionist name in receptionist Text
        var receptionText = this.hotelPvdr.objHotel.receptionistText ? this.hotelPvdr.objHotel.receptionistText : defaultText;
        this.hotelPvdr.objHotel.receptionistText = receptionText.replace('{nombreHuesped}', this.reservationPvdr.objReservation.guestName).replace('{nombreRecepcionista}', this.hotelPvdr.objHotel.receptionistName);
        // receptionist image and background image set
        if (this.navParams.get("receptionistImage")) {
            this.receptionistImageStyle = this.navParams.get("receptionistImage");
        }
        else {
            this.downloadreceptionistImage();
        }
        if (this.navParams.get("backgroundImage")) {
            this.backgroundImageStyle = this.navParams.get("backgroundImage");
        }
        else {
            this.downloadbackgroundImage();
        }
    };
    ReceptionPage.prototype.downloadreceptionistImage = function () {
        var _this = this;
        this.receptionistImageStyle = this.tools.getImagePath(this.hotelPvdr.objHotel.receptionistImage);
        this.file.checkFile(this.file.cacheDirectory, this.hotelPvdr.objHotel.receptionistImage + ".jpg").then(function () {
            _this.receptionistImageStyle = _this.sanitize.bypassSecurityTrustHtml(_this.file.cacheDirectory + _this.hotelPvdr.objHotel.receptionistImage + ".jpg");
            _this.receptionistImageStyle = _this.file.cacheDirectory + _this.hotelPvdr.objHotel.receptionistImage + ".jpg";
            if (_this.platForm.is('ios')) {
                _this.receptionistImageStyle = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(_this.file.cacheDirectory + _this.hotelPvdr.objHotel.receptionistImage + ".jpg");
            }
            _this.receptionistImageStyle = _this.sanitize.bypassSecurityTrustHtml(_this.receptionistImageStyle);
        }, function (error) {
            var fileTransfer = _this.transfer.create();
            fileTransfer.download(_this.receptionistImageStyle, _this.file.cacheDirectory + _this.hotelPvdr.objHotel.receptionistImage + ".jpg").then(function (entry) {
                _this.receptionistImageStyle = entry.toURL();
                if (_this.platForm.is('ios')) {
                    _this.receptionistImageStyle = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(entry.toURL());
                }
                _this.receptionistImageStyle = _this.sanitize.bypassSecurityTrustHtml(_this.receptionistImageStyle);
            }, function (error) {
            });
        });
    };
    ReceptionPage.prototype.downloadbackgroundImage = function () {
        var _this = this;
        this.backgroundImageStyle = this.tools.getImagePath(this.hotelPvdr.objHotel.mainImage);
        this.file.checkFile(this.file.cacheDirectory, this.hotelPvdr.objHotel.mainImage + ".jpg").then(function () {
            _this.backgroundImageStyle = _this.file.cacheDirectory + _this.hotelPvdr.objHotel.mainImage + ".jpg";
            if (_this.platForm.is('ios')) {
                _this.backgroundImageStyle = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(_this.file.cacheDirectory + _this.hotelPvdr.objHotel.mainImage + ".jpg");
            }
            _this.hotelPvdr.objHotel.mainImageUrl = _this.backgroundImageStyle;
            _this.backgroundImageStyle = _this.sanitize.bypassSecurityTrustHtml(_this.backgroundImageStyle);
        }, function (error) {
            var fileTransfer = _this.transfer.create();
            fileTransfer.download(_this.backgroundImageStyle, _this.file.cacheDirectory + _this.hotelPvdr.objHotel.mainImage + ".jpg").then(function (entry) {
                _this.backgroundImageStyle = entry.toURL();
                if (_this.platForm.is('ios')) {
                    _this.backgroundImageStyle = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(entry.toURL());
                }
                _this.hotelPvdr.objHotel.mainImageUrl = _this.backgroundImageStyle;
                _this.backgroundImageStyle = _this.sanitize.bypassSecurityTrustHtml(_this.backgroundImageStyle);
            }, function (error) {
            });
        });
    };
    /* Profile redirection */
    ReceptionPage.prototype.fnGotoProfile = function () {
        if (this.reservationPvdr.objReservation.registrationCompleted == true) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */], {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
        }
        else {
            this.navCtrl.push('RegistrationPage', {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
        }
    };
    //Loader
    ReceptionPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    ReceptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reception',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/reception/reception.html"*/'<ion-content padding [style.backgroundImage]="\'url(\' + backgroundImageStyle + \')\'" style="background-repeat:no-repeat;background-position:center;" class="reception_wrpr" no-bounce>\n    <h2 class="page_main_hdng">{{hotelPvdr.objHotel.hotelName}}</h2>\n    <p class="page_sub_hdng">{{hotelPvdr.objHotel.location}}</p>\n    <div class="profile_content">\n    <div class="profile_img_wrpr">\n        <span [style.backgroundImage]="\'url(\' + receptionistImageStyle + \')\'" class="profile_img"></span>     \n        <h3>{{hotelPvdr.objHotel.receptionistName}}</h3>\n        <label>{{hotelPvdr.objHotel.receptionistPosition}}</label>\n      </div>\n\n      <span class="profile_desc">\n        <p [innerHtml]="hotelPvdr.objHotel.receptionistText" ></p>\n      </span>\n    </div>\n\n</ion-content>\n<ion-footer>\n    <span class="profile_ftr">\n    <ion-item class="profile_btn_wrpr">\n        <button  tappable  (tap)="fnGotoProfile()"> {{"common.continue" | translate}}</button>\n      </ion-item>\n      <ion-item class="check_info">\n        <ion-label>{{"view.reception.label.check" | translate}}</ion-label>\n      </ion-item>\n      </span>\n</ion-footer>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/reception/reception.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], ReceptionPage);
    return ReceptionPage;
}());

//# sourceMappingURL=reception.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomissueServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ActivityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RoomissueServiceProvider = /** @class */ (function () {
    function RoomissueServiceProvider(http, constant, communicationProvider, deviceProvider) {
        this.http = http;
        this.constant = constant;
        this.communicationProvider = communicationProvider;
        this.deviceProvider = deviceProvider;
        console.log('Hello RoomissueServiceProvider Provider');
    }
    RoomissueServiceProvider.prototype.sendRoomissueData = function (type, image, comments, reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'CREATE_ROOMISSUE'; // service type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('type', type); // params
            Params = Params.append('comments', comments);
            Params = Params.append('image', image);
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer, service); // http get service call
        });
    };
    RoomissueServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__communication_service_communication_service__["a" /* CommunicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__["a" /* DeviceServiceProvider */]])
    ], RoomissueServiceProvider);
    return RoomissueServiceProvider;
}());

//# sourceMappingURL=roomissue-service.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeRoomData; });
var UpgradeRoomData = /** @class */ (function () {
    function UpgradeRoomData() {
    }
    return UpgradeRoomData;
}());

//# sourceMappingURL=upgrade-room-model.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notification_notification__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(34);
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
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(menuCtrl, hotelService, constant, toolsProvider, notificationModel, navCtrl, navParams, loadingCtrl, nativeStorage) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.hotelService = hotelService;
        this.constant = constant;
        this.toolsProvider = toolsProvider;
        this.notificationModel = notificationModel;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.notificationsList = []; // to store notification list
        this.storedData = []; // local storage data
        this.hideBackButton = false;
        this.menuCtrl.close();
        //get notification data from local storage
        this.nativeStorage.getItem('notificationData').then(function (notificationData) {
            if (notificationData != undefined) {
                var data = notificationData.data;
                _this.storedData = data.filter(function (x) { return x.type == "message"; });
            }
        });
    }
    //after page load
    NotificationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.hideBackButton = false;
        this.showLoading();
        this.notificationModel.fetchNotifications().subscribe(function (data) {
            if (data.success) {
                _this.notificationModel.modelNotification = data.response;
                // store temp array
                var tempArray = _this.notificationModel.modelNotification;
                var itemArray = [];
                var notifictnIds1_1 = [];
                var notifictnIds2 = [];
                var dataArray = [];
                var storeIds = [];
                for (var _i = 0, tempArray_1 = tempArray; _i < tempArray_1.length; _i++) {
                    var item = tempArray_1[_i];
                    itemArray = item;
                    itemArray.read = 0;
                    dataArray.push(itemArray);
                    notifictnIds2.push(item.id);
                }
                //check for local storage notifications
                if (_this.storedData && _this.storedData.length > 0) {
                    for (var _a = 0, _b = _this.storedData; _a < _b.length; _a++) {
                        var res = _b[_a];
                        storeIds[res.notificationID] = res.read;
                        notifictnIds1_1.push(res.notificationID);
                    }
                    if (storeIds.length > 0) {
                        var tempData = dataArray;
                        dataArray = [];
                        for (var _c = 0, tempData_1 = tempData; _c < tempData_1.length; _c++) {
                            var list = tempData_1[_c];
                            var listArray = [];
                            listArray = list;
                            if (storeIds[list.id] != undefined) {
                                listArray.read = storeIds[list.id];
                            }
                            dataArray.push(listArray);
                        }
                    }
                    // store new data into local storage if any
                    var difference = notifictnIds2.filter(function (x) { return !notifictnIds1_1.includes(x); });
                    if (difference.length > 0) {
                        var newData = [];
                        var _loop_1 = function (id) {
                            x = dataArray.filter(function (x) { return x.id == id; });
                            newData.push(x);
                        };
                        var x;
                        for (var _d = 0, difference_1 = difference; _d < difference_1.length; _d++) {
                            var id = difference_1[_d];
                            _loop_1(id);
                        }
                        _this.notificationModel.storeNotificationData("message", newData);
                    }
                }
                else {
                    // store into local storage
                    if (data.response.length > 0) {
                        _this.notificationModel.storeNotificationData("message", _this.notificationModel.modelNotification);
                    }
                }
                _this.notificationsList = dataArray;
                _this.notificationModel.modelNotification = _this.notificationsList;
            }
            _this.loading.dismiss();
        });
        this.notificationModel.currentPageName = "NotificationsPage";
    };
    // page leave
    NotificationsPage.prototype.ionViewWillLeave = function () {
        this.notificationModel.currentPageName = "";
        this.hideBackButton = true;
    };
    NotificationsPage.prototype.ionViewWillEnter = function () {
        this.hideBackButton = false;
    };
    //Loader
    NotificationsPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    //booking date formatting
    NotificationsPage.prototype.formatBookingDate = function (values) {
        var today = new Date(), reservaDate = new Date(this.toolsProvider.formatDate(values.fecha).split(" ")[0]), date = '';
        var dateDiff = this.date_diff_indays(today, reservaDate);
        var dateTextTranslate = this.toolsProvider.fnLanguageTranslate(["common.today", "common.tomorrow"]); // language translation
        var todayText = '';
        var tomorrowText = '';
        dateTextTranslate.subscribe(function (value) {
            todayText = value["common.today"];
            tomorrowText = value["common.tomorrow"];
        });
        if (dateDiff == 0) {
            date = todayText;
        }
        else if (dateDiff == 1) {
            date = tomorrowText;
        }
        else {
            var dayName = this.toolsProvider.getShortDayName(reservaDate.getDay());
            var monthName = this.toolsProvider.getShortMonthName(reservaDate.getMonth());
            var dateFormat = dayName + ' ' + reservaDate.getDate() + ' ' + monthName;
            date = dateFormat;
        }
        if (values.modoReserva == 'T')
            date += ' ' + values.turno;
        else if (values.modoReserva == 'C')
            date += ' ' + reservaDate.getHours() + ':' + reservaDate.getMinutes();
        return date;
    };
    //got to notification details page
    NotificationsPage.prototype.goToDetails = function (i, notification) {
        // set item as read
        if (notification.read == 0) {
            this.notificationModel.notificationRead(notification.id, "message");
        }
        this.notificationModel.modelNotification[i].read = 1;
        this.notificationsList[i].read = 1;
        this.navCtrl.push("NotificationDetailsPage", { item: notification }, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
    };
    //difference between two days
    NotificationsPage.prototype.date_diff_indays = function (date1, date2) {
        return Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) / (1000 * 60 * 60 * 24));
    };
    //format date for display
    NotificationsPage.prototype.formatDate = function (inputDate) {
        var dateTextTranslate = this.toolsProvider.fnLanguageTranslate(["common.yesterday", "common.dateFormat.short"]); // language translation
        var yesterdayText = '';
        dateTextTranslate.subscribe(function (value) {
            yesterdayText = value["common.yesterday"];
        });
        var today = new Date(), dateToCheck = new Date(this.toolsProvider.formatDate(inputDate).split(" ")[0]), date = '';
        var diffWithToday = this.date_diff_indays(today, dateToCheck);
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        var diffWithYesterday = this.date_diff_indays(yesterday, dateToCheck);
        if (diffWithToday == 0) {
            date = this.toolsProvider.formatTimeToShort(inputDate);
        }
        else if (diffWithYesterday == 0) {
            date = yesterdayText;
        }
        else {
            var dayName = this.toolsProvider.getShortDayName(dateToCheck.getDay());
            var monthName = this.toolsProvider.getShortMonthName(dateToCheck.getMonth());
            var dateFormat = dayName + ' ' + dateToCheck.getDate() + ' ' + monthName;
            date = dateFormat;
        }
        return date;
    };
    //text for display getRemitente
    NotificationsPage.prototype.getRemitente = function (remitente, tipo) {
        var receptionTextTranslate = this.toolsProvider.fnLanguageTranslate(["common.reception"]); // language translation
        var receptionText = '';
        receptionTextTranslate.subscribe(function (value) {
            receptionText = value["common.reception"];
        });
        if (!remitente || remitente == undefined) {
            switch (tipo) {
                case this.constant.TIPO_MENSAJE.NOTIFICACION_APERTURA_CHECKIN:
                case this.constant.TIPO_MENSAJE.NOTIFICACION_APERTURA_CHECKOUT:
                case this.constant.TIPO_MENSAJE.CHECKIN:
                case this.constant.TIPO_MENSAJE.CHECKOUT:
                    remitente = receptionText;
                    break;
                case this.constant.TIPO_MENSAJE.MENSAJE_PLANIFICADO: remitente = this.hotelService.objHotel.hotelName;
            }
        }
        return remitente;
    };
    //function to go to previous page
    NotificationsPage.prototype.fnBack = function () {
        this.navCtrl.popToRoot({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/notifications/notifications.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/componentions/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header class="header_menu nobrdr_menu_hdr">\n  <ion-navbar>\n    <ion-title>{{\'view.mensajes.title\' | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr" *ngIf="!hideBackButton">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle hidden="false" class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="*ngIf="!hideBackButton"" ></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar> -->\n\n\n  <ion-header class="header_menu">\n    <ion-navbar  style="border-bottom: solid thin rgba(255, 0, 0, 0) !important;">\n      <ion-title>{{\'view.mensajes.title\' | translate}}</ion-title>\n      <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr" *ngIf="!hideBackButton">\n        <i class="icon-arrow-left2"></i>\n      </button>\n      <ion-buttons end>\n        <button ion-button menuToggle hidden="false" class="main_menu">\n          <i class="icon-Menu"></i>\n          <span class="x-badge" *ngIf="notificationModel.hasNotifications" ></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content id="homecontent" class="home_container" no-bounce>\n\n  <ion-list class="notification_list">\n    <ion-item *ngFor="let notification of notificationsList; let i=index" text-wrap (click)="goToDetails(i,notification)" [class.unread]="notification.read==0">\n      <div id="notification.id" class="row">\n        <span class="icon"></span>\n        <div class="notification_bloks">\n          <h3>{{notification.titulo}}</h3>\n          <div class="time_wrpr">\n            <label class="time">{{getRemitente(notification.remitente,notification.tipo)}}</label>\n            <label class="time_frmt"> {{this.formatDate(notification.fecha)}}</label>\n          </div>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_checkout_model__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkin_service_checkin_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CheckoutServiceProvider = /** @class */ (function () {
    function CheckoutServiceProvider(http, communication, constant, reservation, deviceProvider, checkinProvider) {
        this.http = http;
        this.communication = communication;
        this.constant = constant;
        this.reservation = reservation;
        this.deviceProvider = deviceProvider;
        this.checkinProvider = checkinProvider;
        this.CheckoutObj = [];
        console.log('Hello CheckoutServiceProvider Provider');
        this.objCheckOut = new __WEBPACK_IMPORTED_MODULE_7__model_checkout_model__["a" /* CheckOutData */]();
        this.CheckoutObj = {
            codigoSeguridadTarjetaCredito: null,
            fechaCaducidadTarjetaCredito: null,
            numeroTarjetaCredito: null,
            principal: {},
            tipoTarjetaCredito: null,
            titularTarjeta: null,
            tokenTarjeta: null
        };
    }
    CheckoutServiceProvider.prototype.sendCheckOutData = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            if (_this.objCheckOut != null) {
                //this.CheckoutObj.id = null;
                //this.CheckoutObj.reservaId = this.reservation.objReservation.reservationId;
                _this.CheckoutObj.tipoTarjetaCredito = _this.objCheckOut.cardType;
                _this.CheckoutObj.numeroTarjetaCredito = _this.objCheckOut.cardNumber;
                _this.CheckoutObj.codigoSeguridadTarjetaCredito = _this.objCheckOut.cvv;
                _this.CheckoutObj.fechaCaducidadTarjetaCredito = _this.objCheckOut.cardExpirationDate;
                _this.CheckoutObj.titularTarjeta = _this.objCheckOut.cardHolder;
                _this.CheckoutObj.tokenTarjeta = _this.objCheckOut.Token;
                // this.CheckoutObj.agreeCheckboxField = true;
                var itemArray = {};
                //itemArray.reservaId = this.reservation.objReservation.reservationId;
                //itemArray.id = null;
                itemArray.nombre = _this.objCheckOut.guestData.nombre;
                itemArray.apellidos = _this.objCheckOut.guestData.apellidos;
                itemArray.fechaNacimiento = _this.objCheckOut.guestData.fechaNacimiento;
                itemArray.sexo = _this.objCheckOut.guestData.sexo;
                itemArray.documentoIdentidad = _this.objCheckOut.guestData.documentoIdentidad;
                itemArray.tipoDocumentoIdentidad = _this.objCheckOut.guestData.tipoDocumentoIdentidad;
                itemArray.fechaDocumentoIdentidad = _this.objCheckOut.guestData.fechaDocumentoIdentidad;
                itemArray.nacionalidadDocumentoIdentidad = _this.objCheckOut.guestData.nacionalidadDocumentoIdentidad;
                itemArray.mail = _this.objCheckOut.guestData.mail;
                itemArray.principal = true;
                // itemArray.datosHuespedId = null;
                // itemArray.ciudadResidencia = null;
                // itemArray.codigoPaisResidencia = null;
                itemArray.residencia = _this.objCheckOut.guestData.residencia;
                // itemArray.newsletter = true;
                // itemArray.telefono = null;
                itemArray.pictureFront = _this.objCheckOut.guestData.pictureFront;
                itemArray.addressStreet = _this.objCheckOut.guestData.addressStreet;
                itemArray.addressPostalCode = _this.objCheckOut.guestData.addressPostalCode;
                itemArray.addressCity = _this.objCheckOut.guestData.addressCity;
                itemArray.addressCountry = _this.objCheckOut.guestData.addressCountry;
                // itemArray.huespedYaRegistrado = false;
                // itemArray.formularioRegistroEnviado = null;
                // itemArray.tipoViajeReservaYaDefinido = false;
                // itemArray.numeroHabitacion = null;
                // itemArray.nombreHuesped = this.reservation.objReservation.guestName;
                // itemArray.nombreHotel = this.reservation.objReservation.hotelName;
                // itemArray.entrada = null;
                // itemArray.noches = this.reservation.objReservation.nights;
                // itemArray.personas = this.reservation.objReservation.noOfPersons;
                // itemArray.tipoHabitacion = this.reservation.objReservation.roomType;
                // itemArray.huespedYaCheckInRealizado = this.reservation.objReservation.alreadyCheckIn;
                // itemArray.huespedYaCheckOutRealizado = false;
                // itemArray.localizadorHotel = this.reservation.objReservation.hotelLocation;
                // itemArray.precio = this.reservation.objReservation.price;
                _this.CheckoutObj.principal = itemArray;
            }
            var url = _this.constant.URL_TRANSACTION_SERVER + '/online/checkout?uuid=' + _this.deviceProvider.uuid + '&reservaId=' + _this.reservation.objReservation.reservationId;
            _this.communication.post(url, _this.CheckoutObj, observer); // http get service call
        });
    };
    CheckoutServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__communication_service_communication_service__["a" /* CommunicationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_5__reservation_service_reservation_service__["a" /* ReservationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__checkin_service_checkin_service__["a" /* CheckinServiceProvider */]])
    ], CheckoutServiceProvider);
    return CheckoutServiceProvider;
}());

//# sourceMappingURL=checkout-service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyBookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_booking_service_booking_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_booking_model__ = __webpack_require__(721);
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
 * Generated class for the MyBookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyBookingsPage = /** @class */ (function () {
    function MyBookingsPage(notificationModel, navCtrl, navParams, bookingProvider, reservationProvider, toolsProvider, menuCtrl, hotelProvider, alertCtrl, constant, nativeStorage, loadingCtrl) {
        var _this = this;
        this.notificationModel = notificationModel;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookingProvider = bookingProvider;
        this.reservationProvider = reservationProvider;
        this.toolsProvider = toolsProvider;
        this.menuCtrl = menuCtrl;
        this.hotelProvider = hotelProvider;
        this.alertCtrl = alertCtrl;
        this.constant = constant;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.bookingList = []; // for booking list
        this.shownGroup = null; // for accordian
        this.currencySymbol = this.hotelProvider.objHotel.currency.signo; // currency symbol
        this.activeGroup = null;
        this.hideBackButton = false;
        menuCtrl.close();
        //get notification data from local storage
        this.nativeStorage.getItem('notificationData').then(function (notificationData) {
            if (notificationData != undefined) {
                var data = notificationData.data;
                _this.storedData = data.filter(function (x) { return x.type == "reservation"; });
            }
        });
        //set previously viewed item
        if (this.bookingProvider.objBooking && this.bookingProvider.objBooking.activeItem != null) {
            this.activeGroup = this.bookingProvider.objBooking.activeItem;
        }
    }
    //page leave
    MyBookingsPage.prototype.ionViewWillLeave = function () {
        this.hideBackButton = true;
        this.notificationModel.currentPageName = "";
        this.bookingProvider.objBooking.activeItem = this.activeGroup;
    };
    //page load
    MyBookingsPage.prototype.ionViewDidLoad = function () {
        this.showLoading();
        this.hideBackButton = false;
    };
    //after page load
    MyBookingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.hideBackButton = false;
        this.notificationModel.currentPageName = "NotificationsPage";
        var reservationId = this.reservationProvider.objReservation.reservationId;
        this.bookingProvider.fnGetBookingInfo(reservationId).subscribe(function (data) {
            if (data.success == true) {
                if (!_this.bookingProvider.objBooking) {
                    _this.bookingProvider.objBooking = new __WEBPACK_IMPORTED_MODULE_9__model_booking_model__["a" /* BookingData */]();
                }
                _this.bookingProvider.objBooking.data = data.response;
                // store temp array
                var tempArray = _this.bookingProvider.objBooking.data;
                var itemArray = [];
                var notifictnIds1_1 = [];
                var notifictnIds2 = [];
                var dataArray = [];
                var storeIds = [];
                var changedIds = [];
                var readStatus = [];
                for (var _i = 0, tempArray_1 = tempArray; _i < tempArray_1.length; _i++) {
                    var item = tempArray_1[_i];
                    itemArray = item;
                    itemArray.read = 0;
                    dataArray.push(itemArray);
                    notifictnIds2.push(item.id);
                }
                //check for local storage notifications
                if (_this.storedData && _this.storedData.length > 0) {
                    for (var _a = 0, _b = _this.storedData; _a < _b.length; _a++) {
                        var res = _b[_a];
                        storeIds[res.notificationID] = res.response.estado;
                        readStatus[res.notificationID] = res.read;
                        notifictnIds1_1.push(res.notificationID);
                    }
                    //for setting read or unread
                    if (storeIds.length > 0) {
                        var tempData = dataArray;
                        dataArray = [];
                        for (var _c = 0, tempData_1 = tempData; _c < tempData_1.length; _c++) {
                            var list = tempData_1[_c];
                            var listArray = [];
                            listArray = list;
                            if (storeIds[list.id] != undefined) {
                                if (storeIds[list.id] != list.estado) {
                                    listArray.read = 0;
                                    changedIds.push(list);
                                }
                            }
                            if (readStatus[list.id] != undefined && storeIds[list.id] == list.estado) {
                                listArray.read = readStatus[list.id];
                            }
                            dataArray.push(listArray);
                        }
                    }
                    // store new data into local storage if any
                    var difference = notifictnIds2.filter(function (x) { return !notifictnIds1_1.includes(x); });
                    if (difference.length > 0) {
                        var newData = [];
                        var _loop_1 = function (id) {
                            x = dataArray.filter(function (x) { return x.id == id; });
                            newData.push(x[0]);
                        };
                        var x;
                        for (var _d = 0, difference_1 = difference; _d < difference_1.length; _d++) {
                            var id = difference_1[_d];
                            _loop_1(id);
                        }
                        _this.notificationModel.storeNotificationData("reservation", newData);
                    }
                    //if status of any booking item is chnaged then update into unread
                    if (changedIds.length > 0) {
                        _this.notificationModel.notificationUnRead(changedIds, "reservation");
                    }
                }
                else {
                    // store into local storage
                    if (data.response.length > 0) {
                        _this.notificationModel.storeNotificationData("reservation", _this.bookingProvider.objBooking.data);
                    }
                }
                _this.bookingList = dataArray;
                _this.bookingProvider.objBooking.data = _this.bookingList;
            }
            _this.loading.dismiss();
        });
    };
    //Loader
    MyBookingsPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    //accordian toggle
    MyBookingsPage.prototype.toggleGroup = function (group, item) {
        // set item as read
        if (this.bookingList[group].read == 0) {
            this.notificationModel.notificationRead(item.id, "reservation", item.estado);
            this.bookingList[group].read = 1;
        }
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
        this.activeGroup = group;
    };
    ;
    //accordian
    MyBookingsPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    MyBookingsPage.prototype.activeClassFn = function (index) {
        return index === this.activeGroup;
    };
    //format status
    MyBookingsPage.prototype.formatStatusClass = function (status) {
        var statusKey = {
            'C': 'confirmed',
            'P': 'pending',
            'X': 'cancelled'
        };
        return 'status ' + statusKey[status];
    };
    //format status string
    MyBookingsPage.prototype.formatStatusString = function (status) {
        var statusKey = {
            'C': 'common.reservation.confirmed',
            'P': 'common.reservation.pending',
            'X': 'common.reservation.cancelled'
        };
        return statusKey[status];
    };
    //format price
    MyBookingsPage.prototype.formatPrice = function (values) {
        if (values.tipoServicio == 'SERVICIO_HABITACIONES') {
            var precio = 0;
            for (var i = 0; i < values.carrito.items.length; i++) {
                precio = precio + values.carrito.items[i].precio * values.carrito.items[i].cantidad;
            }
            values.precio = precio;
            values.pax = 1;
        }
        if (!values.precio)
            return '--';
        var price = parseFloat(values.precio) * values.pax;
        price = (Math.round(price * 100) / 100);
        return parseFloat(price).toFixed(2) + ' ' + this.currencySymbol;
    };
    //get service type
    MyBookingsPage.prototype.getServiceType = function (serviceType) {
        serviceType = serviceType.toUpperCase();
        var serviceTranslate = this.toolsProvider.fnLanguageTranslate(["view.restaurantCarousel.title", "view.actividadCarousel.title", "view.ofertaCarousel.title", "view.saludLearnMore.title", "view.servicioHabitacion.title"]); // language translation
        var serviceText = '';
        serviceTranslate.subscribe(function (value) {
            serviceText = value;
        });
        switch (serviceType) {
            case this.constant.SERVICE_RESTAURANT:
                return serviceText['view.restaurantCarousel.title'];
            case this.constant.SERVICE_ACTIVITY:
                return serviceText['view.actividadCarousel.title'];
            case this.constant.SERVICE_OFFER:
                return serviceText['view.ofertaCarousel.title'];
            case this.constant.SERVICE_WELLNESS:
                return serviceText['view.saludLearnMore.title'];
            case this.constant.SERVICE_ITEM_WELLNESS:
                return serviceText['view.saludLearnMore.title'];
            case this.constant.SERVICE_ROOM:
                return serviceText['view.servicioHabitacion.title'];
        }
    };
    //get service name
    MyBookingsPage.prototype.getServiceName = function (serviceName, serviceType) {
        if (serviceType == 'SERVICIO_HABITACIONES') {
            var serviceTranslate = this.toolsProvider.fnLanguageTranslate("view.servicioHabitacion.title"); // language translation
            var serviceText_1 = '';
            serviceTranslate.subscribe(function (value) {
                serviceText_1 = value;
            });
            return serviceText_1;
        }
        else {
            return serviceName;
        }
    };
    //get long date format
    MyBookingsPage.prototype.longFormatDate = function (date, reservationMode, turns) {
        if (reservationMode == 'T') {
            date = date.split(" ")[0];
            return date + " " + turns;
        }
        else if (reservationMode == 'C') {
            date = date.split(":");
            date = date[0] + ":" + date[1];
            return date;
        }
        else {
            date = date.split(" ")[0];
            return date;
        }
    };
    //format pax
    MyBookingsPage.prototype.formatPax = function (pax) {
        if (pax > 0) {
            var paxTextTranslate = this.toolsProvider.fnLanguageTranslate("view.reservation.label.people.title"); // language translation
            var paxText_1 = '';
            paxTextTranslate.subscribe(function (value) {
                paxText_1 = value;
            });
            return pax + ' ' + paxText_1;
        }
    };
    //get sevice comments
    MyBookingsPage.prototype.getServiceComments = function (item) {
        if (!item.comentarios) {
            return '--';
        }
        else {
            return item.comentarios;
        }
    };
    //get frontend comments
    MyBookingsPage.prototype.getFrontDeskComments = function (item) {
        if (!item.respuestaHotel) {
            return '--';
        }
        else {
            return item.respuestaHotel;
        }
    };
    //get QR code image path
    MyBookingsPage.prototype.getQRCode = function (item) {
        var reservationId = this.reservationProvider.objReservation.reservationId;
        var QRImage = this.bookingProvider.getQRImagePath(item.qrId, reservationId), defaultLogo = "assets/imgs/QR_LOGO.png", qrId = item.qrId; // making sure the QR image is received
        if ((item.estado == 'C') && (qrId != null)) {
            //return values.QR;
            return QRImage;
        }
        else {
            return defaultLogo;
        }
    };
    // format booking date
    MyBookingsPage.prototype.formatBookingDate = function (values) {
        var today = new Date(), reservaDate = new Date(this.toolsProvider.formatDate(values.fecha).split(" ")[0]), date = '';
        var dateDiff = this.toolsProvider.date_diff_indays(today, reservaDate);
        var dateTextTranslate = this.toolsProvider.fnLanguageTranslate(["common.today", "common.tomorrow"]); // language translation
        var todayText = '';
        var tomorrowText = '';
        dateTextTranslate.subscribe(function (value) {
            todayText = value["common.today"];
            tomorrowText = value["common.tomorrow"];
        });
        if (dateDiff == 0) {
            date = todayText;
        }
        else if (dateDiff == 1) {
            date = tomorrowText;
        }
        else {
            var dayName = this.toolsProvider.getShortDayName(reservaDate.getDay());
            var monthName = this.toolsProvider.getShortMonthName(reservaDate.getMonth());
            var dateFormat = dayName + ' ' + reservaDate.getDate() + ' ' + monthName;
            date = dateFormat;
        }
        if (values.modoReserva == 'T')
            date += ' ' + values.turno;
        else if (values.modoReserva == 'C')
            date += ' ' + reservaDate.getHours() + ':' + reservaDate.getMinutes();
        return date;
    };
    // cancel booking request
    MyBookingsPage.prototype.fnCancelRequest = function (item) {
        var _this = this;
        var currentDate = new Date();
        var serviceDate = new Date(this.toolsProvider.formatDate(item.fecha).split(" ")[0]);
        var serviceId = item.id;
        var reservationId = this.reservationProvider.objReservation.reservationId;
        // control whether a confirmed call is in the past
        if ((item.estado == 'C') && (serviceDate < currentDate)) {
            console.log('Call is in the past and cannot be cancelled!');
            return;
        }
        var confirmMessages = this.toolsProvider.fnLanguageTranslate(["view.compras.cancellation.confirm.message", "buttons.no", "buttons.yes", "common.confirm"]); // language translation
        var confirmMsg = '';
        confirmMessages.subscribe(function (value) {
            confirmMsg = value['view.compras.cancellation.confirm.message'].replace('{servicioNombre}', item.servicioNombre);
            var alertnew = _this.alertCtrl.create({
                title: value['common.confirm'],
                message: confirmMsg,
                cssClass: 'cls_alrt',
                buttons: [
                    {
                        text: value['buttons.no'],
                        role: 'cancel',
                        handler: function (data) {
                        }
                    },
                    {
                        text: value['buttons.yes'],
                        handler: function (data) {
                            _this.bookingProvider.sendCancellation(reservationId, serviceId).subscribe(function (data) {
                                if (data.success == true) {
                                    item.estado = 'X';
                                }
                            });
                        }
                    }
                ]
            });
            alertnew.present();
            setTimeout(function () { alertnew.dismiss(); }, 5000);
        });
    };
    //function to go to previous page
    MyBookingsPage.prototype.fnBack = function () {
        this.navCtrl.popToRoot({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
    };
    MyBookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-bookings',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/my-bookings/my-bookings.html"*/'<!-- <ion-header class="header_menu nobrdr_menu_hdr">\n  <ion-navbar>\n    <ion-title>{{\'view.compras.title\' | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr" *ngIf="!hideBackButton">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle hidden="false" class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationModel.hasNotifications" ></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-header class="header_menu">\n  <ion-navbar  style="border-bottom: solid thin rgba(255, 0, 0, 0) !important;">\n    <ion-title>{{\'view.compras.title\' | translate}}</ion-title>\n    <button (click)=\'fnBack()\' class="hdr_back_btn_wrpr" *ngIf="!hideBackButton">\n      <i class="icon-arrow-left2"></i>\n    </button>\n    <ion-buttons end>\n      <button ion-button menuToggle hidden="false" class="main_menu">\n        <i class="icon-Menu"></i>\n        <span class="x-badge" *ngIf="notificationModel.hasNotifications" ></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="homecontent" class="home_container" no-bounce>\n\n  <ion-list class="service_bknglst">\n    <ion-item *ngFor="let d of bookingList; let i=index" text-wrap [ngClass]="{active: isGroupShown(i)}">\n      <div [class.opened]="isGroupShown(i)" class="service_bknglst_top" [class.activeitem]="activeClassFn(i)">\n        <button (click)="fnCancelRequest(d)" [disabled]="d.estado==\'X\'" class="close_btn">\n          <i class="icon-Cancel"></i>\n        </button>\n        <span (click)="toggleGroup(i,d)" class="bkng_lstcntent">\n          <h3 class="bkng_srvcename" [class.unread]="d.read==0">{{getServiceName(d.servicioNombre, d.tipoServicio)}}</h3>\n          <label class="bkng_srvceprice">{{formatPrice(d)}}</label>\n          <label class="bkng_srvcedate">{{formatBookingDate(d)}}</label>\n          <label class="bkng_srvcestats">{{formatStatusString(d.estado) | translate}}</label>\n        </span>\n        <span [class]="formatStatusClass(d.estado)"></span>\n      </div>\n\n      <div *ngIf="isGroupShown(i)" class="service_bknglst_btm">\n        <h3 class="srvce_hdng">{{"view.compras.detalle" | translate}}</h3>\n        <img [src]="getQRCode(d)" class="bkng_dtls_bg">\n        <h3 class="srvce_sub_hdng">{{getServiceType(d.tipoServicio)}} : </h3>\n        <p class="srvce_para">{{getServiceName(d.servicioNombre, d.tipoServicio)}}</p>\n        <h2 class="srvce_para">\n          <p class="srvce_sub_lbl">{{longFormatDate(d.fecha,d.modoReserva,d.turno)}}</p>\n          <p class="srvce_sub_lbl">{{formatPax(d.pax)}}</p>\n        </h2>\n        <h3 class="srvce_hdng">{{"common.comments" |translate}} :</h3>\n        <p class="srvce_para">{{getServiceComments(d)}}</p>\n        <h3 class="srvce_hdng">{{"common.frondeskResponse" | translate}} :</h3>\n        <label class="srvce_sub_lbl">{{getFrontDeskComments(d)}}</label>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/my-bookings/my-bookings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_booking_service_booking_service__["a" /* BookingServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], MyBookingsPage);
    return MyBookingsPage;
}());

//# sourceMappingURL=my-bookings.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NostayServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__communication_service_communication_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the NostayServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NostayServiceProvider = /** @class */ (function () {
    function NostayServiceProvider(http, constant, deviceProvider, communication) {
        this.http = http;
        this.constant = constant;
        this.deviceProvider = deviceProvider;
        this.communication = communication;
        console.log('Hello NostayServiceProvider Provider');
    }
    NostayServiceProvider.prototype.fnNoStayLoginProceed = function (name, surname, email, newsletter, contactphone) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/online/huesped/registro/loginnostay';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('name', name);
            Params = Params.append('surname', surname);
            Params = Params.append('email', email);
            Params = Params.append('newsletter', newsletter);
            Params = Params.append('contactphone', contactphone);
            Params = Params.append('bundle', _this.constant.APP_DOMAIN);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communication.post(url, Params, observer);
        });
    };
    NostayServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__communication_service_communication_service__["a" /* CommunicationServiceProvider */]])
    ], NostayServiceProvider);
    return NostayServiceProvider;
}());

//# sourceMappingURL=nostay-service.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestData; });
var GuestData = /** @class */ (function () {
    function GuestData() {
    }
    return GuestData;
}());

//# sourceMappingURL=guest-data-model.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auto_complete_country_auto_complete_country__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_guest_data_model__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_guest_service_guest_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_registration_service_registration_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(keyboard, navCtrl, navParams, tools, modalCtrl, cdRef, formBuilder, sanitized, alertCtrl, reservation, datePipe, hotel, guestPvdr, registrationPvdr, nativeStorage, platForm, iab) {
        var _this = this;
        this.keyboard = keyboard;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tools = tools;
        this.modalCtrl = modalCtrl;
        this.cdRef = cdRef;
        this.formBuilder = formBuilder;
        this.sanitized = sanitized;
        this.alertCtrl = alertCtrl;
        this.reservation = reservation;
        this.datePipe = datePipe;
        this.hotel = hotel;
        this.guestPvdr = guestPvdr;
        this.registrationPvdr = registrationPvdr;
        this.nativeStorage = nativeStorage;
        this.platForm = platForm;
        this.iab = iab;
        this.isChecked = false; // to manage radio button
        this.isCheckedPrivacy = false;
        this.isCheckedConditions = false;
        this.htmlData = null; // to manage html content
        this.monthShortNames = []; // for month short names
        this.devicePlatForm = "android";
        this.registrationForm = formBuilder.group({
            'name': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            'lastName': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            'country': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            'city': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](''),
            'dateOfBirth': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            'gender': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            'email': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            'typeOfTravel': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])
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
        if (this.platForm.is("ios")) {
            this.devicePlatForm = "ios";
        }
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var current = this;
        this.maxDate = this.tools.fnGetToday();
        this.minDate = (new Date()).getFullYear() - 90;
        var dt = this.reservation.objReservation.createdDate; // gets created date from reservation object
        var rmTime = dt.split(" ");
        var newDate = rmTime[0].split("-").reverse().join("-");
        var date = this.datePipe.transform(newDate, 'dd/MMM/yyyy'); // use datepipe to transform the date to required format
        this.res = this.tools.fnLanguageTranslateWithParam("view.checkin.template.card", { localizadorHotel: this.reservation.objReservation.hotelLocation, fechaEntrada: date, noches: this.reservation.objReservation.nights, tipoHabitacion: this.reservation.objReservation.roomType, habitaciones: "this.reservation.objReservation.bedrooms", personas: this.reservation.objReservation.noOfPersons, precio: this.reservation.objReservation.price, moneda: this.reservation.objReservation.price }); // translate of html content with common funtion
        this.res.subscribe(function (value) {
            _this.htmlData = _this.sanitized.bypassSecurityTrustHtml(value); // bypass html content to avoid losing html attributes
            _this.cdRef.detectChanges();
            document.getElementById('habitaciones').style.display = 'none';
            document.getElementById('precio').style.display = 'none';
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
        this.backgroundImageStyle = this.tools.getImagePath(this.hotel.objHotel.mainImage); // returns image url
        this.registrationForm.get('name').setValue(this.reservation.objReservation.guestName); // set name to registration page on load
        this.registrationForm.get('lastName').setValue(this.reservation.objReservation.lastName); // set last name to registration page on load
        this.registrationForm.get('email').setValue(this.reservation.objReservation.email); // set email to registration page on load
        this.legalUrl = this.tools.getLegalUrl();
        this.privacyUrl = this.tools.getPrivacyUrl();
    };
    /**
     * function to select or deselect the radio button
     * @param  event
    */
    RegistrationPage.prototype.fnOnRadioSelect = function ($event) {
        this.isChecked = !this.isChecked;
    };
    RegistrationPage.prototype.fnOnRadioSelectPrivacy = function ($event) {
        this.isCheckedPrivacy = !this.isCheckedPrivacy;
    };
    RegistrationPage.prototype.fnOnRadioSelectConditions = function ($event) {
        this.isCheckedConditions = !this.isCheckedConditions;
    };
    /**
     * Function to show country list
     */
    RegistrationPage.prototype.showCountryList = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__auto_complete_country_auto_complete_country__["a" /* AutoCompleteCountryPage */], { selectedItem: this.selectedCountry });
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.registrationForm.get('country').setValue(data.text);
                _this.countryCode = data.value;
                _this.countryName = data.text;
                _this.selectedCountry = data.value;
            }
        });
        modal.present();
    };
    /**
     * function to valdate and execute after submitting the form
     */
    RegistrationPage.prototype.fnSubmit = function () {
        var _this = this;
        if (!this.registrationForm.valid) {
            var emptyFields_1 = []; // to add empty fields in the form
            var alertMessage_1; // to show alert message on validation
            var validateMessages = this.tools.fnLanguageTranslate(['view.checkin.label.nombre.title', 'view.checkin.label.apellidos.title', 'view.checkin.label.mail.title', 'view.registration.label.country', 'view.checkin.label.fechaNacimiento.title', 'view.checkin.label.sexo.title', 'view.registration.label.travelType']);
            if (this.registrationForm.controls['name'].hasError('required')) {
                validateMessages.subscribe(function (value) {
                    emptyFields_1.push(value['view.checkin.label.nombre.title']);
                });
            }
            if (this.registrationForm.controls['lastName'].hasError('required')) {
                validateMessages.subscribe(function (value) {
                    emptyFields_1.push(value['view.checkin.label.apellidos.title']);
                });
            }
            if (this.registrationForm.controls['email'].hasError('required')) {
                validateMessages.subscribe(function (value) {
                    emptyFields_1.push(value['view.checkin.label.mail.title']);
                });
            }
            if (this.registrationForm.controls['country'].hasError('required')) {
                validateMessages.subscribe(function (value) {
                    emptyFields_1.push(value['view.registration.label.country']);
                });
            }
            if (this.registrationForm.controls['dateOfBirth'].hasError('required')) {
                validateMessages.subscribe(function (value) {
                    emptyFields_1.push(value['view.checkin.label.fechaNacimiento.title']);
                });
            }
            if (this.registrationForm.controls['gender'].hasError('required')) {
                validateMessages.subscribe(function (value) {
                    emptyFields_1.push(value['view.checkin.label.sexo.title']);
                });
            }
            if (this.registrationForm.controls['typeOfTravel'].hasError('required')) {
                validateMessages.subscribe(function (value) {
                    emptyFields_1.push(value['view.registration.label.travelType']);
                });
            }
            // for language translation
            var msg = this.tools.fnLanguageTranslateWithParam(["common.mandatoryFields", "view.login.error.emptyMail", "common.error", "buttons.ok"], { fields: emptyFields_1 }); // translate of html content with common funtion
            if (this.registrationForm.controls['name'].hasError('required')
                || this.registrationForm.controls['lastName'].hasError('required')
                || this.registrationForm.controls['email'].hasError('required')
                || this.registrationForm.controls['country'].hasError('required')
                || this.registrationForm.controls['dateOfBirth'].hasError('required')
                || this.registrationForm.controls['gender'].hasError('required')
                || this.registrationForm.controls['typeOfTravel'].hasError('required')) {
                msg.subscribe(function (value) {
                    alertMessage_1 = value['common.mandatoryFields'];
                });
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
                    cssClass: 'cls_alrt cls_reg_alrt',
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
            if (!this.isCheckedPrivacy) {
                // for language translation
                var msg = this.tools.fnLanguageTranslate(["common.error", "buttons.ok", "view.login.label.privacyerrormessage"]); // translate of html content with common funtion
                msg.subscribe(function (value) {
                    var emptyFields = [];
                    var alertnew = _this.alertCtrl.create({
                        title: value['common.error'],
                        message: value['view.login.label.privacyerrormessage'],
                        cssClass: 'cls_alrt cls_reg_alrt',
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
                var dt = this.registrationForm.get('dateOfBirth').value;
                var dob = this.datePipe.transform(dt, 'dd-MM-yyyy HH:mm:ss'); // transform the dateOfBirth value from form to required format
                var name_1 = this.registrationForm.get('name').value;
                var lastName_1 = this.registrationForm.get('lastName').value;
                var email_1 = this.registrationForm.get('email').value;
                var country_1 = this.countryCode;
                var city_1 = this.registrationForm.get('city').value;
                var dateOfBirth_1 = dob; //this.registrationForm.get('dateOfBirth').value;
                var gender_1 = this.registrationForm.get('gender').value;
                var typeOfTravel = this.registrationForm.get('typeOfTravel').value;
                var newsLetter_1 = this.isChecked;
                this.registrationPvdr.sendFullRegistration(name_1, lastName_1, email_1, country_1, dateOfBirth_1, gender_1, typeOfTravel, newsLetter_1, city_1).subscribe(function (data) {
                    if (data.success == true) {
                        _this.guestPvdr.objGuest = new __WEBPACK_IMPORTED_MODULE_11__model_guest_data_model__["a" /* GuestData */]();
                        _this.reservation.objReservation.alreadyRegistered = true;
                        _this.reservation.objReservation.registrationCompleted = true;
                        _this.guestPvdr.objGuest.name = name_1;
                        _this.guestPvdr.objGuest.lastName = lastName_1;
                        _this.guestPvdr.objGuest.email = email_1;
                        _this.guestPvdr.objGuest.gender = gender_1;
                        _this.guestPvdr.objGuest.newsLetter = newsLetter_1;
                        _this.guestPvdr.objGuest.cityResidence = city_1;
                        _this.guestPvdr.objGuest.countryCodeResidence = country_1;
                        _this.guestPvdr.objGuest.dateOfBirth = dateOfBirth_1;
                        _this.guestPvdr.objGuest.addressCountry = _this.countryName;
                        // set local storage data
                        _this.nativeStorage.getItem('reservationData').then(function (reservation) {
                            if (reservation != undefined) {
                                _this.nativeStorage.setItem('reservationData', {
                                    'localizer': reservation.localizer,
                                    'reservationId': reservation.reservationId,
                                    'name': reservation.name,
                                    'lastname': reservation.lastname,
                                    'email': reservation.email,
                                    'registrationCompleted': true,
                                    'alreadyRegistered': true,
                                    'noStayGuest': reservation.noStayGuest,
                                    'response': reservation.response
                                })
                                    .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
                            }
                        });
                        _this.nativeStorage.setItem('reservationData', {
                            'registrationCompleted': true, 'alreadyRegistered': true
                        });
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */], {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' }); // on successful registration navigate to home page
                    }
                    else {
                        var errmsg = _this.tools.fnLanguageTranslate(["common.error", "common.serviceIsUnavailable", "buttons.ok"]); // translate of error message
                        errmsg.subscribe(function (value) {
                            var alertnew = _this.alertCtrl.create({
                                title: value['common.error'],
                                message: value['common.serviceIsUnavailable'],
                                cssClass: 'cls_alrt',
                                buttons: [
                                    {
                                        text: value["buttons.ok"],
                                        role: 'cancel'
                                    }
                                ]
                            });
                            alertnew.present();
                            setTimeout(function () { alertnew.dismiss(); }, 5000);
                        });
                    }
                });
            }
        }
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/registration/registration.html"*/'<ion-content padding class="registration" no-bounce>\n  <form class="reg_frm reg_FrmScrl" [formGroup]="registrationForm">\n    <ion-item [style.backgroundImage]="\'url(\' + backgroundImageStyle + \')\'" class="registration_header">\n      <ion-label [innerHtml]="htmlData"></ion-label>\n    </ion-item>\n    <ion-item class="half_item reg_name">\n      <ion-label stacked>{{\'view.checkin.label.nombre.title\' | translate}}</ion-label>\n      <ion-input formControlName="name" type="text"></ion-input>\n    </ion-item>\n    <ion-item class="half_item reg_lst_name">\n      <ion-label stacked>{{\'view.checkin.label.apellidos.title\' | translate}}</ion-label>\n      <ion-input formControlName="lastName" type="text"></ion-input>\n    </ion-item>\n    <ion-item class="reg_email">\n      <ion-label stacked>{{\'view.checkin.label.mail.title\' | translate}}</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="{{\'view.checkin.label.mail.placeHolder\' | translate}}"></ion-input>\n    </ion-item>\n    <ion-item class="half_item reg_cntry">\n      <ion-label stacked>{{\'view.registration.label.country\' | translate}}</ion-label>\n      <ion-input formControlName="country" type="text" (tap)="showCountryList()"></ion-input>\n    </ion-item>\n    <ion-item class="half_item reg_city">\n      <ion-label stacked>{{\'view.registration.label.city\' | translate}}</ion-label>\n      <ion-input formControlName="city" type="text"></ion-input>\n    </ion-item>\n    <ion-item class="half_item date_time">\n      <ion-label stacked>{{\'view.checkin.label.fechaNacimiento.title\' | translate}}</ion-label>\n      <ion-datetime displayFormat="DD/MMM/YYYY" pickerFormat="DD/MMMM/YYYY" formControlName="dateOfBirth" type="text" [max]="maxDate" [min]="minDate" cancelText="{{\'buttons.cancel\'  | translate }}"\n        doneText="{{\'buttons.done\'  | translate }}" [monthNames]="monthNames" [monthShortNames]="monthShortNames" ></ion-datetime>\n    </ion-item>\n    <ion-item class="half_item reg_gender">\n      <ion-label stacked>{{\'view.checkin.label.sexo.title\' | translate}}</ion-label>\n      <ion-select interface="action-sheet" formControlName="gender" cancelText="{{\'buttons.cancel\'  | translate }}" okText="{{\'buttons.done\'  | translate }}">\n        <ion-option value="HOMBRE">{{\'common.man\' | translate}}</ion-option>\n        <ion-option value="MUJER">{{\'common.woman\' | translate}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class="type_trvl">\n      <ion-label stacked>{{\'view.registration.label.travelType\' | translate}}</ion-label>\n      <ion-select interface="action-sheet" formControlName="typeOfTravel" type="text" cancelText="{{\'buttons.cancel\'  | translate }}"\n        okText="{{\'buttons.done\'  | translate }}">\n        <ion-option value="OCIO">{{\'view.registration.label.leisure\' | translate}}</ion-option>\n        <ion-option value="NEGOCIOS">{{\'view.registration.label.business\' | translate}}</ion-option>\n        <ion-option value="FAMILIA">{{\'view.registration.label.family\' | translate}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class="agree_rdo" *ngIf="devicePlatForm==\'android\'">\n      <ion-row>\n        <ion-col col-2 no-padding no-margin>\n          <ion-item no-padding no-margin no-lines>\n            <ion-radio checked={{isChecked}} (ionSelect)="fnOnRadioSelect($event)" item-left></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col col-10 no-padding no-margin>\n          <ion-item no-padding no-margin no-lines>\n            <span>{{\'view.login.label.newsletter\' | translate}}</span>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item class="agree_rdo rdo_btn" *ngIf="devicePlatForm==\'ios\'">\n      <ion-row>\n        <ion-col col-2 no-padding no-margin>\n          <ion-item no-padding no-margin no-lines>\n            <ion-radio checked={{isChecked}} (ionSelect)="fnOnRadioSelect($event)" item-left></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col col-10 no-padding no-margin>\n          <ion-item no-padding no-margin no-lines>\n            <span>{{\'view.login.label.newsletter\' | translate}}</span>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item class="agree_rdo" *ngIf="devicePlatForm==\'android\'">\n      <ion-row>\n        <ion-col col-2 no-padding no-margin>\n          <ion-item no-padding no-margin no-lines>\n            <ion-radio checked={{isCheckedPrivacy}} (ionSelect)="fnOnRadioSelectPrivacy($event)" item-left></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col col-10 no-padding no-margin>\n          <ion-item no-padding no-margin no-lines text-wrap>\n            <span [innerHtml]="htmlDataPrivacy"></span>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item class="agree_rdo rdo_btn" *ngIf="devicePlatForm==\'ios\'">\n      <ion-row>\n        <ion-col col-2 no-padding no-margin>\n          <ion-item no-padding no-margin no-lines>\n            <ion-radio checked={{isCheckedPrivacy}} (ionSelect)="fnOnRadioSelectPrivacy($event)" item-left></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col col-10 no-padding no-margin>\n          <ion-item no-padding no-margin no-lines text-wrap>\n            <span [innerHtml]="htmlDataPrivacy"></span>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item class="cntr_btn">\n      <button ion-button (click)="fnSubmit()" class="cmn_btn">{{\'common.continue\' | translate}}</button>\n    </ion-item>\n    <!-- <ion-item class="footer_btn">\n      <button class="cmn_btn" (click)="fnSubmit()">{{\'common.continue\' | translate}}</button>\n    </ion-item> -->\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/registration/registration.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__["a" /* Keyboard */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_9__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_guest_service_guest_service__["a" /* GuestServiceProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_registration_service_registration_service__["a" /* RegistrationServiceProvider */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCompleteSpainProvincesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_country_service_country_service__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutoCompleteSpainProvincesPage = /** @class */ (function () {
    function AutoCompleteSpainProvincesPage(navCtrl, navParams, loadingCtrl, viewCtrl, http, countryService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.countryService = countryService;
        this.fnGetProvinceList();
    }
    AutoCompleteSpainProvincesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AutoCompleteSpainProvincesPage');
    };
    AutoCompleteSpainProvincesPage.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss(item);
    };
    AutoCompleteSpainProvincesPage.prototype.fnGetProvinceList = function () {
        var _this = this;
        this.showLoading();
        this.countryService.fnshowProvinceList().subscribe(function (data) {
            _this.autocompleteItems = data.Provincia;
            _this.loading.dismiss();
        });
    };
    AutoCompleteSpainProvincesPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    AutoCompleteSpainProvincesPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AutoCompleteSpainProvincesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auto-complete-spain-provinces',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/auto-complete-spain-provinces/auto-complete-spain-provinces.html"*/'<ion-header class="search_header">\n    <ion-navbar hideBackButton="true">\n      <span class="back_header">\n        <button ion-button (click)="dismiss()" class="back_btn"><img src="assets/svg/white-back.svg"></button>\n          Choose a province\n        </span>\n      <span class="cntry_search">\n          <i class="icon-City_area"></i>\n        <input #txtFname placeholder="search province here" />      \n      </span>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding class="search_cntry" no-bounce>\n    <form>\n      <ion-list>\n        <ion-item *ngFor="let item of autocompleteItems | searchpipe: \'text\' : txtFname.value " tappable (click)="chooseItem(item)">\n          {{ item.text  }}\n        </ion-item>\n      </ion-list>\n    </form>\n  </ion-content>'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/auto-complete-spain-provinces/auto-complete-spain-provinces.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_country_service_country_service__["a" /* CountryServiceProvider */]])
    ], AutoCompleteSpainProvincesPage);
    return AutoCompleteSpainProvincesPage;
}());

//# sourceMappingURL=auto-complete-spain-provinces.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(412);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errorhandler_guestmate_error_handler__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interceptor_http_interceptor__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_globalization__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_auto_complete_country_auto_complete_country__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_unique_device_id__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_login_service_login_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_country_service_country_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_searchpipe_searchpipe__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_registration_service_registration_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_home_service_home_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_nostay_service_nostay_service__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_storage__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_guest_service_guest_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_activity_service_activity_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_common_service_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ngx_stripe__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_checkin_service_checkin_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_camera__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_ancillary_service_ancillary_service__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_device__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_auto_complete_spain_provinces_auto_complete_spain_provinces__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_restaurant_service_restaurant_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_checkout_service_checkout_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_wellness_service_wellness_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_promotions_service_promotions_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_rooms_service_rooms_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_upgrade_room_service_upgrade_room_service__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_booking_service_booking_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_roomissue_service_roomissue_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_roommakeup_service_roommakeup_service__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_amenities_service_amenities_service__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_notification_notification__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_http__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_file_transfer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_file__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_room_service_extra_room_service_extra__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































//import { OneSignal } from '@ionic-native/onesignal';




function setTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/locales/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_auto_complete_country_auto_complete_country__["a" /* AutoCompleteCountryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pipes_searchpipe_searchpipe__["a" /* SearchpipePipe */],
                __WEBPACK_IMPORTED_MODULE_41__pages_auto_complete_spain_provinces_auto_complete_spain_provinces__["a" /* AutoCompleteSpainProvincesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activities-details/activities-details.module#ActivitiesDetailsPageModule', name: 'ActivitiesDetailsPage', segment: 'activities-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activities/activities.module#ActivitiesPageModule', name: 'ActivitiesPage', segment: 'activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/amenities/amenities.module#AmenitiesPageModule', name: 'AmenitiesPage', segment: 'amenities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkin-arrivaltime/checkin-arrivaltime.module#CheckinArrivaltimePageModule', name: 'CheckinArrivaltimePage', segment: 'checkin-arrivaltime', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkin-summary/checkin-summary.module#CheckinSummaryPageModule', name: 'CheckinSummaryPage', segment: 'checkin-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-basicinfo/checkout-basicinfo.module#CheckoutBasicinfoPageModule', name: 'CheckoutBasicinfoPage', segment: 'checkout-basicinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm-order/confirm-order.module#ConfirmOrderPageModule', name: 'ConfirmOrderPage', segment: 'confirm-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotel-info/hotel-info.module#HotelInfoPageModule', name: 'HotelInfoPage', segment: 'hotel-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-id/forgot-id.module#ForgotIdPageModule', name: 'ForgotIdPage', segment: 'forgot-id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification-details/notification-details.module#NotificationDetailsPageModule', name: 'NotificationDetailsPage', segment: 'notification-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/passport-picture/passport-picture.module#PassportPicturePageModule', name: 'PassportPicturePage', segment: 'passport-picture', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promotions-details/promotions-details.module#PromotionsDetailsPageModule', name: 'PromotionsDetailsPage', segment: 'promotions-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promotions/promotions.module#PromotionsPageModule', name: 'PromotionsPage', segment: 'promotions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reception/reception.module#ReceptionPageModule', name: 'ReceptionPage', segment: 'reception', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant-details/restaurant-details.module#RestaurantDetailsPageModule', name: 'RestaurantDetailsPage', segment: 'restaurant-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room-issue-details/room-issue-details.module#RoomissueDetailsPageModule', name: 'RoomissueDetailsPage', segment: 'room-issue-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room-issue/room-issue.module#RoomissuePageModule', name: 'RoomissuePage', segment: 'room-issue', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurants/restaurants.module#RestaurantsPageModule', name: 'RestaurantsPage', segment: 'restaurants', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room-makeup-details/room-makeup-details.module#RoommakeupDetailsPageModule', name: 'RoommakeupDetailsPage', segment: 'room-makeup-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room-makeup/room-makeup.module#RoommakeupPageModule', name: 'RoommakeupPage', segment: 'room-makeup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room-service/room-service.module#RoomServicePageModule', name: 'RoomServicePage', segment: 'room-service', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room-upgrade/room-upgrade.module#RoomUpgradePageModule', name: 'RoomUpgradePage', segment: 'room-upgrade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-upgrade/service-upgrade.module#ServiceUpgradePageModule', name: 'ServiceUpgradePage', segment: 'service-upgrade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms-and-conditions/terms-and-conditions.module#TermsAndConditionsPageModule', name: 'TermsAndConditionsPage', segment: 'terms-and-conditions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wellness-details/wellness-details.module#WellnessDetailsPageModule', name: 'WellnessDetailsPage', segment: 'wellness-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wellness/wellness.module#WellnessPageModule', name: 'WellnessPage', segment: 'wellness', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activities-booking/activities-booking.module#ActivitiesBookingPageModule', name: 'ActivitiesBookingPage', segment: 'activities-booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity-payment/activity-payment.module#ActivityPaymentPageModule', name: 'ActivityPaymentPage', segment: 'activity-payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-payment/checkout-payment.module#CheckoutPaymentPageModule', name: 'CheckoutPaymentPage', segment: 'checkout-payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-bookings/my-bookings.module#MyBookingsPageModule', name: 'MyBookingsPage', segment: 'my-bookings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant-booking/restaurant-booking.module#RestaurantBookingPageModule', name: 'RestaurantBookingPage', segment: 'restaurant-booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/no-stay-in-hotel/no-stay-in-hotel.module#NoStayInHotelPageModule', name: 'NoStayInHotelPage', segment: 'no-stay-in-hotel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-data/payment-data.module#PaymentDataPageModule', name: 'PaymentDataPage', segment: 'payment-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promotions-booking/promotions-booking.module#PromotionsBookingPageModule', name: 'PromotionsBookingPage', segment: 'promotions-booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wellness-booking/wellness-booking.module#WellnessBookingPageModule', name: 'WellnessBookingPage', segment: 'wellness-booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant-payment/restaurant-payment.module#RestaurantPaymentPageModule', name: 'RestaurantPaymentPage', segment: 'restaurant-payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room-service-booking/room-service-booking.module#RoomServiceBookingPageModule', name: 'RoomServiceBookingPage', segment: 'room-service-booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wellness-payment/wellness-payment.module#WellnessPaymentPageModule', name: 'WellnessPaymentPage', segment: 'wellness-payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkin-basicinfo/checkin-basicinfo.module#CheckinBasicinfoPageModule', name: 'CheckinBasicinfoPage', segment: 'checkin-basicinfo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_31__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (setTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_36_ngx_stripe__["a" /* NgxStripeModule */].forRoot(''),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_auto_complete_country_auto_complete_country__["a" /* AutoCompleteCountryPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_auto_complete_spain_provinces_auto_complete_spain_provinces__["a" /* AutoCompleteSpainProvincesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3__errorhandler_guestmate_error_handler__["a" /* GuestmateErrorHandlerProvider */] },
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_7__interceptor_http_interceptor__["a" /* InterceptedHttp */], multi: true },
                __WEBPACK_IMPORTED_MODULE_12__providers_tools_tools__["a" /* ToolsProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_globalization__["a" /* Globalization */],
                __WEBPACK_IMPORTED_MODULE_14__providers_device_service_device_service__["a" /* DeviceServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__constants_constants__["a" /* Constant */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_20__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_login_service_login_service__["a" /* LoginServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__constants_constants__["a" /* Constant */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_22__providers_communication_service_communication_service__["a" /* CommunicationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_country_service_country_service__["a" /* CountryServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__pipes_searchpipe_searchpipe__["a" /* SearchpipePipe */],
                __WEBPACK_IMPORTED_MODULE_26__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_27__providers_registration_service_registration_service__["a" /* RegistrationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_home_service_home_service__["a" /* HomeServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_nostay_service_nostay_service__["a" /* NostayServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_33__providers_guest_service_guest_service__["a" /* GuestServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_activity_service_activity_service__["a" /* ActivityServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_common_service_common_service__["a" /* CommonServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_checkin_service_checkin_service__["a" /* CheckinServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_39__providers_ancillary_service_ancillary_service__["a" /* AncillaryServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_42__providers_restaurant_service_restaurant_service__["a" /* RestaurantServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_wellness_service_wellness_service__["a" /* WellnessServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_wellness_service_wellness_service__["a" /* WellnessServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_checkout_service_checkout_service__["a" /* CheckoutServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_wellness_service_wellness_service__["a" /* WellnessServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_49__providers_roomissue_service_roomissue_service__["a" /* RoomissueServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_amenities_service_amenities_service__["a" /* AmenitiesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_roommakeup_service_roommakeup_service__["a" /* RoommakeupServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_promotions_service_promotions_service__["a" /* PromotionsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_rooms_service_rooms_service__["a" /* RoomsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_upgrade_room_service_upgrade_room_service__["a" /* UpgradeRoomServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_booking_service_booking_service__["a" /* BookingServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_52__providers_notification_notification__["a" /* NotificationProvider */],
                //OneSignal,
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_56__providers_room_service_extra_room_service_extra__["a" /* RoomServiceExtraProvider */],
                __WEBPACK_IMPORTED_MODULE_56__providers_room_service_extra_room_service_extra__["a" /* RoomServiceExtraProvider */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_http__["a" /* HTTP */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__booking_service_booking_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_service_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationProvider = /** @class */ (function () {
    function NotificationProvider(commonServiceProvider, bookingProvider, reservationModel, deviceProvider, http, communicationProvider, constant, nativeStorage) {
        this.commonServiceProvider = commonServiceProvider;
        this.bookingProvider = bookingProvider;
        this.reservationModel = reservationModel;
        this.deviceProvider = deviceProvider;
        this.http = http;
        this.communicationProvider = communicationProvider;
        this.constant = constant;
        this.nativeStorage = nativeStorage;
        this.Registered = false;
        this.RegId = "";
        this.NotificationProviderId = "";
        this.ErrorMsg = null;
        this.reservationNotifications = 0;
        this.messageNotifications = 0;
        this.hasNotifications = false;
        this.currentPageName = "";
        console.log('Hello NotificationProvider Provider');
    }
    NotificationProvider.prototype.sendDeviceData = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var service = 'HELLO_I_AM_BUNDLE'; // url type
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            Params = Params.append('locale', _this.deviceProvider.preferredLanguage);
            Params = Params.append('versionApp', _this.constant.VERSION_APP);
            Params = Params.append('modelo', _this.deviceProvider.model);
            Params = Params.append('plataforma', _this.deviceProvider.platForm);
            Params = Params.append('versionPlataforma', _this.deviceProvider.osVersion);
            Params = Params.append('versionCordova', _this.deviceProvider.cordovaVersion);
            Params = Params.append('bundle', _this.constant.APP_DOMAIN);
            Params = Params.append('deviceNotificationId', _this.RegId);
            Params = Params.append('notificationProviderDeviceId', _this.NotificationProviderId);
            Params = Params.append('deviceNotificationIdProviderError', _this.ErrorMsg);
            _this.communicationProvider.post(url, Params, observer, service);
        });
    };
    NotificationProvider.prototype.fetchNotifications = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/online/huesped/mis-mensajes';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('uuid', _this.deviceProvider.uuid); // parameters
            Params = Params.append('reservaId', _this.reservationModel.objReservation.reservationId);
            _this.communicationProvider.get(url, Params, observer); // http get service call
        });
    };
    NotificationProvider.prototype.dispatchMessage = function (response) {
        console.log('----response----');
        console.log(response);
        // Use try because some parts of the JSON path can be null	
        try {
            if (typeof response["payload"]["additionalData"]["call_answer"] != 'undefined') {
                response.content = response.payload.additionalData.call_answer.content;
                response.title = response.payload.additionalData.call_answer.title;
                response.message = response.payload.additionalData.call_answer.message;
                //this.fireEvent('nuevanotificacion', response);
                console.log(this.getEventName(response));
                this.fireEvent(this.getEventName(response), response);
            }
            else {
                console.log("payload: " + JSON.stringify(response));
            }
        }
        catch (e) {
            console.log("payload: " + JSON.stringify(response));
        }
    };
    NotificationProvider.prototype.fireEvent = function (eventname, response) {
        console.log(eventname);
        switch (eventname) {
            case 'reservaconfirmada':
                this.reservaConfirmadaNotification(response);
                break;
            case 'reservarechazada':
                this.reservaRechazadaNotification(response);
                break;
            case 'checkinabierto':
                this.checkinAbiertoNotification(response);
                break;
            case 'checkinconfirmado':
                this.checkinConfirmadoNotification(response);
                break;
            case 'checkinrechazado':
                this.checkinRechazadoNotification(response);
                break;
            case 'pushnotification':
                this.pushNotification(response);
                break;
        }
    };
    NotificationProvider.prototype.getEventName = function (response) {
        var eventName = "";
        switch (response.content.tipo) {
            case 'reservaRestaurante':
                if (response.content.aceptada) {
                    eventName = 'reservaconfirmada';
                }
                else {
                    eventName = 'reservarechazada';
                }
                break;
            case 'reservaOferta':
                if (response.content.aceptada)
                    eventName = 'reservaconfirmada';
                else
                    eventName = 'reservarechazada';
                break;
            case 'reservaActividad':
                if (response.content.aceptada)
                    eventName = 'reservaconfirmada';
                else
                    eventName = 'reservarechazada';
                break;
            case 'reservaServicioSalud':
                if (response.content.aceptada)
                    eventName = 'reservaconfirmada';
                else
                    eventName = 'reservarechazada';
                break;
            case 'reservaItemDeServicioSalud':
                if (response.content.aceptada)
                    eventName = 'reservaconfirmada';
                else
                    eventName = 'reservarechazada';
                break;
            case 'servicioHabitaciones':
                if (response.content.aceptada)
                    eventName = 'reservaconfirmada';
                else
                    eventName = 'reservarechazada';
                break;
            case 'checkinAbierto':
                eventName = 'checkinabierto';
                break;
            case 'peticionCheckin':
                if (response.content.aceptada)
                    eventName = 'checkinconfirmado';
                else
                    eventName = 'checkinrechazado';
                break;
            case 'servicioExtra':
                if (response.content.aceptada)
                    eventName = 'reservaconfirmada';
                else
                    eventName = 'reservarechazada';
                break;
            case 'pushNotification':
                eventName = 'pushnotification';
                break;
        }
        return eventName;
    };
    NotificationProvider.prototype.reservaConfirmadaNotification = function (response) {
        var _this = this;
        if (this.currentPageName == "MyBookingsPage") {
            //Reload content of MyBookingsPage
            if (this.reservationModel.objReservation.reservationId != undefined) {
                this.bookingProvider.fnGetBookingInfo(this.reservationModel.objReservation.reservationId).subscribe(function (data) {
                    if (data.success == true) {
                        _this.bookingProvider.objBooking.data = data.response;
                    }
                });
            }
        }
        else {
            this.addNewReservationNotification(response);
        }
        //Move the focus of MyBookingsPage to latest record (Probably register an event)
    };
    NotificationProvider.prototype.addNewReservationNotification = function (response) {
        this.reservationNotifications = this.reservationNotifications + 1;
        this.commonServiceProvider.objAppData.reservationNotificationsPending = this.commonServiceProvider.objAppData.reservationNotificationsPending + 1;
        this.checkForPendingNotifications();
    };
    NotificationProvider.prototype.checkForPendingNotifications = function () {
        var hayNotificaciones = this.commonServiceProvider.objAppData.notificationsPending || this.commonServiceProvider.objAppData.reservationNotificationsPending;
        if (hayNotificaciones) {
            this.hasNotifications = true;
        }
    };
    NotificationProvider.prototype.reservaRechazadaNotification = function (response) {
        this.reservaConfirmadaNotification(response);
    };
    NotificationProvider.prototype.checkinAbiertoNotification = function (response) {
        var _this = this;
        console.log("message notification - in - checkinAbiertoNotification");
        if (this.currentPageName != "NotificationsPage") {
            console.log("message notification - in - if - checkinAbiertoNotification");
            this.addNewMessageNotification(response);
        }
        if (this.reservationModel.objReservation.reservationId != undefined) {
            this.fetchNotifications().subscribe(function (data) {
                if (data.success) {
                    _this.modelNotification = data.response;
                }
            });
        }
    };
    NotificationProvider.prototype.addNewMessageNotification = function (response) {
        console.log("message notification - in - addNewMessageNotification");
        this.messageNotifications = this.messageNotifications + 1;
        this.commonServiceProvider.objAppData.notificationsPending = this.commonServiceProvider.objAppData.notificationsPending + 1;
        this.checkForPendingNotifications();
    };
    NotificationProvider.prototype.checkinConfirmadoNotification = function (response) {
        console.log("message notification - in - checkinConfirmadoNotification");
        this.checkinAbiertoNotification(response);
        this.reservationModel.objReservation.roomNumber = response.content.numeroHabitacion;
    };
    NotificationProvider.prototype.checkinRechazadoNotification = function (response) {
        console.log("message notification - in - checkinRechazadoNotification");
        this.checkinAbiertoNotification(response);
    };
    NotificationProvider.prototype.pushNotification = function (response) {
        console.log("message notification - in - pushNotification");
        this.checkinAbiertoNotification(response);
    };
    NotificationProvider.prototype.notificationRead = function (id, type, status) {
        var _this = this;
        this.nativeStorage.getItem('notificationData').then(function (notificationData) {
            if (notificationData != undefined) {
                var tempArray = notificationData.data;
                if (type == "reservation") {
                    var tmpData = tempArray.filter(function (x) { return x.notificationID == id; });
                    tmpData[0].read = 1;
                    if (_this.reservationNotifications > 0 && status != 'P') {
                        _this.reservationNotifications = _this.reservationNotifications - 1;
                    }
                }
                if (type == "message") {
                    var tmpData = tempArray.filter(function (x) { return x.notificationID == id; });
                    tmpData[0].read = 1;
                    if (_this.messageNotifications > 0) {
                        _this.messageNotifications = _this.messageNotifications - 1;
                    }
                }
                var messageNtfn = tempArray.filter(function (x) { return x.type == "message"; }).filter(function (x) { return x.read == 0; });
                var reservationNtfn = tempArray.filter(function (x) { return x.type == "reservation"; }).filter(function (x) { return x.read == 0; }).filter(function (x) { return x.response.estado != 'P'; });
                if (messageNtfn.length == 0 && reservationNtfn.length == 0) {
                    _this.hasNotifications = false;
                }
                _this.nativeStorage.setItem('notificationData', {
                    'data': tempArray
                })
                    .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
            }
        });
    };
    NotificationProvider.prototype.notificationUnRead = function (ids, type) {
        var _this = this;
        this.nativeStorage.getItem('notificationData').then(function (notificationData) {
            if (notificationData != undefined) {
                var tempArray = notificationData.data;
                if (type == "reservation" && _this.reservationNotifications > 0) {
                    var _loop_1 = function (list) {
                        var tmpData = tempArray.filter(function (x) { return x.notificationID == list.id; });
                        tmpData[0].read = 0;
                        tmpData[0].response = list;
                    };
                    for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                        var list = ids_1[_i];
                        _loop_1(list);
                    }
                }
                _this.nativeStorage.setItem('notificationData', {
                    'data': tempArray
                })
                    .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
            }
        });
    };
    NotificationProvider.prototype.storeNotificationData = function (type, response) {
        var _this = this;
        var notificationArray = [];
        for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
            var item = response_1[_i];
            var array = {
                'type': type, 'response': item, 'notificationID': item.id,
                'read': 0
            };
            notificationArray.push(array);
        }
        this.nativeStorage.getItem('notificationData').then(function (temp) {
            if (temp != undefined) {
                notificationArray = notificationArray.concat(temp.data);
                var obj = {};
                for (var i = 0, len = notificationArray.length; i < len; i++) {
                    obj[notificationArray[i]['notificationID']] = notificationArray[i];
                }
                notificationArray = new Array();
                for (var key in obj) {
                    notificationArray.push(obj[key]);
                }
                _this.nativeStorage.setItem('notificationData', {
                    'data': notificationArray
                })
                    .then(function () { return console.log('Stored notificationData!'); }, function (error) { return console.error('Error storing item', error); });
            }
            else {
                _this.nativeStorage.setItem('notificationData', {
                    'data': notificationArray
                });
            }
        }).catch(function (e) {
            _this.nativeStorage.setItem('notificationData', {
                'data': notificationArray
            });
            console.log(e);
        });
    };
    NotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__common_service_common_service__["a" /* CommonServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__booking_service_booking_service__["a" /* BookingServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__communication_service_communication_service__["a" /* CommunicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], NotificationProvider);
    return NotificationProvider;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_appdata_model__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__activity_service_activity_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__checkin_service_checkin_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rooms_service_rooms_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__model_pre_entered_form_data_model__ = __webpack_require__(711);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















/*
  Generated class for the CommonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonServiceProvider = /** @class */ (function () {
    function CommonServiceProvider(http, menuCtrl, tools, hotel, alertCtrl, nativeStorage, reservationProvider, app, constant, deviceProvider, communicationProvider, activityProvider, checkinProvider, roomsProvider, platForm) {
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.tools = tools;
        this.hotel = hotel;
        this.alertCtrl = alertCtrl;
        this.nativeStorage = nativeStorage;
        this.reservationProvider = reservationProvider;
        this.app = app;
        this.constant = constant;
        this.deviceProvider = deviceProvider;
        this.communicationProvider = communicationProvider;
        this.activityProvider = activityProvider;
        this.checkinProvider = checkinProvider;
        this.roomsProvider = roomsProvider;
        this.platForm = platForm;
        this.objAppData = new __WEBPACK_IMPORTED_MODULE_9__model_appdata_model__["a" /* AppData */](); // object of appData model 
        this.alertlogout = null; // variable for logout alert box
        this.objFormData = new __WEBPACK_IMPORTED_MODULE_16__model_pre_entered_form_data_model__["a" /* PreEnteredFormData */]();
        console.log('Hello CommonServiceProvider Provider');
    }
    //main menu function
    CommonServiceProvider.prototype.doAction = function (action) {
        switch (action) {
            case 'home':
                this.menuCtrl.close();
                this.app.getActiveNav().popToRoot({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
                break;
            case 'info':
                this.app.getActiveNav().push("HotelInfoPage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'back' });
                break;
            case 'bookings':
                this.app.getActiveNav().push("MyBookingsPage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'back' });
                break;
            case 'notifications':
                this.app.getActiveNav().push("NotificationsPage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'back' });
                break;
            case 'facebook':
                if (this.platForm.is('ios')) {
                    window.open('fb://page/?id=' + this.hotel.objHotel.userFacebook, "_system", "location=no");
                }
                else {
                    window.open('fb://page/' + this.hotel.objHotel.userFacebook, "_system", "location=no");
                }
                break;
            case 'twitter':
                window.open('twitter://user?screen_name=' + this.hotel.objHotel.twitterUser, '_system', 'location=no');
                break;
            case 'website':
                window.open("http://" + this.hotel.objHotel.urlWeb, "_system", "location=yes");
                break;
            case 'logout':
                this.fnLogout();
                break;
        }
    };
    CommonServiceProvider.prototype.fnLogout = function () {
        var _this = this;
        var msg = this.tools.fnLanguageTranslate(["common.logoff", "common.confirm", "buttons.ok", "buttons.cancel"]); // translate of html content with common funtion
        var me = this;
        msg.subscribe(function (value) {
            if (_this.alertlogout == null) {
                _this.alertlogout = _this.alertCtrl.create({
                    title: value['common.confirm'],
                    message: value['common.logoff'],
                    cssClass: 'cls_alrt',
                    buttons: [
                        {
                            text: value['buttons.cancel'],
                            role: 'cancel',
                            handler: function (data) {
                                if (_this.alertlogout != null) {
                                    _this.alertlogout = null;
                                }
                            }
                        },
                        {
                            text: value['buttons.ok'],
                            handler: function (data) {
                                me.menuCtrl.close();
                                _this.alertlogout = null;
                                me.nativeStorage.remove('reservationData').then(function (data) {
                                    _this.hotel.objHotel = null;
                                    _this.reservationProvider.objReservation = null;
                                    _this.activityProvider.objActivity = null;
                                    _this.roomsProvider.objRoomService = null;
                                    _this.checkinProvider.objCheckin = null;
                                    _this.objFormData.checkin = null;
                                    me.nativeStorage.remove('notificationData').then(function (data) {
                                    }, function (er) {
                                        console.log(er);
                                    });
                                    me.nativeStorage.remove('checkinPreEnteredDetails').then(function (data) {
                                    }, function (er) {
                                        console.log(er);
                                    });
                                    // let a:any=[];
                                    // this.checkinProvider.objCheckin = a;
                                    _this.app.getActiveNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */], {}, { animate: true, animation: 'transition', duration: 1000, direction: 'back' });
                                }, function (error) {
                                    console.log(error);
                                });
                            }
                        }
                    ]
                });
                _this.alertlogout.present();
                setTimeout(function () {
                    if (_this.alertlogout != null) {
                        _this.alertlogout.dismiss();
                        _this.alertlogout = null;
                    }
                }, 5000);
            }
        });
    };
    //get terms and conditions text
    CommonServiceProvider.prototype.getTermsAndConditions = function (reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/online/policies/conditions';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('locale', _this.deviceProvider.preferredLanguage);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer); // http get service call
        });
    };
    // get cancellation policy text
    CommonServiceProvider.prototype.getCancellationPolicy = function (reservationId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER + '/online/policies/cancellation';
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', reservationId);
            Params = Params.append('locale', _this.deviceProvider.preferredLanguage);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer); // http get service call
        });
    };
    CommonServiceProvider.prototype.getDatesBetween = function () {
        var from = new Date();
        var to = this.calculateMaxDate();
        var dates = [];
        // Strip hours minutes seconds etc.
        var currentDate = new Date(from.getFullYear(), from.getMonth(), from.getDate());
        while (currentDate <= to) {
            var dayName = this.tools.getShortDayName(currentDate.getDay());
            var monthName = this.tools.getShortMonthName(currentDate.getMonth());
            var dateFormat = dayName + ' ' + currentDate.getDate() + ' ' + monthName;
            dates.push({ dateValue: currentDate, displayDate: dateFormat });
            currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
        }
        return dates;
    };
    CommonServiceProvider.prototype.calculateMaxDate = function () {
        //change created date format into standard format
        var splitDate = this.tools.formatDate(this.reservationProvider.objReservation.createdDate).split(" ");
        var createdDate = new Date(splitDate[0]);
        var noOfDaysToAdd; // no of nights stay
        if (this.reservationProvider.objReservation.noStayGuest) {
            noOfDaysToAdd = this.constant.MAXDAYS_BOOKING_NOSTAY;
        }
        else {
            noOfDaysToAdd = this.reservationProvider.objReservation.nights; // no of nights stay
        }
        return (new Date(createdDate.getTime() + noOfDaysToAdd * 24 * 60 * 60 * 1000));
    };
    //create time slots array function
    CommonServiceProvider.prototype.fnConvertToTimeSlotsArray = function (startTime, endTime, increment, today) {
        var hourDecimal = parseInt(increment) / 60;
        var turns = '';
        var defaultDate = new Date();
        var nextDate = new Date();
        var newDate;
        var timeSlots = [];
        var startMinute = 0, startReminder = 0, incrHour = 0;
        startReminder = defaultDate.getMinutes() % 10;
        startMinute = (defaultDate.getMinutes() - startReminder) + 10;
        //if calculated time is in the next hour,set values accordingly
        if (startMinute == 60) {
            startMinute = 0;
            incrHour = defaultDate.getHours() + 1;
        }
        //to calculate the time to start in case none passed as argument
        if ((startTime == "") || (startTime == undefined)) {
            startTime = (incrHour == 0 ? defaultDate.getHours() : incrHour) + ":" + startMinute;
            startTime = startTime.replace(":0", ":00");
            increment = 10;
            hourDecimal = parseInt(increment) / 60;
        }
        //to calculate the time to end in case none passed as argument
        if ((endTime == "") || (endTime == undefined)) {
            endTime = "23:50";
            increment = 10;
            hourDecimal = parseInt(increment) / 60;
        }
        //starting and ending time 
        var timeSlotStart = startTime;
        var timeSlotEnd = endTime;
        timeSlots.push(startTime); //push start time to array
        // end time to timedata
        var endTimeTokens = endTime.split(':');
        var endDate = new Date(defaultDate.getFullYear(), defaultDate.getMonth(), defaultDate.getDate(), endTimeTokens[0], endTimeTokens[1]); //date format
        var endHour = endDate.getHours() == 0 ? 24 : endDate.getHours();
        // start time to timedata
        var startTimeTokens = startTime.split(':');
        var startDate = new Date(defaultDate.getFullYear(), defaultDate.getMonth(), defaultDate.getDate(), startTimeTokens[0], startTimeTokens[1]); //date format
        var startHour = startDate.getHours();
        turns = (endHour - startHour) / hourDecimal; //to calculate number of time intervals that should be shown
        for (var i = 0; i < turns; i++) {
            var timeTokens = startTime.split(':');
            newDate = new Date(defaultDate.getFullYear(), defaultDate.getMonth(), defaultDate.getDate(), timeTokens[0], timeTokens[1]); //date format
            nextDate = new Date(newDate.getTime() + (1000 * 60 * increment)); //get incremented date time
            startTime = nextDate.getHours() + ":" + nextDate.getMinutes(); //extract time part
            startTime = startTime.replace(":0", ":00");
            timeSlots.push(startTime); //push time to array
        }
        //if the selected date is today then go to the function
        if (today == true) {
            timeSlots = this.fnSliceExtraTimeSlots(timeSlots, timeSlotStart, timeSlotEnd, increment);
        }
        return timeSlots; // returns time slots as array
    };
    //send message
    CommonServiceProvider.prototype.sendMessage = function (comment) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            var url = _this.constant.URL_TRANSACTION_SERVER;
            var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            Params = Params.append('reservaId', _this.reservationProvider.objReservation.reservationId);
            Params = Params.append('comentario', comment);
            Params = Params.append('uuid', _this.deviceProvider.uuid);
            _this.communicationProvider.post(url, Params, observer, 'SEND_MESSAGE');
        });
    };
    CommonServiceProvider.prototype.fnSliceExtraTimeSlots = function (timeSlots, startTime, endTime, increment) {
        var endHour = endTime.split(':')[0]; //end time hour
        var startHour = startTime.split(':')[0]; // start time hour
        var currentHour = new Date().getHours(); // current hour
        var currentMinute = new Date().getMinutes(); // current minute
        //if current hour is less than ending hour then remove extra slots from array
        if (currentHour < endHour) {
            var hourDecimal = parseInt(increment) / 60;
            var turns = (endHour - startHour) / hourDecimal;
            if (currentHour > startHour) {
                turns = (endHour - currentHour) / hourDecimal;
            }
            turns = turns + 1; // including start time count
            var totalTurns = timeSlots.length;
            var diff = totalTurns - turns;
            timeSlots.splice(0, diff);
            var indexArray = [];
            for (var _i = 0, timeSlots_1 = timeSlots; _i < timeSlots_1.length; _i++) {
                var item = timeSlots_1[_i];
                var initialTime = item.split(':');
                if (initialTime[0] == currentHour && currentMinute > initialTime[1]) {
                    if (timeSlots.indexOf(item) > -1) {
                        var index = timeSlots.indexOf(item);
                        if (index !== -1) {
                            indexArray.push(index);
                        }
                    }
                }
            }
            var newLen = indexArray.length;
            if (newLen > 0) {
                timeSlots.splice(0, newLen);
            }
        }
        else {
            timeSlots = [];
        }
        return timeSlots;
    };
    CommonServiceProvider.prototype.getTimeIntervalWithAMPM = function () {
        var defaultDate = new Date();
        var timeArray = [];
        var startTime = "00:30";
        var increment = 30;
        var hourDecimal = parseInt(increment) / 60;
        var startHour = 0;
        var endHour = 23;
        timeArray.push(startTime); //push start time to array
        var turns = (endHour - startHour) / hourDecimal; //to calculate number of time intervals that should be shown
        for (var i = 0; i < turns; i++) {
            var timeTokens = startTime.split(':');
            var newDate = new Date(defaultDate.getFullYear(), defaultDate.getMonth(), defaultDate.getDate(), timeTokens[0], timeTokens[1]); //date format
            var nextDate = new Date(newDate.getTime() + (1000 * 60 * increment)); //get incremented date time
            var hours = nextDate.getHours();
            startTime = hours + ":" + nextDate.getMinutes(); //extract time part
            startTime = startTime.replace(":0", ":00");
            timeArray.push(startTime); //push time to array
        }
        //to append am and pm to the time slots
        for (var i = 0; i < timeArray.length; i++) {
            var timeSplits = timeArray[i].split(':');
            if (timeSplits[0] <= 11) {
                timeArray[i] = timeArray[i] + " AM";
            }
            else if ((timeSplits[0] >= 12) && (timeSplits[0] <= 23)) {
                timeArray[i] = timeArray[i] + " PM";
            }
        }
        return timeArray;
    };
    CommonServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_7__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_10__constants_constants__["a" /* Constant */],
            __WEBPACK_IMPORTED_MODULE_11__device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_12__communication_service_communication_service__["a" /* CommunicationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__activity_service_activity_service__["a" /* ActivityServiceProvider */], __WEBPACK_IMPORTED_MODULE_14__checkin_service_checkin_service__["a" /* CheckinServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_15__rooms_service_rooms_service__["a" /* RoomsServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */]])
    ], CommonServiceProvider);
    return CommonServiceProvider;
}());

//# sourceMappingURL=common-service.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppData; });
var AppData = /** @class */ (function () {
    function AppData() {
        this.firstStartTime = null;
        this.lastStartTime = null;
        this.lastForegroundTime = null;
        this.lastBackgroundTime = null;
        this.lastConnectionTime = null;
        this.notificationsPending = 0;
        this.reservationNotificationsPending = 0;
        this.reservationNotificationRecordTimestamp = {};
        this.messageNotificationRecordTimestamp = {};
        this.loginSucceded = false;
        this.helloIAmInIsEnabled = true;
        this.timestampStore = {};
    }
    return AppData;
}());

//# sourceMappingURL=appdata-model.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreEnteredFormData; });
var PreEnteredFormData = /** @class */ (function () {
    function PreEnteredFormData() {
        this.activity = [];
        this.restaurant = [];
        this.wellness = [];
        this.promotions = [];
        this.roomservice = [];
        this.checkin = [];
        this.checkout = [];
    }
    return PreEnteredFormData;
}());

//# sourceMappingURL=pre-entered-form-data-model.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityData; });
var ActivityData = /** @class */ (function () {
    function ActivityData() {
        this.data = [];
    }
    return ActivityData;
}());

//# sourceMappingURL=activity-model.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Restaurant; });
var Restaurant = /** @class */ (function () {
    function Restaurant() {
        this.data = [];
    }
    return Restaurant;
}());

//# sourceMappingURL=restaurant-model.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wellness; });
var Wellness = /** @class */ (function () {
    function Wellness() {
        this.data = [];
    }
    return Wellness;
}());

//# sourceMappingURL=wellness-model.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsData; });
var PromotionsData = /** @class */ (function () {
    function PromotionsData() {
        this.data = [];
    }
    return PromotionsData;
}());

//# sourceMappingURL=promotions-model.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
var RoomService = /** @class */ (function () {
    function RoomService() {
        this.activeSlider = 0;
        this.data = [];
        this.currentOrderList = [];
        this.serviceItemsList = [];
        this.cartTotal = 0;
        this.activeSubSlider = 0;
    }
    return RoomService;
}());

//# sourceMappingURL=room-service-model.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutData; });
var CheckOutData = /** @class */ (function () {
    function CheckOutData() {
    }
    return CheckOutData;
}());

//# sourceMappingURL=checkout-model.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingData; });
var BookingData = /** @class */ (function () {
    function BookingData() {
        this.data = [];
    }
    return BookingData;
}());

//# sourceMappingURL=booking-model.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptedHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InterceptedHttp = /** @class */ (function () {
    function InterceptedHttp() {
    }
    InterceptedHttp.prototype.intercept = function (request, next) {
        return next.handle(request);
    };
    InterceptedHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], InterceptedHttp);
    return InterceptedHttp;
}());

//# sourceMappingURL=http.interceptor.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_globalization__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_registration_registration__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_reception_reception__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__model_reservation_model__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__model_hotel_model__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_device__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_notification_notification__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_my_bookings_my_bookings__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_notifications_notifications__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_hotel_info_hotel_info__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_checkin_summary_checkin_summary__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















//import { OneSignal } from '@ionic-native/onesignal';





var MyApp = /** @class */ (function () {
    function MyApp(NotificationService, device, globalization, platform, ionicApp, statusBar, splashScreen, translate, toolsProvider, constant, deviceServiceProvider, nativeStorage, reservationPvdr, events, hotelPvdr) {
        var _this = this;
        this.NotificationService = NotificationService;
        this.device = device;
        this.globalization = globalization;
        this.platform = platform;
        this.ionicApp = ionicApp;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.toolsProvider = toolsProvider;
        this.constant = constant;
        this.deviceServiceProvider = deviceServiceProvider;
        this.nativeStorage = nativeStorage;
        this.reservationPvdr = reservationPvdr;
        this.events = events;
        this.hotelPvdr = hotelPvdr;
        this.rootPage = null;
        this.alert = null;
        this.showSplash = true;
        platform.ready().then(function () {
            //set status bar style as default style
            //this.statusBar.overlaysWebView(false);
            //this.statusBar.styleDefault();
            _this.splashScreen.hide();
            setTimeout(function () { _this.showSplash = false; }, 3000);
            //Set device preferred language
            _this.setPreferredLanguage();
            _this.events.subscribe("reservationEvent", function (status) {
                _this.events.unsubscribe('reservationEvent');
                if (status) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */];
                    setTimeout(function () {
                        _this.splashScreen.hide();
                    }, 1000);
                }
            });
            _this.nativeStorage.getItem('reservationData').then(function (reservation) {
                if (reservation != undefined && reservation.reservationId != undefined && reservation.reservationId != null) {
                    _this.reservationPvdr.objReservation = new __WEBPACK_IMPORTED_MODULE_15__model_reservation_model__["a" /* Reservation */]();
                    _this.reservationPvdr.objReservation.noStayGuest = reservation.noStayGuest;
                    _this.reservationPvdr.objReservation.reservationId = reservation.reservationId;
                    _this.reservationPvdr.objReservation.guestName = reservation.name;
                    _this.reservationPvdr.objReservation.email = reservation.email;
                    _this.reservationPvdr.objReservation.lastName = reservation.lastname;
                    _this.reservationPvdr.objReservation.hotelLocation = reservation.response.localizadorHotel;
                    _this.reservationPvdr.objReservation.createdDate = reservation.response.entrada;
                    _this.reservationPvdr.objReservation.nights = reservation.response.noches;
                    _this.reservationPvdr.objReservation.noOfPersons = reservation.response.personas;
                    _this.reservationPvdr.objReservation.roomType = reservation.response.tipoHabitacion;
                    _this.reservationPvdr.objReservation.price = reservation.response.precio;
                    _this.reservationPvdr.objReservation.bedrooms = reservation.response.numeroHabitacion;
                    _this.reservationPvdr.objReservation.alreadyCheckIn = reservation.response.huespedYaCheckInRealizado;
                    _this.reservationPvdr.objReservation.alreadyVerifiedCheckOut = reservation.response.huespedYaCheckOutRealizado;
                    //notifications
                    _this.nativeStorage.getItem('notificationData').then(function (notification) {
                        var ntfArray = notification.data;
                        var messageNtfn = ntfArray.filter(function (x) { return x.type == "message"; }).filter(function (x) { return x.read == 0; });
                        var reservationNtfn = ntfArray.filter(function (x) { return x.type == "reservation"; }).filter(function (x) { return x.read == 0; }).filter(function (x) { return x.response.estado != 'P'; });
                        if (messageNtfn.length > 0 || reservationNtfn.length > 0) {
                            _this.NotificationService.hasNotifications = true;
                        }
                        _this.NotificationService.messageNotifications = messageNtfn.length > 0 ? messageNtfn.length : 0;
                        _this.NotificationService.reservationNotifications = reservationNtfn.length > 0 ? reservationNtfn.length : 0;
                    }).catch(function (err) {
                        console.log(err);
                    });
                    var type_1 = '';
                    if (reservation.registrationCompleted == true) {
                        type_1 = 'session';
                    }
                    else {
                        type_1 = 'newreg';
                    }
                    _this.hotelPvdr.objHotel = new __WEBPACK_IMPORTED_MODULE_16__model_hotel_model__["a" /* Hotel */]();
                    _this.reservationPvdr.getHotelDetails(reservation.reservationId).subscribe(function (data) {
                        if (data) {
                            _this.reservationPvdr.getHotelInfo(data, type_1);
                            _this.reservationPvdr.updateReservationData(reservation.reservationId);
                            if (reservation.registrationCompleted != true) {
                                _this.rootPage = 'ReceptionPage';
                                setTimeout(function () {
                                    _this.splashScreen.hide();
                                }, 1000);
                            }
                        }
                    });
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */];
                    setTimeout(function () {
                        _this.splashScreen.hide();
                    }, 1000);
                }
            }).catch(function (e) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */];
                setTimeout(function () {
                    _this.splashScreen.hide();
                }, 1000);
                console.log(e);
            });
            platform.registerBackButtonAction(function () {
                if (ionicApp._loadingPortal.getActive() || ionicApp._modalPortal.getActive() || ionicApp._toastPortal.getActive() || ionicApp._overlayPortal.getActive()) {
                    var activePortal = ionicApp._loadingPortal.getActive() || ionicApp._modalPortal.getActive() || ionicApp._toastPortal.getActive() || ionicApp._overlayPortal.getActive();
                    activePortal.dismiss();
                }
                else if (_this.nav.getActive().component == __WEBPACK_IMPORTED_MODULE_12__pages_registration_registration__["a" /* RegistrationPage */] || _this.nav.getActive().component == __WEBPACK_IMPORTED_MODULE_13__pages_reception_reception__["a" /* ReceptionPage */]) {
                    _this.alert = null;
                    console.log('registration page back button pressed');
                }
                else if (_this.nav.getActive().component == __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */] && _this.nav.getActive().instance.menuCtrl.isOpen()) {
                    _this.nav.getActive().instance.menuCtrl.close();
                }
                else if (_this.nav.getActive().component == __WEBPACK_IMPORTED_MODULE_21__pages_notifications_notifications__["a" /* NotificationsPage */] || _this.nav.getActive().component == __WEBPACK_IMPORTED_MODULE_20__pages_my_bookings_my_bookings__["a" /* MyBookingsPage */] || _this.nav.getActive().component == __WEBPACK_IMPORTED_MODULE_22__pages_hotel_info_hotel_info__["a" /* HotelInfoPage */]) {
                    _this.nav.popToRoot({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
                }
                else if (_this.nav.getActive().component == __WEBPACK_IMPORTED_MODULE_23__pages_checkin_summary_checkin_summary__["a" /* CheckinSummaryPage */] && _this.deviceServiceProvider.btnCheckInEnabled) {
                    _this.alert = null;
                }
                else if (_this.nav.canGoBack()) {
                    _this.nav.pop({ animate: true, animation: 'transition', duration: 500, direction: 'back' });
                }
                else {
                    _this.alert = null;
                    platform.exitApp();
                }
            }, 1);
            _this.regPushNotification();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
        });
    }
    MyApp.prototype.regPushNotification = function () {
        if (this.deviceServiceProvider.Online) {
            if (!this.NotificationService.Registered) {
                if (!('serviceWorker' in navigator)) {
                    console.log('ENTRO MOBILE');
                    //this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 0 });
                    //this.oneSignal.startInit(this.constant.PUSH_KEY);
                    ////this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
                    //this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
                    //this.oneSignal.handleNotificationReceived().subscribe((jsonData) => {
                    //  console.log("******Notification received********");
                    //  console.log(jsonData);
                    //  this.NotificationService.dispatchMessage(jsonData);
                    //});
                    //this.oneSignal.handleNotificationOpened().subscribe((jsonData) => {
                    //  console.log("*************Notification Opened*************");
                    //  console.log(jsonData);
                    //  this.NotificationService.dispatchMessage(jsonData);
                    //});
                    //this.oneSignal.getIds().then((ids) => {
                    //  console.log("The notification token is: " + JSON.stringify(ids));
                    //this.NotificationService.Registered=true;
                    //  this.NotificationService.RegId = ids.userId;
                    //  this.NotificationService.NotificationProviderId = ids.pushToken;
                    //  this.NotificationService.sendDeviceData();
                    //});
                    //this.oneSignal.endInit();
                }
                else {
                    console.log('ENTRO PWA');
                    //PWA Notifications
                    var OneSignalWeb = window['OneSignal'] || [];
                    console.log('OneSignal::::: ', OneSignalWeb);
                    OneSignalWeb.push(function () {
                        OneSignalWeb.init({
                            appId: "3ae88d10-d238-4705-963d-7c56fd3861d1",
                            autoRegister: false,
                            notifyButton: {
                                enable: false,
                            },
                            promptOptions: {
                                /* actionMessage limited to 90 characters */
                                actionMessage: "We'd like to show you notifications for the latest news and updates.",
                                /* acceptButtonText limited to 15 characters */
                                acceptButtonText: "ALLOW",
                                /* cancelButtonText limited to 15 characters */
                                cancelButtonText: "NO THANKS"
                            }
                        });
                        console.log('OneSignal::::: ', OneSignalWeb);
                        if ('Notification' in window) {
                            var Notification_1 = window['Notification'] || [];
                            if (Notification_1.permission === "granted") {
                                // Automatically subscribe user if deleted cookies and browser shows "Allow"
                                OneSignalWeb.getUserId()
                                    .then(function (userId) {
                                    if (!userId) {
                                        OneSignalWeb.registerForPushNotifications();
                                    }
                                });
                            }
                            else {
                                OneSignalWeb.showHttpPrompt();
                            }
                        }
                    });
                }
            }
            else {
                console.log("Notification id already registered...");
            }
        }
        else {
            console.log("Device is not online...");
        }
    };
    MyApp.prototype.doAction = function (action) {
        switch (action) {
            case 'bookings':
                this.events.publish('bookingsClick', action);
                break;
            case 'info':
                this.events.publish('infoClick', action);
                break;
            case 'home':
                this.events.publish('homeClick', action);
                break;
            case 'notifications':
                this.events.publish('notificationsClick', action);
                break;
            case 'facebook':
                this.events.publish('facebookClick', action);
                break;
            case 'twitter':
                this.events.publish('twitterClick', action);
                break;
            case 'website':
                this.events.publish('websiteClick', action);
                break;
            case 'logout':
                this.events.publish('logoutClick', action);
                break;
        }
    };
    MyApp.prototype.setPreferredLanguage = function () {
        var _this = this;
        var locale = this.constant.DEFAULT_LANGUAGE;
        this.globalization.getPreferredLanguage()
            .then(function (res) {
            console.log(res);
            if (res.value.indexOf('-') !== -1) {
                locale = res.value.substring(0, 2);
            }
            else {
                locale = res.value;
            }
            if (!_this.toolsProvider.isValidLanguage(locale)) {
                if (_this.toolsProvider.isLanguageFromSpain(locale))
                    locale = _this.constant.SPANISH;
                else
                    locale = _this.constant.DEFAULT_LANGUAGE;
            }
            _this.translate.use(locale);
            _this.deviceServiceProvider.setPreferredLanguage(locale);
            //Set uniqueDeviceID
            _this.setUniqueDeviceID();
        })
            .catch(function (e) {
            console.log(e);
            locale = _this.constant.DEFAULT_LANGUAGE;
            _this.translate.use(locale);
            _this.deviceServiceProvider.setPreferredLanguage(locale);
            //Set uniqueDeviceID
            _this.setUniqueDeviceID();
        });
    };
    MyApp.prototype.setUniqueDeviceID = function () {
        if (this.device.uuid != null) {
            this.deviceServiceProvider.setUniqueDeviceID(this.device.uuid);
        }
        else {
            var uuid = new DeviceUUID().get();
            console.log("**************" + uuid);
            this.deviceServiceProvider.setUniqueDeviceID(uuid);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/app/app.html"*/'<div *ngIf="showSplash" class="splash">\n  <img src="assets/svg/rings.svg" />\n</div>\n<ion-menu type="push"  side="right"  swipeEnabled="false"  [content]="mycontent" class="home_menu">\n\n          <ion-item tappable (click)="doAction(\'home\')"  class="home_menu_home">\n                {{"view.mainMenu.home" | translate}}\n          </ion-item>\n\n          <ion-item tappable (click)="doAction(\'info\')" class="home_menu_info">\n                {{"view.mainMenu.info" | translate}}\n          </ion-item>\n          <ion-item tappable (click)="doAction(\'notifications\')" class="home_menu_notification">\n                <span class="x-badge" *ngIf="NotificationService.messageNotifications">{{NotificationService.messageNotifications}}</span>\n                {{"view.mainMenu.notifications" | translate}}\n          </ion-item>\n          <ion-item tappable (click)="doAction(\'bookings\')" class="home_menu_bookings">\n                  <span class="x-badge" *ngIf="NotificationService.reservationNotifications">{{NotificationService.reservationNotifications}}</span>\n                {{"view.mainMenu.buys" | translate}}\n          </ion-item>\n\n          <ion-item tappable (click)="doAction(\'facebook\')" class="home_menu_facebook">\n                Facebook\n          </ion-item>\n\n          <ion-item tappable (click)="doAction(\'twitter\')" class="home_menu_twitter">\n                Twitter\n          </ion-item>\n          <ion-item tappable (click)="doAction(\'website\')" class="home_menu_website">\n                Website\n          </ion-item>\n          <ion-item tappable (click)="doAction(\'logout\')" class="home_menu_logout">\n                {{"view.mainMenu.logoff" | translate}}\n          </ion-item>\n\n</ion-menu>\n<ion-nav [root]="rootPage" #mycontent></ion-nav>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_19__providers_notification_notification__["a" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_globalization__["a" /* Globalization */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_8__constants_constants__["a" /* Constant */],
            __WEBPACK_IMPORTED_MODULE_7__providers_device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_14__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_17__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchpipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchpipePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchpipePipe = /** @class */ (function () {
    function SearchpipePipe() {
    }
    /**
   * Takes a value and makes it lowercase.
   */
    SearchpipePipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        else if (value != '' && value != null)
            return items.filter(function (it) { return it[field].toLowerCase().startsWith(value.toLowerCase()); });
        else
            return items;
    };
    SearchpipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'searchpipe',
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SearchpipePipe);
    return SearchpipePipe;
}());

//# sourceMappingURL=searchpipe.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__communication_service_communication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the CheckinServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CheckinServiceProvider = /** @class */ (function () {
    function CheckinServiceProvider(http, constant, deviceProvider, reservation, communication, nativeStorage) {
        this.http = http;
        this.constant = constant;
        this.deviceProvider = deviceProvider;
        this.reservation = reservation;
        this.communication = communication;
        this.nativeStorage = nativeStorage;
        this.plainObj = [];
        this.tempAncillarylst = [];
        this.checkinDataArray = [];
        console.log('Hello CheckinServiceProvider Provider');
        //this.objCheckin = new CheckinData();
        this.plainObj = {
            huespedes: [],
            serviciosExtra: [],
            agreeCheckboxField: null,
            asignarTarjetaCreditoATodasLasHabitaciones: null,
            codigoSeguridadTarjetaCredito: null,
            comentario: "",
            fechaCaducidadTarjetaCredito: null,
            horaPrevistaCheckin: "",
            numeroTarjetaCredito: null,
            tipoTarjetaCredito: null,
            titularTarjeta: "",
            tokenTarjeta: "",
            upgradeTipoHabitacionId: null
        };
    }
    //service call to request check-in
    CheckinServiceProvider.prototype.sendCheckinData = function (storedCheckinDetails) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            if (_this.objCheckin != null) {
                _this.plainObj.agreeCheckboxField = _this.objCheckin.agreeCheckboxField;
                _this.plainObj.asignarTarjetaCreditoATodasLasHabitaciones = _this.objCheckin.assignCreditCardToTheRooms;
                _this.plainObj.comentario = _this.objCheckin.comments;
                _this.plainObj.horaPrevistaCheckin = _this.objCheckin.checkinTime;
                _this.plainObj.fechaCaducidadTarjetaCredito = null;
                _this.plainObj.codigoSeguridadTarjetaCredito = null;
                _this.plainObj.numeroTarjetaCredito = null;
                _this.plainObj.tipoTarjetaCredito = null;
                _this.plainObj.titularTarjeta = _this.objCheckin.cardHolder;
                _this.plainObj.tokenTarjeta = _this.objCheckin.token;
                _this.plainObj.upgradeTipoHabitacionId = _this.objCheckin.ancillarySummaryList.filter(function (x) { return x.type == "room"; }).length > 0 ? _this.objCheckin.ancillarySummaryList.filter(function (x) { return x.type == "room"; })[0].roomId : 0; //Room Id selected if room to be upgraded
                _this.tempAncillarylst = _this.objCheckin.ancillarySummaryList.filter(function (x) { return x.type == "service"; });
                _this.plainObj.serviciosExtra = [];
                _this.plainObj.huespedes = [];
                for (var i = 0; i < _this.tempAncillarylst.length; i++) {
                    var itemArray = {};
                    itemArray.cantidad = _this.tempAncillarylst[i].quantity;
                    itemArray.precio = _this.tempAncillarylst[i].pricePerDay;
                    itemArray.servicioExtraId = _this.tempAncillarylst[i].serviceId;
                    itemArray.noches = _this.reservation.objReservation.nights;
                    itemArray.reservaId = _this.reservation.objReservation.reservationId;
                    _this.plainObj.serviciosExtra[i] = itemArray;
                }
                for (var j = 0; j < _this.objCheckin.birthDate.length; j++) {
                    var itemArray = {};
                    itemArray.addressCity = _this.objCheckin.addressCity[j];
                    itemArray.addressCountry = _this.objCheckin.addressCountry[j];
                    itemArray.addressPostalCode = _this.objCheckin.addressPostalCode[j];
                    itemArray.addressStreet = _this.objCheckin.addressStreet[j];
                    itemArray.apellidos = _this.objCheckin.surname[j];
                    itemArray.documentoIdentidad = _this.objCheckin.idNumber[j];
                    itemArray.fechaDocumentoIdentidad = _this.objCheckin.dateOfIssue[j];
                    itemArray.fechaNacimiento = _this.objCheckin.birthDate[j];
                    itemArray.mail = _this.reservation.objReservation.email;
                    itemArray.nacionalidadDocumentoIdentidad = _this.objCheckin.nationality[j];
                    itemArray.nombre = _this.objCheckin.firstName[j];
                    itemArray.pictureFront = _this.objCheckin.pictureFront[j];
                    itemArray.principal = true;
                    itemArray.residencia = _this.objCheckin.cityResidence[j];
                    itemArray.sexo = _this.objCheckin.sex[j];
                    itemArray.tipoDocumentoIdentidad = _this.objCheckin.identityDocument[j];
                    itemArray.reservaId = _this.reservation.objReservation.reservationId;
                    _this.plainObj.huespedes[j] = itemArray;
                }
            }
            var checkinData = {
                'reservationID': _this.reservation.objReservation.reservationId,
                'guests': _this.plainObj.huespedes[0]
            };
            var checkData = _this.prepareData(checkinData, storedCheckinDetails);
            _this.nativeStorage.setItem('checkinDetails', checkData);
            var url = _this.constant.URL_TRANSACTION_SERVER + '/online/checkin?uuid=' + _this.deviceProvider.uuid + '&reservaId=' + _this.reservation.objReservation.reservationId;
            _this.communication.post(url, _this.plainObj, observer); // http post service call
        });
    };
    CheckinServiceProvider.prototype.prepareData = function (checkData, storedCheckinDetails) {
        if (storedCheckinDetails != null && storedCheckinDetails.length > 0) {
            storedCheckinDetails.push(checkData);
            return storedCheckinDetails;
        }
        else {
            return [checkData];
        }
    };
    CheckinServiceProvider.prototype.storeCheckinData = function (objFormData) {
        var _this = this;
        if (objFormData.Name[0] != "" && objFormData.Name[0] != undefined) {
            console.log(objFormData);
            var itemData = [];
            for (var j = 0; j < objFormData.NoOfGuests; j++) {
                var itemArray = {};
                itemArray.Address = objFormData.Address[j];
                itemArray.City = objFormData.City[j];
                itemArray.Country = objFormData.Country[j];
                itemArray.DOB = objFormData.DOB[j];
                itemArray.DateOfIssue = objFormData.DateOfIssue[j];
                itemArray.Document = objFormData.Document[j];
                itemArray.Gender = objFormData.Gender[j];
                itemArray.LastName = objFormData.LastName[j];
                itemArray.Name = objFormData.Name[j];
                itemArray.Nationality = objFormData.Nationality[j];
                itemArray.Residence = objFormData.Residence[j];
                itemArray.ZipCode = objFormData.ZipCode[j];
                itemArray.idNumber = objFormData.idNumber[j];
                itemArray.pictureFront = objFormData.pictureFront[j];
                itemData[j] = itemArray;
            }
            var dataArray_1 = [];
            var guestData = {
                'reservationID': this.reservation.objReservation.reservationId,
                'guests': itemData,
                'checkinCompleted': objFormData.checkinCompleted,
                'ActiveIndex': objFormData.ActiveIndex,
                'PageCounter': objFormData.PageCounter,
                'specialRequest': objFormData.specialRequest,
                'arrivalTime': objFormData.arrivalTime,
                'cardHolder': objFormData.cardHolder,
                'agreeTerms': objFormData.agreeTerms,
                'assignCard': objFormData.assignCard,
            };
            dataArray_1.push(guestData);
            this.nativeStorage.getItem('checkinPreEnteredDetails').then(function (temp) {
                if (temp != undefined) {
                    dataArray_1 = temp.guestData.concat(dataArray_1);
                    var obj = {};
                    for (var i = 0, len = dataArray_1.length; i < len; i++) {
                        obj[dataArray_1[i]['reservationID']] = dataArray_1[i];
                    }
                    dataArray_1 = new Array();
                    for (var key in obj) {
                        dataArray_1.push(obj[key]);
                    }
                    _this.nativeStorage.setItem('checkinPreEnteredDetails', {
                        'guestData': dataArray_1
                    })
                        .then(function () { return console.log('Stored checkinPreEnteredDetails!'); }, function (error) { return console.error('Error storing item', error); });
                }
                else {
                    _this.nativeStorage.setItem('checkinPreEnteredDetails', {
                        'guestData': dataArray_1
                    });
                }
            }).catch(function (e) {
                _this.nativeStorage.setItem('checkinPreEnteredDetails', {
                    'guestData': dataArray_1
                });
                console.log(e);
            });
        }
    };
    CheckinServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__["a" /* DeviceServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__reservation_service_reservation_service__["a" /* ReservationServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__communication_service_communication_service__["a" /* CommunicationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], CheckinServiceProvider);
    return CheckinServiceProvider;
}());

//# sourceMappingURL=checkin-service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hotel_service_hotel_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reservation_service_reservation_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_home_service_home_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_service_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_notification_notification__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_activity_service_activity_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_activity_model__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_restaurant_service_restaurant_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_restaurant_model__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_wellness_service_wellness_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__model_wellness_model__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_promotions_service_promotions_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__model_promotions_model__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__model_room_service_model__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_rooms_service_rooms_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_room_service_extra_room_service_extra__ = __webpack_require__(189);
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

var HomePage = /** @class */ (function () {
    function HomePage(roomsServiceExtra, roomsService, promotionsProvider, wellnessProvider, restaurants, transfer, file, activityProvider, loadingCtrl, notificationProvider, events, navCtrl, menuCtrl, hotel, tools, reservation, home, alertCtrl, nativeStorage, commonProvider, platForm, toastCtrl) {
        var _this = this;
        this.roomsServiceExtra = roomsServiceExtra;
        this.roomsService = roomsService;
        this.promotionsProvider = promotionsProvider;
        this.wellnessProvider = wellnessProvider;
        this.restaurants = restaurants;
        this.transfer = transfer;
        this.file = file;
        this.activityProvider = activityProvider;
        this.loadingCtrl = loadingCtrl;
        this.notificationProvider = notificationProvider;
        this.events = events;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.hotel = hotel;
        this.tools = tools;
        this.reservation = reservation;
        this.home = home;
        this.alertCtrl = alertCtrl;
        this.nativeStorage = nativeStorage;
        this.commonProvider = commonProvider;
        this.platForm = platForm;
        this.toastCtrl = toastCtrl;
        this.isMemuOpened = false;
        this.isSubMenuOpened = false;
        this.buttons = [];
        this.submenuButtons = [];
        this.readyForCheckout = false;
        this.disableCheckout = false;
        this.alertlogout = null;
        this.activityList = [];
        this.restaurantsList = [];
        this.wellnessList = [];
        this.promotionsList = [];
        this.loadingFlag = 0;
        this.isLogoPressed = false;
        this.roomServicesList = [];
        this.filteredRoomItems = [];
        this.tmpServiceItems = [];
        this.selectedId = "0";
        this.tempList = [];
        this.preSelected = [];
        this.total = 0;
        this.backgroundImageUrl = this.hotel.objHotel.mainImageUrl;
        this.events.unsubscribe('bookingsClick');
        this.events.unsubscribe('infoClick');
        this.events.unsubscribe('homeClick');
        this.events.unsubscribe('notificationsClick');
        this.events.unsubscribe('facebookClick');
        this.events.unsubscribe('twitterClick');
        this.events.unsubscribe('websiteClick');
        this.events.unsubscribe('logoutClick');
        this.subscriber = this.events.subscribe('bookingsClick', function (action) {
            _this.commonProvider.doAction(action);
        });
        this.subscriber = this.events.subscribe('infoClick', function (action) {
            _this.commonProvider.doAction(action);
        });
        this.subscriber = this.events.subscribe('homeClick', function (action) {
            if (_this.navCtrl.getActive().component.name != "HomePage") {
                _this.commonProvider.doAction(action);
            }
            else {
                _this.menuCtrl.close();
            }
        });
        this.subscriber = this.events.subscribe('notificationsClick', function (action) {
            _this.commonProvider.doAction(action);
        });
        this.subscriber = this.events.subscribe('facebookClick', function (action) {
            _this.commonProvider.doAction(action);
        });
        this.subscriber = this.events.subscribe('twitterClick', function (action) {
            _this.commonProvider.doAction(action);
        });
        this.subscriber = this.events.subscribe('websiteClick', function (action) {
            _this.commonProvider.doAction(action);
        });
        this.subscriber = this.events.subscribe('logoutClick', function (action) {
            _this.commonProvider.doAction(action);
        });
        menuCtrl.enable(true);
    }
    HomePage.prototype.ionViewWillLeave = function () {
        this.isMemuOpened = false;
        this.isSubMenuOpened = false;
    };
    HomePage.prototype.ionViewDidEnter = function () {
        if (!this.reservation.objReservation.noStayGuest
            && this.reservation.objReservation.alreadyCheckIn
            && this.hotel.objHotel.checkoutService) {
            this.readyForCheckout = true;
        }
        if (!this.reservation.objReservation.noStayGuest && this.reservation.objReservation.alreadyVerifiedCheckOut) {
            this.disableCheckout = true;
        }
        this.buttons = this.createButtons();
        this.buttons = this.allocateButtons();
        this.submenuButtons = this.createSubmenuButtons();
        this.submenuButtons = this.allocateSubmenuButtons();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.getStoredPreEnteredCheckinDetails(this.reservation.objReservation.reservationId);
    };
    HomePage.prototype.getStoredPreEnteredCheckinDetails = function (reservaId) {
        var _this = this;
        var preData = [];
        this.nativeStorage.getItem('checkinPreEnteredDetails').then(function (checkinData) {
            if (checkinData != undefined) {
                var data = checkinData.guestData;
                preData = data.filter(function (x) { return x.reservationID == reservaId; });
                if (preData && preData.length > 0) {
                    _this.commonProvider.objFormData.checkin.checkinCompleted = preData[0].checkinCompleted;
                    _this.commonProvider.objFormData.checkin.PageCounter = preData[0].pageCounter;
                    _this.commonProvider.objFormData.checkin.ActiveIndex = preData[0].formIndex;
                    _this.commonProvider.objFormData.checkin.arrivalTime = preData[0].arrivalTime;
                    _this.commonProvider.objFormData.checkin.specialRequest = preData[0].specialRequest;
                    _this.commonProvider.objFormData.checkin.cardHolder = preData[0].cardHolder;
                    _this.commonProvider.objFormData.checkin.agreeTerms = preData[0].agreeTerms;
                    _this.commonProvider.objFormData.checkin.assignCard = preData[0].assignCard;
                    _this.commonProvider.objFormData.checkin.Name = [];
                    _this.commonProvider.objFormData.checkin.LastName = [];
                    _this.commonProvider.objFormData.checkin.Address = [];
                    _this.commonProvider.objFormData.checkin.ZipCode = [];
                    _this.commonProvider.objFormData.checkin.City = [];
                    _this.commonProvider.objFormData.checkin.Country = [];
                    _this.commonProvider.objFormData.checkin.idNumber = [];
                    _this.commonProvider.objFormData.checkin.Document = [];
                    _this.commonProvider.objFormData.checkin.Nationality = [];
                    _this.commonProvider.objFormData.checkin.Residence = [];
                    _this.commonProvider.objFormData.checkin.DOB = [];
                    _this.commonProvider.objFormData.checkin.Gender = [];
                    _this.commonProvider.objFormData.checkin.DateOfIssue = [];
                    _this.commonProvider.objFormData.checkin.pictureFront = [];
                    var guestList = preData[0].guests;
                    for (var q = 0; q < guestList.length; q++) {
                        _this.commonProvider.objFormData.checkin.Name.push(guestList[q].Name);
                        _this.commonProvider.objFormData.checkin.LastName.push(guestList[q].LastName);
                        _this.commonProvider.objFormData.checkin.Address.push(guestList[q].Address);
                        _this.commonProvider.objFormData.checkin.ZipCode.push(guestList[q].ZipCode);
                        _this.commonProvider.objFormData.checkin.City.push(guestList[q].City);
                        _this.commonProvider.objFormData.checkin.Country.push(guestList[q].Country);
                        _this.commonProvider.objFormData.checkin.idNumber.push(guestList[q].idNumber);
                        _this.commonProvider.objFormData.checkin.Document.push(guestList[q].Document);
                        _this.commonProvider.objFormData.checkin.Nationality.push(guestList[q].Nationality);
                        _this.commonProvider.objFormData.checkin.Residence.push(guestList[q].Residence);
                        _this.commonProvider.objFormData.checkin.DOB.push(guestList[q].DOB);
                        _this.commonProvider.objFormData.checkin.Gender.push(guestList[q].Gender);
                        _this.commonProvider.objFormData.checkin.DateOfIssue.push(guestList[q].DateOfIssue);
                        _this.commonProvider.objFormData.checkin.pictureFront.push(guestList[q].pictureFront);
                    }
                    console.log(preData);
                }
            }
        });
    };
    HomePage.prototype.fnOpenMenu = function () {
        this.isSubMenuOpened = false;
        this.isMemuOpened = !this.isMemuOpened;
    };
    HomePage.prototype.fnOpenSubMenu = function (id) {
        this.isSubMenuOpened = !this.isSubMenuOpened;
    };
    /*creating home page circle buttons and set id and class */
    HomePage.prototype.createButtons = function () {
        var serviceButtons = [];
        var checkCls = 'icon-Check_in';
        var checkId = 'checkin';
        var checkService = 'checkin';
        var disabled = false;
        if (this.readyForCheckout) {
            checkCls = 'icon-Check_out';
            checkId = 'checkout';
            checkService = 'checkout';
        }
        if (this.reservation.objReservation.noStayGuest == true) {
            if (this.hotel.objHotel.noStayActivityService) {
                serviceButtons.push({ iconClass: 'icon-Activities_main', id: 'actividad', ui: 'circleItems', elId: 'ext-element-67', service: 'activity', hasChild: false });
            }
            if (this.hotel.objHotel.noStayRestaurantService) {
                serviceButtons.push({ iconClass: 'icon-Food_Beverage', id: 'restaurante', ui: 'circleItems', elId: 'ext-element-68', service: 'restaurant', hasChild: false });
            }
            if (this.hotel.objHotel.noStayHealthService) {
                serviceButtons.push({ iconClass: 'icon-wellness_loto', id: 'salud', ui: 'circleItems', elId: 'ext-element-69', service: 'wellness', hasChild: false });
            }
            if (this.hotel.objHotel.noStayOfferService) {
                serviceButtons.push({ iconClass: 'icon-Promotions', id: 'oferta', ui: 'circleItems', elId: 'ext-element-71', service: 'promotions', hasChild: false });
            }
            if (this.hotel.objHotel.noStayChatService) {
                serviceButtons.push({ iconClass: 'icon-Chat', id: 'chat', ui: 'circleItems', elId: 'ext-element-72', service: 'chat', hasChild: false });
            }
        }
        else {
            if (this.hotel.objHotel.checkinService && (this.platForm.is('ios') || this.platForm.is('android'))) {
                if (checkId == "checkout" && this.disableCheckout)
                    disabled = true;
                serviceButtons.push({ iconClass: checkCls, id: checkId, ui: 'circleItems', service: checkService, disabled: disabled, hasChild: false });
            }
            if (this.hotel.objHotel.activityService) {
                serviceButtons.push({ iconClass: 'icon-Activities_main', id: 'actividad', ui: 'circleItems', elId: 'ext-element-67', service: 'activity', hasChild: false });
            }
            if (this.hotel.objHotel.restaurantService) {
                serviceButtons.push({ iconClass: 'icon-Food_Beverage', id: 'restaurante', ui: 'circleItems', elId: 'ext-element-68', service: 'restaurant', hasChild: false });
            }
            //Housekeeping service
            if (true) {
                serviceButtons.push({ iconClass: 'icon-Housekeeping_main', id: 'housekeeping', ui: 'circleItems', elId: 'ext-element-63', service: 'housekeeping', hasChild: true });
            }
            if (this.hotel.objHotel.healthService) {
                serviceButtons.push({ iconClass: 'icon-wellness_loto', id: 'salud', ui: 'circleItems', elId: 'ext-element-69', service: 'wellness', hasChild: false });
            }
            if (this.hotel.objHotel.roomService) {
                serviceButtons.push({ iconClass: 'icon-Room_service', id: 'room', ui: 'circleItems', elId: 'ext-element-70', service: 'roomservice', hasChild: false });
            }
            if (this.hotel.objHotel.offerService) {
                serviceButtons.push({ iconClass: 'icon-Promotions', id: 'oferta', ui: 'circleItems', elId: 'ext-element-71', service: 'promotions', hasChild: false });
            }
            if (this.hotel.objHotel.chatService) {
                serviceButtons.push({ iconClass: 'icon-Chat', id: 'chat', ui: 'circleItems', elId: 'ext-element-72', service: 'chat', hasChild: false });
            }
        }
        return serviceButtons;
    };
    HomePage.prototype.iconClassFn = function (cls) {
        return "x-button-icon x-shown " + cls;
    };
    HomePage.prototype.mainClassFn = function (id) {
        if (id == 'checkin x-unsized x-button x-iconalign-center x-button-circleItems x-floating icon-Check_in')
            return "x-unsized x-button x-iconalign-center x-button-circleItems x-floating icon-Check_in";
        if (id == 'roomissue')
            return "x-unsized x-button x-iconalign-center x-button-circleItemsSubmenu x-floating icon-Roomissue";
        if (id == 'roommakeup')
            return "x-unsized x-button x-iconalign-center x-button-circleItemsSubmenu x-floating icon-Roommakeup";
        if (id == 'amenities')
            return "x-unsized x-button x-iconalign-center x-button-circleItemsSubmenu x-floating icon-Amenities";
        return "x-unsized x-button x-iconalign-center x-button-circleItems x-floating";
    };
    /*allocating the space between circle buttons*/
    HomePage.prototype.allocateButtons = function () {
        var startingPoint, cakeSlice;
        var items = this.buttons;
        var leftValue, topValue;
        switch (items.length) {
            case 4:
                startingPoint = 1.95;
                cakeSlice = 1.10;
                break;
            case 3:
                startingPoint = 2.10;
                cakeSlice = 0.8;
                break;
            default:
                startingPoint = 1.75,
                    cakeSlice = 1.5;
        }
        for (var i = 0, l = items.length; i < l; i++) {
            leftValue = ((50 - 35 * Math.cos(-startingPoint * Math.PI - cakeSlice * (1 / (l - 1)) * i * Math.PI)).toFixed(4));
            topValue = ((50 + 35 * Math.sin(-startingPoint * Math.PI - cakeSlice * (1 / (l - 1)) * i * Math.PI)).toFixed(4));
            this.buttons[i].left = leftValue;
            this.buttons[i].top = topValue;
        }
        return this.buttons;
    };
    HomePage.prototype.allocateSubmenuButtons = function () {
        var startingPoint, cakeSlice;
        var menus = this.buttons;
        var items = this.submenuButtons;
        var leftValue, topValue;
        var position;
        position = 0;
        for (var a = 0; a < menus.length; a++) {
            if (menus[a].hasChild) {
                position = a + 1;
            }
        }
        startingPoint = 1.95;
        if (Math.floor(menus.length / 2) + 1 == position)
            startingPoint = 2.25;
        if (menus.length == 8)
            startingPoint = 2.10;
        //startingPoint = menus.length / position;
        console.log(position);
        /*    switch (items.length) {
              case 4:
                startingPoint = 1.95;
                //cakeSlice = 1.10;
                break;
              case 3:
                //startingPoint = 2.10;
                startingPoint = 1.95;
                //cakeSlice = 0.5;
                break;
              default:
                startingPoint = 1.75;
                //cakeSlice = 1.5;
            }
        */
        //Sempre tenim 3 botons
        cakeSlice = 0.5;
        //this.submenuButtons[0].left = 16;
        //this.submenuButtons[0].top = -2;
        //this.submenuButtons[1].left = 38;
        //this.submenuButtons[1].top = -5;
        //this.submenuButtons[2].left = 58;
        //this.submenuButtons[2].top = -2;
        for (var i = 0, l = items.length; i < l; i++) {
            //leftValue = ((50 - 50 * Math.cos(-startingPoint * Math.PI - cakeSlice * (1 / (l - 1)) * i * Math.PI)).toFixed(4));
            //topValue = ((50 + 50 * Math.sin(-startingPoint * Math.PI - cakeSlice * (1 / (l - 1)) * i * Math.PI)).toFixed(4));
            leftValue = ((50 - 35 * Math.cos(-startingPoint * Math.PI - cakeSlice * (1 / (l - 1)) * i * Math.PI)).toFixed(4));
            //topValue = ((20 + 35 * Math.sin(-startingPoint * Math.PI - cakeSlice * (1 / (l - 1)) * i * Math.PI)).toFixed(4));
            topValue = ((50 + 35 * Math.sin(-startingPoint * Math.PI - cakeSlice * (1 / (l - 1)) * i * Math.PI)).toFixed(4));
            this.submenuButtons[i].left = leftValue;
            this.submenuButtons[i].top = topValue;
        }
        console.log(this.submenuButtons);
        console.log("SURTO ALLOCATE SUBMENT BUTTONS");
        return this.submenuButtons;
    };
    // function for checkin
    HomePage.prototype.prepareCheckin = function () {
        var _this = this;
        if (!this.reservation.objReservation.alreadyCheckIn) {
            this.home.checkCheckInCheckOutAvailability().subscribe(function (data) {
                if (data.success) {
                    if (data.response.checkinDisponible) {
                        _this.navCtrl.push("CheckinBasicinfoPage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
                    }
                    else {
                        //if(!this.commonProvider.objAppData && this.commonProvider.objAppData==undefined)
                        //this.commonProvider.objAppData = new AppData();
                        var nextCheckinStatusRequestDate = new Date();
                        nextCheckinStatusRequestDate.setTime(nextCheckinStatusRequestDate.getTime() + data.response.tiempoHastaAperturaCheckin);
                        _this.commonProvider.objAppData.nextCheckinStatusRequestDate = nextCheckinStatusRequestDate;
                        if (data.response.checkinRealizado) {
                            var checkinMsg1 = _this.tools.fnLanguageTranslate(['view.checkin.title', "view.checkin.label.realizado.title", "buttons.ok"]);
                            checkinMsg1.subscribe(function (value) {
                                var alertCheckin1 = _this.alertCtrl.create({
                                    title: value['view.checkin.title'],
                                    message: value['view.checkin.label.realizado.title'],
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
                                alertCheckin1.present();
                                setTimeout(function () { alertCheckin1.dismiss(); }, 5000);
                            });
                            // if already checkin is completed
                            _this.reservation.objReservation.alreadyCheckIn = true;
                            //set checkout varible as true
                            if (data.response.checkoutRealizado) {
                                _this.reservation.objReservation.alreadyVerifiedCheckOut = true;
                            }
                            _this.fnReadyForCheckout();
                        }
                        else if (data.response.tiempoHastaCierreCheckin <= 0) {
                            var checkinMsg2 = _this.tools.fnLanguageTranslate(['view.checkin.title', "view.checkin.label.expired.title", "buttons.ok"]);
                            checkinMsg2.subscribe(function (value) {
                                var alertCheckin2 = _this.alertCtrl.create({
                                    title: value['view.checkin.title'],
                                    message: value['view.checkin.label.expired.title'],
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
                                alertCheckin2.present();
                                setTimeout(function () { alertCheckin2.dismiss(); }, 5000);
                            });
                            // if already checkin is expired
                            _this.reservation.objReservation.alreadyCheckIn = true;
                            //set checkout varible as true
                            if (data.response.checkoutRealizado) {
                                _this.reservation.objReservation.alreadyVerifiedCheckOut = true;
                            }
                            _this.fnReadyForCheckout();
                        }
                        else {
                            // the checkinexpress has not yet been opened
                            var checkinMsg3 = _this.tools.fnLanguageTranslate(['view.checkin.title', "view.checkin.label.unavailable.title", "buttons.ok"]);
                            checkinMsg3.subscribe(function (value) {
                                var alertCheckin3 = _this.alertCtrl.create({
                                    title: value['view.checkin.title'],
                                    message: value['view.checkin.label.unavailable.title'],
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
                                alertCheckin3.present();
                                setTimeout(function () { alertCheckin3.dismiss(); }, 5000);
                            });
                        }
                    }
                }
                else {
                    var checkinMsg3 = _this.tools.fnLanguageTranslate(['view.checkin.title', "common.connectionError", "buttons.ok"]);
                    checkinMsg3.subscribe(function (value) {
                        _this.showAlert(value['view.checkin.title'], value['common.connectionError'], 'cls_alrt', value['buttons.ok']);
                    });
                }
            });
        }
        /*else{
    
                  let checkinMsg = this.tools.fnLanguageTranslate(['view.checkin.title', "view.checkin.label.realizado.title", "buttons.ok"]);
                  checkinMsg.subscribe((value: string) => {
                      this.showAlert(value['view.checkin.title'], value['view.checkin.label.realizado.title'], 'cls_alrt', value['buttons.ok']);
                      this.fnReadyForCheckout();
                    });
    
    
        }*/
    };
    HomePage.prototype.prepareCheckout = function () {
        var _this = this;
        if (!this.reservation.objReservation.alreadyVerifiedCheckOut) {
            this.home.checkCheckInCheckOutAvailability().subscribe(function (data) {
                if (data.success) {
                    if (data.response.checkoutDisponible) {
                        _this.navCtrl.push("CheckoutBasicinfoPage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
                    }
                    else {
                        //if(!this.commonProvider.objAppData && this.commonProvider.objAppData==undefined)
                        //this.commonProvider.objAppData = new AppData();
                        var nextCheckoutStatusRequestDate = new Date();
                        nextCheckoutStatusRequestDate.setTime(nextCheckoutStatusRequestDate.getTime() + data.response.tiempoHastaAperturaCheckout);
                        _this.commonProvider.objAppData.nextCheckoutStatusRequestDate = nextCheckoutStatusRequestDate;
                        if (data.response.checkoutRealizado) {
                            // if already checkout is completed
                            _this.reservation.objReservation.alreadyVerifiedCheckOut = true;
                            var checkoutMsg = _this.tools.fnLanguageTranslate(['view.checkout.title', "view.checkout.label.realizado.title", "buttons.ok"]);
                            checkoutMsg.subscribe(function (value) {
                                _this.showAlert(value['view.checkout.title'], value['view.checkout.label.realizado.title'], 'cls_alrt', value['buttons.ok']);
                            });
                            _this.setDisabledCheckout();
                        }
                        else if (data.response.tiempoHastaCierreCheckout <= 0) {
                            // checkout expired
                            var checkoutMsg = _this.tools.fnLanguageTranslate(['view.checkout.title', "view.checkout.label.expired.title", "buttons.ok"]);
                            checkoutMsg.subscribe(function (value) {
                                _this.showAlert(value['view.checkout.title'], value['view.checkout.label.expired.title'], 'cls_alrt', value['buttons.ok']);
                            });
                            _this.setDisabledCheckout();
                        }
                        else {
                            // Checkout unavailable
                            var checkoutMsg = _this.tools.fnLanguageTranslate(['view.checkout.title', "view.checkout.label.unavailable.title", "buttons.ok"]);
                            checkoutMsg.subscribe(function (value) {
                                _this.showAlert(value['view.checkout.title'], value['view.checkout.label.unavailable.title'], 'cls_alrt', value['buttons.ok']);
                            });
                        }
                    }
                }
                else {
                    var checkoutMsg = _this.tools.fnLanguageTranslate(['view.checkout.title', "common.connectionError", "buttons.ok"]);
                    checkoutMsg.subscribe(function (value) {
                        _this.showAlert(value['view.checkout.title'], value['common.connectionError'], 'cls_alrt', value['buttons.ok']);
                    });
                }
            });
        }
        else {
            var checkoutMsg = this.tools.fnLanguageTranslate(['view.checkout.title', "view.checkout.label.realizado.title", "buttons.ok"]);
            checkoutMsg.subscribe(function (value) {
                _this.showAlert(value['view.checkout.title'], value['view.checkout.label.realizado.title'], 'cls_alrt', value['buttons.ok']);
            });
            this.setDisabledCheckout();
        }
    };
    //alert box function
    HomePage.prototype.showAlert = function (title, message, css, buttonText) {
        var alertCheckin3 = this.alertCtrl.create({
            title: title,
            message: message,
            cssClass: css,
            buttons: [
                {
                    text: buttonText,
                    role: 'cancel',
                    handler: function (data) {
                    }
                }
            ]
        });
        alertCheckin3.present();
        setTimeout(function () { alertCheckin3.dismiss(); }, 5000);
    };
    //download images
    HomePage.prototype.download = function (type, url, fname, i) {
        var _this = this;
        this.file.checkFile(this.file.cacheDirectory, fname).then(function () {
            _this.loadingFlag++;
            switch (type) {
                case "activity":
                    _this.activityList[i].imgPath = _this.file.cacheDirectory + fname;
                    if (_this.platForm.is('ios')) {
                        _this.activityList[i].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(_this.file.cacheDirectory + fname);
                    }
                    if (_this.loadingFlag == 2)
                        _this.fnGotoActivitiesPage();
                    break;
                case "restaurants":
                    _this.restaurantsList[i].imgPath = _this.file.cacheDirectory + fname;
                    if (_this.platForm.is('ios')) {
                        _this.restaurantsList[i].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(_this.file.cacheDirectory + fname);
                    }
                    if (_this.loadingFlag == 2)
                        _this.fnGotoRestaurantsPage();
                    break;
                case "wellness":
                    _this.wellnessList[i].imgPath = _this.file.cacheDirectory + fname;
                    if (_this.platForm.is('ios')) {
                        _this.wellnessList[i].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(_this.file.cacheDirectory + fname);
                    }
                    if (_this.loadingFlag == 2)
                        _this.fnGotoWellnessPage();
                    break;
                case "promotions":
                    _this.promotionsList[i].imgPath = _this.file.cacheDirectory + fname;
                    if (_this.platForm.is('ios')) {
                        _this.promotionsList[i].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(_this.file.cacheDirectory + fname);
                    }
                    if (_this.loadingFlag == 2)
                        _this.fnGotoPromotionsPage();
                    break;
                case "roomservice":
                    _this.roomServicesList[i].imgPath = _this.file.cacheDirectory + fname;
                    if (_this.platForm.is('ios')) {
                        _this.roomServicesList[i].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(_this.file.cacheDirectory + fname);
                    }
                    if (_this.loadingFlag == 3)
                        _this.fnGoToRoomServicePage();
                    break;
            }
        }, function (error) {
            var fileTransfer = _this.transfer.create();
            fileTransfer.download(url, _this.file.cacheDirectory + fname).then(function (entry) {
                _this.loadingFlag++;
                switch (type) {
                    case "activity":
                        _this.activityList[i].imgPath = entry.toURL();
                        if (_this.platForm.is('ios')) {
                            _this.activityList[i].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(entry.toURL());
                        }
                        if (_this.loadingFlag == 2)
                            _this.fnGotoActivitiesPage();
                        break;
                    case "restaurants":
                        _this.restaurantsList[i].imgPath = entry.toURL();
                        if (_this.platForm.is('ios')) {
                            _this.restaurantsList[i].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(entry.toURL());
                        }
                        if (_this.loadingFlag == 2)
                            _this.fnGotoRestaurantsPage();
                        break;
                    case "wellness":
                        _this.wellnessList[i].imgPath = entry.toURL();
                        if (_this.platForm.is('ios')) {
                            _this.wellnessList[i].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(entry.toURL());
                        }
                        if (_this.loadingFlag == 2)
                            _this.fnGotoWellnessPage();
                        break;
                    case "promotions":
                        _this.promotionsList[i].imgPath = entry.toURL();
                        if (_this.platForm.is('ios')) {
                            _this.promotionsList[i].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(entry.toURL());
                        }
                        if (_this.loadingFlag == 2)
                            _this.fnGotoPromotionsPage();
                        break;
                    case "roomservice":
                        _this.roomServicesList[i].imgPath = entry.toURL();
                        if (_this.platForm.is('ios')) {
                            _this.roomServicesList[i].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(entry.toURL());
                        }
                        if (_this.loadingFlag == 3)
                            _this.fnGoToRoomServicePage();
                        break;
                }
            }, function (error) {
                _this.loadingFlag++;
                switch (type) {
                    case "activity":
                        if (_this.loadingFlag == 2)
                            _this.fnGotoActivitiesPage();
                        break;
                    case "restaurants":
                        if (_this.loadingFlag == 2)
                            _this.fnGotoRestaurantsPage();
                        break;
                    case "wellness":
                        if (_this.loadingFlag == 2)
                            _this.fnGotoWellnessPage();
                        break;
                    case "promotions":
                        if (_this.loadingFlag == 2)
                            _this.fnGotoPromotionsPage();
                        break;
                    case "roomservice":
                        if (_this.loadingFlag == 3)
                            _this.fnGoToRoomServicePage();
                        break;
                }
            });
        });
    };
    HomePage.prototype.prepareRoomissuePage = function () {
        this.fnGotoRoomissuePage();
    };
    HomePage.prototype.fnGotoRoomissuePage = function () {
        this.navCtrl.push("RoomissuePage", {}, { animate: true, animation: 'transition', duration: 800, direction: 'forward' });
    };
    HomePage.prototype.prepareRoommakeupPage = function () {
        this.fnGotoRoommakeupPage();
    };
    HomePage.prototype.fnGotoRoommakeupPage = function () {
        this.navCtrl.push("RoommakeupPage", {}, { animate: true, animation: 'transition', duration: 800, direction: 'forward' });
    };
    HomePage.prototype.prepareAmenitiesPage = function () {
        //this.loadingFlag = 0;
        //get activity list
        var hotelId = this.hotel.objHotel.id, reservationId = this.reservation.objReservation.reservationId;
        this.fnGotoAmenitiesPage();
    };
    HomePage.prototype.fnGotoAmenitiesPage = function () {
        this.navCtrl.push("AmenitiesPage", {}, { animate: true, animation: 'transition', duration: 800, direction: 'forward' });
    };
    HomePage.prototype.prepareActivitiesPage = function () {
        var _this = this;
        //Set everything as new
        this.activityList = [];
        this.loadingFlag = 0;
        //get activity list
        var hotelId = this.hotel.objHotel.id, reservationId = this.reservation.objReservation.reservationId;
        this.activityProvider.getActivityList(hotelId, reservationId).subscribe(function (data) {
            //loader
            _this.showLoading();
            if (data.success == true && data.response.length > 0) {
                //create object for activity model
                if (!_this.activityProvider.objActivity) {
                    _this.activityProvider.objActivity = new __WEBPACK_IMPORTED_MODULE_10__model_activity_model__["a" /* ActivityData */]();
                }
                //prepare data for activity list
                var itemArray = [];
                var i = 0;
                for (var _i = 0, _a = data.response; _i < _a.length; _i++) {
                    var item = _a[_i];
                    itemArray = item;
                    var imagePath = _this.tools.getImagePath(item.foto.id); // image path using image id
                    itemArray.imgPath = imagePath;
                    var price = item.precio.toFixed(_this.hotel.objHotel.currency.decimales); // adding decimal points to price
                    itemArray.price = price;
                    _this.activityList.push(itemArray);
                    //Download first activity image
                    if (i == 0)
                        _this.download("activity", imagePath, item.foto.id + ".jpg", i);
                    i++;
                }
                _this.loadingFlag++;
                if (_this.loadingFlag == 2)
                    _this.fnGotoActivitiesPage();
            }
            else {
                _this.loading.dismiss();
                var checkinMsg = _this.tools.fnLanguageTranslate(["common.error", "common.serviceIsUnavailable", "buttons.ok"]);
                checkinMsg.subscribe(function (value) {
                    var alertCheckin = _this.alertCtrl.create({
                        title: value['common.error'],
                        message: value['common.serviceIsUnavailable'],
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
            }
        });
    };
    HomePage.prototype.fnGotoActivitiesPage = function () {
        if (!this.activityProvider.objActivity.activeSlider) {
            this.activityProvider.objActivity.activeSlider = 0;
        }
        this.activityProvider.objActivity.data = this.activityList; // result array assigning to activity object variable
        this.loading.dismiss();
        this.navCtrl.push("ActivitiesPage", {}, { animate: true, animation: 'transition', duration: 800, direction: 'forward' });
    };
    HomePage.prototype.prepareRestaurantsPage = function () {
        var _this = this;
        //Set everything as new
        this.restaurantsList = [];
        this.loadingFlag = 0;
        //get restuarants list
        this.restaurants.getRestaurantInfo().subscribe(function (data) {
            //loader
            _this.showLoading();
            if (data.success == true && (data.response.length > 0)) {
                if (!_this.restaurants.objRestaurant) {
                    _this.restaurants.objRestaurant = new __WEBPACK_IMPORTED_MODULE_12__model_restaurant_model__["a" /* Restaurant */]();
                }
                _this.restaurants.getDishesInfo().subscribe(function (result) {
                    if (result.success == true && (result.response.length > 0)) {
                        var itemArray_1 = [];
                        var i = 0;
                        for (var _i = 0, _a = data.response; _i < _a.length; _i++) {
                            var item = _a[_i];
                            itemArray_1 = item;
                            var imagePath = _this.tools.getImagePath(item.foto.id); // image path using image id
                            itemArray_1.imgPath = imagePath;
                            var availableDishes = result.response.filter(function (x) { return x.restauranteId == itemArray_1.id; });
                            itemArray_1.availableDishes = availableDishes;
                            _this.restaurantsList.push(itemArray_1);
                            //Download first restaurant image
                            if (i == 0)
                                _this.download("restaurants", imagePath, item.foto.id + ".jpg", i);
                            i++;
                        }
                        _this.loadingFlag++;
                        if (_this.loadingFlag == 2)
                            _this.fnGotoRestaurantsPage();
                    }
                });
            }
            else {
                _this.loading.dismiss();
                var checkinMsg = _this.tools.fnLanguageTranslate(["common.error", "common.serviceIsUnavailable", "buttons.ok"]);
                checkinMsg.subscribe(function (value) {
                    var alertCheckin = _this.alertCtrl.create({
                        title: value['common.error'],
                        message: value['common.serviceIsUnavailable'],
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
            }
        });
    };
    HomePage.prototype.fnGotoRestaurantsPage = function () {
        if (!this.restaurants.objRestaurant.activeSlider) {
            this.restaurants.objRestaurant.activeSlider = 0;
        }
        this.restaurants.objRestaurant.data = this.restaurantsList; // result array assigning to activity object variable
        this.loading.dismiss();
        this.navCtrl.push("RestaurantsPage", {}, { animate: true, animation: 'transition', duration: 800, direction: 'forward' });
    };
    HomePage.prototype.prepareWellnessPage = function () {
        var _this = this;
        //Set everything as new
        this.wellnessList = [];
        this.loadingFlag = 0;
        // get wellness data
        var hotelId = this.hotel.objHotel.id, reservationId = this.reservation.objReservation.reservationId;
        this.wellnessProvider.getWellnessInfo(hotelId, reservationId).subscribe(function (data) {
            //loader
            _this.showLoading();
            if (data.success == true && data.response.length > 0) {
                //create welness model object
                if (!_this.wellnessProvider.objWellness) {
                    _this.wellnessProvider.objWellness = new __WEBPACK_IMPORTED_MODULE_14__model_wellness_model__["a" /* Wellness */]();
                }
                //get welness item list
                _this.wellnessProvider.getItemList(hotelId, reservationId).subscribe(function (result) {
                    if (result.success == true && (result.response.length > 0)) {
                        var itemArray_2 = [];
                        var i = 0;
                        for (var _i = 0, _a = data.response; _i < _a.length; _i++) {
                            var item = _a[_i];
                            itemArray_2 = item;
                            var imagePath = _this.tools.getImagePath(item.foto.id); // image path using image id
                            itemArray_2.imgPath = imagePath;
                            var price = item.precio.toFixed(_this.hotel.objHotel.currency.decimales); // adding decimal points to price
                            itemArray_2.price = price;
                            //sort items per wellness
                            var availableItems = result.response.filter(function (x) { return x.servicioSaludId == itemArray_2.id; });
                            itemArray_2.availableItems = availableItems;
                            _this.wellnessList.push(itemArray_2);
                            //Download first welness image
                            if (i == 0)
                                _this.download("wellness", imagePath, item.foto.id + ".jpg", i);
                            i++;
                        }
                        _this.loadingFlag++;
                        if (_this.loadingFlag == 2)
                            _this.fnGotoWellnessPage();
                    }
                });
            }
            else {
                _this.loading.dismiss();
                var checkinMsg = _this.tools.fnLanguageTranslate(["common.error", "common.serviceIsUnavailable", "buttons.ok"]);
                checkinMsg.subscribe(function (value) {
                    var alertCheckin = _this.alertCtrl.create({
                        title: value['common.error'],
                        message: value['common.serviceIsUnavailable'],
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
            }
        });
    };
    HomePage.prototype.fnGotoWellnessPage = function () {
        if (!this.wellnessProvider.objWellness.activeSlider) {
            this.wellnessProvider.objWellness.activeSlider = 0;
        }
        this.wellnessProvider.objWellness.data = this.wellnessList; // result array assigning to wellness object variable
        this.loading.dismiss();
        this.navCtrl.push("WellnessPage", {}, { animate: true, animation: 'transition', duration: 800, direction: 'forward' });
    };
    HomePage.prototype.fnCheckRoomServiceAvailability = function () {
        var _this = this;
        this.showLoading();
        if (this.reservation.objReservation.bedrooms) {
            this.prepareRoomServicePage();
            //this.navCtrl.push("RoomServicePage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
        }
        else {
            this.home.checkRoomServiceAvailability().subscribe(function (data) {
                if (data.success) {
                    var reservationDataResponse = data.response;
                    if (reservationDataResponse.numeroHabitacion) {
                        _this.reservation.objReservation.bedrooms = parseInt(reservationDataResponse.numeroHabitacion);
                        //storing roomNumber into native storage
                        _this.nativeStorage.setItem('reservationData', {
                            'roomNumber': _this.reservation.objReservation.bedrooms
                        })
                            .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
                        _this.prepareRoomServicePage();
                    }
                    else {
                        _this.loading.dismiss();
                        // the check-in has not been completed
                        var checkinMsg = _this.tools.fnLanguageTranslate(['common.error', "view.servicioHabitacion.error.checkinNoRealizado", "buttons.ok"]);
                        checkinMsg.subscribe(function (value) {
                            var alertCheckin = _this.alertCtrl.create({
                                title: value['common.error'],
                                message: value['view.servicioHabitacion.error.checkinNoRealizado'],
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
                    }
                }
                else {
                    _this.loading.dismiss();
                    var checkinMsg3 = _this.tools.fnLanguageTranslate(['common.error', "common.connectionError", "buttons.ok"]);
                    checkinMsg3.subscribe(function (value) {
                        _this.showAlert(value['common.error'], value['common.connectionError'], 'cls_alrt', value['buttons.ok']);
                    });
                }
            });
        }
    };
    HomePage.prototype.preparePromotionsPage = function () {
        var _this = this;
        //Set everything as new
        this.promotionsList = [];
        this.loadingFlag = 0;
        //get promotion list
        var hotelId = this.hotel.objHotel.id, reservationId = this.reservation.objReservation.reservationId;
        this.promotionsProvider.getPromotionsList(hotelId, reservationId).subscribe(function (data) {
            //loader
            _this.showLoading();
            if (data.success == true && data.response.length > 0) {
                //create object for promotion model
                if (!_this.promotionsProvider.objPromotions) {
                    _this.promotionsProvider.objPromotions = new __WEBPACK_IMPORTED_MODULE_16__model_promotions_model__["a" /* PromotionsData */]();
                }
                var itemArray = [];
                var i = 0;
                for (var _i = 0, _a = data.response; _i < _a.length; _i++) {
                    var item = _a[_i];
                    itemArray = item;
                    var imagePath = _this.tools.getImagePath(item.foto.id); // image path using image id
                    itemArray.imgPath = imagePath;
                    var price = item.precio.toFixed(_this.hotel.objHotel.currency.decimales); // adding decimal points to price
                    itemArray.price = price;
                    _this.promotionsList.push(itemArray);
                    //Download first promotion image
                    if (i == 0)
                        _this.download("promotions", imagePath, item.foto.id + ".jpg", i);
                    i++;
                }
                _this.loadingFlag++;
                if (_this.loadingFlag == 2)
                    _this.fnGotoPromotionsPage();
            }
            else {
                _this.loading.dismiss();
                var checkinMsg = _this.tools.fnLanguageTranslate(["common.error", "common.serviceIsUnavailable", "buttons.ok"]);
                checkinMsg.subscribe(function (value) {
                    var alertCheckin = _this.alertCtrl.create({
                        title: value['common.error'],
                        message: value['common.serviceIsUnavailable'],
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
            }
        });
    };
    HomePage.prototype.fnGotoPromotionsPage = function () {
        if (!this.promotionsProvider.objPromotions.activeSlider) {
            this.promotionsProvider.objPromotions.activeSlider = 0;
        }
        this.promotionsProvider.objPromotions.data = this.promotionsList; // result array assigning to activity object variable
        this.loading.dismiss();
        this.navCtrl.push("PromotionsPage", {}, { animate: true, animation: 'transition', duration: 800, direction: 'forward' });
    };
    HomePage.prototype.fnGotoService = function (service) {
        switch (service) {
            case 'activity':
                this.prepareActivitiesPage();
                break;
            case 'checkin':
                this.prepareCheckin();
                break;
            case 'checkout':
                this.prepareCheckout();
                break;
            case 'restaurant':
                this.prepareRestaurantsPage();
                break;
            case 'wellness':
                this.prepareWellnessPage();
                break;
            case 'promotions':
                this.preparePromotionsPage();
                break;
            case 'roomservice':
                this.fnCheckRoomServiceAvailability();
                break;
            case 'chat':
                this.navCtrl.push("HotelInfoPage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
                break;
            case 'housekeeping':
                this.fnOpenSubMenu(service);
                break;
            case 'roomissue':
                this.prepareRoomissuePage();
                break;
            case 'roommakeup':
                this.prepareRoommakeupPage();
                break;
            case 'amenities':
                this.prepareAmenitiesPage();
                break;
            default:
        }
    };
    HomePage.prototype.createSubmenuButtons = function () {
        var serviceButtons = [];
        serviceButtons.push({ iconClass: 'icon-Roomissue', id: 'roomissue', ui: 'circleItemsSubmenu', elId: 'ext-element-101', service: 'roomissue' });
        serviceButtons.push({ iconClass: 'icon-Roommakeup', id: 'roommakeup', ui: 'circleItemsSubmenu', elId: 'ext-element-102', service: 'roommakeup' });
        serviceButtons.push({ iconClass: 'icon-Amenities', id: 'amenities', ui: 'circleItemsSubmenu', elId: 'ext-element-103', service: 'amenities' });
        return serviceButtons;
    };
    HomePage.prototype.prepareRoomServicePage = function () {
        var _this = this;
        this.loadingFlag = 0;
        this.roomServicesList = [];
        this.filteredRoomItems = [];
        this.tmpServiceItems = [];
        this.selectedId = "0";
        this.tempList = [];
        this.preSelected = [];
        this.total = 0;
        if (this.roomsService.objRoomService == undefined)
            this.roomsService.objRoomService = new __WEBPACK_IMPORTED_MODULE_19__model_room_service_model__["a" /* RoomService */]();
        if (this.roomsService.objRoomService && this.roomsService.objRoomService.serviceItemsList.length > 0) {
            this.tempList = this.roomsService.objRoomService.serviceItemsList;
        }
        if (this.roomsService.objRoomService && this.roomsService.objRoomService.currentOrderList
            .length > 0) {
            for (var _i = 0, _a = this.roomsService.objRoomService.currentOrderList; _i < _a.length; _i++) {
                var data = _a[_i];
                this.preSelected[data.id] = data.isSelected;
            }
        }
        this.roomsService.getRoomServiceInfo().subscribe(function (data) {
            _this.roomsService.getServiceItems().subscribe(function (result) {
                if (result.success == true && (result.response.length > 0)) {
                    _this.roomServicesList = [];
                    _this.total = 0;
                    var i = 0;
                    var _loop_1 = function (item) {
                        var itemArray = [];
                        var tmpItems = [];
                        var imagePath = _this.tools.getImagePath(item.foto.id); // image path using image id
                        itemArray.imgPath = imagePath;
                        itemArray.nombre = item.nombre;
                        itemArray.horario = item.horario;
                        itemArray.id = item.id;
                        var selected = false;
                        if (_this.preSelected[item.id]) {
                            selected = _this.preSelected[item.id];
                        }
                        itemArray.isSelected = selected;
                        var availableItems = result.response.filter(function (x) { return x.servicioHabitacionId == itemArray.id; });
                        var j = 0;
                        var _loop_2 = function (itemData) {
                            var itemsArray = [];
                            var imagePath2 = _this.tools.getImagePath(availableItems[itemData].foto.id); // image path using image id
                            itemsArray.imgPath = imagePath2;
                            itemsArray.nombre = availableItems[itemData].nombre;
                            itemsArray.id = availableItems[itemData].id;
                            itemsArray.descripcion = availableItems[itemData].descripcion;
                            itemsArray.orden = availableItems[itemData].orden;
                            itemsArray.price = availableItems[itemData].precio.toFixed(_this.hotel.objHotel.currency.decimales); // adding decimal points to price
                            var quantity = 0;
                            if (_this.tempList.length > 0) {
                                var tempItem = _this.tempList;
                                tempItem = tempItem.filter(function (x) { return x.id == availableItems[itemData].id; });
                                quantity = tempItem[0].quantity;
                                _this.total = _this.total + quantity;
                            }
                            itemsArray.quantity = quantity;
                            itemsArray.servicioHabitacionId = item.id;
                            tmpItems.push(itemsArray);
                            _this.tmpServiceItems.push(itemsArray);
                            if (i == 0 && j == 0)
                                _this.downloadChild(imagePath2, availableItems[itemData].foto.id + ".jpg", i, j);
                            j++;
                        };
                        for (var itemData in availableItems) {
                            _loop_2(itemData);
                        }
                        itemArray.availableItems = tmpItems;
                        _this.roomServicesList.push(itemArray);
                        if (i == 0)
                            _this.download("roomservice", imagePath, item.foto.id + ".jpg", i);
                        i++;
                    };
                    for (var _i = 0, _a = data.response; _i < _a.length; _i++) {
                        var item = _a[_i];
                        _loop_1(item);
                    }
                }
                _this.fnLoadFilteredServiceItems();
            });
        });
    };
    HomePage.prototype.downloadChild = function (url, fname, i, j) {
        var _this = this;
        this.file.checkFile(this.file.cacheDirectory, fname).then(function () {
            _this.loadingFlag++;
            _this.tmpServiceItems[j].imgPath = _this.file.cacheDirectory + fname;
            _this.roomServicesList[i].availableItems[j].imgPath = _this.file.cacheDirectory + fname;
            if (_this.platForm.is('ios')) {
                _this.tmpServiceItems[j].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(_this.file.cacheDirectory + fname);
                _this.roomServicesList[i].availableItems[j].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(_this.file.cacheDirectory + fname);
            }
            if (_this.loadingFlag == 3)
                _this.fnGoToRoomServicePage();
        }, function (error) {
            var fileTransfer = _this.transfer.create();
            fileTransfer.download(url, _this.file.cacheDirectory + fname).then(function (entry) {
                _this.loadingFlag++;
                _this.tmpServiceItems[j].imgPath = entry.toURL();
                _this.roomServicesList[i].availableItems[j].imgPath = entry.toURL();
                if (_this.platForm.is('ios')) {
                    _this.tmpServiceItems[j].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(entry.toURL());
                    _this.roomServicesList[i].availableItems[j].imgPath = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* normalizeURL */])(entry.toURL());
                }
                if (_this.loadingFlag == 3)
                    _this.fnGoToRoomServicePage();
            }, function (error) {
                _this.loadingFlag++;
                if (_this.loadingFlag == 3)
                    _this.fnGoToRoomServicePage();
            });
        });
    };
    HomePage.prototype.fnLoadFilteredServiceItems = function () {
        this.roomsService.objRoomService.serviceItemsList = this.tmpServiceItems;
        if (this.roomsService.objRoomService.serviceItemsList.length > 0 && this.roomServicesList.length > 0) {
            var roomServiceId_1 = this.roomServicesList[this.roomsService.objRoomService.activeSlider].id;
            this.selectedId = roomServiceId_1;
            this.filteredRoomItems = this.roomsService.objRoomService.serviceItemsList.filter(function (x) { return x.servicioHabitacionId == roomServiceId_1; });
        }
        this.loadingFlag++;
        if (this.loadingFlag == 3)
            this.fnGoToRoomServicePage();
    };
    HomePage.prototype.fnGoToRoomServicePage = function () {
        if (!this.roomsService.objRoomService.activeSlider) {
            this.roomsService.objRoomService.activeSlider = 0;
        }
        if (!this.roomsService.objRoomService.activeSubSlider) {
            this.roomsService.objRoomService.activeSubSlider = 0;
        }
        this.loading.dismiss();
        /*let params={
                    roomServicesList: this.roomServicesList,
                    filteredRoomItems: this.filteredRoomItems,
                    tmpServiceItems:  this.tmpServiceItems,
                    selectedId:this.selectedId,
                    tempList: this.tempList,
                    preSelected:this.preSelected,
                    total:this.total
                  }*/
        this.roomsServiceExtra.filteredRoomItems = this.deepCopy(this.filteredRoomItems);
        this.roomsServiceExtra.preSelected = this.preSelected;
        this.roomsServiceExtra.roomServicesList = this.deepCopy(this.roomServicesList);
        this.roomsServiceExtra.selectedId = this.selectedId;
        this.roomsServiceExtra.tempList = this.tempList;
        this.roomsServiceExtra.tmpServiceItems = this.deepCopy(this.tmpServiceItems);
        this.roomsServiceExtra.total = this.total;
        this.navCtrl.push("RoomServicePage", {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
    };
    HomePage.prototype.deepCopy = function (oldObj) {
        var newObj = oldObj;
        if (oldObj && typeof oldObj === "object") {
            newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
            for (var i in oldObj) {
                newObj[i] = this.deepCopy(oldObj[i]);
            }
        }
        return newObj;
    };
    HomePage.prototype.fnReadyForCheckout = function () {
        if (this.hotel.objHotel.checkoutService) {
            this.readyForCheckout = true;
        }
        this.buttons = this.createButtons();
        this.buttons = this.allocateButtons();
    };
    HomePage.prototype.setDisabledCheckout = function () {
        this.disableCheckout = true;
        this.buttons = this.createButtons();
        this.buttons = this.allocateButtons();
    };
    //Loader
    HomePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        this.loading.present();
    };
    HomePage.prototype.fnLogoPressed = function () {
        this.isLogoPressed = true;
    };
    HomePage.prototype.fnLogoReleased = function () {
        this.isLogoPressed = false;
    };
    //Xevi
    HomePage.prototype.fndebug = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/home/home.html"*/'<ion-content id="homecontent" class="home_container" no-bounce>\n  <ion-header>\n    <ion-navbar>\n      <ion-buttons end>\n        <button ion-button menuToggle class="main_menu">\n          <i class="icon-Menu"></i>\n          <span class="x-badge" *ngIf="notificationProvider.hasNotifications" ></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <div class="x-container x-unsized x-paint-monitored x-floating x-scroll-container x-size-monitored" id="theCircularMenu"\n    style="top: 0px !important; z-index: 4 !important;">\n    <div class="x-body x-scroll-scroller-vertical x-size-monitored x-paint-monitored x-scroll-scroller" id="ext-element-26" style="transform: translate3d(0px, 0px, 0px);">\n      <div class="x-unsized x-label x-has-width x-floating" id="hotel" style="width: 100% !important; top: 45px !important; z-index: 2 !important;">\n        <div class="x-innerhtml" id="ext-element-25">\n          <div id="nombreHotel" class="nombreHotel">{{hotel.objHotel.hotelName}}</div>\n          <div id="poblacionHotel" class="poblacionHotel">{{hotel.objHotel.location}}</div>\n        </div>\n      </div>\n      <div class="x-inner" id="ext-element-24">\n        <div class="x-innerhtml" id="ext-element-27">\n          <div id="fondo" [class._gpBlur]="isMemuOpened" [style.backgroundImage]="\'url(\' + backgroundImageUrl + \') \'"></div>\n          <div class="circular-menu" [class.open]="isMemuOpened">\n            <div class="circle" [class.open]="isMemuOpened">\n              <div *ngFor="let item of buttons">\n                <div [ngClass]="{\'disabled\':item.disabled}" [class]="mainClassFn(item.id)" [id]="item.id" [style.top.%]="item.top"\n                  [style.left.%]="item.left" (click)="item.disabled ? $event.stopPropagation() : fnGotoService(item.service); isDisabled ? false : null">\n                  <span class="x-badge" style="display: none;"></span>\n                  <span [class]="iconClassFn(item.iconClass)" [id]="item.elId"></span>\n                  <span class="x-button-label" style="display: none;"></span>\n                </div>\n                <div *ngIf="item.hasChild" class="subcircle" [class.open]="isSubMenuOpened" [style.top.%]="item.top-30" [style.left.%]="item.left-38">\n                  <div *ngFor="let it of submenuButtons" [ngClass]="{\'disabled\':it.disabled}" [class]="mainClassFn(it.id)" [id]="it.id" [style.top.%]="it.top"\n                    [style.left.%]="it.left" (click)="it.disabled ? $event.stopPropagation() : fnGotoService(it.service); isDisabled ? false : null">\n                    <span class="x-badge" style="display: none;"></span>\n                    <span [class]="iconClassFn(it.iconClass)" [id]="it.elId"></span>\n                    <span class="x-button-label" style="display: none;"></span>\n                  </div>\n                </div>\n\n              </div>\n\n            </div>\n            <div class="menu-button" id="menu-button">\n              <div class="dot"></div>\n              <div class="x-unsized x-button-normal x-button x-iconalign-center circleMenuGuestPilot x-floating" id="menuGuestPilot" style="top: 0px !important;">\n                <span class="x-badge" style="display: none;"></span>\n                <span class="x-button-icon x-shown logoGuestPilotMenu" [class.logopress]="isLogoPressed" (touchstart)="fnLogoPressed()" (touchend)="fnLogoReleased()"\n                  (click)="fnOpenMenu()" id="ext-element-66"></span>\n                <span class="x-button-label" style="display: none;"></span>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Transcend/Projects/guestmate/ionic-app/GuestMate/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_21__providers_room_service_extra_room_service_extra__["a" /* RoomServiceExtraProvider */], __WEBPACK_IMPORTED_MODULE_20__providers_rooms_service_rooms_service__["a" /* RoomsServiceProvider */], __WEBPACK_IMPORTED_MODULE_15__providers_promotions_service_promotions_service__["a" /* PromotionsServiceProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_wellness_service_wellness_service__["a" /* WellnessServiceProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_restaurant_service_restaurant_service__["a" /* RestaurantServiceProvider */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_9__providers_activity_service_activity_service__["a" /* ActivityServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_hotel_service_hotel_service__["a" /* HotelServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_reservation_service_reservation_service__["a" /* ReservationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_home_service_home_service__["a" /* HomeServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_service_common_service__["a" /* CommonServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[407]);
//# sourceMappingURL=main.js.map