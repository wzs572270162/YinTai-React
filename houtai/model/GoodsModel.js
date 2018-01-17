var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Goods = new Schema({
	username:   String,
    goods_name : String,
    price      : Number,
    img_url      : String,
    count        :Number,
    date     : {type:Date, default: Date.now}
});

var GoodsModel = mongoose.model('goods', Goods);

module.exports = GoodsModel;