import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FetchResultsService } from './fetch-results.service';
import { SpinnerService } from './spinner.service';

@Component({
    templateUrl: '../views/search-result.html',
    styles: [`
        .search-result{
            border: 1px solid #ccc;
            border-radius: 3px;
            margin:15px 0;
            padding: 15px 0;
        }

    `]
})
export class SearchResultComponent  {

    public searchResultList: any = [];
    public autoCompleteSearchText: string;
    public autoCompleteSearchID: string;
    public searchQuery: string;

    constructor(private route: ActivatedRoute, private router: Router, private fetchResultsService: FetchResultsService, private spinner: SpinnerService) {
        
    }

    ngOnInit() {        
        this.route.params.subscribe(params => {
            this.autoCompleteSearchText = params['locationName'];
            this.autoCompleteSearchID = params['locationID'];
            this.searchQuery = params['searchBy'];
            this.getSearchResults({ locationID: this.autoCompleteSearchID, searchBy: this.searchQuery });        
        });        
    }

    getSearchResults(obj: any) {
        this.spinner.start();
        let entityID = obj.locationID,
            searchQuery = obj.searchBy;
        
        this.fetchResultsService.fetchSearchResults(entityID, searchQuery)
            .subscribe((results: any) => {
                this.spinner.stop();
                this.searchResultList = results.data.restaurants;
            })
    }

    getDetails(id: string) {
        this.router.navigate(['/details', this.autoCompleteSearchText, this.autoCompleteSearchID, this.searchQuery, id]);
    }
}
