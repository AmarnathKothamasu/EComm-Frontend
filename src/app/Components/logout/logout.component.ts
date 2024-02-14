import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
    const confirmation = window.confirm("Are you sure you wanna logout!!")
    if(confirmation){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  else{
    this.router.navigate(['home'])
  }
  }

}
