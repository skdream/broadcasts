/**
 * Created by jiyj on 2014/11/19.
 */
var Special = require('../proxy').Special;
var validator = require('validator');
exports.put = function(req, res, next){

    var title = validator.trim(req.body.title);
    title = validator.escape(title);

    // 验证
    var editError;
    if (title === '') {
        editError = '标题不能是空的。';
    } else if (title.length < 5 || title.length > 100) {
        editError = '标题字数太多或太少。';
    }

    // END 验证

    if (editError) {
        res.status(422);
        return res.render('error/error', {
            edit_error: editError,
            title: title
        });
    }

    Special.newAndSave(title,function(err, special){
        console.log(1);

        if(err){
            return next(err);
            //console.log(err);
        }
        res.redirect('/addSpecial');
    })
};
exports.index = function (req, res, next) {
    Special.getAllSpecial(function(err,doc){
        if(err){
            return next(err);
        }
        return res.render('addSpecial',{
            title:'添加专题',
            items:doc
        });
    })
};