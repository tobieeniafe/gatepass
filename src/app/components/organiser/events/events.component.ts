import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventsService } from './events.service';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any;

  constructor(private eventsService:EventsService, private router: Router) {
    this.viewEvents();
  }

  ngOnInit(){}
  message: string = 'events here';

  viewEvents(){
    this.eventsService.getEvent().subscribe(
       data => {
         this.events = data.events;
        //console.log(Object.keys(this.events).length);
       },
       err => console.log(err),
       () => console.log('Request Completed')

    );
  }

}
