import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { ProductServiceService } from 'src/app/Services/product-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
    this.cartObj.CustId=this.userIdLoggedIn;
    this.cartService.addProductToCart(this.cartObj).subscribe((res)=>{
    })
  }
}
