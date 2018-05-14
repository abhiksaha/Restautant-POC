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
var fetch_results_service_1 = require('./fetch-results.service');
var spinner_service_1 = require('./spinner.service');
var SearchResultComponent = (function () {
    function SearchResultComponent(route, router, fetchResultsService, spinner) {
        this.route = route;
        this.router = router;
        this.fetchResultsService = fetchResultsService;
        this.spinner = spinner;
        this.searchResultList = [];
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.autoCompleteSearchText = params['locationName'];
            _this.autoCompleteSearchID = params['locationID'];
            _this.searchQuery = params['searchBy'];
            _this.getSearchResults({ locationID: _this.autoCompleteSearchID, searchBy: _this.searchQuery });
        });
    };
    SearchResultComponent.prototype.getSearchResults = function (obj) {
        var _this = this;
        this.spinner.start();
        var entityID = obj.locationID, searchQuery = obj.searchBy;
        this.fetchResultsService.fetchSearchResults(entityID, searchQuery)
            .subscribe(function (results) {
            _this.spinner.stop();
            _this.searchResultList = results.data.restaurants;
        });
    };
    SearchResultComponent.prototype.getDetails = function (id) {
        this.router.navigate(['/details', this.autoCompleteSearchText, this.autoCompleteSearchID, this.searchQuery, id]);
    };
    SearchResultComponent = __decorate([
        core_1.Component({
            templateUrl: '../views/search-result.html',
            styles: ["\n        .search-result{\n            border: 1px solid #ccc;\n            border-radius: 3px;\n            margin:15px 0;\n            padding: 15px 0;\n        }\n\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, fetch_results_service_1.FetchResultsService, spinner_service_1.SpinnerService])
    ], SearchResultComponent);
    return SearchResultComponent;
}());
exports.SearchResultComponent = SearchResultComponent;
