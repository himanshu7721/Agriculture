import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

//const Token_Header = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{

    constructor(private loginservice:LoginService)
    {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let authreq=req;
        
        //add the JWT token  (Local Storage) request
        const token=this.loginservice.getToken();

        console.log("Inside Interceptor");

        if(token!=null)
        {
            authreq=authreq.clone({setHeaders: { Authorization: `Bearer ${token}` },
            
        });
        console.log("yd");
        }
        return next.handle(authreq);
    }
}
export const AuthInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,
    },
];