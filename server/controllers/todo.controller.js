
const Joi = require('joi');
const Todo = require('../models/todo.model')

const todoSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    deadline: Joi.string().required(),
    progress: Joi.number().default(0)
  });
  

module.exports = {
    create,
    getAllTodos
  }

async function create(todo) {
    todoValidation = await Joi.validate(todo, todoSchema, { abortEarly: false });
    todo = new Todo(todoValidation);
    todo = await todo.save();
    return todo
  }

async function getAllTodos(){

    let allTodosQuery = Todo.find({});
    let info = allTodosQuery.exec();
    return info;
}
  