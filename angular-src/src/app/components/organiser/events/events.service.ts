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

  updateStatus(id, message){
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );

    return this.http.put(`https://gatepassng.herokuapp.com/api/v1/event/online/${id}`, message, {headers: headers})
    .map(res => {
        return res.json();
    });
  }

  getBanks() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );

    return this.http.get('https://gatepassng.herokuapp.com/api/v1/organiser/bank', {headers: headers})
    .map(res => {
        return res.json();
    });
  }

  addBank(details){
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );
    return this.http.post('https://gatepassng.herokuapp.com/api/v1/organiser/bank', details, {headers: headers})
    .map(res => {
        return res.json();
    });
  }

  getPayed(message){
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token );
    return this.http.post('https://gatepassng.herokuapp.com/api/v1/organiser/transfer', message, {headers: headers})
    .map(res => {
        return res.json();
    });
  }

}
