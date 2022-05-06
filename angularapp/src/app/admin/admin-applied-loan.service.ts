import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { AdminModel } from './admin-model';

@Injectable({
  providedIn: 'root'
})
export class AdminAppliedLoanService {
  emiID!:number;
  private baseURL="http://localhost:8080/"
  private editloan=this.baseURL+"admin/editLoan"
  private getAllLoans=this.baseURL+"admin/getAllLoans"
  private delete=this.baseURL+"admin/deleteLoan"
  private emi=this.baseURL+"admin/generateSchedule"
  private approve=this.baseURL+"admin/editStatusA"
  private reject=this.baseURL+"admin/editStatusR"
  private EditRepayment=this.baseURL+"admin/editRepaymentSchedule"
  private deletePayment=this.baseURL+"admin/deleteRepaymentSchedule"
  constructor(private http:HttpClient,private router:Router) { 
  }
  //for applied loans
  appliedLoan():Observable<AdminModel[]>
  {
    return this.http.get<AdminModel[]>(`${this.getAllLoans}`);
  } 
  //for edit Loan
  editLoan(id:any,statusById:AdminModel):Observable<Object>
  {
    return this.http.put(`${this.editloan}/${id}`,statusById);
  }
  //for deleting the loan
  deleteloan(id:Number):Observable<Object>
  {
      return this.http.delete(`${this.delete}/${id}`);
  }
  //for get by id
  getUserById(id:number):Observable<AdminModel>
  {
     return this.http.get<AdminModel>(`${this.delete}/${id}`);
  }
  //for status Approve
 editStatusA(id:any,statusById:AdminModel):Observable<Object>
  {
    return this.http.put(`${this.approve}/${id}`,statusById);
  }
  //for status Rejected
  editStatusR(id:any,statusById:AdminModel):Observable<Object>
  {
    return this.http.put(`${this.reject}/${id}`,statusById);
  }
  //for generate schedule
  generateSchedule(id:Number):Observable<Object>
  {
      return this.http.get(`${this.emi}/${id}`);
  }
  //for editrepaymentSchedule
  editRepayment(id:any,statusById:AdminModel):Observable<Object>
  {
    return this.http.put(`${this.EditRepayment}/${id}`,statusById);
  }
  //for deleting the payment Schedule
  deletePaymentSchedule(id:any,deleteSchedule:AdminModel):Observable<object>
  {
    return this.http.put(`${this.deletePayment}/${id}`,deleteSchedule);
  }
  //for emi sharing
  public setEmi(emi:any)
  {
      this.emiID=emi;
      this.router.navigate(['/admin/generateSchedule']); 
  }
  public getEmi()
  {
      return this.emiID;
  }
}