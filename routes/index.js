var express = require('express');
var router = express.Router();
var special = require('../controllers/special');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/addSpecial',function(req, res){
    res.render('addSpecial', {title:"添加专题"});
});

router.post('/addSpecial', special.put);
module.exports = router;
