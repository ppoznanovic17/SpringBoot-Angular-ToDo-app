import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1,'Learn to swim',false, new Date()),
    new Todo(2,'Learn to play drums',true, new Date()),
    new Todo(3,'Learn angular',false, new Date())
    /*{id: 1, description: 'Learn to dance'},
    {id: 2, description: 'Learn to play golf'},
    {id: 3, description: 'Learn to code'},
    {id: 4, description: 'Learn song'}*/
  ]


  constructor() { }

  ngOnInit() {
  }

}
