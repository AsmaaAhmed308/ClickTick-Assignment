import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

let loginUserData = "https://dummyjson.com/users";
@Injectable({  
  providedIn: 'root', // This makes the service available throughout the app  
})  
export class LoginService {  

  constructor(private http: HttpClient) {}  

  getLoginData(): Observable<any> {  
    return this.http.get(  loginUserData ) ;  
  }  
}