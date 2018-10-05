var express = require('express');
var router = express.Router();
var User = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile('index.html');
});
router.post('/', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.subject;

  var user = new User({
    name: name,
    email: email,
    subject: subject,
    message:message
  });
  console.log(user);
  user.save()
    .then(game => {
    res.send(200).json({'User': 'User in added successfully'}, console.log("user Added"));
    })
    .catch(err => {
    res.send(400).send("unable to save to database");
    });
});

module.exports = router;
