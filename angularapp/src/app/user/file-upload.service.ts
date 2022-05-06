import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private baseURL="http://localhost:8080/user/addDocument";
  constructor(private httpClient:HttpClient) { }

  addDocument(formdata:FormData):Observable<Object>
  {
      return this.httpClient.post(`${this.baseURL}`,formdata);
}
}
