import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit {
hide=true;
hides=true;
constructor(private loginservice:LoginService,private snack:MatSnackBar, private router:Router)
{

}



  //data binding
  public user={
    emailId:'',
    username:'',
		mobileNumber:'',
	  password:'',
		 userRole:'',
  };

  public pass={
    confirmPassword:'',
  };
  
  //Validation
  usertype= new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  username= new FormControl('', [Validators.required]);
  mobileNumber= new FormControl('', [Validators.required,Validators.pattern('[0-9]{10,10}')]);
  password= new FormControl('', [Validators.required]);
  confirmPassword= new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getError()
  {
    return 'Invalid Input';
  }
 
  formSubmit()
  {
    //Validation
    if(this.usertype.hasError('required')||this.email.hasError('required')||this.email.hasError('email')||this.mobileNumber.hasError('required')||this.password.hasError('required')||this.confirmPassword.hasError('required'))
    {

    }
    
    
    

//add user to database:user service
else if(this.user.userRole=='user'&&this.user.password!='admin')
{
  
  this.loginservice.addUser(this.user).subscribe(
    (data)=>
    {
      //success
      console.log(data);
      Swal.fire('Success','User is registered Successfully','success');
      this.router.navigate(['user/login']);
    },
    (error)=>
    {
      console.log(error);
      this.snack.open('Database Error!!','',{
        duration:3000,
      });
    }
  )
  
}

  //add admin
  else if(this.user.userRole=='admin')
{
  this.loginservice.addAdmin(this.user).subscribe(
    (data)=>
    {
      //success
      console.log(data);
      
      Swal.fire('Success','Admin is registered Successfully','success');
      this.router.navigate(['admin/login']);
    },
    (error)=>
    {
      console.log(error);
      this.snack.open('Database Error!!','',{
        duration:3000,
      });
    }
  )
  }
  else
  {
    this.snack.open('User Role should be either user or admin!! OR password is unauthorized try usimg a different password','',{
      duration:3000,
    });
  }
}


  ngOnInit()
  {
    
  }
}
