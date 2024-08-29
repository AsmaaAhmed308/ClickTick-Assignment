import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItems, CartProducts, Product } from '../model/product-list.model'
import { NavbarComponent } from '../navbar/navbar.component';
import { FilterPipe } from '../pipe/search-filter.pipe';
import { catchError } from 'rxjs';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ FormsModule, CommonModule, NavbarComponent, FilterPipe, HomePageService], // Add HttpClientModule here  
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  providers: [HomePageService]
})

export class HomePageComponent {
  ProductDataUrl = "https://dummyjson.com/products"
  AddedCartDataUrl = "https://dummyjson.com/carts"
  ProductResponse = <any>{}
  AllProductsData: Product[] = [];
  ProductList: Product[] = [];
  categoryList = []
  categories: any[] = [];
  selectedCategory: any
  CartList: Product[] = [];
  searchText: any
  cartItemsCount: number = 0;
  userId: number = 0
  selectedProductList: CartProducts[] = []
  CartItems = <CartItems>{}

  constructor( private router: Router, 
               private _HttpClient: HttpClient, 
               private route: ActivatedRoute,
               private _HomePageService : HomePageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id']; // Assuming the route is defined with a parameter named 'id'  
      console.log('User ID:', this.userId);
    });
    this.getProducts()
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
  }
  //----------------------
  getSearchText(text: string) {
    this.searchText = text;
    console.log(' this.searchText ', this.searchText)
  }
  //-----------------------
  getProducts() {
    this._HttpClient.get(this.ProductDataUrl).subscribe(response => {
      if (response) {
        this.ProductResponse = response
        if (this.ProductResponse['products'] && this.ProductResponse['products'].length > 0) {
          this.handelProductList()
        }
        console.log(response)
      }
    }, error => {
      console.error('Error fetching user data:', error);
    });
  }



  handelProductList() {
    this.AllProductsData = this.ProductResponse['products']
    this.ProductList = [...this.AllProductsData]
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
    console.log(' this.categories_', this.categories)
  }


  filterProductsByCategory(category: any) {
    this.ProductList = []
    this.ProductList = [...this.AllProductsData]
    if (category.categoryName != 'All') {
      this.ProductList = this.ProductList.filter(ele => ele.category == category.categoryName)
    }
    console.log('category ___', category)
    console.log('AllProductsData ___', this.AllProductsData)

  }


  addToCart(item: any) {
    if (item) {
      let selectedProduct = <CartProducts>{}
      item['quantity'] = item['quantity'] ? item['quantity'] + 1 : 1
      //------------------------
      selectedProduct.id = item.id
      selectedProduct.title = item.title
      selectedProduct.price = item.price
      selectedProduct.quantity = item.quantity
      selectedProduct.total = item.price * item.quantity
      selectedProduct.discountPercentage = item.discountPercentage
      selectedProduct.discountedTotal = item.discountPercentage * item.quantity
      selectedProduct.thumbnail = item.thumbnail
      console.log('selectedProduct:', selectedProduct);
      //------------------------
      let productExistinCart = this.selectedProductList.find(ele => ele.id == item.id)
      let productExistinCartIndex = this.selectedProductList.findIndex(ele => ele.id == item.id)
      if (!productExistinCart)  // if this product not exists before , push it
      {
        this.selectedProductList.push(selectedProduct)
      }
      else      // if it exists , increase quantity of this product
      {
        this.selectedProductList[productExistinCartIndex].quantity = this.selectedProductList[productExistinCartIndex].quantity + 1
      }
      //------------------------

      this.CartItems.id = 1
      this.CartItems.products = this.selectedProductList
      this.CartItems.userId = this.userId
      this.CartItems.totalProducts = this.selectedProductList.length

      this.CartItems.total = 0
      this.CartItems.discountedTotal = 0
      this.CartItems.totalQuantity = 0

      this.selectedProductList.forEach(prod => {
        this.CartItems.total = this.CartItems.total + (prod.total * prod.quantity)
        this.CartItems.discountedTotal = this.CartItems.discountedTotal + (prod.discountedTotal * prod.quantity)
        this.CartItems.totalQuantity = (this.CartItems.totalQuantity + prod.quantity)
      });
      //------------------------
      this.cartItemsCount = this.cartItemsCount + 1
    }

    //this._HttpClient.post(this.AddedCartDataUrl , this.CartItems).pipe( catchError(this.handelError()) )

    this.CartItems


    console.log('Item added to cart:', item);
    console.log('CartItems v:', this.CartItems);
  }

  handelError(){}
}
