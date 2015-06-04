var express = require('express');
var passport=require('passport');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/auth',
  passport.authenticate('facebook'),  function(req, res){
  	consolo.log("Inside");

    
  });

router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

module.exports = router;
