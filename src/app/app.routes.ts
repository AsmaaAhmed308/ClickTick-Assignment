import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';


export const  routes: Routes = [  
    { path: '', redirectTo: '/login/1', pathMatch: 'full' }, // Redirect root to login  
    { path: 'login/:id', component: LoginComponent },  
    { path: 'HomePage/:id', component: HomePageComponent },  
    // Add other routes here as needed  
  ];  
  
  @NgModule({  
    imports: [RouterModule.forRoot(routes)],  
    exports: [RouterModule]  
  })  
  export class AppRoutingModule { }  