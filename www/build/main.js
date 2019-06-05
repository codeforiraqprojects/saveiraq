webpackJsonp([13],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonorsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
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
  Generated class for the DonorsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DonorsProvider = /** @class */ (function () {
    function DonorsProvider(db) {
        this.db = db;
        this.challengeListRef = this.db.list('Donors');
        console.log('Hello GiftServiceProvider Provider');
    }
    DonorsProvider.prototype.getChallengeList = function () {
        return this.challengeListRef;
    };
    DonorsProvider.prototype.addChallenge = function (challenge) {
        return this.challengeListRef.push(challenge);
    };
    DonorsProvider.prototype.updateChallenge = function (challenge) {
        return this.challengeListRef.update(challenge.key, challenge);
    };
    DonorsProvider.prototype.removeChallenge = function (challenge) {
        return this.challengeListRef.remove(challenge);
    };
    DonorsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DonorsProvider);
    return DonorsProvider;
}());

//# sourceMappingURL=donors.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
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
  Generated class for the StatisticsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StatisticsProvider = /** @class */ (function () {
    function StatisticsProvider(db) {
        this.db = db;
        this.challengeListRef = this.db.list('statistics');
        console.log('Hello GiftServiceProvider Provider');
    }
    StatisticsProvider.prototype.getChallengeList = function () {
        return this.challengeListRef;
    };
    StatisticsProvider.prototype.addChallenge = function (challenge) {
        return this.challengeListRef.push(challenge);
    };
    StatisticsProvider.prototype.updateChallenge = function (challenge) {
        return this.challengeListRef.update(challenge.key, challenge);
    };
    StatisticsProvider.prototype.removeChallenge = function (challenge) {
        return this.challengeListRef.remove(challenge);
    };
    StatisticsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], StatisticsProvider);
    return StatisticsProvider;
}());

//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDonorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_donors_donors__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddDonorPage = /** @class */ (function () {
    function AddDonorPage(navCtrl, navParams, donorsProvider, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.donorsProvider = donorsProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.locations = {
            key: '',
            name: '',
            amount: '',
            paidBy: '',
            show: 'false',
            province: '',
        };
        var loginStatus = localStorage.getItem("login");
        if (loginStatus !== 'true') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }
    }
    AddDonorPage.prototype.addLocation = function (locations) {
        var _this = this;
        this.showLoader();
        this.donorsProvider.addChallenge(locations).then(function (ref) {
            _this.showAlert("شكرا", "سيتم التدقيق واضافة البيانات قريبا");
            _this.loading.dismiss();
            _this.navCtrl.pop();
        });
    };
    AddDonorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonorsPage');
    };
    AddDonorPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: " لطفا انتظر قليلا",
        });
        this.loading.present();
    };
    AddDonorPage.prototype.showAlert = function (titles, subTitles) {
        var alert = this.alertCtrl.create({
            title: titles,
            subTitle: subTitles,
            buttons: ['OK']
        });
        alert.present();
    };
    AddDonorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-donor',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/add-donor/add-donor.html"*/'<!--\n  Generated template for the AddDonorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border no-shadow>\n\n    <ion-navbar >\n      \n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n\n    <img id="headerImg" src="assets/imgs/adddonor.png" >\n\n    <ion-list  >\n\n    <ion-item  text-right>\n      <ion-label   floating>الاسم الثلاثي</ion-label>\n      <ion-input   text-right  [(ngModel)]=\'locations.name\' type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item  text-right>\n      <ion-label  floating>مبلغ المتبرع به</ion-label>\n      <ion-input   text-right  [(ngModel)]=\'locations.amount\'  type="text"></ion-input>\n    </ion-item>\n\n \n       \n        <ion-item  text-right  >\n          <ion-label floating>المحافظة</ion-label>\n          <ion-select [(ngModel)]="locations.province">\n            <ion-option value="Al Anbar">Al Anbar</ion-option>\n            <ion-option selected="selected" value="Babil">Babil</ion-option>\n            <ion-option value="Baghdad">Baghdad</ion-option>\n            <ion-option value="Basra">Basra</ion-option>\n            <ion-option value="Dhi Qar">Dhi Qar</ion-option>\n            <ion-option value="Al-Qadisiyyah">Al-Qadisiyyah</ion-option>\n            <ion-option value="Diyala">Diyala</ion-option>\n            <ion-option value="Dohuk">Dohuk</ion-option>\n            <ion-option value="Erbil">Erbil</ion-option>\n            <ion-option value="Karbala">Karbala</ion-option>\n            <ion-option value="Kirkuk">Kirkuk</ion-option>\n            <ion-option value="Maysan">Maysan</ion-option>\n            <ion-option value="Muthanna">Muthanna</ion-option>\n            <ion-option value="Najaf">Najaf</ion-option>\n            <ion-option value="Nineveh">Nineveh</ion-option>\n            <ion-option value="Saladin">Saladin</ion-option>\n            <ion-option value="Sulaymaniyah">Sulaymaniyah</ion-option>\n            <ion-option value="Wasit">Wasit</ion-option> \n          </ion-select>\n        </ion-item>\n\n\n\n        <ion-item  text-right>\n          <ion-label floating>طريقة الدفع</ion-label>\n          <ion-select [(ngModel)]="locations.paidBy">\n            <ion-option value="Western Union">Western Union</ion-option>\n            <ion-option value="AsiaHawala">آسيا حوالة</ion-option>\n            <ion-option value="Zain Cash">Zain Cash</ion-option>\n            <ion-option value="insideOffice">مكاتب تحويل محافظات</ion-option>\n          </ion-select>\n        </ion-item>\n \n\n          <ion-item  >\n   <button ion-button block class="buttonID2"  (click)="addLocation(locations)">اضافة     </button>\n\n            </ion-item>\n      \n      </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/add-donor/add-donor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_donors_donors__["a" /* DonorsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AddDonorPage);
    return AddDonorPage;
}());

