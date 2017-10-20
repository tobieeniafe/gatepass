import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';
declare var Materialize: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  computerIsOnline: Observable<boolean>;

  constructor() {
    Observable.interval(1000).subscribe(() => {

      this.computerIsOnline = Observable.merge(
        Observable.of(navigator.onLine),
        Observable.fromEvent(window, 'online').map(() => true),
        Observable.fromEvent(window, 'offline').map(() => {
          Materialize.toast(`Seems you're offline`, 3000, 'grey darken-3 white-text')
          //return false
        })
      );

      $(window).scroll(function() {
          if ( $(this).scrollTop() > 550 ) {
             $('.go-top').addClass('show');
          } else {
             $('.go-top').removeClass('show');
          }
      }); 
       

    });
  }

  ngOnInit() {}
}
