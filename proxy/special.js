/**
 * Created by jiyj on 2014/11/19.
 */
var models = require('../models');

var Special = models.Special;

//console.log(Special);

exports.getAllSpecial = function (callback) {
    Special.find().sort({create_at:-1}).exec(callback);
};
exports.newAndSave = function(title, callback){

    var special = new Special();
    special.title = title;
    special.save(callback);

};