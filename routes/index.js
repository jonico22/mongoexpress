const express = require('express');
const cursoController = require('../controllers/cursoController');

const router = express.Router();

router.get('/listar', cursoController.listar);
router.get('/mostrar/:id', cursoController.mostrar);
router.post('/crear', cursoController.crear);
router.put('/actualizar/:id', cursoController.editar);
router.delete('/eliminar/:id', cursoController.eliminar);

module.exports = router;