import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminModel } from 'src/app/admin/admin-model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerloanstatus',
  templateUrl: './customerloanstatus.component.html',
  styleUrls: ['./customerloanstatus.component.css']
})
export class CustomerloanstatusComponent implements OnInit {
  public data:AdminModel[]=[];
  user:String="";
  constructor(private route:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
  }
  public getData()
  {
    this.customerService.getloanData().subscribe(data=>{
      this.data=data
    });
    console.log(this.data);
  }
  trackLoan()
  {
    this.getData();
  }

}
