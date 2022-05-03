import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs'; 
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
      
  // private subject=new Subject<Object>();
 customer:Customer=new Customer();
  sendClickEvent(customer: Customer)
  {
    this.customer=customer;
  }

  getClickEvent(){
    return this.customer;
  }
  
}
