import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private profileService:CustomerService,
    private router:Router) { }

  ngOnInit(): void {
    this.getProfiles();
  }
  private getProfiles(){
    this.profileService.getProfileList().subscribe(data =>{
      this.profiles=data;

    });
    console.log(this.profiles);
  }
  updateprofile(loanid:number){
    this.router.navigate(['update-profile',loanid]);
  }
 deleteprofile(loanid:number){
   this.profileService.deleteprofile(loanid).subscribe(data =>{
     console.log(data);
     this.getProfiles();
   })
 }
}