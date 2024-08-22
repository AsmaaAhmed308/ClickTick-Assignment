import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import { LoginComponent } from './login.component';
import { AppRoutingModule } from '../app.routes';

@NgModule({  
  declarations: [  
    LoginComponent  
  ],  
  imports: [  
    BrowserModule, 
    AppRoutingModule ,
    
  ],  
  providers: [],  
  bootstrap: [LoginComponent]  
})  
export class LoginModule { }  