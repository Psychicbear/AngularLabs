import { Injectable, OnInit } from '@angular/core';
interface UserData {
  username?: string,
  birthdate?: string,
  age?: number,
  email?: string,
  valid: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  jsonObj: UserData = {valid: false}

  ngOnInit(): void {
    this.getProfileFromSession()
  }

  constructor() { 

  }

  async authenticate(usr:string, pwd:string) {
    let response = await fetch('http://localhost:3000/api/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: usr, password: pwd})
    }).then(res => res.json())
    console.log(response)
    if(response.valid){
      sessionStorage.setItem("user", JSON.stringify(response))
      this.jsonObj = response
    } else response = {valid: false}

    return await response as UserData
  }
  


  getProfileFromSession() {
    let user: UserData = JSON.parse(sessionStorage.getItem("user") || "{'valid': 'false'}")
    if(user.valid){
      this.jsonObj = user
    }
  }

  editProfileData(user:UserData){
    sessionStorage.setItem("user", JSON.stringify(user))
    this.jsonObj = user
  }

  clearSession(){
    sessionStorage.clear()
    this.jsonObj = {valid: false}
  }
}
