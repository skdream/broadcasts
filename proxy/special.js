/**
 * Created by jiyj on 2014/11/19.
 */
var models = require('../models');

var Special = models.Special;

//console.log(Special);
exports.newAndSave = function(title, callback){



    var special = new Special();

    special.title = title;

    special.save(callback);

};