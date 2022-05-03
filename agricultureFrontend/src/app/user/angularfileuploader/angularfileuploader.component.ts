import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CustomerService } from '../customer.service';
import { Subscription } from 'rxjs';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { CustomerapplyloanComponent } from '../customerapplyloan/customerapplyloan.component';
import { HttpClient } from '@angular/common/http';
import { FileUploadService } from '../file-upload.service';
import { variable } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-angularfileuploader',
  templateUrl: './angularfileuploader.component.html',
  styleUrls: ['./angularfileuploader.component.css']
})
export class AngularfileuploaderComponent implements OnInit {
 
  // customer1 :Customer=new Customer();

  public userFile: any=File;
  message : string |undefined;
  customer=this.shared.getClickEvent();
  customers:Customer[]=[] ;

  constructor(private router:Router,private customerService :CustomerService,private shared : SharedService,
    private httpclient : HttpClient,private fileupload:FileUploadService  ) {
  
          }
       
   

  ngOnInit(): void {
   
  }
  onClick(){
    this.router.navigate(['/user/addLoan']);
  }
  saveCustomer(){
    // this.uploadData=new FormData();
    // this.uploadData.append('customer',JSON.stringify(this.customer));
    // this.uploadData.append('imageFile',this.userFile);
    this.customerService.addLoan(this.customer).subscribe(data=>{
          console.log(data);
        this.displayMessage();
        // this.displayid();
         },
          error=>console.log(error));
   }
  
 
   onSubmit(){
    
    console.log(this.customer);
    this.saveCustomer();
  }

  onSelectFile(event: any){
     
     this.userFile=event.target.files[0];
    
  }
  onUpload(){
    console.log(this.userFile);
    const uploadData=new FormData();
    uploadData.append('imageFile',this.userFile,this.userFile.name);
    this.fileupload.addDocument(uploadData)
      .subscribe(data => {
        console.log(data);
      },
      error=>console.log(error));
      
      
  }
  displayMessage(){
    this.customerService.getCustomerlist().subscribe(data =>{
      this.customers=data;
      document.open();
      document.write("<div class=offset-md-6>")
        document.write("<p> You have Successfully applied for the loan .</p>");
        document.write("<p>Your Loan id is : "+this.customers[this.customers.length-1].loan_id)
        document.write("</div>")
        document.close();
     
  });

}
// displayid()
// {
//   document.open();
//   document.write("<p> You have Successfully applied for the loan .</p>");
//   document.write("<p>Your Loan id is : "+this.customers[this.customers.length-1].loan_id)
//   document.close();
// }
}





