import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private router:Router) 
  { }

  //for emi sharing
  emi!:number;
  public setEmi(emi:any)
  {
      this.emi=emi;
      this.router.navigate(['/admin/generateSchedule']); 
  }
  public getEmi()
  {
      return this.emi;
  }
}
