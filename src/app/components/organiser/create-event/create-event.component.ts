import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CreateEventService } from './create-event.service';
declare var Materialize: any;
import {Http,Headers} from '@angular/http';

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
  ticket1_name: any
  ticket1_price: any;
  tables: string[] = [] //This is the table you'll send back it will contain the table id's

  constructor(private createEventService: CreateEventService,private router: Router,private _http: Http) { }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.position = position.coords;
        //console.log(this.position.longitude);
        //console.log(this.position.latitude);
      });
    }
  }
imageUploaded(event){
    const resp = event.serverResponse._body
    const j = JSON.parse(resp)
    const data  = {
      "image_url": j.data.link,
      "price": this.ticket1_price,
      "title": this.ticket1_name
    }
    console.log(data)

    this.quicky(data).subscribe((resp)=>{
      if (resp.status) {
        this.tables.push(resp.table._id.$oid)
        console.log(this.tables)
      }
    })
  }
  quicky(data){
    let header = new Headers();
    header.append('Content-Type','application/json');
    header.append('Authorization', localStorage.getItem("token"));
     return this._http.post("http://gatepassng.herokuapp.com/api/v1/table", data, {headers: header}).map(res => res.json())
  }
  createEvent(d, t){
    const event = {
      coord: [this.position.latitude, this.position.longitude],
      date: d,
      image_url: 'http//:demo_img_url',
      location: this.event_location,
      name: this.event_name,
      price: this.base_price,
      table: this.tables,
      time: t
    }

    //console.log(event);
    this.createEventService.postEvent(event).subscribe(
       data => {
         if(data.status == false){
          Materialize.toast('Error while creating event', 5000, 'red white-text');
        }else if(data.status == true){
          console.log(data);
          Materialize.toast('Event created', 5000, 'green white-text');
          this.router.navigate(['/events']);
        }
       },
       err => console.log(err),
       () => console.log('Request Completed')

    );
  }

}