//# sourceMappingURL=add-donor.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_statistics_statistics__ = __webpack_require__(141);
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
 * Generated class for the AddStatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddStatisticsPage = /** @class */ (function () {
    function AddStatisticsPage(navCtrl, navParams, newsProvider, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newsProvider = newsProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.locations = {
            key: '',
            title: '',
            discription: '',
            latitude: '',
            longitude: '',
            author: '',
            date: '',
            province: '',
            show: 'false',
            like: '0',
            dislike: '0'
        };
        var loginStatus = localStorage.getItem("login");
        if (loginStatus !== 'true') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
    }
    AddStatisticsPage.prototype.addLocation = function (locations) {
        var _this = this;
        this.showLoader();
        this.newsProvider.addChallenge(locations).then(function (ref) {
            console.log(locations);
            _this.showAlert("شكرا", "سيتم التدقيق واضافة البيانات قريبا");
            _this.loading.dismiss();
            _this.navCtrl.pop();
        });
    };
    AddStatisticsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonorsPage');
    };
    AddStatisticsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: " لطفا انتظر قليلا",
        });
        this.loading.present();
    };
    AddStatisticsPage.prototype.showAlert = function (titles, subTitles) {
        var alert = this.alertCtrl.create({
            title: titles,
            subTitle: subTitles,
            buttons: ['OK']
        });
        alert.present();
    };
    AddStatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-statistics',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/add-statistics/add-statistics.html"*/'<!--\n  Generated template for the AddStatisticsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border no-shadow>\n\n    <ion-navbar >\n      \n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n\n    <img  no-lines id="headerImg" src="assets/imgs/chart.svg" >\n\n    <ion-list  >\n\n    <ion-item  text-right>\n      <ion-label   floating>الموضوع</ion-label>\n      <ion-input   text-right  [(ngModel)]=\'locations.title\' type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item  text-right>\n      <ion-label  floating>الاسم الثلاثي</ion-label>\n      <ion-input   text-right  [(ngModel)]=\'locations.author\'  type="text"></ion-input>\n    </ion-item>\n\n\n        <ion-item  text-right  >\n          <ion-label floating>المحافظة</ion-label>\n          <ion-select [(ngModel)]="locations.province">\n            <ion-option value="Al Anbar">Al Anbar</ion-option>\n            <ion-option selected="selected" value="Babil">Babil</ion-option>\n            <ion-option value="Baghdad">Baghdad</ion-option>\n            <ion-option value="Basra">Basra</ion-option>\n            <ion-option value="Dhi Qar">Dhi Qar</ion-option>\n            <ion-option value="Al-Qadisiyyah">Al-Qadisiyyah</ion-option>\n            <ion-option value="Diyala">Diyala</ion-option>\n            <ion-option value="Dohuk">Dohuk</ion-option>\n            <ion-option value="Erbil">Erbil</ion-option>\n            <ion-option value="Karbala">Karbala</ion-option>\n            <ion-option value="Kirkuk">Kirkuk</ion-option>\n            <ion-option value="Maysan">Maysan</ion-option>\n            <ion-option value="Muthanna">Muthanna</ion-option>\n            <ion-option value="Najaf">Najaf</ion-option>\n            <ion-option value="Nineveh">Nineveh</ion-option>\n            <ion-option value="Saladin">Saladin</ion-option>\n            <ion-option value="Sulaymaniyah">Sulaymaniyah</ion-option>\n            <ion-option value="Wasit">Wasit</ion-option> \n          </ion-select>\n        </ion-item>\n\n\n\n        <ion-item  text-right>\n            <ion-label floating>التاريخ </ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="locations.date"></ion-datetime>\n          </ion-item>\n\n          <ion-item>\n              <ion-textarea   text-right placeholder="تفاصيل الخبر"  [(ngModel)]="locations.discription"></ion-textarea>\n            </ion-item>\n        \n\n          <ion-item  >\n   <button ion-button block class="buttonID2"  (click)="addLocation(locations)">اضافة     </button>\n\n            </ion-item>\n\n      \n      </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/add-statistics/add-statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_statistics_statistics__["a" /* StatisticsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AddStatisticsPage);
    return AddStatisticsPage;
}());

//# sourceMappingURL=add-statistics.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsVotingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voted_voted__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_statistics_statistics__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(49);
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
 * Generated class for the StatisticsVotingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatisticsVotingPage = /** @class */ (function () {
    function StatisticsVotingPage(db, alertCtrl, navCtrl, loadingCtrl, navParams) {
        var _this = this;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.data = {
            title: '',
            key: '',
            email: '',
            uid: '',
            like: '',
            dislike: ''
        };
        this.listItems = [];
        var loginStatus = localStorage.getItem("login");
        if (loginStatus !== 'true') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
        }
        this.showLoader();
        this.data.title = navParams.get("title");
        this.data.key = navParams.get("key");
        this.data.like = navParams.get("like");
        this.data.dislike = navParams.get("dislike");
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
        if (user != null) {
            // this.data.email = user.email;
            // this.data.uid = user.uid; 
            this.data.email = localStorage.getItem("email");
            this.data.uid = localStorage.getItem("uid");
        }
        this.itemsRef = db.list('answers/' + this.data.key);
        this.itemsRef.snapshotChanges(['child_added'])
            .subscribe(function (actions) {
            actions.forEach(function (action) {
                //   console.log(action.type);
                //  console.log(action.key);
                if (action.key == 'email') {
                    console.log(action.payload.val());
                    if (action.payload.val() == _this.data.email) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__voted_voted__["a" /* VotedPage */]);
                    }
                }
            });
        });
        this.loading.dismiss();
    }
    StatisticsVotingPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: " يعتمد على سرعة النترنت لديك لطفا انتظر قليلا",
        });
        this.loading.present();
    };
    StatisticsVotingPage.prototype.showAlert = function (titles, subTitles) {
        var alert = this.alertCtrl.create({
            title: titles,
            subTitle: subTitles,
            buttons: ['OK']
        });
        alert.present();
    };
    StatisticsVotingPage.prototype.ionViewDidLoad = function () {
    };
    StatisticsVotingPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_statistics_statistics__["a" /* StatisticsPage */]);
    };
    StatisticsVotingPage.prototype.like = function () {
        console.log("like");
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('answers/' + this.data.key).set({
            title: this.data.title,
            email: this.data.email,
            like: '1',
            dislike: '0',
            statisticsKey: this.data.key,
            userId: this.data.uid
        });
        //update 
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('statistics/' + this.data.key).update({
            like: (parseInt(this.data.like) + 1).toString(),
            dislike: (parseInt(this.data.dislike) - 1).toString(),
        });
    };
    StatisticsVotingPage.prototype.dislike = function () {
        console.log("dislike");
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('answers/' + this.data.key).set({
            title: this.data.title,
            email: this.data.email,
            like: '0',
            dislike: '1',
            statisticsKey: this.data.key,
            userId: this.data.uid
        });
        //update 
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('statistics/' + this.data.key).update({
            like: (parseInt(this.data.like) - 1).toString(),
            dislike: (parseInt(this.data.dislike) + 1).toString(),
        });
    };
    StatisticsVotingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statistics-voting',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/statistics-voting/statistics-voting.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n\n\n\n\n<ion-content  >\n    <img (click)="back()"  id="backCss" src="assets/imgs/back.svg"  >  \n  <ion-grid>\n      <ion-row>\n        <ion-col text-right>\n            <h1 text-right padding   id=\'mainHeader\'>    شاركنا رأيك    </h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col text-right padding>\n           الاخبار عبر الانترنت قد تكون سليمة ان كنت من المحافظة نفسها برأيك هل الخبر صحيح  \n         \n          </ion-col>\n        </ion-row>\n       \n    </ion-grid>\n\n\n  <ion-grid id=\'grid2\'  >\n      <div  >\n          <ion-grid>\n              <ion-row>\n                <ion-col id="headerImg"> \n\n                    <ion-row>\n                        <ion-col>\n                            <img    src="assets/imgs/like1.svg" (click)="like()">     \n                        </ion-col>\n                  \n                      </ion-row>\n\n                   \n                </ion-col>\n\n\n\n\n                <ion-col  text-right  id="headerImg"> \n\n                    <ion-row>\n                        <ion-col>\n                            <img   src="assets/imgs/dislike1.svg" (click)="dislike()">     \n                        </ion-col>\n                   \n                      </ion-row>\n\n                   \n                </ion-col>\n\n \n              </ion-row>\n            </ion-grid>\n        </div>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/statistics-voting/statistics-voting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StatisticsVotingPage);
    return StatisticsVotingPage;
}());

