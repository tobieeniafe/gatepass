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
  noEvent: boolean = false;

  constructor(private eventsService:EventsService, private router: Router) {
    this.viewEvents();
  }

  ngOnInit(){}

  viewEvents(){
    this.eventsService.getEvent().subscribe(
       data => {
         this.events = data;
         if (this.events.length == 0) {
             this.noEvent = true;
         }
       },
       err => console.log(err),
       () => console.log(this.events)

    );
  }

  changeStatus(){
    console.log('now false')
  }

}
