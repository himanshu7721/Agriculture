import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAppliedLoanService } from '../admin-applied-loan.service';

@Component({
  selector: 'app-generate-schedule',
  templateUrl: './generate-schedule.component.html',
  styleUrls: ['./generate-schedule.component.css']
})
export class GenerateScheduleComponent implements OnInit {
  emiData!:number;
  msg:any;
  constructor(private router:Router,private adminService:AdminAppliedLoanService) 
  {  
    this.emiData=this.adminService.getEmi();
  }
  ngOnInit(): void {
  }
  conform()
  {
    this.adminService.generateSchedule(this.emiData).subscribe(data=>{
      this.msg=data;
     });
  window.alert("The Schedule has been Successfully Genearted");
  this.cancel();
  }
  cancel()
  {
     this.router.navigate(['admin/adminapprovedloan']);
  }

}
