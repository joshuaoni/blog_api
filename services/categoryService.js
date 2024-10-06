const Category = require('../models/categoryModel');
const { isValidObjectId } = require('../utils/utils');

const createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(el => el.message);

      return res.status(400).json({ message: errors });
    }

    res.status(400).json({ message: 'Invalid values submitted' });
  }
}

const getCategories = async (res) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

const getOneCategory = async (id) => {
  try {
    const category = await Category.findById(id);
    if (!category) {
      throw new Error('Category does not exist');
    }

    return category;
  } catch (err) {
    if (err.message === 'Category does not exist') {
      throw err;
    } else {
      throw new Error('Error fetching category');
    }
  }
};

const editCategory = async (req, res) => {
  const updates = req.body;
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400).json({ message: 'Invalid category ID format' });
  }
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );
    if (!updatedCategory) {
      res.status(404).json({ message: 'Category does not exist' });
    }

    res.status(201).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error updating category' });
  }
}


module.exports = {
  createCategory,
  getCategories,
  getOneCategory,
  editCategory
}