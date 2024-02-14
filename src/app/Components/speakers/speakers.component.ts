import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {


  cartObj={
    "CartId": 0,
    "CustId": 0,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": new Date(),
    "productName": "",
    "productPrice": 0,
    "productImageUrl": "",
  }
  include : boolean = false ;
  products : any[]=[];
  constructor(private productService : ProductServiceService , private cartService : CartServiceService){

  }
  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe((res:any)=>{
      this.products = res;
    })
  }

  addItemtoCart(product:any){
    this.cartObj.ProductId = product.productId;
    this.cartObj.AddedDate= new Date();
    this.cartObj.productImageUrl=product.productImageUrl;
    this.cartObj.productName=product.productName;
    this.cartObj.productPrice=product.productPrice;
    this.cartObj.Quantity=1;
    this.cartService.addProductToCart(this.cartObj).subscribe((res)=>{
      alert("added")
    })
  }
}

