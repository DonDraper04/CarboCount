const db = require("../models");
const BilanCarbon = db.BilanCarbon;
const Entreprise = db.Entreprise;
const Activity = db.Activity;
const Category = db.Category;
const Scope = db.Scope;

const createActivity = async (req, res) => {
  const { entrepriseId } = req.params;
  const { data } = req.body;
  try {
    const entreprise = await Entreprise.findByPk(entrepriseId);
    if (!entreprise) {
      throw new Error("Entreprise not found");
    }

    const activity = await Activity.create({
      ...data,
      EntrepriseId: entrepriseId,
    });

    res.status(201).json({ activity });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getActivityWithEntreprise = async (req, res) => {
  const { activityId } = req.params;
  try {
    const activity = await Activity.findByPk(activityId, {
      include: [
        {
          model: Entreprise,
          attributes: ["id", "name", "otherAttributes"],
        },
      ],
    });

    if (!activity) {
      throw new Error("Activity not found");
    }

    res.status(200).json({ activity });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllActivityForEntreprise = async (req, res) => {
  const { entrepriseId } = req.params;
  try {
    const activities = await Activity.findAll({
      where: { EntrepriseId: entrepriseId },
    });

    res.status(200).json({ activities });
  } catch (error) {
    res.status(400).json({
      error: "Error fetching Activities for Entreprise: " + error.message,
    });
  }
};

const updateActivity = async (req, res) => {
  const { activityId } = req.params;
  const { newData } = req.body;
  try {
    const [rowsUpdated, updatedActivity] = await Activity.update(newData, {
      where: { id: activityId },
      returning: true,
    });

    if (rowsUpdated === 0) {
      throw new Error("Activity not found or not updated");
    }

    res.status(200).json({ updatedActivity: updatedActivity[0] });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error updating Activity: " + error.message });
  }
};
const deleteActivity = async (req, res) => {
  const { activityId } = req.params;
  try {
    const activity = await Activity.findByPk(activityId);
    if (!activity) {
      throw new Error("Activity not found");
    }

    await activity.destroy();

    res.status(200).json({ message: "Activity deleted successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error deleting Activity: " + error.message });
  }
};

module.exports = {
  createActivity,
  getActivityWithEntreprise,
  getAllActivityForEntreprise,
  updateActivity,
  deleteActivity,
};
