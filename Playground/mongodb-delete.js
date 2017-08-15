// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    
    // deleteMany
    // db.collection('Users').deleteMany({_id:123}).then((result)=> {
    //     console.log(result.result)
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) => {
    //     console.log(result)
    // })

    //findOneAndDelete
    db.collection('User').findOneAndDelete({
        _id: new ObjectID('5991736d15080ec766139c0b')
        }).then((result) => {
        console.log(result)
    })


    // db.close()
})
