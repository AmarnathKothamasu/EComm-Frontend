import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent  implements OnInit {
 
  public newUserForm !: FormGroup;
 public newProductForm !: FormGroup
  constructor(private formbuilder : FormBuilder , private http : HttpClient ,private router:Router,private productService :ProductServiceService){
 
  }
  ngOnInit(): void {
     this.newUserForm = this.formbuilder.group(
       {
         firstname:['',Validators.required],
         lastname:['',Validators.required],
         email:['',Validators.required],
         password:['',Validators.required],
         role:['User',Validators.required]
       }
     )

     this.newProductForm = this.formbuilder.group(
      {
        productName:['',Validators.required],
        productPrice:['',Validators.required],
        productShortName:['',Validators.required],
        productImageUrl:['',Validators.required],
        Category:['Others',Validators.required]
      }
     )
  }
 
  newUser(){
     this.http.post<any>("http://localhost:3000/signUpUsers",this.newUserForm.value)
     .subscribe(res=>{
     alert("User creation successfull");
     this.newUserForm.reset();
  },
  err=>{
   alert("User creation is unSuccessfull")
  })
  }
 newProduct(){
  // this.productService.addNewProduct(this.newProductForm.value).subscribe((res)=>{
  //   this.newProductForm.reset();
  // })
  
  this.http.post<any>("http://localhost:3000/products",this.newProductForm.value)
  .subscribe(res=>{
  alert("Product Added succcesfully");
  this.newProductForm.reset();
},
err=>{
alert("Something went wrong")
})

 }

 viewUsers(){
  this.router.navigate(['/admin/users']);
 }
 }
