// Initilize express router
const {
    createActivity,
    getActivityWithEntreprise,
    getAllActivityForEntreprise,
    updateActivity,
    deleteActivity,
} = require('../Controllers/ActivityControllers');


const router = require('express').Router();

router.post('/entreprise/:entrepriseId/activity', createActivity);
router.get('/activity/:activityId', getActivityWithEntreprise);
router.get('/entreprise/:entrepriseId/activity', getAllActivityForEntreprise);
router.put('/activity/:activityId', updateActivity);
router.delete('/activity/:activityId', deleteActivity);

module.exports = router;