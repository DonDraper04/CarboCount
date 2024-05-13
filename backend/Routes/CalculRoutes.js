const express = require("express");
const {
  getSubTag,
  getDocumentsWithTags,
  getLineUnite,
  getElectDocsWithFrancaistag,
  getNomAttributFrancais,
  getNomBaseFrancais,
  getNomsFrontiereFrancais,
  CheckifLineUnique,
} = require("../Controllers/CalculControllers");
const router = express.Router();
router.post("/api/calcul/getDocsWithTags", getDocumentsWithTags);
router.post("/api/calcul/getSubCategory", getSubTag);
router.post("/api/calcul/getLineUnite", getLineUnite);
router.post(
  "/api/calcul/getElectDocsWithFrancaistag",
  getElectDocsWithFrancaistag
);
router.post("/api/calcul/getNomBaseFrancais", getNomBaseFrancais);
router.post("/api/calcul/getNomAttributFrancais", getNomAttributFrancais);
router.post("/api/calcul/getNomsFrontiereFrancais", getNomsFrontiereFrancais);
router.post("/api/calcul/CheckifLineUnique", CheckifLineUnique);

module.exports = router;
