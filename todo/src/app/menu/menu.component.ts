import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenService} from "../service/hardcoded-authen.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLoggedin : boolean = this.hardcodedAuthenService.isUserLoggedIn()

  constructor(private hardcodedAuthenService: HardcodedAuthenService) { }

  ngOnInit() {



  }

}
