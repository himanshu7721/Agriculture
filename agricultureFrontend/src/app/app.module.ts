import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AuthInterceptor, AuthInterceptorProviders } from './auth/services/auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { DeleteLoanComponent } from './admin/delete-loan/delete-loan.component';
import { EditLoanComponent } from './admin/edit-loan/edit-loan.component';
import { DeleteRepaymentScheduleComponent } from './admin/delete-repayment-schedule/delete-repayment-schedule.component';
import { EditRepaymentScheduleComponent } from './admin/edit-repayment-loan/edit-repayment-loan.component';
import { GenerateScheduleComponent } from './admin/generate-schedule/generate-schedule.component';
import { AdminappliedloanComponent } from './admin/adminappliedloan/adminappliedloan.component';
import { AdminhomepageComponent } from './admin/adminhomepage/adminhomepage.component';
import { AdminapprovedloanComponent } from './admin/adminapprovedloan/adminapprovedloan.component';
import { UserComponent } from './user/user.component';
import { CustomerapplyloanComponent } from './user/customerapplyloan/customerapplyloan.component';
import { CustomerlistComponent } from './user/customerlist/customerlist.component';
import { AngularfileuploaderComponent } from './user/angularfileuploader/angularfileuploader.component';
import { CustomerloanstatusComponent } from './user/customerloanstatus/customerloanstatus.component';
import { CreateCustprofileComponent } from './user/create-custprofile/create-custprofile.component';
import { ProfileListComponent } from './user/profile-list/profile-list.component';
import { UpdateProfileComponent } from './user/update-profile/update-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    DeleteLoanComponent,
    EditLoanComponent,
    DeleteRepaymentScheduleComponent,
    EditRepaymentScheduleComponent,
    GenerateScheduleComponent,
    AdminappliedloanComponent,
    AdminhomepageComponent,
    AdminapprovedloanComponent,
    UserComponent,
    CustomerapplyloanComponent,
    CustomerlistComponent,
    AngularfileuploaderComponent,
    CustomerloanstatusComponent,
    CreateCustprofileComponent,
    ProfileListComponent,
    UpdateProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
