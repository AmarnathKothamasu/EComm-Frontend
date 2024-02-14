import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginInterceptor } from './Shared/login.interceptor';
import { LogoutComponent } from './Components/logout/logout.component';
import { CategoryComponent } from './Components/category/category.component';
import { MobileComponent } from './Components/mobile/mobile.component';
import { SpeakersComponent } from './Components/speakers/speakers.component';
import { OthersComponent } from './Components/others/others.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UsersComponent } from './Components/users/users.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    AboutComponent,
    ContactComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    LogoutComponent,
    CategoryComponent,
    MobileComponent,
    SpeakersComponent,
    OthersComponent,
    AdminComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:LoginInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
