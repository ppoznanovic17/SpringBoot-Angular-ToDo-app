package com.petar.Todo.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoResource {

    @Autowired
    private TodoHardCodedService todoService;

    @GetMapping(path = "/users/{username}/todos")
    public List<Todo> getAllTodos (@PathVariable String username){
        return todoService.findAll();
    }

    @GetMapping( path = "/users/{username}/todos/{id}")
    public Todo getTodo (@PathVariable String username, @PathVariable long id){

        return todoService.findById(id);
    }

    @DeleteMapping(path = "/users/{username}/todos/{id}")
    public Todo deleteTodo(@PathVariable String username, @PathVariable long id){
        Todo todo = todoService.deleteById(id);
        if (todo != null){
            return todo;
        }
        return null;
    }

    @PutMapping(path = "/users/{username}/todos/{id}")
    public Todo updateTodo (@PathVariable String username, @PathVariable long id,
                            @RequestBody Todo todo) {
        Todo todoUpdated = todoService.save(todo);
        return  todoUpdated;
    }

    @PostMapping(path = "/users/{username}/todos")
    public ResponseEntity<Void> postTodo (@PathVariable String username,  @RequestBody Todo todo){

        Todo createdTodo = todoService.save(todo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

}