//# sourceMappingURL=statistics-voting.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_statistics_statistics__ = __webpack_require__(74);
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
 * Generated class for the VotedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VotedPage = /** @class */ (function () {
    function VotedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VotedPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_statistics_statistics__["a" /* StatisticsPage */]);
    };
    VotedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VotedPage');
    };
    VotedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-voted',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/voted/voted.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n\n\n\n\n<ion-content  >\n        <img (click)="back()"  id="backCss" src="assets/imgs/back.svg"  >  \n    <ion-grid>\n       \n        <ion-row>\n            <ion-col >\n            \n  <img   id="headerImg" src="assets/imgs/done.svg"  >   \n            </ion-col>\n          </ion-row>\n         \n      </ion-grid>\n  \n  \n    \n  </ion-content>\n  '/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/voted/voted.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], VotedPage);
    return VotedPage;
}());

//# sourceMappingURL=voted.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_donors_donors__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_donor_add_donor__ = __webpack_require__(164);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the DonorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonorsPage = /** @class */ (function () {
    function DonorsPage(navCtrl, navParams, donorsProvider, db, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.donorsProvider = donorsProvider;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.showLoader();
        this.countryRef = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/Donors');
        this.countryRef.on('value', function (countryList) {
            var countries = [];
            countryList.forEach(function (country) {
                countries.push(country.val());
                return false;
            });
            _this.countryList = countries;
            _this.loadedCountryList = countries;
        });
        this.getUserInfoQRcode().then(function (newUser) {
            _this.loading.dismiss();
        }, function (error) {
            //      this.loading.dismiss();
            _this.showAlert('Sorry !', 'Please check email format and password more than 6 digits:( !');
        }).catch(function (e) {
            _this.loading.dismiss();
            _this.showAlert('Sorry !', 'Please check email format and password more than 6 digits:( !');
        });
        this.donorsList = this.donorsProvider.getChallengeList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    DonorsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonorsPage');
    };
    DonorsPage.prototype.initializeItems = function () {
        this.countryList = this.loadedCountryList;
    };
    DonorsPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.countryList = this.countryList.filter(function (v) {
            if (v.name && q) {
                if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.countryList.length);
    };
    DonorsPage.prototype.goToDonor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_donor_add_donor__["a" /* AddDonorPage */]);
    };
    DonorsPage.prototype.getUserInfoQRcode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.database.ref('addChallenge').once('value').then(function (snapshot) {
                // return snapshot.val() || 'Anoynymous';
                var data = (snapshot.val()) || 'Anoynymous';
                //console.log(data)
                if (data === 'Anoynymous') {
                    resolve('Anoynymous');
                }
                else {
                    resolve(data);
                }
            }, function (err) {
                reject('myerror: ' + err);
            });
        });
    };
    DonorsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: " يعتمد على سرعة النترنت لديك لطفا انتظر قليلا",
        });
        this.loading.present();
    };
    DonorsPage.prototype.showAlert = function (titles, subTitles) {
        var alert = this.alertCtrl.create({
            title: titles,
            subTitle: subTitles,
            buttons: ['OK']
        });
        alert.present();
    };
    DonorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donors',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/donors/donors.html"*/'<!--\n  Generated template for the DonorsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border no-shadow>\n\n    <ion-navbar >\n      \n    </ion-navbar>\n  \n  </ion-header>\n<ion-content  >\n\n  <ion-searchbar id="mySearchbar" (ionInput)="getItems($event)"></ion-searchbar>\n\n\n    \n    \n\n        <ion-grid>\n            <ion-row>\n              <ion-col text-right>\n                  <h1 text-right padding id="staticss">    المتبرعين    </h1>\n              </ion-col>\n            </ion-row>\n            <!-- <ion-row>\n                <ion-col text-right padding>\n                    عند تحويل المبلغ نرجوا ملئ معلوماتك \n                    عند تحويلك للمبلغ سيتم عرض اسمك هنا مع المتبرعين \n                </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col text-right padding>\n                      <span id="spanClick" (click)="goToDonor()"> اضغط هنا   </span> \n                  </ion-col>\n                </ion-row> -->\n          </ion-grid>\n          \n      <br>\n       \n\n\n        <ion-list  *ngFor="let country of countryList">\n            <div *ngIf="country.show === true"> \n                <ion-item >\n                    <ion-thumbnail item-start>\n                        <img src="assets/imgs/donor.svg">\n                  </ion-thumbnail>\n                   \n                 \n                  <h2 text-right>      {{country.name}}        </h2>\n                  <p  text-right>   {{country.amount}}    دع      </p>\n               \n                </ion-item>\n              </div>\n         </ion-list>\n \n  \n    \n\n \n\n\n \n    \n    </ion-content>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/donors/donors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_donors_donors__["a" /* DonorsProvider */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], DonorsPage);
    return DonorsPage;
}());

//# sourceMappingURL=donors.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowtopayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_howtopay_howtopay__ = __webpack_require__(273);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the HowtopayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HowtopayPage = /** @class */ (function () {
    function HowtopayPage(navCtrl, howtopayProvider, navParams) {
        this.navCtrl = navCtrl;
        this.howtopayProvider = howtopayProvider;
        this.navParams = navParams;
        this.howtopayList = this.howtopayProvider.getChallengeList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    HowtopayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HowtopayPage');
    };
    HowtopayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-howtopay',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/howtopay/howtopay.html"*/'<!--\n  Generated template for the HowtopayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n\n<ion-content padding>\n\n \n\n\n<div id=\'mainHeader\'>\n  <p text-right	>      طرق التبرع     </p>\n</div> \n \n\n<div id="ourbranch" text-right  >\n    <p text-right	>   مرحبا بكم و شكرا لتبرعكم   </p>\n    <p text-right	>   بدعمكم يزداد العطاء  </p>\n<div  *ngFor="let challenge of howtopayList | async">\n    <p text-right	> : يمكنكم التبرع عن طريق إحدى الوسائل التاليه     </p>\n    <p text-right	> {{challenge.zain}} ١- زين كاش على الرقم    </p>\n    <p text-right	> {{challenge.asia}}  ٢- اسيا حواله على الرقم   </p>\n    <br>\n    <p text-right	>\n      \n        التحويل عن طريق الويسترن يونيون يتطلب منك \n        تزويد اسم الشخص المستلم كما مكتوب في الجواز و اسم البلد و المحافظة و عند استلامك رقم التحوالة يرجى ارساله الى المستلم برساله نصية او اي طريقة اخرى\n      \n      <br>      <br>\n\n       التحويل داخل القطر يتم عن طريق مكاتب التحويل المنتشرة في المحافظات حيث يتطلب \n       اسم مستلم الحواله و المحافظة و عند اتمام التحويل يبلغ الطرف المستلم باتمام التحويل و عنوان المكتب في محافظته لاستلام المبلغ\n\n       <p text-right	>   {{challenge.westernunion}} </p>\n   \n    <p text-right	>   {{challenge.ourbranches}} </p>\n    <p text-right	>   {{challenge.support1}} </p>\n    <p text-right	>   {{challenge.support2}} </p>\n    <p text-right	>   {{challenge.support3}} </p>\n    <p text-right	>   {{challenge.support4}} </p>\n    <p text-right	>   {{challenge.support5}} </p>\n    <p text-right	>   {{challenge.support6}} </p>\n    <p text-right	>   {{challenge.support7}} </p>\n    <p text-right	>   {{challenge.support8}} </p>\n    <p text-right	>   {{challenge.support9}} </p>\n    <p text-right	>   {{challenge.support10}} </p>\n\n  </div>\n</div>\n\n \n\n</ion-content>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/howtopay/howtopay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_howtopay_howtopay__["a" /* HowtopayProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HowtopayPage);
    return HowtopayPage;
}());

