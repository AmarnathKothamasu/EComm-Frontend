import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
 
 public signUpForm !: FormGroup;

 constructor(private formbuilder : FormBuilder , private http : HttpClient ,private router:Router){

 }
 ngOnInit(): void {
    this.signUpForm = this.formbuilder.group(
      {
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        role:['User']
      }
    )
 }

 signUp(){
    this.http.post<any>("http://localhost:3000/signUpUsers",this.signUpForm.value)
    .subscribe(res=>{
    alert("SignUp Successfull");
    this.signUpForm.reset();
    this.router.navigate(['/login']);
 },
 err=>{
  alert("Sign Up is unSuccessfull")
 })
 }

}
