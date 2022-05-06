import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAppliedLoanService } from '../admin-applied-loan.service';
import { AdminModel } from '../admin-model';

@Component({
  selector: 'app-edit-repayment-schedule',
  templateUrl: './edit-repayment-loan.component.html',
  styleUrls: ['./edit-repayment-loan.component.css']
})
export class EditRepaymentScheduleComponent implements OnInit {
  admindata:AdminModel=new AdminModel();
  loanId:any;
  src:any;
  constructor(private adminservice:AdminAppliedLoanService,private router:ActivatedRoute,private route:Router) 
  { }

  ngOnInit(): void {
    this.loanId=this.router.snapshot.params['id'];
    this.getData(this.loanId);
  }
  private getData(loanid:any)
  {
      this.adminservice.getUserById(loanid).subscribe(data=>{
        this.admindata=data},err=>console.log(err)); 
  }
  //submit method
onSubmit(t:any)
{
      this.adminservice.editRepayment(t.loan_id,t).subscribe(data=>
        this.src=data);
        console.log(this.src);
      window.alert("Updated the edit Repayment Schedule for "+this.loanId+" Successfully DONE !!");
      this.route.navigate(['/admin/adminapprovedloan']);
}
cancel()
{
  this.route.navigate(['/admin/adminapprovedloan']); 
}
}
 

