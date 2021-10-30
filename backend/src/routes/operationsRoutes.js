const express = require('express');
const router = express.Router();
const operationsController = require('../controllers/operationsController');

router.get('/operations', operationsController.list);
router.get('/operations/out', operationsController.listOut);
router.get('/operations/in', operationsController.listIn);
router.get('/operations/:types', operationsController.list);


router.get('/create', operationsController.add);
router.post('/create', operationsController.create);

router.get('/edit/:id', operationsController.edit);
router.put('/update/:id', operationsController.update);

router.delete('/delete/:id', operationsController.destroy);









module.exports = router;