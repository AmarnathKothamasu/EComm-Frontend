import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginComponent } from '../Components/login/login.component';

export const loginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  if(localStorage.getItem('token')){
    return true;
  }
  router.navigate(['login'])
  alert('Please Login')
  return false;
};
