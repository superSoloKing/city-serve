var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // console.log(req.query)
  // console.log('POST,进来')
  // console.log('参数',req.query)
  // console.log('参数req',req)
  res.json({name:'asd'})
});

module.exports = router;
