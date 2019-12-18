import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


   name = this.route.snapshot.params['name']
  message = 'Welcome ' + this.name + ' !'

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.message)
    //this.name =
  }

}
