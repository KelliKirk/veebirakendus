const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  date: { required: true, type: Date },
  content: { required: true, type: String }
})

module.exports = mongoose.model('Comment', commentSchema);