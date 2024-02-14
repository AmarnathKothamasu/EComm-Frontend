import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userUrl = 'http://localhost:3000';
  
  constructor(private http:HttpClient) { 
  }

  //get All Users
  getAllUsers() : Observable <any[]>{
    return this.http.get<any[]>("http://localhost:3000/signUpUsers")
  }

  //delete user based on userId
  deleteUserId(id:number) : Observable<any>{
    return this.http.delete<any>(`${this.userUrl}/signUpUsers/${id}`)
  }
}
