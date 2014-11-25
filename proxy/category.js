/**
 * Created by jiyj on 2014/11/25.
 */
var models = require('../models');
var Category = models.Category;


exports.newAndSave = function(cate, callback){

    var category = new Category();
    category.category_code = cate.category_code;
    category.title         = cate.title;
    post.save(callback);
};