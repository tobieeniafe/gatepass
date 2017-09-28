import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CreateEventService } from './create-event.service';
import { Http, Headers } from '@angular/http';
import { } from '@types/googlemaps';
declare var Materialize: any;

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  providers: [ CreateEventService ]
})
export class CreateEventComponent implements OnInit {

  mapTitle: string = 'google map';
  longitude: any;
  latitude: any;
  event: any;
  event_date: any;
  event_name: any;
  event_location: any;
  event_time: any;
  base_price: any;
  ticket1_name: any
  ticket1_price: any;
  tables: string[] = [];
  isDisabled: boolean = true;
  image_url: any;
  searchControl: FormControl;
  formatted_address: string;

   @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private createEventService: CreateEventService,private router: Router,private _http: Http, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        //console.log(position.coords);
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }

    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        //types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.formatted_address = place.formatted_address;
          //console.log(`${this.formatted_address}  ${this.latitude}   ${this.longitude}`);
        });
      });
    });

  }

ticketImageUpload(event){
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
        this.tables.push(resp.table._id.$oid);
        console.log(this.tables);
        this.isDisabled = false;
      }
    })
  }

  quicky(data){
    let header = new Headers();
    header.append('Content-Type','application/json');
    header.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
    header.append('Authorization', localStorage.getItem('token'));
     return this._http.post("https://gatepassng.herokuapp.com/api/v1/table", data, {headers: header}).map(res => res.json())
  }

  eventImageUpload(event){
    const resp = event.serverResponse._body
    const j = JSON.parse(resp);
    this.image_url = j.data.link;
    console.log(this.image_url);
  }

  createEvent(d, t){
    const event = {
      coord: [this.latitude, this.longitude],
      date: d,
      image_url: this.image_url,
      location: this.formatted_address,//this.event_location,
      name: this.event_name,
      price: this.base_price,
      table: this.tables,
      time: t
    }

    this.createEventService.postEvent(event).subscribe(
       data => {
         if(data.status == false){
          Materialize.toast('Error while creating event', 5000, 'red white-text');
          console.log(data);
        }else if(data.status == true){
          console.log(data);
          Materialize.toast('Event created', 5000, 'green white-text');
          this.router.navigate(['/events']);
        }
       },
       err => console.log(err),
       () =>  console.log() //console.log('Request Completed') event

    );
  }

}
