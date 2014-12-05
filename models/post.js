/**
 * Created by jiyj on 2014/11/25.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
	category_id:{type:String},
    special_id:{type: String},
    title:{type: String},
    content:{type:String},
    author:{type:String},
    pic_url:{type:String},
    create_at:{type: Date, default:Date.now},
    update_at:{type:Date, default:Date.now}
});

PostSchema.index({create_at:-1});
mongoose.model('Post', PostSchema);