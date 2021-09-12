const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const app = express()
dotenv.config({path: './config.env'})
require('./db/conn')

app.use(express.json());
app.use(cookieParser());

app.use(require('./routers/route'));

const port = process.env.PORT || 5000;

app.get('/',(req,res) => {
    res.send('Welcome to app')
})

app.get('/signin',(req,res) => {
    res.send('Welcome to signin page')
})

app.get('/signup',(req,res) => {
    res.send('Welcome to signup page')
})

// if(process.env.NODE_ENV === "production"){
//     app.use(express.static("client/build"))
// }

app.listen(port,()=>{
    console.log(`server is on port ${port}`);
})
