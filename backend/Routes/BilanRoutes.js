const {
    createBilanCarbon,
    getBilanCarbonWithEntreprise,
    getAllBilanCarbonForEntreprise,
    updateBilanCarbon,
    deleteBilanCarbon,
} = require('../Controllers/BilanControllers');
const express = require('express');
const router = express.Router();
router.post('/api/bilan/create', createBilanCarbon);
router.get('/api/bilan/:id', getBilanCarbonWithEntreprise);
router.get('/api/bilan/entreprise/:id', getAllBilanCarbonForEntreprise);
router.put('/api/bilan/:id', updateBilanCarbon);
router.delete('/api/bilan/:id', deleteBilanCarbon);
module.exports = router;