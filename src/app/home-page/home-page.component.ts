import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/product-list.model'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule], // Add HttpClientModule here  
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent {
  ProductDataUrl  = "https://dummyjson.com/products"
  ProductResponse  =<any>{}
  ProductList: Product[] = [];  
  categoryList = []
  categories : string[] =[];  
  selectedCategory: any
  constructor(private router: Router, private _HttpClient: HttpClient) { }

  ngOnInit() {  
    this.getProducts()
  }  

  ngOnChanges() {  
  }  

  ngOnDestroy() {  
  }  
  //----------------------
  getProducts(){
    this._HttpClient.get(this.ProductDataUrl).subscribe(response => {
      if (response) {
       this.ProductResponse  = response 
             if(this.ProductResponse['products'] && this.ProductResponse['products'].length > 0){
                  this.handelProductList()
             }
       console.log(response)
      }
    }, error => {
      console.error('Error fetching user data:', error);
    });
  }

 
  getProductCategories() {  
    this.ProductList.forEach(product => {  
        const category = product['category'];  
        // Check if the category already exists in the categories array  
        if (!this.categories.includes(category)) {  
            this.categories.push(category); // Push only if it doesn't exist  
        }  
    });  

    console.log(' this.categories__' ,  this.categories)
}

  handelProductList(){
    this.ProductList   =  this.ProductResponse['products']
    this.getProductCategories()
  }
}
