import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) {

   }

   addProductToCart(cartObj:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/cart",cartObj)
   }

   getAllCartItems():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/cart");
   }

   deleteCartItem(id:number) : Observable<any>{
    return this.http.delete<any>(`${this.cartUrl}/cart/${id}`)
   }

   updateCartItem(Id: number, cartObj: any): Observable<any> {
    return this.http.put<any>(`${this.cartUrl}/cart/${Id}`, cartObj);
  }

  getCartItemById(id:number){
    return this.http.get(`${this.cartUrl}/cart/${id}`);
  }




}
