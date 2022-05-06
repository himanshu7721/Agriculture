import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { CustomerService } from '../customer.service';

import {Profile} from '../profile'
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles:any;
  currentuseremail:any;
  constructor(private profileService:CustomerService,
    private router:Router, private loginservice:LoginService) { }

  ngOnInit(): void {
    this.getProfiles();
    this.getcurrentuseremail();
  }
  private getcurrentuseremail()
  {
    this.loginservice.getCurrentUser().subscribe(datas=>
      {
        this.currentuseremail=datas;
      })
  }
  private getProfiles(){
    this.profileService.getProfileList().subscribe(data =>{
      this.profiles=data;
     // if(this.currentuseremail.emailId.equals(data.emailId))

    });
    console.log(this.profiles);

  }
  updateprofile(loanid:number){
    this.router.navigate(['user/update-profile']);
  }
 deleteprofile(loanid:number){
   this.profileService.deleteprofile(loanid).subscribe(data =>{
     console.log(data);
     this.getProfiles();
   })
 }
}