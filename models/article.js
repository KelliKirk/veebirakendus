const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    header: { required: true, type: String },
    content: { required: true, type: String },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
})

module.exports = mongoose.model('Article', articleSchema);
