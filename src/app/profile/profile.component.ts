import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  username?: string
  email?: string = "";
  birthdate?: string = "";
  age?: number;
  
  constructor(private auth: AuthService, private router: Router){}
  
  ngOnInit(): void {
    if(this.auth.jsonObj.valid){
      let data = this.auth.jsonObj
      this.username = data.username; this.birthdate = data.birthdate;
      this.age = data.age; this.email = data.email;
    } else {
      this.router.navigate(['login'])
    }
  }


  calculateAge(){
    let birthday = new Date(this.birthdate!)
    let now = new Date()
    this.age = now.getFullYear() - birthday.getFullYear()
    if(now.getMonth() - birthday.getMonth() < 0){
      this.age--
    }
  }
  
  saveChanges(){
    this.calculateAge()
    console.log(this.age)
    let user = {
      username: this.username,
      email: this.email,
      birthdate: this.birthdate,
      age: this.age,
      valid: true
    }
    this.auth.editProfileData(user)
  }
}
