const express = require('express');
const router = express.Router();
const contactosController = require('../controllers/contactosController');

router.get('/api/', contactosController.home);
//obtener todos los contactos
router.get('/api/contactos', contactosController.getAll);
//obtener todos los contactos de un usuario
router.get('/api/contactos/user/:id', contactosController.getAllForUser);
//obtener un contacto en especifico
router.get('/api/contactos/:id', contactosController.getOne);
//agregar un contacto
router.post('/api/contactos', contactosController.add);
//borrar un contacto
router.delete('/api/contactos/:id', contactosController.delete);
//actualizar un contacto
router.put('/api/contactos/:id', contactosController.update);


module.exports = router;