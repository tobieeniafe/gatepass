import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css', './snazzy-info-window.css']
})
export class CreateEventComponent implements OnInit {

  mapTitle: string = 'google map';
  position:any = {
    'longitude': 4.673671399999989,
    'latitude': 8.4793627
  };

  constructor() { }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.position = position.coords;
        //console.log(this.position.longitude);
        //console.log(this.position.latitude);
      });
    }
  }

  createEvent(){
    console.log('form submitted');
  }

}