//# sourceMappingURL=howtopay.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_news_news__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_details_news_details__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_news_add_news__ = __webpack_require__(172);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, newsProvider, navParams, db, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.newsProvider = newsProvider;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.showLoader();
        this.getUserInfoQRcode().then(function (newUser) {
            _this.loading.dismiss();
        }, function (error) {
            //      this.loading.dismiss();
            _this.showAlert('Sorry !', 'Please check email format and password more than 6 digits:( !');
        }).catch(function (e) {
            _this.loading.dismiss();
            _this.showAlert('Sorry !', 'Please check email format and password more than 6 digits:( !');
        });
        this.newsList = this.newsProvider.getChallengeList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HowtopayPage');
    };
    NewsPage.prototype.goToAddNEWS = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_news_add_news__["a" /* AddNewsPage */]);
    };
    NewsPage.prototype.goToDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__news_details_news_details__["a" /* NewsDetailsPage */], {
            id: id
        });
        console.log(id);
    };
    NewsPage.prototype.getUserInfoQRcode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.database.ref('addChallenge').once('value').then(function (snapshot) {
                // return snapshot.val() || 'Anoynymous';
                var data = (snapshot.val()) || 'Anoynymous';
                //console.log(data)
                if (data === 'Anoynymous') {
                    resolve('Anoynymous');
                }
                else {
                    resolve(data);
                }
            }, function (err) {
                reject('myerror: ' + err);
            });
        });
    };
    NewsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: " يعتمد على سرعة النترنت لديك لطفا انتظر قليلا",
        });
        this.loading.present();
    };
    NewsPage.prototype.showAlert = function (titles, subTitles) {
        var alert = this.alertCtrl.create({
            title: titles,
            subTitle: subTitles,
            buttons: ['OK']
        });
        alert.present();
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/news/news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n\n\n\n\n<ion-content  >\n\n    <ion-grid>\n        <ion-row>\n          <ion-col text-right>\n              <h1 text-right padding   id=\'mainHeader\'>    الاخبار    </h1>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-right padding>\n              اذا كنت تمتلك اخبار ومن مصادر مؤكدة يمكنم اضافتها   \n           <p>  <span id="spanClick" (click)="goToAddNEWS()"> اضغط هنا   </span> </p> \n            </ion-col>\n          </ion-row>\n         \n      </ion-grid>\n\n \n    <ion-grid id=\'grid2\'   *ngFor="let subjects of newsList | async">\n        <div *ngIf="subjects.show === \'true\'">\n       <ion-row >\n      \n              <ion-col  (click)="goToDetails( subjects.key )">\n                <div> <img src="assets/imgs/message3.svg">\n                </div>\n                 <div class="top-right">  <p class="myColor">   {{ subjects.title  }}   </p>     </div>\n                 <div class="bottom-left">    {{ subjects.province  }}   </div>\n              </ion-col>\n           \n            </ion-row>\n          </div>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_news_news__["a" /* NewsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_news_news__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(23);
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
 * Generated class for the NewsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsDetailsPage = /** @class */ (function () {
    function NewsDetailsPage(navCtrl, newsProvider, navParams, db, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.newsProvider = newsProvider;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.newsList = {
            discription: "",
            latitude: "",
            longitude: "",
            title: ""
        };
        this.UnData = [];
        this.showLoader();
        this.getUserInfoQRcode().then(function (newUser) {
            _this.loading.dismiss();
        }, function (error) {
            //      this.loading.dismiss();
            _this.showAlert('Sorry !', 'Please check email format and password more than 6 digits:( !');
        }).catch(function (e) {
            _this.loading.dismiss();
            _this.showAlert('Sorry !', 'Please check email format and password more than 6 digits:( !');
        });
        this.id = navParams.get('id');
        this.db.list("news/" + this.id).valueChanges().subscribe(function (_data) {
            _this.UnData = _data;
            console.log(_this.UnData);
        });
    }
    NewsDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsDetailsPage');
    };
    NewsDetailsPage.prototype.getUserInfoQRcode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.database.ref('addChallenge').once('value').then(function (snapshot) {
                // return snapshot.val() || 'Anoynymous';
                var data = (snapshot.val()) || 'Anoynymous';
                //console.log(data)
                if (data === 'Anoynymous') {
                    resolve('Anoynymous');
                }
                else {
                    resolve(data);
                }
            }, function (err) {
                reject('myerror: ' + err);
            });
        });
    };
    NewsDetailsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: " يعتمد على سرعة النترنت لديك لطفا انتظر قليلا",
        });
        this.loading.present();
    };
    NewsDetailsPage.prototype.showAlert = function (titles, subTitles) {
        var alert = this.alertCtrl.create({
            title: titles,
            subTitle: subTitles,
            buttons: ['OK']
        });
        alert.present();
    };
    NewsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-details',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/news-details/news-details.html"*/'<!--\n  Generated template for the NewsDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border no-shadow >\n\n  <ion-navbar  >\n   \n  </ion-navbar>\n\n</ion-header>\n \n\n\n<ion-content  >\n\n\n    \n        <div text-center  >  \n         \n          <ion-grid id="myCSS2">\n              <ion-row>\n                  <ion-col>\n                      <h4 class="myColor">  {{ UnData[7]}}   </h4>  \n                  </ion-col>\n              </ion-row>\n              \n            </ion-grid>\n            <ion-grid id="myCSS3">\n          \n                <ion-row>\n                  <ion-col  text-left>\n                      {{ UnData[1]}} \n                  </ion-col>\n                  <ion-col text-right>\n                      {{ UnData[0]}} \n                  </ion-col>\n                 \n                </ion-row>\n              </ion-grid>\n        </div>\n   \n     \n   \n      \n\n\n    <!-- <img src="../../assets/imgs/Rectangle.svg"> -->\n\n    <div id="myCSS" >\n      \n        <p text-right	>  {{ UnData[2]}}  </p>\n        \n      \n    \n    </div>\n\n\n   \n  \n  \n  \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/news-details/news-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_news_news__["a" /* NewsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], NewsDetailsPage);
    return NewsDetailsPage;
}());

//# sourceMappingURL=news-details.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_news_news__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(49);
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
 * Generated class for the AddNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddNewsPage = /** @class */ (function () {
    function AddNewsPage(navCtrl, navParams, newsProvider, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newsProvider = newsProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.locations = {
            key: '',
            title: '',
            discription: '',
            latitude: '',
            longitude: '',
            author: '',
            date: '',
            province: '',
            show: 'false'
        };
        var loginStatus = localStorage.getItem("login");
        if (loginStatus !== 'true') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }
    }
    AddNewsPage.prototype.addLocation = function (locations) {
        var _this = this;
        this.showLoader();
        this.newsProvider.addChallenge(locations).then(function (ref) {
            _this.showAlert("شكرا", "سيتم التدقيق واضافة البيانات قريبا");
            _this.loading.dismiss();
            _this.navCtrl.pop();
        });
    };
    AddNewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonorsPage');
    };
    AddNewsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: " لطفا انتظر قليلا",
        });
        this.loading.present();
    };
    AddNewsPage.prototype.showAlert = function (titles, subTitles) {
        var alert = this.alertCtrl.create({
            title: titles,
            subTitle: subTitles,
            buttons: ['OK']
        });
        alert.present();
    };
    AddNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-news',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/add-news/add-news.html"*/'<!--\n  Generated template for the AddNewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border no-shadow>\n\n    <ion-navbar >\n      \n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n\n    <img  no-lines id="headerImg" src="assets/imgs/newspaper.svg" >\n\n    <ion-list  >\n\n    <ion-item  text-right>\n      <ion-label   floating>الموضوع</ion-label>\n      <ion-input   text-right  [(ngModel)]=\'locations.title\' type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item  text-right>\n      <ion-label  floating>الاسم الثلاثي</ion-label>\n      <ion-input   text-right  [(ngModel)]=\'locations.author\'  type="text"></ion-input>\n    </ion-item>\n\n\n        <ion-item  text-right  >\n          <ion-label floating>المحافظة</ion-label>\n          <ion-select [(ngModel)]="locations.province">\n            <ion-option value="Al Anbar">Al Anbar</ion-option>\n            <ion-option selected="selected" value="Babil">Babil</ion-option>\n            <ion-option value="Baghdad">Baghdad</ion-option>\n            <ion-option value="Basra">Basra</ion-option>\n            <ion-option value="Dhi Qar">Dhi Qar</ion-option>\n            <ion-option value="Al-Qadisiyyah">Al-Qadisiyyah</ion-option>\n            <ion-option value="Diyala">Diyala</ion-option>\n            <ion-option value="Dohuk">Dohuk</ion-option>\n            <ion-option value="Erbil">Erbil</ion-option>\n            <ion-option value="Karbala">Karbala</ion-option>\n            <ion-option value="Kirkuk">Kirkuk</ion-option>\n            <ion-option value="Maysan">Maysan</ion-option>\n            <ion-option value="Muthanna">Muthanna</ion-option>\n            <ion-option value="Najaf">Najaf</ion-option>\n            <ion-option value="Nineveh">Nineveh</ion-option>\n            <ion-option value="Saladin">Saladin</ion-option>\n            <ion-option value="Sulaymaniyah">Sulaymaniyah</ion-option>\n            <ion-option value="Wasit">Wasit</ion-option> \n          </ion-select>\n        </ion-item>\n\n\n\n        <ion-item  text-right>\n            <ion-label floating>التاريخ </ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="locations.date"></ion-datetime>\n          </ion-item>\n\n          <ion-item>\n              <ion-textarea   text-right placeholder="تفاصيل الخبر"  [(ngModel)]="locations.discription"></ion-textarea>\n            </ion-item>\n        \n\n          <ion-item  >\n   <button ion-button block class="buttonID2"  (click)="addLocation(locations)">اضافة     </button>\n\n            </ion-item>\n\n      \n      </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/add-news/add-news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_news_news__["a" /* NewsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AddNewsPage);
    return AddNewsPage;
}());

