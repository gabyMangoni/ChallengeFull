const express = require('express');
const router = express.Router();
const apiOperationsController = require('../../controllers/api/apiOperationsController');

//Listado de operaciones
router.get('/', apiOperationsController.list);
router.get('/out', apiOperationsController.listOut);
router.get('/in', apiOperationsController.listIn);
router.get('/:id', apiOperationsController.edit);

router.post('/', apiOperationsController.create);
router.put('/:id', apiOperationsController.update);
router.delete('/:id', apiOperationsController.destroy);

//Detalle de una operacion
//router.get('/:id', productsAPIController.detail);








module.exports = router;