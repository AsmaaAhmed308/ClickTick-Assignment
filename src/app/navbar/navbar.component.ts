import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) { }
  goToHomePage(){
    this.router.navigate(['/HomePage']);  
  }

  goToLoginPage(){
    this.router.navigate(['/login']);  

  }
}
