// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    
    // db.collection('Todos').insertOne({
    //     text: 'Vacuum', 
    //     completed: false
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert Todo', error)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //     name: 'David', 
    //     age: 35, 
    //     location: {
    //         city: 'Neuruppin',
    //         state: '', 
    //         country: 'Germany'
    //     }
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert User', error)
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
    // })

    db.close()
})
