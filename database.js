const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/Mydatabase');
const db = mongoose.connection;
db.on("error",(error)=>console.log(error));
db.once("open",()=>console.log("DB Connected"));
