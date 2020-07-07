const pool = require('../database');
const controller = {}

controller.home = (req, res) => {
    res.send('Hola Mundo');
}

//Obtener todos los contactos
controller.getAll = (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(err);

        } else {
            connection.query('SELECT * FROM contacto', function (error, results, fields) {
                if (error) {
                    next(error);
                } else {
                    res.json(results);
                    connection.release();
                }

            });
        }

    })

}

// Obtener los contactos de un usuario
controller.getAllForUser = (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(err);
        } else {
            console.log('DB is Conected!');
            const { id } = req.params
            connection.query('SELECT * FROM contacto WHERE idusuario = ?', [id], function (error, results, fields) {
                if (error) {
                    next(error);
                } else {
                    res.json(results);
                    
                    connection.release();
                }
            });
        }
    })
}

// Obtener un contacto por medio de su id
controller.getOne = (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(err);
        } else {
            const { id } = req.params;
            connection.query('SELECT * FROM contacto WHERE idcontacto = ?', [id], function (error, results) {
                if (error) throw next(error);
                if (results.length > 0) {
                    res.json(results[0]);
                    connection.release();
                } else {
                    res.status(404).json({ message: 'Not Found!' });
                }
            })
        }
    });

}

//Agregar un Contacto
controller.add = (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(err);
        } else {
            connection.query('INSERT INTO contacto set ?', [req.body], function (error, results) {
                if (error) console.log(error);
                res.json(results);
                connection.release();
            })
        }
    });

}

//Borrar un contacto
controller.delete = (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(err);
        } else {
            const { id } = req.params;
            connection.query('DELETE FROM contacto WHERE idcontacto = ?', [id], function (error, results) {
                if (error) throw error;
                if (results.affectedRows > 0) {
                    res.json({ message: 'El juego fue eliminado' });
                    connection.release();
                } else {
                    res.json({ message: 'El Juego no existe!' });
                }

            })
        }
    });

}

//Actualizar un contacto
controller.update = (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(err);
        } else {
            const { id } = req.params;
            connection.query('UPDATE contacto set ? WHERE idcontacto = ?', [req.body, id], function (error, results) {
                if (error) throw error;
                res.json(results);
                console.log( req.body, req.params);
                
                connection.release();
            })
        }
    });
}

module.exports = controller;