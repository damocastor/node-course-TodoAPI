// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5991736d15080ec766139c0b')
    }, {
        $set: {
            name: 'David'
        }, 
        $inc: {
            age: -2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })
    // db.close()
})
