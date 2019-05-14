const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({


    title:{
       type:String,
       required:true
    },
    description:{
        type:String,
        required:true
    },
    deadline:{
        type:String,
        required:true
    },
    progress:{
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model('Todo', TodoSchema);
