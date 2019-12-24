package com.petar.Todo.helloworld;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {


    @GetMapping(path = "/hello-world")
    public String helloWorld () {
        return "Hello world";
    }

    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean () {
        return new HelloWorldBean("Petar", "Poznanovic");

    }

    @GetMapping(path = "/var/{name}")
    public HelloWorldBean helloWorldBeanVar (@PathVariable String name){
        return new HelloWorldBean(name, "Poznanovic");
    }

}
