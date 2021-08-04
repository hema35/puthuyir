import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router, NavigationEnd } from "@angular/router";
import { ActivatedRoute} from "@angular/router";
import { School } from '../../model/school';

@Component({
  selector: 'puthuyir-school-maintenance',
  templateUrl: './school-maintenance.component.html',
  styleUrls: ['./school-maintenance.component.css']
})
export class SchoolMaintenanceComponent implements OnInit {


  ngOnInit() {
  }

  schools : Array<School>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private dataService: DataService,
              private router: Router) { 
    dataService.getSchools().subscribe((data) => this.schools = data);
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  createCountry() {
    this.router.navigate(['/authenticated/country-detail', 0, 'create']);
  }

  deleteCountry(id: number) {
    this.isDeleting = true;
    // this.dataService.deleteCountry(id).subscribe(
    //   c => this.cancelDelete(),
    //   err => { this.deleteError = err; this.isDeleting = false; }
    //   );
  }

  deleteCountryQuestion(id:number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editCountry(id: number) {
    this.router.navigate(['/schools-detail', id, 'edit']);
  }

  showSchoolDetail(id: number) {
    this.router.navigate(['/schools-detail', id, 'details']);
  }


}
