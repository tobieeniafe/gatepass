import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
declare var Materialize: any;
declare var jQuery: any;
declare var $: any;
declare var WOW: any;
declare var particlesJS: any;

@Component({
  selector: 'index',
  templateUrl: `./index.component.html`,
  styleUrls: ['./index.component.css']
})

export class IndexComponent{

  @ViewChild('container')
  private container: ElementRef;

  public title: string = 'GatePassNG';
  private sliderImages: any = ['assets/img/app-1.jpg', 'assets/img/app-2.jpg', 'assets/img/app-3.jpg'];
  private iphone: string = 'assets/img/iphone.png';
  private appstore: string = 'assets/img/appstore.png';
  private playstore: string = 'assets/img/playstore.png';


  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any){
    $(document).ready(function(){
        $('.carousel.carousel-slider').carousel({
          fullWidth: true,
          duration: 300
        });
        
        $(".next").click(function(){
            $('.carousel').carousel('next');
            $('.slider').slider('next');
        });

        $(".prev").click(function(){
            $('.carousel').carousel('prev');
            $('.slider').slider('prev');
        });

        particlesJS.load('particles', 'assets/particles.json', function() {
          //console.log('good to go');
        });

        $('.slider').slider({
          indicators: false,
          transition: 300,
          interval: 60000
        });

        new WOW().init();

        PageScrollConfig.defaultDuration = 1200;
   });

    Observable.interval(6000).subscribe(() => {
      $('.carousel').carousel('next'); 
      $('.slider').slider('next');
    });
  }

}
