import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class FetchResultsService {
    constructor(private http: Http) {

    }

    fetchSearchResults(lcoationID: string, searchBy: string) {
        let data = { entityID: lcoationID, searchQuery: searchBy };
        return this.http.post('http://localhost:8090/getRestaurantList', data)
            .map((res: Response) => res.json());
    }
}