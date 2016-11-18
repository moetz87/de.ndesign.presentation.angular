var todoService = {
	todos: [],
	addTodo: function(todo) {
		this.todos.push(todo);
	},
	getTodos: function() {
		return this.todos;
	}
}

module.exports = todoService;

