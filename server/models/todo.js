var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    text: {
        type: String, 
        required: true, 
        minlength: 1, 
        trim: true
    },
    completed: {
        type: Boolean, 
        default: false
    }, 
    completedAt: {
        type: Number, 
        default: null
    }
})

var Todo = mongoose.model('Todo', schema)

var newTodo = new Todo({
    text: 'Shower',  
})

newTodo.save().then((doc) => {
    console.log('Saved Todo', doc)
}, (error) => {
    console.log('Unable to save todo')
})

newTodo = new Todo({ 
    text: 'Edit this video'
})

newTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2))
}, (error) => {
    console.log(error)
})

module.exports = {Todo}