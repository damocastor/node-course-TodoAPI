const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app = express() 
var port = process.env.PORT || 8080

app.use(bodyParser.json())

var responseFail = (statusCode) => {
    res.status(statusCode).send()  
};

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc)
    }, (error) => {
        res.status(400).send(error)
    })
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e)
    })
})

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
           return res.status(404).send();
        }

        res.send({todo})
    }).catch((e) => {
        return res.status(400).send();
    })
})

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return responseFail(404);
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
            return responseFail(404);
        }

        res.send({todo});
    }).catch((e) => {
        return responseFail(400)
    });
})

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id; 
    var body = _.pick(req.body, ['text', 'completed'])

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completeAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
         }
 
         res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })
})

app.listen(port, () => {
    console.log(`Started on port ${port}`)
})

module.exports = {app}