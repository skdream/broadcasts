var express = require('express');
var router = express.Router();
var special = require('../controllers/special');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/addSpecial',special.index);

router.post('/addSpecial', special.put);

router.get('/editSpecial/:sid', special.showEdit);
router.post('/updateSpecial',special.update);


module.exports = router;
