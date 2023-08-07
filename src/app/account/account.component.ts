import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  username?: string
  birthdate?: string
  age?: number
  email?: string

  ngOnInit(): void {
    if(this.auth.jsonObj.valid){
      let data = this.auth.jsonObj
      this.username = data.username; this.birthdate = data.birthdate;
      this.age = data.age; this.email = data.email;
    } else {
      this.router.navigate(['login'])
    }
  }

  constructor(private router: Router, private auth: AuthService){

  }
}
