var express = require("express");
var app = express();
var router = express.Router();
const db = require("../database");
const User = require('../models/user');
var ObjectId = require('mongodb').ObjectID;

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("pages/index.ejs");
});
router.post("/auth/register", (req, res) => {
  var document = req.body;
  var result = new User(document)
  result.save()

});

router.get("/new", (req, res) => {
  User.findById(("63b501daec932c61aee2ca66"))
  .then(doc => {
    res.render('dashboard.ejs',{doc:doc})
  })
  .catch(err => {
    console.log(err);
  });
});
module.exports = router;
