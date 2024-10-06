const Blog = require('../models/blogModel');
const { getOneCategory } = require('../services/categoryService');
const { isValidObjectId } = require('../utils/utils');

const createBlog = async (req, res) => {
  const { title, content, categoryId } = req.body;
  const userId = req.user.id;
  if (!isValidObjectId(categoryId)) {
    res.status(400).json({ message: 'Invalid category ID format' });
  }

  try {
    await getOneCategory(categoryId);

    const newBlog = new Blog({
      title,
      content,
      author: userId,
      category: categoryId
    });
    await newBlog.save();

    res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(el => el.message);
      return res.status(400).json({ message: errors });
    }

    if (err.message === 'Category does not exist' || err.message === 'Error fetching category') {
      return res.status(404).json({ message: err.message });
    }

    res.status(500).json({ message: 'Server error', err });
  }
}

const getBlogs = async (res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

const getOneBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);

    res.status(200).json(blog);
  } catch (err) {
    res.status(404).json({ message: 'Blog not found' });
  }
}

const editBlog = async (req, res) => {
  const updates = req.body;
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400).json({ message: 'Invalid blog ID format' });
  }
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );
    if (!updatedBlog) {
      res.status(404).json({ message: 'Blog does not exist' });
    }

    res.status(201).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: 'Error updating blog' });
  }
}

module.exports = {
  createBlog,
  getBlogs,
  getOneBlog,
  editBlog
}