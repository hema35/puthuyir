import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { a } from '@angular/core/src/render3';

@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css']
})
export class CarouselBasicComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images: Array<string>;

  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
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

    switch (window.location.hostname) {
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

    }
    this._http.get<any>(pictureUrl)
      .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)))
      .subscribe(x => this.images = x);
  }

  private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }
}
