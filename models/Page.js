/**
 * Created by iMorice on 24.10.15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PageSchema = new Schema({
    content: String,
    title: String,
    image: String,
    order: Number
});

PageSchema.statics = {
    load: function(id, cb){
        this.findOne({objectId: id}).exec(cb);
    }
};

mongoose.model('Page', PageSchema);