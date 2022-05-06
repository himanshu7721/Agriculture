import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AdminAppliedLoanService } from '../admin-applied-loan.service';
import { AdminModel } from '../admin-model';
import { Injectable } from '@angular/core'; // at top

@Injectable({
  providedIn: 'root' // just before your class
})

@Component({
  selector: 'app-adminapprovedloan',
  templateUrl: './adminapprovedloan.component.html',
  styleUrls: ['./adminapprovedloan.component.css']
})
export class AdminapprovedloanComponent {

  public admindata:AdminModel[]=[];

//for search variables
public msg:any;
public searchUser:String="";
  constructor(private adminappliedloan:AdminAppliedLoanService,private router:Router){}
  ngOnInit(): void {
  }
public getappliedLoans()
{
  this.adminappliedloan.appliedLoan().subscribe(data=>{
    this.admindata=data;
  });
}
 //for searching the user
 public searchuser()
  {
    this.getappliedLoans();
  }

  //for deleting the loan
 deleteLoan(id:number)
  {
    this.router.navigate(['/admin/deleteLoan',id]);
  }

  //for editing the editing the loan
  editLoan(id:number)
  {
    console.log("we are in editing LOAN ",id);
    this.router.navigate(['/admin/editLoan',id]);
  }
  //for generating schedule
  generateEmi(id:number)
  {
    this.adminappliedloan.setEmi(id);
  }
  //for editing the repayment Schedule
  editRepaymentLoan(id:number)
  {
    this.router.navigate(['/admin/editRepaymetSchedule',id]);
  }
  //for delete-repayment-schedule
  deleteRepaymentSchedule(id:number)
  {
    this.router.navigate(['/admin/deleteRepaymentSchedule',id]);
  }
}
