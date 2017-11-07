import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Api } from '../../../api'

@Injectable()
export class EventsService {

  http: Http;
  token: any;
  api = new Api().endpoint
  constructor(public _http: Http) {
    this.http = _http;
    this.token = localStorage.getItem('token');
  }

  getEvent() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );

    return this.http.get(this.api+'/events', {headers: headers})
    .map(res => {
        return res.json();
    });
  }

  updateStatus(id, message){
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );

    return this.http.put(this.api+'/event/online/'+id, message, {headers: headers})
    .map(res => {
        return res.json();
    });
  }

  getBanks() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );

    return this.http.get(this.api+'/organiser/bank', {headers: headers})
    .map(res => {
        return res.json();
    });
  }

  addBank(details){
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );
    return this.http.post(this.api+'/organiser/bank', details, {headers: headers})
    .map(res => {
        return res.json();
    });
  }

  getPayed(message){
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );
    return this.http.post(this.api+'/organiser/transfer', message, {headers: headers})
    .map(res => {
        return res.json();
    });
  }

  sendOTP(message){
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );
    return this.http.post(this.api+'/organiser/finalize_transfer', message, {headers: headers})
    .map(res => {
        return res.json();
    });
  }

}
