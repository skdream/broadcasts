/**
 * Created by jiyj on 2014/11/27.
 */
var category = require('../proxy').Category;
var validator = require('validator');


exports.index = function(req, res, next){
    res.render('category',{

    });
};
exports.addCategory = function(req, res, next){
    var category_code = req.body.category_code;

    var title = validator.trim(req.body.title);
    var code = validator.trim(category_code);
    title = validator.escape(title);

    // 验证
    var editError;
    if (title === '') {
        editError = '标题不能是空的。';
    } else if (title.length < 5 || title.length > 100) {
        editError = '标题字数太多或太少。';
    }else if(code === ''){
        editError = '项目代号不能为空'
    }

    category.getCategoryByCode(code,function(err, docs){
        if(err){
            return next(err);
        }
        console.log(docs);
        if(docs){
            editError = "已存在相同代码";
            if (editError) {
                res.status(422);
                return res.render('error/special', {
                    error: editError
                });
            }
        }else{
            category.newAndSave({
                category_code:category_code,
                title:title
            },function(err,doc){
                if(err){
                    return next(err);
                }
                res.redirect('/addCategory');
            });
        }
    });
};