import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
 
  const router = inject(Router)
  if(localStorage.getItem('Role')==="Admin"){
    return true;
  }
  //router.navigate(['login'])
  alert('you dont have access for this route')
  return false;
};
