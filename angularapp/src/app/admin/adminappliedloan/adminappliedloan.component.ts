import { Component, OnInit } from '@angular/core';
import { AdminAppliedLoanService } from '../admin-applied-loan.service';
import { AdminModel } from '../admin-model';

@Component({
  selector: 'app-adminappliedloan',
  templateUrl: './adminappliedloan.component.html',
  styleUrls: ['./adminappliedloan.component.css']
})
export class AdminappliedloanComponent implements OnInit {

 admindata:AdminModel[]=[];

 statusById: AdminModel=new AdminModel();
 src:any;

  constructor(private adminappliedloan:AdminAppliedLoanService){}
  ngOnInit(): void {
    this.appliedloan();
  }
 approveLoan(t:any)
  {
     this.adminappliedloan.editStatusA(t.loan_id,t).subscribe(data=>
      this.src=data);
      window.location.reload();
  }
  rejectLoan(t:any)
  {
    this.adminappliedloan.editStatusR(t.loan_id,t).subscribe(data=>
      this.src=data);
    window.location.reload();
  }
  private appliedloan()
  {
    this.adminappliedloan.appliedLoan().subscribe(data=>{
      this.admindata=data;
      console.log(this.admindata);
    })
  }
}
