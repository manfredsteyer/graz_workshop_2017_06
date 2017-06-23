import { Component } from '@angular/core';
import { Flight } from '../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  //private http: Http;

  constructor(private http: Http) {
    //this.http = http;
  }

  search(): void {

    let search = new URLSearchParams();
    search.set('from', this.from);
    search.set('to', this.to);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = 'http://www.angular.at/api/flight';

    this
      .http
      .get(url, { search, headers })
      .map(resp => resp.json())
      .subscribe(
        (flights) => {
          this.flights = flights;
        },
        (errResp) => {
          console.error('Fehler beim Laden', errResp);
        }
      )
  }

  select(f: Flight) {
    this.selectedFlight = f;
  }
}
