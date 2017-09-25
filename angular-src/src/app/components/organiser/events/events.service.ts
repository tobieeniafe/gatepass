import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EventsService {

  http: Http;
  token: any;
  constructor(public _http: Http) {
    this.http = _http;
    this.token = localStorage.getItem('token');
  }

  getEvent() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );

    return this.http.get('https://gatepassng.herokuapp.com/api/v1/events', {headers: headers})
    .map(res => {
        return res.json();
    });
  }

}
