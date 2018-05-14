import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FetchDetailsService } from './fetch-details.service';
import { SpinnerService } from './spinner.service';

@Component({
    templateUrl: '../views/details.html',
    styles: [`
        .overlap-content{
            background: rgba(0,0,0,0.5);
            margin-top:-108px;
            padding:5px 15px;
            color:white;
        }
        .review{
            padding:0 15px;
            margin-bottom:10px;
        }
        .review-details{
            height: 100%;
            border-radius:3px;
            padding: 15px;
            border: 1px solid #ccc;
        }

    `]
})
export class DetailsComponent  {

    public restaurantDetails: any;
    public reviews: any[];
    public autoCompleteSearchText: string;
    public autoCompleteSearchID: number;
    public searchQuery: string;

    @Output() showAjaxLoader: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private route: ActivatedRoute, private router: Router, private fetchDetailsService: FetchDetailsService, private spinner: SpinnerService) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.autoCompleteSearchText = params['locationName'];
            this.autoCompleteSearchID = params['locationID'];
            this.searchQuery = params['searchBy'];
            this.getDetails(params['searchByID']);
            this.getReviews(params['searchByID']);
        });   
        
    }

    getDetails(id: string) {
        this.spinner.start();
        this.fetchDetailsService.fetchDetails(id)
            .subscribe((results: any) => {
                this.spinner.stop();
                this.restaurantDetails = results.data;
            })
    }
    getReviews(id: string) {
        this.spinner.start();
        this.fetchDetailsService.fetchReviews(id)
            .subscribe((results: any) => {
                this.spinner.stop();
                this.reviews = results.data;
            })
    }
}
