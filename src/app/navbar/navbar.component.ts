import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from '../pipe/search-filter.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule  , FormsModule,FilterPipe ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input()  PageMode : string = ''
  @Output() searchTextFitration: EventEmitter<string> = new EventEmitter<string>();
  SearchTextFitrationVal : any
   currentRouting  : any
  constructor(private router: Router , private _ActivatedRoute: ActivatedRoute ) { 
    debugger
    this.currentRouting = +this._ActivatedRoute.snapshot.params['id']
    console.log('this.currentRouting : '  ,  this.currentRouting)
  }
  goToHomePage(){
    this.router.navigate(['/HomePage/2']);  
  }

  goToLoginPage(){
    this.router.navigate(['/login/1']);  
  }

  setSearchTextFitration(){
    this.searchTextFitration.emit(this.SearchTextFitrationVal)
  }



}
