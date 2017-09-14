import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  http: Http;
  url: string = 'http://gatepassng.herokuapp.com/api/v1/organiser/login';
  constructor(public _http: Http) {
     this.http = _http;
  }
  loginUser(loginDetails) {
     return this.http.post(this.url, loginDetails, {  }).map(res =>  res.json());
  }

}
