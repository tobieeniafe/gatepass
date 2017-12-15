import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CreateEventService } from './create-event.service';
import { Http, Headers } from '@angular/http';
import { } from '@types/googlemaps';
declare var Materialize: any;
import { Api } from '../../../api'

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
  contact: any;
  tables: string[] = [];
  ticketImage: boolean = true;
  eventImage: boolean = true;
  isDisabled: boolean = this.ticketImage || this.eventImage;
  image_url: any;
  searchControl: FormControl;
  formatted_address: string;
  ticketForm: FormGroup;
  ticketPrices: number[] = [];
  api = new Api().endpoint
  imageEndpoint = this.api+'/image'

   @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private createEventService: CreateEventService,private router: Router,private _http: Http, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private _fb: FormBuilder) { }

  ngOnInit() {
    this.latitude = 0;
    this.longitude = 0;

    this.ticketForm = this._fb.group({
        tickets: this._fb.array([
            this.initTicket(),
        ])
    });

    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        //types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry == undefined || place.geometry == null) {
            return;
          }

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.formatted_address = `${place.name}, ${place.formatted_address}`;
          //console.log(`${place.name}, ${place.formatted_address}`);
        });
      });
    });

  }

  initTicket() {
      return this._fb.group({
          ticketName: [''],
          ticketPrice: [''],
          ticketLimit: ['', Validators.required]
      });
  }

  addTicket() {
      const control = <FormArray>this.ticketForm.controls['tickets'];
      control.push(this.initTicket());
  }

  removeTicket(i: number) {
      const control = <FormArray>this.ticketForm.controls['tickets'];
      control.removeAt(i);
      this.tables.splice(i, 1)
      //console.log(this.tables)
  }

ticketImageUpload(event,i){
    const resp = event.serverResponse._body
    const j = JSON.parse(resp)
    const data  = {
      "image_url": j.image_url,
      "price": this.ticketForm.value.tickets[i].ticketPrice,
      "title": this.ticketForm.value.tickets[i].ticketName,
      "limit": this.ticketForm.value.tickets[i].ticketLimit
    }
    //console.log(data)

    this.ticketPrices.push(data.price)

    this.quicky(data).subscribe((resp)=>{
      if (resp.status) {
        this.tables.push(resp.table._id.$oid);
        //console.log(this.tables);
        this.ticketImage = false;
        this.isDisabled = this.ticketImage || this.eventImage;
      }
    })
  }

  quicky(data){
    let header = new Headers();
    header.append('Content-Type','application/json');
    header.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
    header.append('Authorization', localStorage.getItem('token'));
     return this._http.post(this.api+'/table', data, {headers: header}).map(res => res.json())
  }

  eventImageUpload(event){
    const resp = event.serverResponse._body
    const j = JSON.parse(resp);
    this.image_url = j.image_url;
    //console.log(this.image_url);
    this.eventImage = false;
    this.isDisabled = this.ticketImage || this.eventImage;
  }

  getMinValue(array){
      return Math.min.apply( Math, array );
  }

  createEvent(d, t){

    this.isDisabled = true;
    this.base_price = this.getMinValue(this.ticketPrices)

    if (this.formatted_address == null || this.formatted_address == undefined) {
        this.event_location = this.event_location;
    } else {
      this.event_location = this.formatted_address;
    }

    const event = {
      coord: [this.latitude, this.longitude],
      date: d,
      image_url: this.image_url,
      location: this.event_location,
      name: this.event_name,
      price: this.base_price,
      table: this.tables,
      time: t,
      contact: this.contact
    }

    this.createEventService.postEvent(event).subscribe(
       data => {
         if(data.status == false){
          Materialize.toast('Error occured while creating event', 3000, 'red white-text');
          this.isDisabled = false;
          //console.log(data);
        }else if(data.status == true){
          //console.log(data);
          Materialize.toast('Event created', 3000, 'green white-text');
          this.router.navigate(['/events']);
        }
       },
       err => (Materialize.toast("Something's not right", 1500, 'red white-text'), this.isDisabled = false),
       () =>  this.isDisabled = true
    );
  }



}


export interface Ticket {
    ticketName: string;
    ticketPrice: string;
    ticketLimit: number;
}
