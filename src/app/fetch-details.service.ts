import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class FetchDetailsService {
    constructor(private http: Http) {

    }

    fetchDetails(id: string) {
        let data = { id };
        return this.http.post('http://localhost:8090/getRestaurantDetails', data)
            .map((res: Response) => res.json());
    }

    fetchReviews(id: string) {
        let data = { id };
        return this.http.post('http://localhost:8090/getRestaurantReviews', data)
            .map((res: Response) => res.json());
    }
}