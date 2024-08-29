import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProductList';
  currentRouting : any

  constructor(  ) { 
  
  }


  ngOnInit() {  
  }

  }  
