import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
  private sliderImages: any = ['assets/img/1.png', 'assets/img/2.png', 'assets/img/1.jpg', 'assets/img/4.jpg', 'assets/img/5.jpg', 'assets/img/6.jpg'];
  private image: string = this.sliderImages[2];
  private iosApp: string = 'assets/img/iosapp.png';
  private ribbon: string = 'assets/img/ribbon.png';
  private appstore: string = 'assets/img/appstore.png';
  private playstore: string = 'assets/img/playstore.png';


  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any){
    $(document).ready(function(){
      $('.carousel.carousel-slider').carousel({
        fullWidth: true
      });
    });

    particlesJS.load('particles', 'assets/particles.json', function() {
      console.log('good to go');
    });

    new WOW().init();

    PageScrollConfig.defaultDuration = 1200;

  }


}
