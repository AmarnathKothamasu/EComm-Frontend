import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  getAllProducts() : Observable <any[]>{
    return this.http.get<any[]>("http://localhost:3000/products")
   }

   addNewProduct(productObj:any) : Observable<any[]>{
    return this.http.post<any>("http://localhost:3000/products",productObj);
   }
}
