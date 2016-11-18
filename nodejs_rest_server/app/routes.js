var appRouter = function(app, todoService) {

    app.get("/todos", function(req, res) {
        console.log(req);
        res.send(todoService.getTodos());
    });

    app.post("/todos", function(req, res) {
        console.log(req);
        todoService.addTodo(req.body);
        res.send('true');
    });

}

module.exports = appRouter;