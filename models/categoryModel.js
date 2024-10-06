const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    minLength: [4, 'Category name must be at least 4 characters']
  }
})

module.exports = mongoose.model('Category', categorySchema);