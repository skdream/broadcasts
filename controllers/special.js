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

exports.showEdit = function (req, res, next) {
    var sId = req.params.sid;
    if(!sId){
        return res.render('error/special',{error:"不存在该专题"});
    }
    Special.getSpecialById(sId, function (err, special) {

       if(err || !special){
           return res.render('error/special',{error:"不存在该专题1"});
       }
        console.log(err);
        res.render('editSpecial',{
            title:special.title,
            id:special._id
        });
    })
};

exports.update = function (req, res, next) {
    var speId = req.body._id;
    var title = req.body.title;

    Special.getSpecialById(speId,function(err,special){
        console.log(speId)
        if(!special){
            res.render('error/special',{error:err});
            return;
        }

        title = validator.trim(title);
        title = validator.escape(title);
        // 验证
        var editError='';
        if (title === '') {
            editError = '标题不能是空的。';
        } else if (title.length < 5 || title.length > 100) {
            editError = '标题字数太多或太少。';
        }

        if(editError){
            return res.render('error/special',{error:editError});
        }

        Special.updateSpecialById(speId,title,function(err){
            if(err){
                return next(err);
            }
            res.redirect('/addSpecial');
        });
    })
};