import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenService} from "../service/hardcoded-authen.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'petar'
  password = 'password'
  invalidLogin = false
  errorMessage = ''

  constructor(private router: Router,
              private hardcodedAuthenService: HardcodedAuthenService) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username)
    console.log(this.password)

    if (!this.hardcodedAuthenService.authencicate(this.username, this.password  )){
      this.invalidLogin = true
      this.errorMessage = 'Username and password min lenght is 4!!!'
    }else {
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
    }

  }

}
