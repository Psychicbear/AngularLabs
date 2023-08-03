import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  accounts = [
    {username: "bob", password: "alice123"},
    {username: "alice", password: "bob123"},
    {username: "fred", password: "i<3angular"}
  ]
  error: boolean = false
  login = (usr:string, pwd:string) => {
    let auth = this.accounts.find(item => item.username == usr && item.password == pwd)
    if(auth){
      this.router.navigate(['account'])
    } else {
      this.error = true
    }
  }
  
  constructor(private router: Router){

  }

}
