const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Course = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    image: {type: String, required: true},
    slug: { type: String,unique: true, slug: "name" },
    video_id: {type: String}
},{
    timestamps: true // tự động tạo 2 trường cập nhật và update
});

module.exports = mongoose.model('Course', Course);
