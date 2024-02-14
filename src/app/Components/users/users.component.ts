import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  userIdLoggedIn:string | null  = localStorage.getItem('userID');
  ngOnInit(): void {
  }

  usersList : any[] =[];
  constructor(private userService : UserService){
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((res:any)=>{
      this.usersList=res;
    })
  }

  deleteUser(id:number){
    if(this.userIdLoggedIn!=null  && Number(this.userIdLoggedIn)==id){
      alert("The user you are trying is the logged in user !! Can't Delete")
    }
    else{
    this.userService.deleteUserId(id).subscribe((res)=>{
    });
  }
    this.getAllUsers();
  }

}

