import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var Materialize: any;
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FaqComponent implements OnInit {

  constructor() { 
  	$(document).ready(function(){
	    $('.collapsible').collapsible();
	});
  }

  ngOnInit() {
  }

}
