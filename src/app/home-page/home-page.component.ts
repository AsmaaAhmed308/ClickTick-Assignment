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
  AllProductsData: Product[] = [];  
  ProductList: Product[] = [];  
  categoryList = []
  categories : any[] =[];  
  selectedCategory: any
  CartList  : Product[] = [];  
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

 

  handelProductList(){
    this.AllProductsData   =  this.ProductResponse['products']
    this.ProductList  =  [...this.AllProductsData]
    this.getProductCategories()
  }

  getProductCategories() {  
    this.categories.push({ categoryName: 'All', categoryCount: this.AllProductsData.length })

    this.AllProductsData.forEach(product => {  
        const category = product['category'];   
        
        // Check if the categories array already contains an object with categoryName equal to the current category  
        const categoryExists = this.categories.some(cat => cat.categoryName === category);  
        
        if (!categoryExists) {  
            let categoryList = this.AllProductsData.filter(ele => ele.category === category);  
            console.log(category, '----', categoryList);  
            this.categories.push({ categoryName: category, categoryCount: categoryList.length }); // Push only if it doesn't exist   
        }  
    }); 
    console.log(' this.categories_',  this.categories) 
}


filterProductsByCategory(category: any){
    this.ProductList = []
    this.ProductList  =  [...this.AllProductsData]
    if(category.categoryName != 'All'){
      this.ProductList =  this.ProductList.filter(ele => ele.category  ==  category.categoryName)  
    }
    console.log('category ___' ,   category)
    console.log('AllProductsData ___' ,   this.AllProductsData)

  }

  addToCart(item: any) {  
    this.CartList.push(item)
    console.log('Item added to cart:', item);  
}
}
