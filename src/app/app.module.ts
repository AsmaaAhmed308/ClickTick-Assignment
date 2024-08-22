import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import { provideHttpClient } from '@angular/common/http'; // Ensure this is included  
import { AppComponent } from './app.component';  
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    BrowserModule, 
    AppRoutingModule 
  ],  
  providers: [  
    provideHttpClient()  // Ensure this is set up correctly  
  ],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }