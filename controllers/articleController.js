const Article = require('../models/article.js');

const createArticle = async (req, res) => {
  const data = new Article({
      header: req.body.header,
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

const getArticles = async (req, res) => {
  try {
    const data = await Article.find();
    res.json(data)
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const getArticleById = async (req, res) => {
  try {
    const data = await Article.findById(req.params.id);
    res.json(data)
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    const data = await Article.find();
    res.json(data)
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const updateArticle = async (req, res) => {
  try {
    const data = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(data)
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const addCommentToArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    article.comments.push(req.body.commentId);
    const updatedArticle = await article.save();
    res.json(updatedArticle);
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

module.exports = { createArticle, getArticles, getArticleById, deleteArticle, updateArticle, addCommentToArticle };