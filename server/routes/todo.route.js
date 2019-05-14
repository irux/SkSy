const express = require('express');
const asyncHandler = require('express-async-handler');
const todoCtrl = require('../controllers/todo.controller');





const router = express.Router();
module.exports = router;


router.route('/')
  .post(asyncHandler(createTodos));

router.route('/')
  .get(asyncHandler(getTodos));

router.route('/:todoid')
  .get(asyncHandler(getTodoById))

router.route('/:todoid')
  .delete(asyncHandler(deleteById))

router.route('/:todoid')
  .put(asyncHandler(updateById))




async function createTodos(req, res) {
    try{
        let user = await todoCtrl.create(req.body);
        res.json({"operation":"success","type":"added user",
         "description":"The following user was added", "attach":user});
    }
    catch(error){
        res.send("Error creating a new todo : " + error);
    }
    
  }

async function getTodoById(req,res){
  let todo = await todoCtrl.getTodoById(req.params.todoid)
  if(todo == null)
  {
    res.send("the todo with that id doesn't exist")
  }
  else{
    res.json(todo)
  }
  
}

async function updateById(req,res){
  let todo = await todoCtrl.updateById(req.params.todoid,req.body)
  if(todo == null)
  {
    res.send("the todo with that id doesn't exist")
  }
  else{
    res.json(todo)
  }
  
}




async function deleteById(req,res){
  try{
    let todo = await todoCtrl.deleteById(req.params.todoid)
    res.send("deleted")
  }
  catch(e){
    res.send("Error " + e)
  }
  
 
  
  
}

async function getTodos(req,res){
    let todos = await todoCtrl.getAllTodos();
    res.json(todos);
}