import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {


  customers:Customer[] | undefined;
  constructor(private customerService : CustomerService) { 
    
  }

  ngOnInit(): void {
    this.getcustomer();
  }
  private getcustomer()
  {
    this.customerService.getCustomerlist().subscribe(data =>{
       this.customers=data;
    });
  }
}
