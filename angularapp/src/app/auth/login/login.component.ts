import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginData={
    email:'',
    password:'',
  };

  constructor(private snack:MatSnackBar,private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit()
  {
    console.log("login clicked");
   

    if(this.loginData.email.trim()=='' || this.loginData.password.trim()=='')
    {
      this.snack.open("Fields can't be Empty",'',{
        duration:3000,
      });
      return;
    }


    //Request to server to generate token
    else if(this.loginData.password.trim()=='admin')
    {
      this.loginservice.generateAdminToken(this.loginData).subscribe(
        (data:any)=>
        {
          console.log('success');
          console.log(data);
  
          //login
          this.loginservice.loginUser(data.token);
          this.loginservice.getCurrentAdmin().subscribe(
            (user:any)=>
            {
              this.loginservice.setUser(user);
              console.log(user);
  
              //redirect ... Admin Dashboard
              //redirect ... User Dashboard
              if(this.loginservice.getUserRole()=="admin")
              {
                //admin dashboard
                //window.location.href='/admin';
                this.router.navigate(['admin/home']);
              }
              else if(this.loginservice.getUserRole()=="user")
              {
                //user dashboard
                //window.location.href='/user';
                this.router.navigate(['user/home']);
              }
              else
              {
                this.loginservice.logout();
              }
            }
          )
  
  
        },
        (error)=>
        {
          console.log('Error!');
          console.log(error);
          this.snack.open("Invalid Details",'',{
            duration:3000,
          });
        }
      );
    }
    else
    {
  this.loginservice.generateToken(this.loginData).subscribe(
      (data:any)=>
      {
        console.log('success');
        console.log(data);

        //login
        this.loginservice.loginUser(data.token);
        this.loginservice.getCurrentUser().subscribe(
          (user:any)=>
          {
            this.loginservice.setUser(user);
            console.log(user);

            //redirect ... Admin Dashboard
            //redirect ... User Dashboard
            if(this.loginservice.getUserRole()=="admin")
            {
              //admin dashboard
              //window.location.href='/admin';
              this.router.navigate(['admin/home']);
            }
            else if(this.loginservice.getUserRole()=="user")
            {
              //user dashboard
              //window.location.href='/user';
              this.router.navigate(['user/home']);
            }
            else
            {
              this.loginservice.logout();
            }
          }
        )


      },
      (error)=>
      {
        console.log('Error!');
        console.log(error);
        this.snack.open("Invalid Details",'',{
          duration:3000,
        });
      }
    );


  }
}
}
