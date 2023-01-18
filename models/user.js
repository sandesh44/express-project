//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  name: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
},
created_at: {
    type: Date,
    default: Date.now
}
});

const User = mongoose.model("User", SomeModelSchema);
module.exports = User;