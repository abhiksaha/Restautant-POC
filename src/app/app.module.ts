import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from  './home.component';
import { SearchResultComponent } from  './search-result.component';
import { DetailsComponent } from  './details.component';
import { PageNotFoundComponent } from  './page-not-found.component';

import { SearchContentComponent } from './search-content.component';
import { SpinnerComponent } from './spinner.component';


import { FetchLocationService } from './fetch-location.service';
import { FetchResultsService } from './fetch-results.service';
import { FetchDetailsService } from './fetch-details.service';
import { SpinnerService } from './spinner.service';

import { TypeaheadModule  } from 'ng2-bootstrap';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'search-result/:locationName/:locationID/:searchBy',
        component: SearchResultComponent,
    },
    { path: 'details/:locationName/:locationID/:searchBy/:searchByID', component: DetailsComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        HttpModule,
        TypeaheadModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SearchResultComponent,
        DetailsComponent,
        PageNotFoundComponent,
        SearchContentComponent,
        SpinnerComponent
    ],
    providers: [
        FetchLocationService,
        FetchResultsService,
        FetchDetailsService,
        SpinnerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
