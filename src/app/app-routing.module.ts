import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolListComponent } from './school/school-list/school-list.component';
import { SchoolDetailComponent } from './school/school-detail/school-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SchoolMaintenanceComponent } from './school/school-maintenance/school-maintenance.component';
import { SigninComponent } from './users/signin/signin.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent,
   canActivate: [AuthGuard]
},
  //   children: [
  //     { path: '', canActivateChild: [AuthGuard],
  //       children: [
  //         { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          
  //       ] }
  //     ] },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'school-list',
    component: SchoolListComponent
  },
  {
    path: 'school-maintenance',
    component: SchoolMaintenanceComponent
  },
  
  //{path: 'post-detail/:userId', component : PostDetailComponent }
  {
    path: 'school-detail/:schoolId',
    component: SchoolDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'school-detail',
    component: SchoolDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
