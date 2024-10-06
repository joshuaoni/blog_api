const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    minLength: [4, 'Title must be at least 4 characters']
  },

  content: {
    type: String,
    required: [true, 'Content title is required'],
    minLength: [10, 'Content must be at least 10 characters']
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
})

module.exports = mongoose.model('Blog', blogSchema);