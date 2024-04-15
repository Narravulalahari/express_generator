var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "It's a learning tutorial" ,subtitle:"welcome to the best youtube audience"});
});
router.get('/angular',function(req,res,next){
  res.render('index',{title:"IT is angularjs",subtitle:"welcome to angular js tutorial"})
})

module.exports = router;
