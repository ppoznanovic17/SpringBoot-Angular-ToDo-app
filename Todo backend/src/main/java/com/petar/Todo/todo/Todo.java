package com.petar.Todo.todo;

import java.util.Date;
import java.util.Objects;

public class Todo {

    public long id;
    private String username;
    private  String description;
    private Date targetData;
    private boolean isDone;

    protected Todo () {

    }

    public Todo(long id, String username, String description, Date targetData, boolean isDone) {
        this.id = id;
        this.username = username;
        this.description = description;
        this.targetData = targetData;
        this.isDone = isDone;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        return id == todo.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public Date getTargetData() {
        return targetData;
    }

    public long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getUsername() {
        return username;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setTargetData(Date targetData) {
        this.targetData = targetData;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}
