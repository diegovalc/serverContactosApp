const pool = require('../database');
const controller = {}

controller.getUser = (req, res)=>{ //obtener usuario

    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(err);
        } else {
            const { id } = req.params;
            connection.query('SELECT * FROM usuario WHERE idusuario = ?', [id], function(error, results){
                if (error) throw next(error);
                res.json(results);
                connection.release();
            })
        }
    })
    
}

controller.addUser = (req, res)=>{
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(err);
        } else {
            connection.query('INSERT INTO usuario set ?', [req.body], function(error, results){
                if (error) throw console.log(error);
                res.json(results);
                connection.release();
            })
        }
    });
    
}

//Actualizar un usuario
controller.updateUser = (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(err);
        } else {
            const { id } = req.params;
            connection.query('UPDATE usuario set ? WHERE idusuario = ?', [req.body, id], function (error, results) {
                if (error) throw error;
                res.json({ message: 'Usuario Actualizado' });
                connection.release();
            })
        }
    });
}

module.exports = controller;