/**
 * Created by jiyj on 2014/11/19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var SpecialSchema = new Schema({
    special_id:{type: ObjectId},
    title:{type: String},
    create_at:{type: Date, default:Date.now},
    update_at:{type:Date, default:Date.now}
});

SpecialSchema.index({create_at:-1});
mongoose.model('Special', SpecialSchema);