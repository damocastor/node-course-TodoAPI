const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

var id = '5992e480f785ae0117a8d441'

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// }
// Todo.find({
//     // Do NOT have to create a new ObjectID as MongoDB will do this for you given a containing the _id value
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos)
// })


// // Better Option as it gives you the object instead of an array of objects
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos: ', todo)
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("Id not found")
//     }
//     console.log('Todo By ID: ', todo)
// }).catch((e) => console.log(e))

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found')
    }
    console.log('User: ', user)
}).catch((e) => console.log(e))