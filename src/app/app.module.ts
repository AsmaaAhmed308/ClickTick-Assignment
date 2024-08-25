import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import { provideHttpClient } from '@angular/common/http'; // Ensure this is included  
import { AppComponent } from './app.component';  
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    BrowserModule, 
    AppRoutingModule 
  ],  
  providers: [  
    provideHttpClient()  
  ],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }