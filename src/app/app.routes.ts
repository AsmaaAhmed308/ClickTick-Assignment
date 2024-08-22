import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';


export const  routes: Routes = [  
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect root to login  
    { path: 'login', component: LoginComponent },  
    // Add other routes here as needed  
  ];  
  
  @NgModule({  
    imports: [RouterModule.forRoot(routes)],  
    exports: [RouterModule]  
  })  
  export class AppRoutingModule { }  