const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const db = mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

module.exports = {mongoose};