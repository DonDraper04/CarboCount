const {
    createScope,
    getAllScopesForBilanCarbon,
    updateScope,  
    deleteScope, 

} = require('../Controllers/ScopeControllers');  


const router = require('express').Router();

router.post('/bilan/:bilanCarbonId/scope', createScope);
router.get('/bilan/:bilanCarbonId/scope', getAllScopesForBilanCarbon);
router.put('/scope/:scopeId', updateScope);
router.delete('/scope/:scopeId', deleteScope);

module.exports = router;