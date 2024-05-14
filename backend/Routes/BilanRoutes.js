const {
  createBilanCarbon,
  getBilanCarbonWithEntreprise,
  getAllBilanCarbonForEntreprise,
  updateBilanCarbon,
  deleteBilanCarbon,
} = require("../Controllers/BilanControllers");
const { Entreprise_Auth } = require("../requireAuth/requireAuth");
const express = require("express");
const router = express.Router();
router.post("/api/bilan/create/:entrepriseId", createBilanCarbon);
router.get(
  "/api/bilan/entreprise",
  Entreprise_Auth,
  getAllBilanCarbonForEntreprise
);
router.get("/api/bilan/:entrepriseId", getBilanCarbonWithEntreprise);

router.put("/api/bilan/:id", updateBilanCarbon);
router.delete("/api/bilan/:id", deleteBilanCarbon);
module.exports = router;
