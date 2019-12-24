import { Component, OnInit } from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Router} from "@angular/router";

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

   todos = []
  message = ''

  // todos = [
  //   new Todo(1,'Learn to swim',false, new Date()),
  //   new Todo(2,'Learn to play drums',true, new Date()),
  //   new Todo(3,'Learn angular',false, new Date())
  //
  // ]


  constructor(private todoService:TodoDataService,
              private router: Router) { }

  ngOnInit() {
    this.refreshTodos()



  }


  refreshTodos () {
    this.todoService.retriveAllTodos('peca').subscribe(
      response => {
        this.todos = response
      },
      error => {
        console.log('Error')
      }
    )
  }

  deleteTodo(id) {
      this.todoService.deleteTodo('peca', id).subscribe(
        response => {
          console.log(response)
          this.message = `Delete of ${id} is successful.`
          this.refreshTodos()

        }
      )
    for (let todo of this.todos){
      console.log(todo.targetDate)
    }
  }

  updateTodo (id) {
      this.router.navigate(['todos',id])
  }

  addTodo () {
     this.router.navigate(['todos', -1])
  }

}
