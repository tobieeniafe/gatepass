import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  http: Http;
  token: any;

  constructor(public _http: Http) {
    this.http = _http;
    this.token = localStorage.getItem('token');
  }

  getUser() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );

    return this.http.get('http://staging.gatepassng.com/api/v1/organiser', {headers: headers})
    .map(res => {
        return res.json();
    });
  }

  updateUser(user) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );

    return this.http.put('http://staging.gatepassng.com/api/v1/organiser', user, {headers: headers})
    .map(res => {
        return res.json();
    });
  }
  
}
