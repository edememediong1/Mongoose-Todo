const Todo = require('../models/todoModel')


// @desc Get all todos
const getTodos = async (req, res) => {
    const todo = await Todo.find();
    res.json(todos);
}

//@desc Create a todo
const createTodo = async (req, res) => {
    const todo =  await Todo.create(req.body);
    res.status(201).json(todo);
}

// @desc Update a todo
const updateTodo = async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(todo);
};


// @desc Delete a todo
const deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({message: 'Todo removed'})
}


module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}