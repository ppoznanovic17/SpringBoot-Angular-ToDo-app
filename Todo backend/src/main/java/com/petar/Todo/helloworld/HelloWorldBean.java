package com.petar.Todo.helloworld;

public class HelloWorldBean {

    private String name;
    private String lastname;

    public HelloWorldBean (String name, String lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    @Override
    public String toString() {
        return String.format("HelloWorldBeadn [name = %s, lastname =%s]",name, lastname);
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getLastname() {
        return lastname;
    }

    public String getName() {
        return name;
    }
}
