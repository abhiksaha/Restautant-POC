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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home.component');
var search_result_component_1 = require('./search-result.component');
var details_component_1 = require('./details.component');
var page_not_found_component_1 = require('./page-not-found.component');
var search_content_component_1 = require('./search-content.component');
var spinner_component_1 = require('./spinner.component');
var fetch_location_service_1 = require('./fetch-location.service');
var fetch_results_service_1 = require('./fetch-results.service');
var fetch_details_service_1 = require('./fetch-details.service');
var spinner_service_1 = require('./spinner.service');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'search-result/:locationName/:locationID/:searchBy',
        component: search_result_component_1.SearchResultComponent,
    },
    { path: 'details/:locationName/:locationID/:searchBy/:searchByID', component: details_component_1.DetailsComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes),
                http_1.HttpModule,
                ng2_bootstrap_1.TypeaheadModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                search_result_component_1.SearchResultComponent,
                details_component_1.DetailsComponent,
                page_not_found_component_1.PageNotFoundComponent,
                search_content_component_1.SearchContentComponent,
                spinner_component_1.SpinnerComponent
            ],
            providers: [
                fetch_location_service_1.FetchLocationService,
                fetch_results_service_1.FetchResultsService,
                fetch_details_service_1.FetchDetailsService,
                spinner_service_1.SpinnerService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
