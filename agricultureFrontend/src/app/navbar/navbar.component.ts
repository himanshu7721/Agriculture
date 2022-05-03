import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../auth/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
value:any
  constructor(public loginservice: LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  

  public logout()
  {
    this.value=window.confirm("Do you want to LogOut ?");
    if(this.value==true)
    {
      
    this.loginservice.logout();
    window.location.reload();
    }
    else{
      this.router.navigate(['admin/home']);
    }
    
  }

}
