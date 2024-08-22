import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { RestApiService } from '../rest-api-services/rest-api-serices.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  //-------------------------------
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  email: string = '';  
  password: string = '';  
  errorMessage: string = '';  
  //-------------------------------
  constructor(  private router: Router,
                private  _RestApiService  : RestApiService
  ) {}
  
  signIn() {  
     this._RestApiService.getLoginData()
  }  

} 
