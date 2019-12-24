import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../service/data/welcome-data.service";
import {error, log} from "util";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


   name = this.route.snapshot.params['name']
  message = 'Welcome ' + this.name + ' !'

  fullName = ''

  constructor(private route:ActivatedRoute,
              private service: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message)
    //this.name =
  }
  getWelcomeMessage () {
    console.log(this.service.executeHelloWorldBeanService())
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
            error => this.handleErrorResponse(error)
    )

    console.log('last line of')
  }

  getWelcomeMessageWithParams () {
     this.service.executeVarHelloWorldService('pecaaa').subscribe(
       response => {
         this.fullName = response.name + ' ' + response.lastname
       }
       ,error => console.log(error)
     )

  }

  handleSuccessfulResponse (response) {
      this.fullName = response.name + ' ' + response.lastname
     console.log(response)
  }

  handleErrorResponse (error) {
    console.log(error.error.message)
    console.log(error.error)
    console.log(error)
  }

}
