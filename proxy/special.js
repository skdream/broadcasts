/**
 * Created by jiyj on 2014/11/19.
 */
var models = require('../models');
var Special = models.Special;
var ObjectId = require('mongodb').ObjectID;


//console.log(Special);

exports.getAllSpecial = function (callback) {
    Special.find().sort({create_at:-1}).exec(callback);
};
exports.newAndSave = function(title, callback){

    var special = new Special();
    special.title = title;
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

    Special.findOne({"_id" : ObjectId("546c8a29d99324fc1e4a023f")},function(err, special){
//      console.log(err);
        if(err ){
            return callback(err);
        }
        callback(special);
    })
};