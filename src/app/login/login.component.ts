import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';

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
  constructor( private _LoginService :   LoginService ,
               private router: Router) {}
  
  signIn() {  
    this._LoginService.getLoginData()
  }  

} 
