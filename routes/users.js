var express = require('express');
var router = express.Router();

/* GET users listing. */
let x=[]
router.post('/create',function(req,res){
  console.log(x);
  let title = req.body.title;
  let description = req.body.description;
  x.push(title,description);
  console.log(x);
  res.send("created successfully")
})
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
