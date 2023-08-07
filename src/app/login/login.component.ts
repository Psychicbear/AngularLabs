import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  error: boolean = false
  login = async () => {
    console.log(this.username, this.password)
    let req = await this.auth.authenticate(this.username, this.password)
    if(req.valid){
      this.router.navigate(['account'])
    } else {
      this.error = true
    }
  }
  
  constructor(private router: Router, private auth: AuthService){

  }

}
