import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  

let loginUserData = "https://dummyjson.com/users";
@Injectable({  
  providedIn: 'root', // This makes the service available throughout the app  
})  
export class RestApiService {  

  constructor(
     private _HttpClient: HttpClient
    ) {}  

  getLoginData() {  
       this._HttpClient.get(  loginUserData ) ;  
  }  
  }