import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //add user

  public addUser(user:any)
  {
    return this.http.post('http://localhost:8080/user/signup',user);
  }

  //add admin

  public addAdmin(user:any)
  {
    return this.http.post('http://localhost:8080/admin/signup',user);
  }



  //AUTHENTICATION
  //Generate Token for authentication

  public generateToken(loginData: any)
  {
    
    return this.http.post('http://localhost:8080/user/login',loginData);
     
    
}
public generateAdminToken(loginData: any)
  {
    
    return this.http.post('http://localhost:8080/admin/login',loginData);
     
    
}

/*public tokengetter()
{
  return this.http.get('http://localhost:8080/generate-token');
}*/


  //Get current user which is logged in
  public getCurrentUser()
  {
    return this.http.get('http://localhost:8080/current-user');
  }
  public getCurrentAdmin()
  {
    return this.http.get('http://localhost:8080/current-admin');
  }
  //login user: set token in local storage
  public loginUser(token:any)
  {
    localStorage.setItem("token",token);
    return true;
  }

  //isLogin: User is Logged in or not
  public isloggedIn()
  {
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null)
    {
      return false;
    }
    else
    {
      return true;
    }

  }


  //Logout: Remove token from local storage
  public logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //getToken: Return token if needed
  public getToken()
  {
    return localStorage.getItem("token");
  }


  //Set user details
  public setUser(user:any)
  {
    localStorage.setItem("user",JSON.stringify(user));//change user from JSON to String format
  }

  //Get user details
  public getUser()
  {
    let userStr=localStorage.getItem("user");
    if(userStr!=null)
    {
      return JSON.parse(userStr);//change user from string to json format
    }
    else
    {
      this.logout();
      return null;
    }
  }

  //get User Role
  public getUserRole()
  {
    let user=this.getUser();
    return user.authorities[0].authority;
  }


}
