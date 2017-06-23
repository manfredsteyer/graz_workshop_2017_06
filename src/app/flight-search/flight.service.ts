import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../entities/flight';
import { Http, URLSearchParams, Headers } from '@angular/http';

@Injectable()
export class FlightService {

  constructor(private http: Http) {
    console.debug('Liebesgrüße aus dem Konstruktor!');
  }

  find(from: string, to: string): Observable<Flight[]> {
    let search = new URLSearchParams();
    search.set('from', from);
    search.set('to', to);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = 'http://www.angular.at/api/flight';

    return this
            .http
            .get(url, { search, headers })
            .map(resp => resp.json());

  }

}
