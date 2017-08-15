// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

var obj = new ObjectID()
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('59916fc10562daa9c1fe3b33')
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (error) => {
    //     console.log('Unable to fetch todos', error)
    // })
    db.collection('Users').find({
        location: {
            country: 'Germany'
        }
    }).toArray().then((docs) => {
        var user = JSON.stringify(docs, undefined, 2)
        console.log(`Users:${user}`)
        
    }, (error) => {
        console.log('Unable to fetch todos', error)
    })
    // db.close()
})
