import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventsService } from './events.service';
import { Http, Headers } from '@angular/http';
declare var Materialize: any;
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any;
  noEvent: boolean = false;
  preloader: boolean = true;
  token: any;
  event_id: any[] = [];
  event_status: any[] = [];
  message: any;
  loading: boolean = false;

  constructor(private eventsService:EventsService, private router: Router, private http: Http) {
    this.viewEvents();
    this.token = localStorage.getItem('token');
    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            inDuration: 300, // Transition in duration
            outDuration: 200, // Transition out duration
            startingTop: '4%', // Starting top style attribute
            endingTop: '10%', // Ending top style attribute
            ready: function(){},
            complete: function(){} // Callback for Modal close
      });


    });
  }

  ngOnInit(){}

  viewEvents(){
    this.eventsService.getEvent().subscribe(
       data => {
         this.events = data;
         this.preloader = false;
         if (this.events.length == 0) {
             this.noEvent = true;
         }
       },
       err => console.log(err),
       () => console.log()//this.events
    );
  }

  changeStatus(e){
    this.loading = true;
    if (e.is_online == true) {
      this.message = { "is_online": false };
    } else if (e.is_online == false) {
      this.message = { "is_online": true };
    }

    this.eventsService.updateStatus(e._id.$oid, this.message).subscribe(data => {
      console.log(data);
      if (data.status == true) {
          Materialize.toast(`Event ${e.name}'s status updated`, 3000, 'green white-text');
          this.loading = false;
      } else {
        Materialize.toast(`Error updating ${e.name}'s status`, 3000, 'red white-text');
        this.loading = false;
      }

    })
  }

  showOtpModal(){
    $('#checkoutModal').modal('close');
    $('#otpModal').modal('open');
  }

}
