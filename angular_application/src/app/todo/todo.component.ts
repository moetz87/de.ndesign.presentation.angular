import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    todos: Todo[];
    newTodoDescription: string;
    todoService: TodoService;

    constructor(todoService: TodoService) {
		this.todoService = todoService;
        this.todos = [];
        this.newTodoDescription = "";
    }

    ngOnInit() {
		this.todoService.getTodos().subscribe(resp => {
			this.todos = resp;
		});
    }

    public onNewTodoClick(): void {
        let todo = new Todo(this.newTodoDescription);
        this.todoService.addTodo(todo).subscribe(resp => {
			this.todoService.getTodos().subscribe(resp => {
				this.todos = resp;
			});
		});
        this.newTodoDescription = "";
    }

}
