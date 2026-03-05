const Comment = require('../models/comment.js');

const createComment = async (req, res) => {
  const data = new Comment({
      date: new Date(),
      content: req.body.content
  })
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({message: error})
  }
}

const getComments = async (req, res) => {
  try {
    const data = await Comment.find();
    res.json(data)
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const getCommentById = async (req, res) => {
  try {
    const data = await Comment.findById(req.params.id);
    res.json(data)
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    const data = await Comment.find();
    res.json(data)
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const updateComment = async (req, res) => {
  try {
    const result = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(result)
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

module.exports = { createComment, getComments, getCommentById, deleteComment, updateComment };