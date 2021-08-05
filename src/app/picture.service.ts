import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Picture } from '../../src/app/picture';
import { map } from 'rxjs/operators';
import { a } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  images: Array<string>;
  constructor( private _http: HttpClient) {}

 pictureUrl = 'https://picsum.photos/list';

getImage() {
  console.log('xya');
  return this._http.get<[Picture]>(this.pictureUrl)
  .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)));
  }


private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
  return [1, 2, 3, 4].map(() => {
    const randomId = images[Math.floor(Math.random() * images.length)].id;
    return `https://picsum.photos/900/500?image=${randomId}`;
  });
}


}


