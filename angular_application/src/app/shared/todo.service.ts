import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {

	todos: Todo[];
	httpService: Http;

	constructor(httpService: Http) {
		this.todos = [];
		this.httpService = httpService;
	}

	public addTodo(todo: Todo): Observable<boolean> {
		let headers = new Headers();
		headers.append("Content-Type", "application/json");
		let body = JSON.stringify(todo);
		return this.httpService.post('http://localhost:3000/todos', body, { headers: headers })
			.map(resp => resp.json() as boolean);
	}

	public getTodos(): Observable<Todo[]> {
		return this.httpService.get('http://localhost:3000/todos')
			.map(resp => resp.json() as Todo[]);
	}

}
