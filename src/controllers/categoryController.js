const express = require("express");
const categoryService = require("../services/categoryService");
const router = express.Router();
const { verifiyAdmin } = require("../middlewares/verifyToken");

router.get("/", categoryService.findCategories);
router.post("/", verifiyAdmin, categoryService.createCategory);
router.post("/", verifiyAdmin, categoryService.createCategories);
router.delete("/", verifiyAdmin, categoryService.deleteCategory);

module.exports = router;
