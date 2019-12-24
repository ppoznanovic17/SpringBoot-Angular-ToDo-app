import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenService {

  constructor() { }

  authencicate (username, password) {
    //console.log(this.isUserLoggedIn())
    if (username.length < 4 || password.length < 4) {

      return false
    }
    sessionStorage.setItem('authUser', username)
    //console.log(this.isUserLoggedIn())
    return true
  }

  isUserLoggedIn () {
    let user = sessionStorage.getItem('authUser')
    return !(user===null)
  }

  logout () {
    sessionStorage.removeItem('authUser')
  }
}
