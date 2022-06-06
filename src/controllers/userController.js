const express = require("express");
const userService = require("../services/userService");
const router = express.Router();
const { verifiyAdmin } = require("../middlewares/verifyToken");

router.get("/", verifiyAdmin, userService.findUsers);
router.get("/content/:id", userService.findUserContent);
router.post("/add/:id", userService.addContent);
router.post("/login", userService.loginUser);
router.post("/", userService.createUser);
router.put("/", verifiyAdmin, userService.editUser);
router.delete("/:id", verifiyAdmin, userService.deleteUser);

module.exports = router;
