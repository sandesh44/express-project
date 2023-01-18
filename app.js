var express = require("express");
var app = express();
const mysql = require("mysql")
const dotenv = require('dotenv')
const bcrypt = require("bcryptjs")
app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())

var userRouter = require('./routes/users')
var loginRouter = require('./routes/login')
app.use('/users',userRouter)
app.use('/',loginRouter)
dotenv.config({ path: './.env'})

app.listen(8000);