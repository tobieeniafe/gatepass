import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CreateEventService } from './create-event.service';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css', './snazzy-info-window.css'],
  providers: [ CreateEventService ]
})
export class CreateEventComponent implements OnInit {

  mapTitle: string = 'google map';
  position:any = {
    'longitude': 4.673671399999989,
    'latitude': 8.4793627
  };
  event: any;
  event_date: any;
  event_name: any;
  event_location: any;
  event_time: any;
  base_price: any;

  constructor(private createEventService: CreateEventService,private router: Router) { }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.position = position.coords;
        //console.log(this.position.longitude);
        //console.log(this.position.latitude);
      });
    }
  }

  createEvent(d, t){
    const event = {
      coord: [this.position.latitude, this.position.longitude],
      date: d,
      image_url: 'http//:demo_img_url',
      location: this.event_location,
      name: this.event_name,
      price: this.base_price,
      table: [],
      time: t
    }
    console.log(event);
  }

}
