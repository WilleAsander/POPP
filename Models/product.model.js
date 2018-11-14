var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    description: {type : String, required : false , max: 200},
    category: {type: String, required : false , max:200},
    price: {type: Number, required: true}

});

module.exports = mongoose.model('Product', ProductSchema);