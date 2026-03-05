const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
     articleId: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article'
  },
  date: { required: true, type: Date },
  content: { required: true, type: String }
})

module.exports = mongoose.model('Comment', commentSchema);