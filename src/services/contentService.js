const contentDao = require("../respository/contentRepository");
const categoriesDao = require("../respository/categoryRepository");

const addCategories = async (req, res) => {
  let content = await contentDao.findContent(req.params.id);
  content.addCategories(req.body.categories);
};

const createContent = async (req, res) => {
  let newContent = {
    title: req.body.content.title,
    description: req.body.content.description,
    thumbnail_url: req.body.content.thumbnail,
    video_url: req.body.content.video,
  };

  const createdContent = await contentDao.create(newContent);

  if (req.body.categories) {
    const categories = await categoriesDao.createMany(req.body.categories);
    createdContent.setCategories(categories);
  }

  res.send(createdContent);
};

const editContent = async (req, res) => {
  const content = {
    title: req.body.content.title,
    description: req.body.content.description,
    thumbnail_url: req.body.content.thumbnail,
    video_url: req.body.content.video,
  };

  const updatedContent = await contentDao.update(req.params.id, content);
  res.send(updatedContent);
};

const findContents = async (req, res) => {
  const contents = await contentDao.findContents();
  res.send(contents);
};

const deleteContent = async (req, res) => {
  await contentDao.deleteContent(req.params.id);
  res.sendStatus(200);
};

const contentService = {
  createContent,
  editContent,
  findContents,
  deleteContent,
};

module.exports = contentService;
