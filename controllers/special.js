/**
 * Created by jiyj on 2014/11/19.
 */
var Special = require('../proxy').Special;
var Category = require('../proxy').Category;
var validator = require('validator');
exports.addSpecial = function(req, res, next){

    var title = validator.trim(req.body.title);
    var special_code = validator.trim(req.body.special_code);
    var category_id = req.body.category_id;
    title = validator.escape(title);


    // 验证
    var editError;
    if (title === '') {
        editError = '标题不能是空的。';
    } else if (title.length < 5 || title.length > 100) {
        editError = '标题字数太多或太少。';
    }else if(special_code === ''){
        editError = "项目代码不能是空的。"
    }

    // END 验证

    if (editError) {
        res.status(422);
        return res.render('error/error', {
            edit_error: editError,
            title: title
        });
    }

    var opt = {
        title :title,
        special_code : special_code,
        category_id : category_id
    };

    Special.getSpecialByCode(special_code,function(err, docs){
        if(err){
            return next(err);
        }
        if(docs){
            res.render('error/special',{error:'已存在相同项目代码'});
        }else{
            Special.newAndSave(opt,function(err, special){

                if(err){
                    return next(err);
                    //console.log(err);
                }
                res.redirect('/addSpecial');
            })
        }

    });

};
exports.index = function (req, res, next) {
    Category.getAllCategory(function(err,docs){
        if(err){
            return next(err);
        }
        return res.render('special',{
            title:'添加专题',
            cates:docs
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