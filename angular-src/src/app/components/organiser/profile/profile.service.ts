import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Api } from '../../../api'

@Injectable()
export class ProfileService {

  http: Http;
  token: any;
  api = new Api().endpoint

  constructor(public _http: Http) {
    this.http = _http;
    this.token = localStorage.getItem('token');
  }

  getUser() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );

    return this.http.get(this.api+'/organiser', {headers: headers})
    .map(res => {
        return res.json();
    });
  }

  updateUser(user) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );

    return this.http.put(this.api+'/organiser', user, {headers: headers})
    .map(res => {
        return res.json();
    });
  }
  
}
