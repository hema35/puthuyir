import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router, NavigationEnd } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { School } from '../../model/school';
@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {
  schoolTitle: string;
  filteredschools: School[];
  constructor(private _appService: DataService, private _activeroute: ActivatedRoute, _router: Router) { }

  ngOnInit() {
    // this._activeroute.params.subscribe( 
    //   params => {
    //     console.log(params);
    //     this._appService.getPostsWithId(params).subscribe(data=>this.posts = data);
    //   });
    this._activeroute.queryParams.subscribe(
      params => {
        console.log(params['schoolId']);
        this.schoolTitle = params['schoolId'];
        this._appService.getSchoolWithId(params).subscribe(data => {
        this.filteredschools = data;
          console.log(data.length)
        });
      });


  }

}