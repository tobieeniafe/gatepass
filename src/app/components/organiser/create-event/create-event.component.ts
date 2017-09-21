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
    // const event = {
    //   coord: [this.position.latitude, this.position.longitude],
    //   date: d,
    //   image_url: 'http//:demo_img_url',
    //   location: this.event_location,
    //   name: this.event_name,
    //   price: this.base_price,
    //   table: ['001', '002', '003'],
    //   time: t
    // }

    const event = {
      coord: [111, 111],
      date: 'date',
      image_url: 'http//:demo_img_url',
      location: 'club',
      name: 'event_name',
      price: 'base_price',
      table: ['001', '002', '003'],
      time: '10pm'
    }

    //console.log(event);
    this.createEventService.postEvent(event).subscribe(
       data => {
         console.log(data);
         console.log('event created');
       },
       err => console.log(err),
       () => console.log('Request Completed')

    );
  }

}
