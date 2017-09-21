import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
declare var jQuery: any;
declare var $: any;

@Injectable()
export class CreateEventService {

  http: Http;
  token: any;
  constructor(public _http: Http) {
     this.http = _http;
     this.token = localStorage.getItem('token');
     (function($){
      $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        $('.datepicker').pickadate({
          format: 'dd/mm/yyyy',
          formatSubmit: 'dd/mm/yyyy',
          selectMonths: true, // Creates a dropdown to control month
          selectYears: 10, // Creates a dropdown of 10 years to control year,
          today: 'Today',
          clear: 'Clear',
          close: 'Ok',
          closeOnSelect: false // Close upon selecting a date,
        });

        $('.timepicker').pickatime({
            default: 'now', // Set default time: 'now', '1:30AM', '16:30'
            fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
            twelvehour: false, // Use AM/PM or 24-hour format
            donetext: 'OK', // text for done-button
            cleartext: 'Clear', // text for clear-button
            canceltext: 'Cancel', // Text for cancel-button
            autoclose: false, // automatic close timepicker
            ampmclickable: true, // make AM PM clickable
            aftershow: function(){} //Function for after opening timepicker
          });

      });
    })(jQuery);
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
