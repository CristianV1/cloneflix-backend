const content = require("../models/contentModel");

const addCateogories = (actualContent, categories) => {
  return actualContent.setCategories([...categories]);
};

const create = (newContent) => {
  return content.create(newContent);
};

const findContent = (id) => {
  return content.findByPk(id);
};

//Este es para el usuario, cuando le de click a una pelicula ver la descripcion y la pelicula
const findUserContent = (id) => {
  return content.findByPk(id);
};

const findUserContents = (id) => {
  return content.findAll({ where: { id: id } });
};

const findContents = () => {
  return content.findAll({ order: [["id", "ASC"]] });
};

const deleteContent = (id) => {
  return content.destroy({ where: { id: id } });
};

const update = (id, updatedContent) => {
  return content.update(updatedContent, {
    where: { id: id },
    order: [["id", "ASC"]],
    returning: true,
  });
};

const contentDao = {
  create,
  addCateogories,
  findContents,
  deleteContent,
  findContent,
  update,
  findUserContent,
};

module.exports = contentDao;
