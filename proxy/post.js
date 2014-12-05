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
        post.author      = opt.author;
        post.pic_url     = opt.pic_url;
    post.save(callback);

};
exports.update = function(query, update, options, callback){

    Post.findOneAndUpdate(query, update, options, callback);
};

exports.getPostByParams = function(cid, sid, page, callback){

    var query = {category_id:cid, special_id:sid};
    var options = {skip:(page-1)*10,limit:10};
    Post.find(query,{}, options,function(err,posts){
        if(err){
            return next(err);
        }
        callback(null,posts);
    });
}

