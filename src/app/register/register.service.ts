import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { User } from '../user'

@Injectable()
export class RegisterService {

  http: Http;
  url: string = 'http://gatepassng.herokuapp.com/api/v1/organiser/register';
  constructor(public _http: Http) {
     this.http = _http;
  }
  registerUser(user:User) {
     return this.http.post(this.url, user, {  }).map(res =>  res.json());
  }

}
