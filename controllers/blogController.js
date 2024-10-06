const blogService = require('../services/blogService');

const createBlog = async (req, res) => {
  return await blogService.createBlog(req, res);
}

const getBlogs = async (req, res) => {
  return await blogService.getBlogs(res);
}

const getOneBlog = async (req, res) => {
  return await blogService.getOneBlog(req, res);
}

const editBlog = async (req, res) => {
  return await blogService.editBlog(req, res);
}

module.exports = {
  createBlog,
  getBlogs,
  getOneBlog,
  editBlog
}