var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect(config.db, function(err){
    if(err){
        console.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }
});
// models
require('./special');
require('./advertise');
require('./article');
require('./online');


exports.Special     = mongoose.model('Special');
exports.Advertise   = mongoose.model('Advertise');
exports.Article     = mongoose.model('Article');
exports.Online      = mongoose.model('Online');