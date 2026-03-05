const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    header: { required: true, type: String },
    content: { required: true, type: String }
})
module.exports = mongoose.model('Article', articleSchema);