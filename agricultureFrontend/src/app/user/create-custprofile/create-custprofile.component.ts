import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-create-custprofile',
  templateUrl: './create-custprofile.component.html',
  styleUrls: ['./create-custprofile.component.css']
})
export class CreateCustprofileComponent implements OnInit {
profile:Profile=new Profile();
  constructor(private profileService:CustomerService,
    private router:Router ) { }

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