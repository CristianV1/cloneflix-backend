const express = require("express");
const contentService = require("../services/contentService");
const router = express.Router();
const { verifiyAdmin } = require("../middlewares/verifyToken");

router.get("/", verifiyAdmin, contentService.findContents);
router.post("/", verifiyAdmin, contentService.createContent);
router.put("/", verifiyAdmin, contentService.editContent);
router.delete("/", verifiyAdmin, contentService.deleteContent);

module.exports = router;
