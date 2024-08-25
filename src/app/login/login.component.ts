import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule  
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule], // Add HttpClientModule here  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  loginUserData = "https://dummyjson.com/users";
  responseObj = <any>{}
  usersArr = []
  loginUserAuthenticationData = <any>{}
  showWarningMessage: boolean = false;
  showDangerMessage: boolean = false;
  constructor(private router: Router, private _HttpClient: HttpClient) { }

  signIn() {

    this.reset()
    if (!this.email || !this.password) {
      this.showWarningMessage = true;
      return;
    }
    this._HttpClient.get(this.loginUserData).subscribe(response => {
      if (response) {
        this.responseObj = response
        if (this.responseObj.users && this.responseObj.users.length > 0) {
          this.usersArr = this.responseObj.users;
          this.checkLoginUserAuthuntication()
          console.log(response); // Handle the response  
        }
      }
    }, error => {
      console.error('Error fetching user data:', error);
    });
  }

  reset(){
    this.showWarningMessage  = false;
    this.showDangerMessage  = false;
    this.responseObj   = null
    this.usersArr = []
    this.loginUserAuthenticationData  = null
  }

  checkLoginUserAuthuntication() {
    //checkLoginUserAuthuntication
    this.loginUserAuthenticationData = this.usersArr.find(user => user['email'] == this.email && user['password'] && this.password)
    if (this.loginUserAuthenticationData) {
      console.log('Succesful , Authentication is exisit')
      this.showDangerMessage = false;
      this.router.navigate(['/HomePage']);  
    }

    else {
      console.log('warning , Authentication is not exisit')
      this.showDangerMessage = true;
    }
  }
}