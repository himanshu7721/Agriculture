import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapprovedloanComponent } from '../adminapprovedloan/adminapprovedloan.component';
import { AdminAppliedLoanService } from '../admin-applied-loan.service';
import { AdminModel } from '../admin-model';

@Component({
  selector: 'app-delete-loan',
  templateUrl: './delete-loan.component.html',
  styleUrls: ['./delete-loan.component.css']
})
export class DeleteLoanComponent implements OnInit {

  public admindata:AdminModel[]=[];

  constructor(private router:Router,private adminService:AdminAppliedLoanService,private status:AdminapprovedloanComponent,private route:ActivatedRoute) { }
   loanId:any=null;
  ngOnInit(): void {
    this.loanId=this.route.snapshot.params['id'];
    this.getappliedLoans();
    console.log("the loan id is ", this.loanId);
  }
  public getappliedLoans()
{
  this.adminService.appliedLoan().subscribe(data=>{
    this.admindata=data;
  });
  console.log(this.loanId);
}
  public cancel()
  {
    this.router.navigate(['/admin/adminapprovedloan']);
  }
  public conform(id:number)
  {
    this.adminService.deleteloan(id).subscribe(data=>{
      this.getappliedLoans();
    });
    window.alert("You have deleted the Loan "+id+" Successfully");
    this.router.navigate(['/admin/adminapprovedloan']);
  }

}
