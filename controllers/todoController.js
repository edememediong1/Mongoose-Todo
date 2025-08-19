const Todo = require('../models/todoModel')


// @desc Get all todos
const getTodos = async (req, res) => {
    const todo = await Todo.find();
    res.json(todo);
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

// @desc Toggle completed state of a todo
const toggleTodoCompleted = async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
};


module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodoCompleted
}