// Convention is to name the model in uppercase and singular
const Todo = require('../models/todo');




function index(req, res) {
    // response.render
    // takes a template file as the first parameter
    // takes data as the second parameter, 
    //generates html, and sends it in the response.
    res.render('todos/index', {
        todos: Todo.getAll()
    });
}

function show(req, res) {
    console.log('req.params', req.params);
    /* {}

    */
    res.render('todos/show', {
        todo: Todo.getOne(req.params.id),
    });
}

module.exports = {
    index: index,
    show: show
};
