import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent implements OnInit {

  value:any;
  constructor(private router:Router) 
  { }
   
  ngOnInit(): void {
  }
  logOut()
  {
    this.value=window.confirm("Do you want to LogOut ?");
    if(this.value==true)
    {
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['admin/adminhomepage']);
    }
  }

}
