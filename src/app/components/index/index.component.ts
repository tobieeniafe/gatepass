import { Component } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: `./index.component.html`,
  styleUrls: ['./index.component.css']
})

export class IndexComponent{

  public title: string = 'GatePassNG';
  private sliderImages: any = ['assets/img/1.png', 'assets/img/2.png', 'assets/img/1.jpg', 'assets/img/4.jpg', 'assets/img/5.jpg', 'assets/img/6.jpg'];
  private image: string = this.sliderImages[2];
  private iosApp: string = 'assets/img/iosapp.png';
  private ribbon: string = 'assets/img/ribbon.png';
  private appstore: string = 'assets/img/appstore.png';
  private playstore: string = 'assets/img/playstore.png';


  constructor (){
      //Observable.interval(3000).subscribe(() => {
          //this.slideShow();
      //});
    }

  }
