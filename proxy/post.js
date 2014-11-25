/**
 * Created by jiyj on 2014/11/25.
 */
var models = require('../models');
var Post = models.Post;

/*exports.getAllSpecial = function (callback) {
    Special.find().sort({update_at:-1}).exec(callback);
};*/
exports.newAndSave = function(post, callback){

    var post = new Post();
    post.title       = post.title;
    post.category_id = post.category_id,
    post.special_id  = post.special_id,
    post.content     = post.content,
    post.pic_url     = post.pic_url,
    post.save(callback);

};
/*exports.updateSpecialById = function (specialId, title, callback) {
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