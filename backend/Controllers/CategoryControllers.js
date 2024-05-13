const db = require("../models"); // Import your Sequelize models
const Category = db.Category; // Assuming Category is your Sequelize model for Category
const BilanCarbon = db.BilanCarbon; // Assuming BilanCarbon is your Sequelize model for BilanCarbon
const Activity = db.Activity; // Assuming Activity is your Sequelize model for Activity
const Scope = db.Scope; // Assuming Scope is your Sequelize model for Scope

// Function to create a new Category entry related to a BilanCarbon and Scope
const createCategory = async (req, res) => {
  const { bilanCarbonId, scopeId } = req.params;
  try {
    const bilanCarbon = await BilanCarbon.findByPk(bilanCarbonId);
    if (!bilanCarbon) {
      throw new Error("BilanCarbon not found");
    }

    const scope = await Scope.findByPk(scopeId);
    if (!scope) {
      throw new Error("Scope not found");
    }

    const category = await Category.create({
      ...data,
      BilanCarbonId: bilanCarbonId,
      ScopeId: scopeId,
    });

    res.status(201).json({ category });
  } catch (error) {
    throw new Error("Error creating Category: " + error.message);
  }
};

// Function to retrieve all Categories related to a specific BilanCarbon
const getAllCategoriesForBilanCarbon = async (req, res) => {
  const { bilanCarbonId } = req.params;
  try {
    const categories = await Category.findAll({
      where: { BilanCarbonId: bilanCarbonId },
    });

    res.status(200).json({ categories });
  } catch (error) {
    throw new Error(
      "Error fetching Categories for BilanCarbon: " + error.message
    );
  }
};

// Function to update a Category entry by ID
const updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { newData } = req.body;
  try {
    const [rowsUpdated, updatedCategory] = await Category.update(newData, {
      where: { id: categoryId },
      returning: true, // Return the updated Category data
    });

    if (rowsUpdated === 0) {
      throw new Error("Category not found or not updated");
    }

    res.status(200).json({ updatedCategory });
  } catch (error) {
    throw new Error("Error updating Category: " + error.message);
  }
};

// Function to delete a Category entry by ID
const deleteCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const deletedRows = await Category.destroy({
      where: { id: categoryId },
    });

    if (deletedRows === 0) {
      throw new Error("Category not found or not deleted");
    }

    res.status(204).json({ message: "Category deleted successfully" });
  } catch (error) {
    throw new Error("Error deleting Category: " + error.message);
  }
};

module.exports = {
  createCategory,
  getAllCategoriesForBilanCarbon,
  updateCategory,
  deleteCategory,
};
