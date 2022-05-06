import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerapplyloan',
  templateUrl: './customerapplyloan.component.html',
  styleUrls: ['./customerapplyloan.component.css']
})
export class CustomerapplyloanComponent implements OnInit {
  // clickEventSubscription : Subscription | undefined;
  // customer :Customer=new Customer();
  // constructor(private sharedService : SharedService,private customerService:CustomerService){
  //    this.clickEventSubscription=this.sharedService.getClickEvent().subscribe(()=>{
  //      this.onSubmit();
  //    });
  // }

   customer :Customer=new Customer();
   constructor(private customerService:CustomerService,private router : Router,private shared : SharedService) { }

   ngOnInit(): void {
   }

  //  saveCustomer(){
  //   this.customerService.addLoan(this.customer).subscribe(data=>{
  //         console.log(data);
  //         this.gotoFileUploader();
  //        },
  //         error=>console.log(error));
  //  }

   onSubmit()
   {
     this.shared.sendClickEvent(this.customer);
     this.router.navigate(['/user/addLoan/addDocuments']);
   }
  // onSubmit(){
  //   console.log(this.customer);
  //   this.saveCustomer();
  // }

  

 
}
