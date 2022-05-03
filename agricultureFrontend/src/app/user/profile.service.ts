import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Profile } from './profile';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseURL="http://localhost:8080/user/profile";
  private baseURL1="http://localhost:8080/user/profile/delete"
  constructor(private httpClient: HttpClient) { }
  getProfileList():Observable<Object>{
    return this.httpClient.get(`${this.baseURL}`);
  }

  createProfile(profile:Profile): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,profile);
  }

  deleteprofile(loanid:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL1}/${loanid}`);
  }
}
