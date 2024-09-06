import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from '../pipe/search-filter.pipe';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule  , FormsModule,FilterPipe ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [  
    trigger('dropdownAnimation', [  
        state('void', style({ opacity: 0, transform: 'translateY(-10px)' })),  
        state('*', style({ opacity: 1, transform: 'translateY(0)' })),  
        transition('void => *', [  
            animate('200ms ease-in')  
        ]),  
        transition('* => void', [  
            animate('200ms ease-out')  
        ])  
    ])  
]  
})
export class NavbarComponent {
  @Input()  PageMode : string = ''
  @Output() searchTextFitration: EventEmitter<string> = new EventEmitter<string>();
  SearchTextFitrationVal : any
   currentRouting  : any 
   @Input() CartItemsCount : number = 0
  constructor(private router: Router ) {}
  goToHomePage(){
  }

  goToLoginPage(){
  }

  setSearchTextFitration(){
    this.searchTextFitration.emit(this.SearchTextFitrationVal)
  }


  isDropdownOpen = false;  

  toggleDropdown() {  
      this.isDropdownOpen = !this.isDropdownOpen;  
  }  

  goToProfile() {  
      // Navigate to profile  
      this.isDropdownOpen = false; // Close dropdown after action  
  }  

  goToOrders() {  
      // Navigate to orders  
      this.isDropdownOpen = false; // Close dropdown after action  
  }  

  goToSettings() {  
      // Navigate to settings  
      this.isDropdownOpen = false; // Close dropdown after action  
  }  

  goToLogout() {  
      // Perform logout  
      this.isDropdownOpen = false; // Close dropdown after action  
  }  


}
