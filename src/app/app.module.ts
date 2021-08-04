import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { UserService } from './user.service';
import { UserApi } from './users/user-api';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolListComponent } from './school/school-list/school-list.component';
import { SchoolDetailComponent } from './school/school-detail/school-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { AdminComponent } from './admin/admin.component';
import { SchoolMaintenanceComponent } from './school/school-maintenance/school-maintenance.component';
import { SigninComponent } from './users/signin/signin.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SchoolListComponent,
    SchoolDetailComponent,
    PageNotFoundComponent,
    CarouselBasicComponent,
    AdminComponent,
    SchoolMaintenanceComponent,
    SigninComponent,
    RegisterUserComponent,
    AuthenticatedUserComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    DataService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
