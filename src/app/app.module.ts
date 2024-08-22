import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import { AppComponent } from './app.component';  
import { AppRoutingModule } from './app.routes';
import { LoginModule } from './login/login.module';

@NgModule({  
  declarations: [  
    AppComponent 
  ],  
  imports: [  
    BrowserModule,  
    AppRoutingModule, // Add the routing module here  
    LoginModule
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  