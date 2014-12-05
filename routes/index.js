var express = require('express');
var router = express.Router();
var special = require('../controllers/special');
var category = require('../controllers/category');
var post     = require('../controllers/post');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/addSpecial',special.index);
router.post('/addSpecial', special.addSpecial);

router.get('/editSpecial/:sid', special.showEdit);
router.post('/editSpecial',special.update);

router.get('/addCategory',category.index);
router.post('/addCategory',category.addCategory);

router.get('/post/:cid/:sid/:page',post.index);


/*
router.get('/user/:id', function (req, res, next) {
    console.log('although this matches');
    next();
});

router.get('/user/:id', function (req, res) {
    console.log('and this matches too');
    res.end();
});*/

//router.get('editCategory/:id',category.renderById);
//router.post('editCategory/:id',category.updateById);


module.exports = router;
