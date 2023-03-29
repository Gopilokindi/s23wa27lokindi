var express = require('express');
var router = express.Router();
var x;
var y;
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.x==undefined){
    x=Math.floor(Math.random()*10);
    y=Math.floor(Math.random()*10);
    let res1=Math.acosh(x);
    let res2=Math.log1p(x);
    let res3=Math.tan(y);
    let res4=Math.sqrt(y);
    res.send('Math.acosh(x) applied to '+x+' is '+res1+'</br> Math.log1p(x) applied to '+x+' is '+res2+'</br>Math.tan(y) applied to '+y+' is '+res3+'</br>Math.sqrt(y) applied to '+y+' is '+res4);
  }
  else{
    x=req.query.x;
    y=req.query.y;
    let res1=Math.acosh(x);
    let res2=Math.log1p(x);
    let res3=Math.tan(y);
    let res4=Math.sqrt(y);
    res.send('Math.acosh(x) applied to '+x+' is '+res1+'</br> Math.log1p(x) applied to '+x+' is '+res2+'</br>Math.tan(y) applied to '+y+' is '+res3+'</br>Math.sqrt(y) applied to '+y+' is '+res4);
  }
  

});

module.exports = router;
