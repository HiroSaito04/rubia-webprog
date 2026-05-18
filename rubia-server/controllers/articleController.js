// rubia-server/controllers/articleController.js
const Article = require('../models/Articles');

// Get all articles
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create article
const createArticle = async (req, res) => {
  try {
    // Log the incoming payload to see exactly what the client sent
    console.log("Incoming Article Payload:", req.body);

    const article = new Article(req.body);
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    console.error("Mongoose Save Error:", err.message);
    
    // Check for MongoDB Duplicate Key Error (Code 11000)
    if (err.code === 11000) {
      const duplicateField = Object.keys(err.keyValue)[0];
      return res.status(400).json({ 
        message: `Database Conflict: An entry with this ${duplicateField} already exists.` 
      });
    }

    res.status(400).json({ message: err.message });
  }
};

// Update article (Edit/Disable)
const updateArticle = async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );
    if (!updatedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete article
const deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    if (!deletedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {getArticles,createArticle, updateArticle, deleteArticle
};