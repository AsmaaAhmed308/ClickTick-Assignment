import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import { LoginComponent } from './login.component';
import { AppRoutingModule } from '../app.routes';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({  
  declarations: [  
    LoginComponent,  
  ],  
  imports: [  
    BrowserModule, 
    AppRoutingModule, // Add the routing module here  
    HttpClientModule
  ],  
  providers: [],  
  bootstrap: [LoginComponent]  
})  
export class LoginModule { }  