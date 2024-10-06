const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  return await categoryService.createCategory(req, res);
}

const getCategories = async (req, res) => {
  return await categoryService.getCategories(res);
}

const editCategory = async (req, res) => {
  return await categoryService.editCategory(req, res);
}

module.exports = {
  createCategory,
  getCategories,
  editCategory
}