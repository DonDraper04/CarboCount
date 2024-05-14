const db = require("../models"); // Import your Sequelize models
const Scope = db.Scope; // Assuming Scope is your Sequelize model for Scope
const Category = db.Category; // Assuming Category is your Sequelize model for Category
const Activity = db.Activity; // Assuming Activity is your Sequelize model for Activity
const BilanCarbon = db.BilanCarbon; // Assuming BilanCarbon is your Sequelize model for BilanCarbon

// Function to create a new Scope entry related to a BilanCarbon
const createScope = async (req, res) => {
  const { bilanCarbonId } = req.params;
  const data = req.body;
  try {
    const bilanCarbon = await BilanCarbon.findAll({ where: { BilanCarbonId: bilanCarbonId }});
    console.log("i am here ");
    if (!bilanCarbon) {
      throw new Error("BilanCarbon not found");
    }

    const scope = await Scope.create({
      ...data,
      BilanCarbonId: bilanCarbonId,
    });

    res.status(201).json({ scope });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

// Function to retrieve all Scopes related to a specific BilanCarbon
const getAllScopesForBilanCarbon = async (req, res) => {
  const { bilanCarbonId } = req.params;
  try {
    const scopes = await Scope.findAll({
      where: { BilanCarbonId: bilanCarbonId },
    });

    res.status(200).json({ scopes });
  } catch (error) {
    res
      .status(400)
      .json({
        error: "Error fetching Scopes for BilanCarbon: " + error.message,
      });
  }
};

// Function to update a Scope entry by ID
const updateScope = async (req, res) => {
  const { scopeId } = req.params;
  const { newData } = req.body;
  try {
    const [rowsUpdated, updatedScope] = await Scope.update(newData, {
      where: { id: scopeId },
      returning: true, // Return the updated Scope data
    });

    if (rowsUpdated === 0) {
      throw new Error("Scope not found or not updated");
    }

    res.status(200).json({ updatedScope: updatedScope[0] });
  } catch (error) {
    res.status(400).json({ error: "Error updating Scope: " + error.message });
  }
};

// Function to delete a Scope entry by ID
const deleteScope = async (req, res) => {
  const { scopeId } = req.params;

  try {
    const deletedRows = await Scope.destroy({
      where: { id: scopeId },
    });

    if (deletedRows === 0) {
      throw new Error("Scope not found or not deleted");
    }

    res.status(204).json({ message: "Scope deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error deleting Scope: " + error.message });
  }
};

module.exports = {
  createScope,
  getAllScopesForBilanCarbon,
  updateScope,
  deleteScope,
};
