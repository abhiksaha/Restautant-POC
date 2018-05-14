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
var fetch_location_service_1 = require('./fetch-location.service');
var Observable_1 = require('rxjs/Observable');
var SearchContentComponent = (function () {
    function SearchContentComponent(route, router, fetchLocationService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.fetchLocationService = fetchLocationService;
        this.prevAutoCompleteSearch = null;
        this.dataSource = Observable_1.Observable.create(function (observer) {
            var timeout, self = _this;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                if (self.prevAutoCompleteSearch != self.autoCompleteSearchTerm) {
                    self.fetchLocationService.fetchLocationList(self.autoCompleteSearchTerm)
                        .subscribe(function (locations) {
                        observer.next(locations.data.location_suggestions);
                    });
                    self.prevAutoCompleteSearch = self.autoCompleteSearchTerm;
                }
            }, 1000);
        });
    }
    SearchContentComponent.prototype.ngOnInit = function () {
        this.selectedLocationName = this.autoCompleteSearchTerm;
        this.selectedLocationID = this.autoCompleteSearchID;
    };
    SearchContentComponent.prototype.getSearchResults = function () {
        this.router.navigate(['/search-result', this.selectedLocationName, this.selectedLocationID, this.nameSearchTerm]);
    };
    SearchContentComponent.prototype.typeaheadOnSelect = function (ev) {
        this.selectedLocationID = ev.item.id;
        this.selectedLocationName = ev.item.name;
        this.prevAutoCompleteSearch = null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SearchContentComponent.prototype, "autoCompleteSearchTerm", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SearchContentComponent.prototype, "autoCompleteSearchID", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SearchContentComponent.prototype, "nameSearchTerm", void 0);
    SearchContentComponent = __decorate([
        core_1.Component({
            selector: 'search-content',
            templateUrl: '../views/search-content.html',
            styles: ["\n        .search-form{\n            padding:30px 0;\n        }\n        .search-form .row div:first-child input{\n            border-top-right-radius:0;\n            border-bottom-right-radius:0;\n        }\n        .search-form .row div:nth-child(2) input{\n            border-top-left-radius:0;\n            border-bottom-left-radius:0;\n            border-left:none;\n        }        \n    "],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, fetch_location_service_1.FetchLocationService])
    ], SearchContentComponent);
    return SearchContentComponent;
}());
exports.SearchContentComponent = SearchContentComponent;
