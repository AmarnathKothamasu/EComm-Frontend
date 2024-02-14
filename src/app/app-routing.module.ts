import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { loginGuard }   from './Shared/login.guard'
import { LogoutComponent } from './Components/logout/logout.component';
import { CategoryComponent } from './Components/category/category.component';
import { MobileComponent } from './Components/mobile/mobile.component';
import { SpeakersComponent } from './Components/speakers/speakers.component';
import { OthersComponent } from './Components/others/others.component';
import { AdminComponent } from './Components/admin/admin.component';
import { adminGuard } from './Shared/admin.guard';
import { UsersComponent } from './Components/users/users.component';
const routes: Routes = [
  {
    path : '',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component : HomeComponent,
    canActivate:[loginGuard]
  },
  {
    path : 'about',
    component : AboutComponent,
    canActivate:[loginGuard]
  },
  {
    path : 'contactUs',
    component:ContactComponent,
    canActivate:[loginGuard]
  },
  {
    path : 'products',
    component : ProductsComponent,
    canActivate:[loginGuard]
  },
  {
    path : 'cart',
    component : CartComponent,
    canActivate:[loginGuard]
  },
  {
    path : 'checkout',
    component : CheckoutComponent,
    canActivate:[loginGuard]
  },
  {
    path : 'login',
    component:LoginComponent
  },
  {
    path : 'logout',
    component:LogoutComponent
  },
  {
    path : 'signUp',
    component:SignUpComponent
  },
  {
    path : 'admin',
    component:AdminComponent,
    canActivate:[loginGuard,adminGuard]
  },
  {
    path:'admin/users',
    component:UsersComponent,
    canActivate:[loginGuard,adminGuard]
  },
  {
    path :'category',
    component:CategoryComponent,
    canActivate:[loginGuard],
    children: [
      { path: 'mobile', component: MobileComponent },
      { path: 'speaker', component:SpeakersComponent},
      { path: 'other', component:OthersComponent}
    ]
  },
  {
    path : '**',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
