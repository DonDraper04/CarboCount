const {
  createCategory,
  getAllCategoriesForBilanCarbon,
  updateCategory,
  deleteCategory,
} = require("../Controllers/CategoryControllers");

const express = require("express");
const router = express.Router();

router.post("/api/category/create", createCategory);
router.get("/api/category/bilanCarbon/:id", getAllCategoriesForBilanCarbon);
router.put("/api/category/:id", updateCategory);
router.delete("/api/category/:id", deleteCategory);

module.exports = router;
