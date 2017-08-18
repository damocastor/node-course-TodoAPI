const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

var password = '123abc!'

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash)
//     });
// });

var hashedPassword = '$2a$10$qRZevMrVHXeU4rj36yLTJuNZJWzERhlTY2qMT8rg0tGN1SfHMxEce'; 

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res)
})

// var data = {
//     id: 5
// }
// var token = jwt.sign(data, "123abc")
// console.log(token)

// var decoded = jwt.verify(token, '123abc')
// console.log(decoded)
// var message = 'I am user number 2'; 

// var hash = SHA256(message).toString(); 

// console.log(
//     `Message: ${message}
//      Hash: ${hash}
//     `); 


// var data = {
//     id: 6
// }; 

// var token = {
//     data, 
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };


//  var resultHash = SHA256(JSON.stringify(token) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust');
// }