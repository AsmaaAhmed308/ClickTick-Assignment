import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product-list.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(  private _HttpClient: HttpClient ) {}
  ProductDataUrl = "https://dummyjson.com/products"


  getProducts(): Observable<Product[]>{
    return this._HttpClient.get<Product[]>(this.ProductDataUrl)
  }
}
