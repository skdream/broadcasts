/**
 * Created by jiyj on 2014/11/19.
 */
var models = require('../models');
var Special = models.Special;
var ObjectId = require('mongodb').ObjectID;


//console.log(Special);

exports.getAllSpecial = function (callback) {
    Special.find().sort({update_at:-1}).exec(callback);
};
exports.newAndSave = function(opt, callback){

    var special = new Special();
    special.title = opt.title;
    special.special_code = opt.code;
    special.category_id = opt.category_id;
    special.save(callback);

};
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

exports.getSpecialByCode= function (specialCode, callback) {

    Special.findOne({special_code : specialCode},function(err, special){

        if(err ){
            return callback(err);
        }
        callback(null, special);
    })
};