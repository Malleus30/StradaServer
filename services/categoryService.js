const Category = require('../models/categorySchema.js');

const createCategory = (category) =>{
    return Category.create(category);
}

const getCategory = (category) => {
    return Category.findById(category);
}

const updateCategory = (categoryId, category) => {
    return Category.findByIdAndUpdate(categoryId, category);
}

const deleteCategory = (category) => {
    return Category.findByIdAndDelete(category);
}

module.exports = {createCategory, getCategory, updateCategory, deleteCategory};