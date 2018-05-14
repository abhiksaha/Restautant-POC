"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var fetch_details_service_1 = require('./fetch-details.service');
var spinner_service_1 = require('./spinner.service');
var DetailsComponent = (function () {
    function DetailsComponent(route, router, fetchDetailsService, spinner) {
        this.route = route;
        this.router = router;
        this.fetchDetailsService = fetchDetailsService;
        this.spinner = spinner;
        this.showAjaxLoader = new core_1.EventEmitter();
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.autoCompleteSearchText = params['locationName'];
            _this.autoCompleteSearchID = params['locationID'];
            _this.searchQuery = params['searchBy'];
            _this.getDetails(params['searchByID']);
            _this.getReviews(params['searchByID']);
        });
    };
    DetailsComponent.prototype.getDetails = function (id) {
        var _this = this;
        this.spinner.start();
        this.fetchDetailsService.fetchDetails(id)
            .subscribe(function (results) {
            _this.spinner.stop();
            _this.restaurantDetails = results.data;
        });
    };
    DetailsComponent.prototype.getReviews = function (id) {
        var _this = this;
        this.spinner.start();
        this.fetchDetailsService.fetchReviews(id)
            .subscribe(function (results) {
            _this.spinner.stop();
            _this.reviews = results.data;
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DetailsComponent.prototype, "showAjaxLoader", void 0);
    DetailsComponent = __decorate([
        core_1.Component({
            templateUrl: '../views/details.html',
            styles: ["\n        .overlap-content{\n            background: rgba(0,0,0,0.5);\n            margin-top:-108px;\n            padding:5px 15px;\n            color:white;\n        }\n        .review{\n            padding:0 15px;\n            margin-bottom:10px;\n        }\n        .review-details{\n            height: 100%;\n            border-radius:3px;\n            padding: 15px;\n            border: 1px solid #ccc;\n        }\n\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, fetch_details_service_1.FetchDetailsService, spinner_service_1.SpinnerService])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
