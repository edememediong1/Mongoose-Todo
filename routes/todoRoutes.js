const express = require('express');
const router = express.Router();
const { getTodos, createTodo, updateTodo, deleteTodo, toggleTodoCompleted} = require('../controllers/todoController')


router.route('/')
    .get(getTodos)
    .post(createTodo)

router.route('/:id')
    .put(updateTodo)
    .delete(deleteTodo)

router.route('/:id/toggle')
    .patch(toggleTodoCompleted)

module.exports = router;