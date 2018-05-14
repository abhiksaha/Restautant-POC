import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FetchLocationService } from './fetch-location.service';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'search-content',
    templateUrl: '../views/search-content.html',
    styles: [`
        .search-form{
            padding:30px 0;
        }
        .search-form .row div:first-child input{
            border-top-right-radius:0;
            border-bottom-right-radius:0;
        }
        .search-form .row div:nth-child(2) input{
            border-top-left-radius:0;
            border-bottom-left-radius:0;
            border-left:none;
        }        
    `],
})
export class SearchContentComponent {

    @Input() autoCompleteSearchTerm: string;
    @Input() autoCompleteSearchID: number;
    @Input() nameSearchTerm: string;

    public dataSource: Observable<any>;
    public selectedLocationName: string;
    public selectedLocationID: number;
    public prevAutoCompleteSearch: string;

    constructor(private route: ActivatedRoute, private router: Router, private fetchLocationService: FetchLocationService) {
        this.prevAutoCompleteSearch = null;
        this.dataSource = Observable.create((observer: any) => {    
            let timeout, self = this;
            clearTimeout(timeout);        
            timeout = setTimeout(function () {
                if (self.prevAutoCompleteSearch != self.autoCompleteSearchTerm) {
                    self.fetchLocationService.fetchLocationList(self.autoCompleteSearchTerm)
                        .subscribe((locations: any) => {
                            observer.next(locations.data.location_suggestions);
                        })
                    self.prevAutoCompleteSearch = self.autoCompleteSearchTerm;
                }
            },1000)
            
        });
    }

    ngOnInit() {
        this.selectedLocationName = this.autoCompleteSearchTerm;
        this.selectedLocationID = this.autoCompleteSearchID;
    }

    getSearchResults() {
        this.router.navigate(['/search-result', this.selectedLocationName,  this.selectedLocationID, this.nameSearchTerm ]);
    }

    typeaheadOnSelect(ev: any) {
        this.selectedLocationID = ev.item.id;
        this.selectedLocationName = ev.item.name;
        this.prevAutoCompleteSearch = null;
    }
}
