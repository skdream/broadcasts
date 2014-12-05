/**
 * Created by jiyj on 2014/11/27.
 */
var Post = require('../proxy').Post;
var validator = require('validator');


exports.addOne = function(req, res, next){
    var opts = {
            title       : req.body.title,
            category_id : req.body.category_id,
            special_id  : req.body.special_id,
            content     : req.body.content,
            author      : req.cookie.username,
            pic_url     : req.body.pic_url
        }

    Post.newAndSave(opts,function(){
        res.redirect('/');
    });
};

exports.updateById = function(req, res, next){

        var query = { _id :req.params.pid },
        update = {
            "category_id" : req.body.category_id,
            "special_id"  : req.body.special_id,
            "title"       : req.body.title,
            "content"     : req.body.content,
            "pic_url"     : req.body.pic_url,
            "update_at"   : new Date().getTime()
        },
        options = {};
    Post.update(query,update,options,function(err,docs){
        res.redirect('/');
    });
}

exports.index = function(req, res, next){
    var cid = req.params.cid;
    var sid = req.params.sid;
    var page= req.params.page;

    Post.getPostByParams(cid, sid, page,function(err,posts){
        if(err){
            res.render('error/error',{error:err});
        }
        res.render('index',{
            posts:posts
        });
    });
};
