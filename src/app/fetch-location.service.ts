import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class FetchLocationService {
    constructor(private http: Http) {
        
    }

    fetchLocationList(param: string) {
        let data = { locationSuggest: param };
        return this.http.post('http://localhost:8090/getCityList', data)
            .map((res : Response) => res.json());
    }
}
