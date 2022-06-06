const category = require("../models/categoryModel");

const create = (newCategory) => {
  return category.create();
};

const createMany = (newCategories) => {
  return category.bulkCreate([...newCategories]);
};

const findCategories = () => {
  return category.findAll();
};

const deleteCategory = (id) => {
  return category.destroy({ where: { id: id } });
};

const categoryDao = {
  create: create,
  createMany: createMany,
  findCategories: findCategories,
  deleteCategory: deleteCategory,
};

module.exports = categoryDao;
