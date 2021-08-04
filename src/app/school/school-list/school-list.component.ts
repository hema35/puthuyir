import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { School } from '../../model/school';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools: School[];
  constructor(private _appService: DataService) { }

  ngOnInit() {
    this._appService.getSchools().subscribe(data=>this.schools = data);
  }

}
