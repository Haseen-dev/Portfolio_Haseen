const express = require("express");
const { categoryController } = require("../controllers");
const router = express.Router();
const { addCategoryValidator, idValidator } = require("../validator/category");
const validate = require("../validator/validate");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");

router.post(
  "/",
  isAuth,
  isAdmin,
  addCategoryValidator,
  validate,
  categoryController.addCategory
);

router.put(
  "/:id",
  isAuth,
  isAdmin,
  idValidator,
  validate,
  categoryController.updateCategory
);

router.delete(
  "/:id",
  isAuth,
  isAdmin,
  idValidator,
  validate,
  categoryController.deleteCategory
);

router.get("/get-categories", isAuth, categoryController.getCategories);

router.get(
  "/:id",
  isAuth,
  idValidator,
  validate,
  categoryController.getCategory
);

module.exports = router;
