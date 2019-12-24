import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class HelloWorldBead {

  constructor (public name: string,
               public lastname: string) {

  }

}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBead>('http://localhost:8080/hello-world-bean')

  }

  executeVarHelloWorldService (name) {
    return this.http.get<HelloWorldBead>(`http://localhost:8080/var/${name}`)
  }

}
