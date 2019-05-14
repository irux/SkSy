
const Joi = require('joi');
const Todo = require('../models/todo.model')

const mongoose = require('mongoose');

const todoSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    deadline: Joi.string().required(),
    progress: Joi.number().default(0)
  });
  

module.exports = {
    create,
    getAllTodos,
    deleteById,
    updateById
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
  

async function deleteById(id){
  let todoById = Todo.deleteOne({_id : mongoose.Types.ObjectId(id)})
  return todoById;
}

async function updateById(id,body){

  let updateObject = {}

  if ("title" in body && body["title"] != null){
    updateObject["title"] = body.title
  }

  if ("title" in body && body["description"] != null){
    updateObject["description"] = body.description
  }

  if ("title" in body && body["progress"] != null){
    updateObject["progress"] = body.progress
  }

  if ("title" in body && body["deadline"] != null){
    updateObject["deadline"] = body.deadline
  }
  


  let todoById = Todo.findOneAndUpdate({_id :mongoose.Types.ObjectId(id)},{ $set: updateObject })
  let info = todoById.exec()
  return info;
}