var mongoose = require('mongoose');
var config = require('../config.js');

mongoose.connect(config.db, function(err){
    if(err){
        console.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }
});
// models
require('./special');
require('./post');
require('./category');
//require('./advertise');
//require('./online');


exports.Special  = mongoose.model('Special');
exports.Post  = mongoose.model('Post');
exports.Category  = mongoose.model('Category');



//exports.Advertise   = mongoose.model('Advertise');
//exports.Online      = mongoose.model('Online');