//# sourceMappingURL=add-news.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(49);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, authServiceProvider, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {
            email: '',
            password: ''
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.showLoader();
        var credentials = {
            email: this.data.email,
            password: this.data.password
        };
        this.authServiceProvider.signUp(credentials).then(function () {
            localStorage.setItem("login", "true");
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) {
            _this.showAlert('خطأ', "تاكد من معلوماتك");
            _this.loading.dismiss();
            console.log('error');
        });
    };
    RegisterPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: "  لطفا انتظر قليلا",
        });
        this.loading.present();
    };
    RegisterPage.prototype.showAlert = function (titles, subTitles) {
        var alert = this.alertCtrl.create({
            title: titles,
            subTitle: subTitles,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content >\n\n    <div id="headerIcon">\n      <ion-icon ios="ios-log-in" md="md-log-in"></ion-icon>\n    </div>\n  \n    <div padding>\n      \n         \n           \n            <ion-input class="inputID"  [(ngModel)]=\'data.email\' placeholder="Email" type="text"></ion-input>\n         \n           \n            <ion-input  class="inputID1"   [(ngModel)]=\'data.password\'  placeholder="password"  type="password"></ion-input>\n         \n              <button  ion-button large  class="buttonID"   ion-button large  (click)="register()" >  حساب جديد     </button>\n            \n                <a class="buttonID2" (click)="login()" >            تسجيل دخول   </a>\n               \n   \n      </div>\n  \n  \n  </ion-content>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 211:
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
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-donor/add-donor.module": [
		535,
		12
	],
	"../pages/add-news/add-news.module": [
		536,
		11
	],
	"../pages/add-statistics/add-statistics.module": [
		537,
		10
	],
	"../pages/donor/donor.module": [
		538,
		9
	],
	"../pages/donors/donors.module": [
		539,
		8
	],
	"../pages/howtopay/howtopay.module": [
		540,
		7
	],
	"../pages/login/login.module": [
		541,
		6
	],
	"../pages/news-details/news-details.module": [
		542,
		5
	],
	"../pages/news/news.module": [
		543,
		4
	],
	"../pages/register/register.module": [
		544,
		3
	],
	"../pages/statistics-voting/statistics-voting.module": [
		545,
		2
	],
	"../pages/statistics/statistics.module": [
		546,
		1
	],
	"../pages/voted/voted.module": [
		547,
		0
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
webpackAsyncContext.id = 254;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/about/about.html"*/' \n\n<ion-content text-right	 id="body">\n    <div id="mycfi" >\n        <img src="assets/imgs/codeforiraqlogo.jpg" style="padding-right: 7  %; width:90%"/>\n      </div>\n \n  <ion-card-header id="mem" >\n   \n    <h1 id="tit" style="color:#34495e;">Code For IRAQ </h1>\n    <p> فريق البرمجة من اجل العراق</p>\n  </ion-card-header>\n  <div id="cfi"  >\n      وهي مبادرة إنسانية غير ربحية تهدف الى خدمة المجتمع عن طريق البرمجة\n       . تعتبر هذه المبادرة مبادرة تعليمية حقيقية ترعى المهتمين\n        بتعلم تصميم وبرمجة تطبيقات الهاتف الجوال ومواقع الانترنت وبرامج الحاسوب\n        والشبكات والاتصالات ونظم تشغيل الحاسوب باستخدام التقنيات مفتوحة المصدر\n         كما توفر لهم جميع الدروس التعليمية اللازمة وبشكل مجاني تماماً \n      بل الاهم من ذلك تعتمد على مبدأ المواطنة\n       والمشاركة الفاعلة في تأسيس وبناء المجتمع تدعو هذه المبادرة جميع الطلبة والخريجين والهواة\n       والأساتذة الجامعيين والمهتمين مجال البرمجة وتقنيات المعلومات وكذلك الاختصاصات الاخرى\n       الى التطوع والمشاركة الفعلية لأجل الارتقاء بواقع البلد ، حيث تعتبر فرصة\n       عظيمة لاكتساب الخبرة والمهارة عن طريق تصميم وتنفيذ برامج وتطبيقات\n       خدمية من شأنها خدمة المواطن وذلك ضمن مجاميع عمل نشطة وفعّالة يتعاون\n       فيها جميع الأفراد كفريق واحد يتبادل الاراء والخبرات ويطرح الافكار لتتم\n       مناقشتها وتطبيقها على أرض الواقع ، كما تفتح المجال لجميع المواطنين العراقيين\n       ومن جميع الاختصاصات إلى المشاركة الفاعلة في هذه المشاريع لرفد الفريق بالخبرات\n       والافكار والاراء والمقترحات التي \n       من شأنها خدمة المجتمع بأفضل ما يمكن\n    \n      <p text-right	>للانضمام او المراسلة عبر البريد الالكتروني</p>\n      <p> info@codeforiraq.org  </p>  \n  </div>\n \n \n\n</ion-content>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistics_statistics__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__donors_donors__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_required_amount_required_amount__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_best_donor_name_best_donor_name__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_weeklyquote_weeklyquote__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(73);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, authServiceProvider, challengeListService, bestDonorNameProvider, weeklyquoteProvider, db, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.authServiceProvider = authServiceProvider;
        this.challengeListService = challengeListService;
        this.bestDonorNameProvider = bestDonorNameProvider;
        this.weeklyquoteProvider = weeklyquoteProvider;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.email = '';
        this.loggedin = false;
        var status;
        this.authServiceProvider.afAuth.authState.subscribe(function (user) {
            if (user) {
                console.log(user.email);
                console.log(user.uid);
                localStorage.setItem("email", user.email);
                localStorage.setItem("uid", user.uid);
                status = localStorage.getItem("login");
            }
            else {
                console.log('no user');
                localStorage.setItem("email", '');
                localStorage.setItem("uid", '');
            }
        }, function () {
            console.log('no user');
        });
        if (status == '') {
            this.loggedin = false;
        }
        else {
            this.loggedin = true;
            this.email = localStorage.getItem("email");
        }
        this.showLoader();
        this.getUserInfoQRcode().then(function (newUser) {
            _this.loading.dismiss();
        }, function (error) {
            console.log('error: ' + error);
            //      this.loading.dismiss();
            _this.showAlert('Sorry !', 'Please check email format and password more than 6 digits:( !');
        }).catch(function (e) {
            console.log(e);
            _this.loading.dismiss();
            _this.showAlert('Sorry !', 'Please check email format and password more than 6 digits:( !');
        });
        this.challengeList = this.challengeListService.getChallengeList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.bestDonorNameList = this.bestDonorNameProvider.getChallengeList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.weeklyquoteList = this.weeklyquoteProvider.getChallengeList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    HomePage.prototype.donors = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__donors_donors__["a" /* DonorsPage */]);
    };
    HomePage.prototype.statistics = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__statistics_statistics__["a" /* StatisticsPage */]);
    };
    HomePage.prototype.getUserInfoQRcode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.database.ref('addChallenge').once('value').then(function (snapshot) {
                // return snapshot.val() || 'Anoynymous';
                var data = (snapshot.val()) || 'Anoynymous';
                //console.log(data)
                if (data === 'Anoynymous') {
                    resolve('Anoynymous');
                }
                else {
                    resolve(data);
                }
            }, function (err) {
                reject('myerror: ' + err);
            });
        });
    };
    HomePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: " يعتمد على سرعة النترنت لديك لطفا انتظر قليلا",
        });
        this.loading.present();
    };
    HomePage.prototype.showAlert = function (titles, subTitles) {
        var alert = this.alertCtrl.create({
            title: titles,
            subTitle: subTitles,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.logout = function () {
        this.authServiceProvider.signOut().then(function () {
        });
        // this.navCtrl.setRoot(LoginPage)
        location.reload();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/home/home.html"*/'<ion-content >\n\n  \n\n<div   *ngIf="email">\n  <img   id="headerImg" src="assets/imgs/sign-out.svg" (click)="logout()">           \n <h5  id=\'mainDiv2\' text-left  text-center class="emailCSS">  {{email}}  </h5>  \n</div>\n\n\n \n\n\n<div padding id=\'mainDiv\'>\n    \n<div  *ngFor="let challenge of challengeList | async" >\n    <h4 id=\'mainH2\' text-center	>{{challenge.title}}</h4>\n    <hr>\n</div>\n  \n    <ion-grid id="mainText">\n        <ion-row>\n          <ion-col *ngFor="let challenge of challengeList | async" >\n              <h3>دع   {{challenge.requiredamount}}  </h3>\n          </ion-col>\n          <ion-col text-right>\n              <h3>   المطلوب   </h3>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col *ngFor="let challenge of challengeList | async" >\n                <h3> دع  {{challenge.donorsamount}}  </h3>\n            </ion-col>\n            <ion-col text-right>\n                <h3>  التبرعات   </h3>\n            </ion-col>\n          </ion-row>\n         \n      </ion-grid>\n\n\n     \n   \n\n</div>\n\n\n\n<ion-grid id=\'grid2\' >\n    <ion-row>\n      <ion-col  >\n          <div class="container">\n         <img src="assets/imgs/message.svg">\n         </div>\n         <div class="top-right">  <p  class="myColor2">افضل متبرع</p>     </div>\n         <div class="centered"  *ngFor="let bestDonorName of bestDonorNameList | async" >  \n             <p>     {{bestDonorName.bestDonorName}}    </p>  \n             </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n            <ion-col  (click)="donors()">\n              <div>\n                  <img src="assets/imgs/btnMain.svg">\n              </div>\n              <div class="top-right2">   <h6  class="myColor">المتبرعين</h6>    </div>\n            </ion-col>\n            <ion-col  (click)="statistics()">\n                <div>\n                <img src="assets/imgs/btnMain2.svg">\n              </div>\n                <div class="top-right3"><h6 class="myColor">احصائيات</h6>   </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n          <ion-col   >\n            <div> <img src="assets/imgs/message2.svg">\n            </div>\n            <div   *ngFor="let weeklyquote of weeklyquoteList | async">\n             <div class="top-right">  <p class="myColor">  {{weeklyquote.quotename}} </p>     </div>\n             <div class="centered2">  <p class="myColor">   {{weeklyquote.myQuote}}  </p>  </div>\n            </div>\n          </ion-col>\n        </ion-row>\n   \n\n  </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_required_amount_required_amount__["a" /* RequiredAmountProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_best_donor_name_best_donor_name__["a" /* BestDonorNameProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_weeklyquote_weeklyquote__["a" /* WeeklyquoteProvider */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequiredAmountProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
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
  Generated class for the RequiredAmountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RequiredAmountProvider = /** @class */ (function () {
    function RequiredAmountProvider(db) {
        this.db = db;
        this.challengeListRef = this.db.list('addChallenge');
        console.log('Hello GiftServiceProvider Provider');
    }
    RequiredAmountProvider.prototype.getChallengeList = function () {
        return this.challengeListRef;
    };
    RequiredAmountProvider.prototype.getRequiredAmount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.database.ref('addChallenge').once('value').then(function (snapshot) {
                // return snapshot.val() || 'Anoynymous';
                var data = (snapshot.val()) || 'Anoynymous';
                //console.log(data)
                if (data === 'Anoynymous') {
                    resolve('Anoynymous');
                }
                else {
                    resolve(data);
                }
            }, function (err) {
                reject('myerror: ' + err);
            });
        });
    };
    RequiredAmountProvider.prototype.addChallenge = function (challenge) {
        return this.challengeListRef.push(challenge);
    };
    RequiredAmountProvider.prototype.updateChallenge = function (challenge) {
        return this.challengeListRef.update(challenge.key, challenge);
    };
    RequiredAmountProvider.prototype.removeChallenge = function (challenge) {
        return this.challengeListRef.remove(challenge);
    };
    RequiredAmountProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RequiredAmountProvider);
    return RequiredAmountProvider;
}());

