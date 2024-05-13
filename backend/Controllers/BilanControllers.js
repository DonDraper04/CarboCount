const db = require("../models"); // Import your Sequelize models
const BilanCarbon = db.BilanCarbon; // Assuming BilanCarbon is your Sequelize model for BilanCarbon
const Entreprise = db.Entreprise; // Assuming Entreprise is your Sequelize model for Entreprise

// Function to create a new BilanCarbon entry related to an Entreprise
const createBilanCarbon = async (req, res) => {
  const { entrepriseId } = req.params;
  const { data } = req.body;
  try {
    const entreprise = await Entreprise.findByPk(entrepriseId);
    if (!entreprise) {
      throw new Error("Entreprise not found");
    }

    const bilanCarbon = await BilanCarbon.create({
      ...data,
      EntrepriseId: entrepriseId,
    });

    res.status(201).json({ bilanCarbon });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to retrieve a BilanCarbon entry by ID with associated Entreprise
const getBilanCarbonWithEntreprise = async (req, res) => {
  const { bilanCarbonId } = req.params;
  try {
    const bilanCarbon = await BilanCarbon.findByPk(bilanCarbonId, {
      include: [
        {
          model: Entreprise,
          attributes: ["id", "name", "otherAttributes"], // Specify the attributes you want to include from Entreprise
        },
      ],
    });

    if (!bilanCarbon) {
      throw new Error("BilanCarbon not found");
    }

    res.status(200).json({ bilanCarbon });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to retrieve all BilanCarbon entries related to an Entreprise
const getAllBilanCarbonForEntreprise = async (req, res) => {
 const Entreprise = req.user;
    try {
    const bilanCarbons = await BilanCarbon.findAll({
      where: { EntrepriseId: Entreprise.id },
    });

    if (!bilanCarbons) {
      throw new Error("No BilanCarbon found for Entreprise");
    }
    res.status(200).json({ bilanCarbons });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to update a BilanCarbon entry by ID
const updateBilanCarbon = async (req,res) => {
    const { bilanCarbonId } = req.params;
    const { newData } = req.body;
  try {
    const [rowsUpdated, updatedBilanCarbon] = await BilanCarbon.update(
      newData,
      {
        where: { BilanCarbonId: bilanCarbonId },
        returning: true, // Return the updated BilanCarbon data
      }
    );

    if (rowsUpdated === 0) {
      throw new Error("BilanCarbon not found or not updated");
    }

    res.status(200).json({ updatedBilanCarbon });
  } catch (error) {
        res.status(400).json({ error: error.message });
  }
};

// Function to delete a BilanCarbon entry by ID
const deleteBilanCarbon = async (req,res) => {
    const { bilanCarbonId } = req.params;
  try {
    const deletedRows = await BilanCarbon.destroy({
      where: { BilanCarbonId: bilanCarbonId },
    });

    if (deletedRows === 0) {
      throw new Error("BilanCarbon not found or not deleted");
    }

    res.status(200).json({ message: "BilanCarbon deleted successfully" });
} catch (error) {
    throw new Error("Error deleting BilanCarbon: " + error.message);
  }
};

module.exports = {
  createBilanCarbon,
  getBilanCarbonWithEntreprise,
  getAllBilanCarbonForEntreprise,
  updateBilanCarbon,
  deleteBilanCarbon,
};
