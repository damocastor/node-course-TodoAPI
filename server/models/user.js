var mongoose = require('mongoose')

var Userschema = new mongoose.Schema({
    user: {
        type: String, 
    }, 
    email: {
        type: String, 
        required: true, 
        trim: true, 
        minlength: 1
    }
})

var User = mongoose.model('User', Userschema)

var newUser = new User({
    user: 'damocastor', 
    email: 'damocastor@gmail.com'
})

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2))
}, (error) => {
    console.log(error)
})

module.exports = {User}