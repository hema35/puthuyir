import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Picture } from '../picture';
import { PictureService } from '../picture.service';



@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css']
})
export class CarouselBasicComponent implements OnInit, OnDestroy {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images: Array<string>;

  constructor(config: NgbCarouselConfig, private pictureService: PictureService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;

  }

  ngOnInit() {
    let pictureUrl = '';
    // const x = window.location;
    // console.log(x);
    // console.log(window.location);
    // if (x.hostname === 'localhost') {
    //   const pictureUrl = 'https://dev.picsum.photos/list';
    // } else if(x.hostname === 'dev') {
    //   const pictureUrl = 'https://dev.picsum.photos/list';
    // } else if(x.hostname === 'stage') {
    //   const pictureUrl = 'https://stage.picsum.photos/list'
    // } else if(x.hostname === 'uat') {
    //   const pictureUrl = 'https://uat.picsum.photos/list'
    // }

    /* switch (window.location.hostname) {
      case 'localhost':
          pictureUrl = 'https://picsum.photos/list';
      break;
      case 'dev':
          pictureUrl = 'https://dev.picsum.photos/list';
      break;
      case 'stage':
          pictureUrl = 'https://stage.picsum.photos/list';
      break;
      case 'uat':
          pictureUrl = 'https://uat.picsum.photos/list';
      break;

    } */
    this.pictureService.getImage().subscribe(x => {
      this.images = x;
    console.log(this.images);
    });

  }

  ngOnDestroy() {
    console.log('I am destroyed');
  }
}

