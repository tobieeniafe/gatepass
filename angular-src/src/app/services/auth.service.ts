import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private _http: Http) { }
  registerUser(user){
    let header = new Headers();
    header.append('Content-Type','application/json');
    return this._http.post('https://gatepassng.herokuapp.com/api/v1/organiser/register', user, {headers: header})
                .map(res => res.json());
  }

  loginUser(user){
  let header = new Headers();
  header.append('Content-Type','application/json');
  return this._http.post('https://gatepassng.herokuapp.com/api/v1/organiser/login', user, {headers: header})
              .map(res => res.json());
  }

  loggedIn(){
    return tokenNotExpired()
  }

}
