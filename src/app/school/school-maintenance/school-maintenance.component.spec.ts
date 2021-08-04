import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolMaintenanceComponent } from './school-maintenance.component';

describe('SchoolMaintenanceComponent', () => {
  let component: SchoolMaintenanceComponent;
  let fixture: ComponentFixture<SchoolMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
