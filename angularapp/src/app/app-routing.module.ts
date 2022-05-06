import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminappliedloanComponent } from './admin/adminappliedloan/adminappliedloan.component';
import { AdminapprovedloanComponent } from './admin/adminapprovedloan/adminapprovedloan.component';
import { AdminhomepageComponent } from './admin/adminhomepage/adminhomepage.component';
import { DeleteLoanComponent } from './admin/delete-loan/delete-loan.component';
import { DeleteRepaymentScheduleComponent } from './admin/delete-repayment-schedule/delete-repayment-schedule.component';
import { EditLoanComponent } from './admin/edit-loan/edit-loan.component';
import { EditRepaymentScheduleComponent } from './admin/edit-repayment-loan/edit-repayment-loan.component';
import { GenerateScheduleComponent } from './admin/generate-schedule/generate-schedule.component';
import { HomeComponent } from './auth/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminGuardGuard } from './auth/services/admin-guard.guard';
import { UserGuardGuard } from './auth/services/user-guard.guard';
import { SignupComponent } from './auth/signup/signup.component';
import { AngularfileuploaderComponent } from './user/angularfileuploader/angularfileuploader.component';
import { CreateCustprofileComponent } from './user/create-custprofile/create-custprofile.component';
import { CustomerapplyloanComponent } from './user/customerapplyloan/customerapplyloan.component';
import { CustomerloanstatusComponent } from './user/customerloanstatus/customerloanstatus.component';
import { ProfileListComponent } from './user/profile-list/profile-list.component';
import { UpdateProfileComponent } from './user/update-profile/update-profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
  path:'signup',
  component:SignupComponent,
  pathMatch:'full',
},
{
path:'user/login',
  component:LoginComponent,
  pathMatch:'full',
},
{
path:'admin/login',
  component:LoginComponent,
  pathMatch:'full',
},
{
  path:'admin/home',
  component:AdminhomepageComponent,
  pathMatch:'full',
  canActivate:[AdminGuardGuard],
},
{
  path:'user/home',
  component:UserComponent,
  pathMatch:'full',
  canActivate:[UserGuardGuard],
},


{
  path:'admin/adminappliedloan', component: AdminappliedloanComponent,
pathMatch:'full',
canActivate:[AdminGuardGuard],
},
{
  path:'admin/adminapprovedloan', component: AdminapprovedloanComponent,
pathMatch:'full',
canActivate:[AdminGuardGuard],
},
{
  path:'admin/deleteLoan/:id', component: DeleteLoanComponent,
pathMatch:'full',
canActivate:[AdminGuardGuard],
},
  {
    path:'admin/editLoan/:id',component:EditLoanComponent,
  pathMatch:'full',
  canActivate:[AdminGuardGuard],
},
  {
    path:'admin/generateSchedule', component:GenerateScheduleComponent,
  pathMatch:'full',
  canActivate:[AdminGuardGuard],
},
  {
    path:'admin/editRepaymetSchedule/:id', component:EditRepaymentScheduleComponent,
  pathMatch:'full',
  canActivate:[AdminGuardGuard],
},
  {
    path:'admin/deleteRepaymentSchedule/:id', component:DeleteRepaymentScheduleComponent,
  pathMatch:'full',
  canActivate:[AdminGuardGuard],
},


//User


{path : 'user/addLoan', component : CustomerapplyloanComponent,pathMatch:'full',
canActivate:[UserGuardGuard],},
   {path : 'user/viewLoan',component : CustomerloanstatusComponent,pathMatch:'full',
   canActivate:[UserGuardGuard],},
   {path : 'user/Profile',component :  ProfileListComponent,pathMatch:'full',
   canActivate:[UserGuardGuard],},
  //  {path : 'getProfile',component : CustomerprofileComponent},
   {path : 'user/addLoan/addDocuments', component : AngularfileuploaderComponent,pathMatch:'full',
  canActivate:[UserGuardGuard],},
   //{path:'',redirectTo:'addLoan',pathMatch:'full'},
   {path:'user/update-profile',component:UpdateProfileComponent,pathMatch:'full',
   canActivate:[UserGuardGuard],},
   {path:'user/create-custprofile',component: CreateCustprofileComponent,pathMatch:'full',
   canActivate:[UserGuardGuard],},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
