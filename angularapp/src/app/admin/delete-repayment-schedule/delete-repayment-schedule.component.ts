import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAppliedLoanService } from '../admin-applied-loan.service';
import { AdminModel } from '../admin-model';

@Component({
  selector: 'app-delete-repayment-schedule',
  templateUrl: './delete-repayment-schedule.component.html',
  styleUrls: ['./delete-repayment-schedule.component.css']
})
export class DeleteRepaymentScheduleComponent implements OnInit {
  loanId:any;
  data:AdminModel=new AdminModel();
  src:any;
  constructor(private router:Router,private adminservice:AdminAppliedLoanService,private routeA:ActivatedRoute) 
  { }

  ngOnInit(): void {
    this.loanId=this.routeA.snapshot.params['id'];
    this.getData(this.loanId);
  }
  private getData(loanid:any)
  {
      this.adminservice.getUserById(loanid).subscribe(data=>{
        this.data=data},err=>console.log(err)); 
  }
  public cancel()
  {
    this.router.navigate(['/admin/adminapprovedloan']);
  }
  public conform(t:any)
  {
   this.adminservice.deletePaymentSchedule(t.loan_id,t).subscribe(data=>
    this.src=data);
    console.log(this.src);
   window.alert("Schedule for "+this.loanId+" Deleted Successfully");
   this.router.navigate(['/admin/adminapprovedloan']);
  }
}
