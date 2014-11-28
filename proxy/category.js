/**
 * Created by jiyj on 2014/11/25.
 */
var models = require('../models');
var Category = models.Category;


exports.newAndSave = function(cate, callback){

    var category = new Category();
    category.category_code = cate.category_code;
    category.title         = cate.title;
    category.save(callback);
};

exports.getAllCategory = function(callback){
    Category.find({}, function (err, docs) {
        if(err){
            return next(err);
        }
        return callback(null, docs);
    });
};
exports.getCategoryByCode = function (code, callback) {

    Category.findOne({category_code:code}, function (err, docs) {
        if(err){
            return next(err);
        }
        return callback(null, docs);
    })
};
