var express = require('express');
var router  = express.Router();
var User    = require('../models/user');

router.get('/', function(req, res, next) {
    var email = '';
    User.findOne({}, function(err, doc){
        if(err){
          return res.send('Error');
        }
        if (doc) {
            email = doc.email;

        }
        console.log("this is the email", email);
        res.render('node', {email: email});
    });
});

router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user  = new User({
        firstName: "Marco",
        lastName: "Berardini",
        password: "password",
        email: email
    });
    user.save();
    res.redirect('/');
});



module.exports = router;
