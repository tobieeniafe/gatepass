import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateEventService {

  http: Http;
  token: any;
  constructor(public _http: Http) {
     this.http = _http;
     this.token = localStorage.getItem('token');
  }

  postEvent(event) {
    console.log(event);
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );

    return this.http.post('http://gatepassng.herokuapp.com/api/v1/events', event, {headers: headers})
    .map(res => {
        return res.json();
    });
  }

}
