import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { School } from './model/school';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient: HttpClient) { }

  getApp(): string { 
    return "Hello world"; 
  } 

getSchools(): Observable<School[]>{
  return this._httpClient.get<School[]>('https://jsonplaceholder.typicode.com/posts')
                          .pipe(map(response => response));
}


getSchoolWithId(params: any): Observable<School[]>{
  var userId = params['userId'];
  var id = params['schoolId'];
  console.log(id);
  return this._httpClient.get<School[]>('https://jsonplaceholder.typicode.com/posts?userId=' + id)
                          .pipe(map(response => response));
}

// deleteSchool(id: number) : Observable<any> {
//   //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
//   return Observable.of({}).delay(2000)
//    .do(e => this.countries.splice(this.countries.findIndex(c => c.id == id), 1));
// }

getCommentsByPostId(postId: string): Observable<Comment[]>{
  console.log(postId);
  return this._httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
  .pipe(map(response => response));

}
}
