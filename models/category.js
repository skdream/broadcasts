/**
 * Created by jiyj on 2014/11/25.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CategorySchema = new Schema({
   
    category_code:{type:String},
    title:{type: String},
    create_at:{type: Date, default:Date.now},
    update_at:{type:Date, default:Date.now}
});

CategorySchema.index({create_at:-1});
mongoose.model('Category', CategorySchema);