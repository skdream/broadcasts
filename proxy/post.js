/**
 * Created by jiyj on 2014/11/25.
 */
var models = require('../models');
var Post = models.Post;

/*exports.getAllSpecial = function (callback) {
    Special.find().sort({update_at:-1}).exec(callback);
};*/
exports.newAndSave = function(opt, callback){

    var post = new Post();

        post.title       = opt.title;
        post.category_id = opt.category_id;
        post.special_id  = opt.special_id;
        post.content     = opt.content;
        post.pic_url     = opt.pic_url;
    post.save(callback);

};
/*
exports.updateSpecialById = function (specialId, title, callback) {
    Special.findOne({_id:specialId},function(err, special){
        if(err || !special){
            return callback(err);
        }
        special.title = title;
        special.update_at = new Date();
        special.save(callback);
    })
};

exports.getSpecialById = function (specialId, callback) {

    Special.findOne({_id : specialId},function(err, special){

        if(err ){
            return callback(err);
        }
        callback(err, special);
    })
};
*/