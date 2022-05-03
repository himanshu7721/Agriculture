import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAppliedLoanService } from '../admin-applied-loan.service';
import { AdminModel } from '../admin-model';

@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.css']
})
export class EditLoanComponent implements OnInit {
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
      this.adminservice.editLoan(t.applicantLoanId,t).subscribe(data=>
        this.src=data);
        console.log(this.src);
      window.alert("Updated the edit LOAN for "+this.loanId+" Successfully");
      this.route.navigate(['/admin/adminapprovedloan']);
}
cancel()
{
  this.route.navigate(['/admin/adminapprovedloan']); 
}

}
