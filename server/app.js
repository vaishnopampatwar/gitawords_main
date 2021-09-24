const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv=require('dotenv')

dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(express.json())
//linked router file
app.use(require('./router/auth'))

const User = require('./model/userSchema');

const PORT= process.env.PORT
const middleware = (req,res,next)=>{
    console.log(`hello middleware`);
    next();
}

app.listen(PORT,()=>{
    console.log(`server is runing ${PORT}`);
})