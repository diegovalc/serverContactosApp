const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');


router.get('/api/user/:id', usuariosController.getUser);
router.post('/api/user', usuariosController.addUser);
router.put('/api/user/:id', usuariosController.updateUser);

module.exports = router;