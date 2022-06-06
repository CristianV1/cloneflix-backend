const categoryDao = require("../respository/categoryRepository");

const createCategory = async (req, res) => {
  const newCategory = { name: req.body.category };
  const category = await categoryDao.create(newCategory);
  res.send(category);
};

const createCategories = async (req, res) => {
  const categories = await categoryDao.createMany(req.body.categories);
  res.send(categories);
};

const findCategories = async (req, res) => {
  const categories = await categoryDao.findCategories();
  res.send(categories);
};

const deleteCategory = async (req, res) => {
  await categoryDao.deleteCategory(req.params.id);
  res.sendStatus(200);
};

const categoryServices = {
  createCategories,
  findCategories,
  createCategory,
  deleteCategory,
};

module.exports = categoryServices;
