const express = require('express');
const asyncHandler = require('express-async-handler');
const todoCtrl = require('../controllers/todo.controller');

const router = express.Router();
module.exports = router;


router.route('/')
  .post(asyncHandler(createTodos));

router.route('/')
  .get(asyncHandler(getTodos));


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

async function getTodos(req,res){
    let todos = await todoCtrl.getAllTodos();
    res.json(todos);
}