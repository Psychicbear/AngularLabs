import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'week4tut';
  userAuth: boolean = false;
  constructor(private auth: AuthService, private router: Router){

  }

  logout(){
    this.auth.clearSession()
  }

  isLoggedIn(){
    return this.auth.jsonObj.valid
  }

  ngOnInit(): void {
  }
}
