const mongoose = require('mongoose')


const DB = process.env.database;
 mongoose.connect(DB,{
    useNewUrlParser: true,
}).then(() => {
    console.log('connection to db is success');
}).catch((err) => {
    console.log('connection to db is failure');
    console.log(err);
})