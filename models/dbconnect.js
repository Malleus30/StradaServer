const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/main';

function dbConnection (){
    mongoose
    .connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Db connected"))
    .catch((err) => console.log('Db error connection', err))
}

module.exports = dbConnection;