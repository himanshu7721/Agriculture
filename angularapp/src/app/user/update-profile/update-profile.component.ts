import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  profile:Profile=new Profile();
  constructor(private profileService:CustomerService,
    private router:Router) { }

  ngOnInit(): void {

 
  }
  saveProfile(){
    this.profileService.createProfile(this.profile).subscribe(data =>{
      console.log(data);
      this.goToProfileList();
  
    },
    error=> console.log(error));
  }
  goToProfileList(){
    this.router.navigate(['/user/profile']);
  }
  onSubmit(){
    console.log(this.profile);
    this.saveProfile();
  }

}