//# sourceMappingURL=required-amount.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BestDonorNameProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
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
  Generated class for the BestDonorNameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BestDonorNameProvider = /** @class */ (function () {
    function BestDonorNameProvider(db) {
        this.db = db;
        this.challengeListRef = this.db.list('addBestDonorName');
        console.log('Hello GiftServiceProvider Provider');
    }
    BestDonorNameProvider.prototype.getChallengeList = function () {
        return this.challengeListRef;
    };
    BestDonorNameProvider.prototype.addChallenge = function (challenge) {
        return this.challengeListRef.push(challenge);
    };
    BestDonorNameProvider.prototype.updateChallenge = function (challenge) {
        return this.challengeListRef.update(challenge.key, challenge);
    };
    BestDonorNameProvider.prototype.removeChallenge = function (challenge) {
        return this.challengeListRef.remove(challenge);
    };
    BestDonorNameProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], BestDonorNameProvider);
    return BestDonorNameProvider;
}());

//# sourceMappingURL=best-donor-name.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeeklyquoteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
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
  Generated class for the WeeklyquoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WeeklyquoteProvider = /** @class */ (function () {
    function WeeklyquoteProvider(db) {
        this.db = db;
        this.challengeListRef = this.db.list('addWeeklyQuote');
        console.log('Hello GiftServiceProvider Provider');
    }
    WeeklyquoteProvider.prototype.getChallengeList = function () {
        return this.challengeListRef;
    };
    WeeklyquoteProvider.prototype.addChallenge = function (challenge) {
        return this.challengeListRef.push(challenge);
    };
    WeeklyquoteProvider.prototype.updateChallenge = function (challenge) {
        return this.challengeListRef.update(challenge.key, challenge);
    };
    WeeklyquoteProvider.prototype.removeChallenge = function (challenge) {
        return this.challengeListRef.remove(challenge);
    };
    WeeklyquoteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], WeeklyquoteProvider);
    return WeeklyquoteProvider;
}());

