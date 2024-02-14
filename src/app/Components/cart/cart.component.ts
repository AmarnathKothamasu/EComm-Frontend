import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  userIdLoggedIn : string | null = localStorage.getItem('userID');
  cartObj={
    "CartId": 0,
    "CustId": this.userIdLoggedIn,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": new Date(),
    "productName": "",
    "productPrice": 0,
    "productImageUrl": "",
  }

  totalValue : number = 0 ;
  totalNumber : number = 0;
  cartItems : any [] = [];
  constructor(private cartService : CartServiceService){

  }
  ngOnInit() {
   this.getAllCartItems();
  }
  getAllCartItems(){
    this.cartService.getAllCartItems().subscribe((res)=>{
        this.cartItems = res;
        // for (let i=0;i<this.cartItems.length;i++)
        // {
        //   this.totalValue  = this.totalValue  + this.cartItems[i].productPrice ;
        //   this.totalNumber  = this.totalNumber + this.cartItems[i].Quantity ;   
        // }

    })
  }

  deleteCartItem(id:number){
    
    this.cartService.deleteCartItem(id).subscribe((res)=>{
      alert("Item Deleted successfully")
      this.getAllCartItems();
    })
  }
  addOneMore(cartItem:any){
    this.cartObj.ProductId=cartItem.ProductId;
    this.cartObj.Quantity=cartItem.Quantity + 1;
    this.cartObj.productImageUrl = cartItem.productImageUrl;
    this.cartObj.productName = cartItem.productName;
    this.cartObj.productPrice = cartItem.productPrice + (cartItem.productPrice/cartItem.Quantity);
    this.cartService.updateCartItem(cartItem.id,this.cartObj).subscribe(
      
    )
    this.getAllCartItems();
    this.cartObj={
      "CartId": 0,
      "CustId": this.userIdLoggedIn,
      "ProductId": 0,
      "Quantity": 0,
      "AddedDate": new Date(),
      "productName": "",
      "productPrice": 0,
      "productImageUrl": "",
    }
  }

  removeOne(cartItem:any){
    if(cartItem.Quantity>1){
      this.cartObj.ProductId=cartItem.ProductId;
    this.cartObj.Quantity=cartItem.Quantity - 1;
    this.cartObj.productImageUrl = cartItem.productImageUrl;
    this.cartObj.productName = cartItem.productName;
    this.cartObj.productPrice = cartItem.productPrice - (cartItem.productPrice/cartItem.Quantity);
    this.cartService.updateCartItem(cartItem.id,this.cartObj).subscribe(
      )
      this.getAllCartItems();
      this.cartObj={
        "CartId": 0,
        "CustId": this.userIdLoggedIn,
        "ProductId": 0,
        "Quantity": 0,
        "AddedDate": new Date(),
        "productName": "",
        "productPrice": 0,
        "productImageUrl": "",
      }
    }
    else{
      //alert("Please delete the Item from the cart")
      const confirmation=window.confirm("Do you want to delete this item??!!")
      if (confirmation) {
       this.deleteCartItem(cartItem.id)
      } else {
        this.getAllCartItems()
      }
    }
  }
  
 
}
