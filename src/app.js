const express = require('express');
const cors = require('cors');
const path = require('path');

//importando las rutas
const contactosRoutes = require('./routes/contactos');
const usuariosRoutes = require('./routes/usuarios');


// iniciando servidor
const app = express();

// configuracion servidor
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use(contactosRoutes);
app.use(usuariosRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));


// iniciando server
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
})