//# sourceMappingURL=weeklyquote.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowtopayProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
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
  Generated class for the HowtopayProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HowtopayProvider = /** @class */ (function () {
    function HowtopayProvider(db) {
        this.db = db;
        this.challengeListRef = this.db.list('howtopay');
        console.log('Hello GiftServiceProvider Provider');
    }
    HowtopayProvider.prototype.getChallengeList = function () {
        return this.challengeListRef;
    };
    HowtopayProvider.prototype.addChallenge = function (challenge) {
        return this.challengeListRef.push(challenge);
    };
    HowtopayProvider.prototype.updateChallenge = function (challenge) {
        return this.challengeListRef.update(challenge.key, challenge);
    };
    HowtopayProvider.prototype.removeChallenge = function (challenge) {
        return this.challengeListRef.remove(challenge);
    };
    HowtopayProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HowtopayProvider);
    return HowtopayProvider;
}());

//# sourceMappingURL=howtopay.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the DonorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonorPage = /** @class */ (function () {
    function DonorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DonorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonorPage');
    };
    DonorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donor',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/donor/donor.html"*/'<!--\n  Generated template for the DonorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>donor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/donor/donor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DonorPage);
    return DonorPage;
}());

//# sourceMappingURL=donor.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(452);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_donor_donor__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_donors_donors__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_howtopay_howtopay__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_news_news__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_statistics_statistics__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_news_details_news_details__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_database_info_database_info__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_voted_voted__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_statistics_voting_statistics_voting__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_add_statistics_add_statistics__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_news_add_news__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_add_donor_add_donor__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_required_amount_required_amount__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_best_donor_name_best_donor_name__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_weeklyquote_weeklyquote__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_howtopay_howtopay__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_news_news__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_nl2br_pipe__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_statistics_statistics__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_donors_donors__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angularfire2_auth__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// Import the AF2 Module











// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyDG_syGL6Z3H76qpcnBb1H7p4zrImpDSRU",
    authDomain: "saveiraq-f0efd.firebaseapp.com",
    databaseURL: "https://saveiraq-f0efd.firebaseio.com",
    projectId: "saveiraq-f0efd",
    storageBucket: "",
    messagingSenderId: "800213115629"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_donor_donor__["a" /* DonorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_donors_donors__["a" /* DonorsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_howtopay_howtopay__["a" /* HowtopayPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_news_details_news_details__["a" /* NewsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_statistics_add_statistics__["a" /* AddStatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_news_add_news__["a" /* AddNewsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_add_donor_add_donor__["a" /* AddDonorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_statistics_voting_statistics_voting__["a" /* StatisticsVotingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_voted_voted__["a" /* VotedPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-donor/add-donor.module#AddDonorPageModule', name: 'AddDonorPage', segment: 'add-donor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-news/add-news.module#AddNewsPageModule', name: 'AddNewsPage', segment: 'add-news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-statistics/add-statistics.module#AddStatisticsPageModule', name: 'AddStatisticsPage', segment: 'add-statistics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donor/donor.module#DonorPageModule', name: 'DonorPage', segment: 'donor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donors/donors.module#DonorsPageModule', name: 'DonorsPage', segment: 'donors', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/howtopay/howtopay.module#HowtopayPageModule', name: 'HowtopayPage', segment: 'howtopay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-details/news-details.module#NewsDetailsPageModule', name: 'NewsDetailsPage', segment: 'news-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statistics-voting/statistics-voting.module#StatisticsVotingPageModule', name: 'StatisticsVotingPage', segment: 'statistics-voting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statistics/statistics.module#StatisticsPageModule', name: 'StatisticsPage', segment: 'statistics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/voted/voted.module#VotedPageModule', name: 'VotedPage', segment: 'voted', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_32_nl2br_pipe__["a" /* Nl2BrPipeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_donor_donor__["a" /* DonorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_donors_donors__["a" /* DonorsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_howtopay_howtopay__["a" /* HowtopayPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_news_details_news_details__["a" /* NewsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_statistics_add_statistics__["a" /* AddStatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_news_add_news__["a" /* AddNewsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_add_donor_add_donor__["a" /* AddDonorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_statistics_voting_statistics_voting__["a" /* StatisticsVotingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_voted_voted__["a" /* VotedPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_database_info_database_info__["a" /* DatabaseInfoProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_required_amount_required_amount__["a" /* RequiredAmountProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_best_donor_name_best_donor_name__["a" /* BestDonorNameProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_weeklyquote_weeklyquote__["a" /* WeeklyquoteProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_howtopay_howtopay__["a" /* HowtopayProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_news_news__["a" /* NewsProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_statistics_statistics__["a" /* StatisticsProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_donors_donors__["a" /* DonorsProvider */],
                __WEBPACK_IMPORTED_MODULE_35_angularfire2_auth__["a" /* AngularFireAuth */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(173);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authServiceProvider, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {
            email: '',
            password: ''
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoader();
        var credentials = {
            email: this.data.email,
            password: this.data.password
        };
        this.authServiceProvider.signInWithEmail(credentials).then(function () {
            localStorage.setItem("login", "true");
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) {
            _this.showAlert('خطأ', "تاكد من معلوماتك");
            _this.loading.dismiss();
        });
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: "  لطفا انتظر قليلا",
        });
        this.loading.present();
    };
    LoginPage.prototype.showAlert = function (titles, subTitles) {
        var alert = this.alertCtrl.create({
            title: titles,
            subTitle: subTitles,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n<ion-content >\n\n  <div id="headerIcon">\n    <ion-icon ios="ios-log-in" md="md-log-in"></ion-icon>\n  </div>\n\n  <div padding>\n    \n       \n         \n          <ion-input class="inputID"  [(ngModel)]=\'data.email\' placeholder="Email" type="text"></ion-input>\n       \n         \n          <ion-input  class="inputID1"   [(ngModel)]=\'data.password\'  placeholder="password"  type="password"></ion-input>\n       \n            <button  ion-button large  class="buttonID"   ion-button large (click)="login()">تسجيل دخول</button>\n          \n              <a class="buttonID2"   (click)="goToRegister()">حساب جديد </a>\n             \n \n    </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, authServiceProvider, splashScreen) {
        this.authServiceProvider = authServiceProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.authServiceProvider.afAuth.authState.subscribe(function (user) {
            if (user) {
                console.log(user.email);
                console.log(user.uid);
                localStorage.setItem("email", user.email);
                localStorage.setItem("uid", user.uid);
            }
            else {
                console.log('no user');
                localStorage.setItem("email", '');
                localStorage.setItem("uid", '');
            }
        }, function () {
            console.log('no user');
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseInfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(526);
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
  Generated class for the DatabaseInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseInfoProvider = /** @class */ (function () {
    function DatabaseInfoProvider(http) {
        this.http = http;
        console.log('Hello DatabaseInfoProvider Provider');
    }
    DatabaseInfoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DatabaseInfoProvider);
    return DatabaseInfoProvider;
}());

//# sourceMappingURL=database-info.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(264);
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
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        console.log('Hello AuthServiceProvider Provider');
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthProvider.prototype.signInWithEmail = function (credentials) {
        console.log('sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthProvider.prototype.signUp = function (credentials) {
        console.log('register   with email');
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthProvider.prototype.signOut = function () {
        localStorage.setItem("login", "");
        localStorage.setItem("email", '');
        localStorage.setItem("uid", '');
        return this.afAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_statistics_statistics__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_statistics_add_statistics__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__statistics_voting_statistics_voting__ = __webpack_require__(166);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatisticsPage = /** @class */ (function () {
    function StatisticsPage(navCtrl, statisticsProvider, navParams, db, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.statisticsProvider = statisticsProvider;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.showLoader();
        this.getUserInfoQRcode().then(function (newUser) {
            _this.loading.dismiss();
        }, function (error) {
            //      this.loading.dismiss();
            _this.showAlert('Sorry !', 'Please check email format and password more than 6 digits:( !');
        }).catch(function (e) {
            _this.loading.dismiss();
            _this.showAlert('Sorry !', 'Please check email format and password more than 6 digits:( !');
        });
        this.newsList = this.statisticsProvider.getChallengeList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    StatisticsPage.prototype.goToAddStatistics = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_statistics_add_statistics__["a" /* AddStatisticsPage */]);
    };
    StatisticsPage.prototype.goToVotingStatistics = function (title, key, like, dislike) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__statistics_voting_statistics_voting__["a" /* StatisticsVotingPage */], {
            title: title,
            key: key,
            like: like,
            dislike: dislike,
        });
    };
    StatisticsPage.prototype.getUserInfoQRcode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.database.ref('addChallenge').once('value').then(function (snapshot) {
                // return snapshot.val() || 'Anoynymous';
                var data = (snapshot.val()) || 'Anoynymous';
                //console.log(data)
                if (data === 'Anoynymous') {
                    resolve('Anoynymous');
                }
                else {
                    resolve(data);
                }
            }, function (err) {
                reject('myerror: ' + err);
            });
        });
    };
    StatisticsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: " يعتمد على سرعة النترنت لديك لطفا انتظر قليلا",
        });
        this.loading.present();
    };
    StatisticsPage.prototype.showAlert = function (titles, subTitles) {
        var alert = this.alertCtrl.create({
            title: titles,
            subTitle: subTitles,
            buttons: ['OK']
        });
        alert.present();
    };
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statistics',template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/statistics/statistics.html"*/'<!--\n  Generated template for the StatisticsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n<ion-header no-border no-shadow>\n\n    <ion-navbar >\n      \n    </ion-navbar>\n  \n  </ion-header>\n\n<ion-content padding>\n\n    <ion-grid>\n        <ion-row>\n          <ion-col text-right>\n              <h1 text-right padding   id=\'staticss\'>    الاحصائيات    </h1>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-right padding>\n                اذا كنت تمتلك احصائيات ومن مصادر مؤكدة يمكنكم مراسلتنا لاضافتها هنا\n           <p>  <span id="spanClick" (click)="goToAddStatistics()"> اضغط هنا   </span> </p> \n            </ion-col>\n          </ion-row>\n         \n      </ion-grid>\n\n      <div *ngFor="let subjects of (newsList | async)?.slice().reverse()"> \n      <div *ngIf="subjects.show === \'true\'"> \n<div id="containB" (click)="goToVotingStatistics(subjects.title , subjects.key, subjects.like ,subjects.dislike )"  >\n\n\n    \n    <h4 text-right>  {{ subjects.date  }}  &nbsp; &nbsp;  {{ subjects.province  }}    &nbsp; &nbsp; \n        <ion-icon ios="ios-pin" md="md-pin"></ion-icon> </h4>  \n  <h5 text-right>     {{ subjects.title  }}   </h5>   \n  <p text-right>     {{ subjects.discription  }}  </p>  \n<hr class="hrColor">\n  <ion-grid>\n        <ion-row>\n          <ion-col>\n                <h3 class=\'likeCSS\' > {{ subjects.like  }}   \n                    <ion-icon ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon>    </h3>  \n          </ion-col>\n          <ion-col  text-right>\n                <h3 class=\'likeCSS\' >  {{ subjects.dislike  }}  \n                     <ion-icon ios="ios-thumbs-down" md="md-thumbs-down"></ion-icon>   \n                    </h3>  \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n</div>\n</div>\n</div>\n</ion-content>\n\n\n '/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/statistics/statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_statistics_statistics__["a" /* StatisticsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__howtopay_howtopay__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__howtopay_howtopay__["a" /* HowtopayPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__news_news__["a" /* NewsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/muhammed/desk3/d/saveiraq/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="الرئيسية" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="طرق التبرع" tabIcon="ios-cash"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="الاخبار" tabIcon="ios-paper"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="عن الفريق" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n '/*ion-inline-end:"/Users/muhammed/desk3/d/saveiraq/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
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
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NewsProvider = /** @class */ (function () {
    function NewsProvider(db) {
        this.db = db;
        this.challengeListRef = this.db.list('news');
        console.log('Hello NewsProvider');
    }
    NewsProvider.prototype.getChallengeList = function () {
        return this.challengeListRef;
    };
    NewsProvider.prototype.getChallengeListById = function (id) {
        return this.db.list("news/" + id);
    };
    NewsProvider.prototype.addChallenge = function (news) {
        return this.challengeListRef.push(news);
    };
    NewsProvider.prototype.updateChallenge = function (news) {
        return this.challengeListRef.update(news.key, news);
    };
    NewsProvider.prototype.removeChallenge = function (news) {
        return this.challengeListRef.remove(news);
    };
    NewsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], NewsProvider);
    return NewsProvider;
}());

//# sourceMappingURL=news.js.map

/***/ })

},[319]);
//# sourceMappingURL=main.js.map