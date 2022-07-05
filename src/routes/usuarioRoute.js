const usuarioController = require('../controllers/usuarioController');

module.exports = (app) => {
    app.get('/usuario', usuarioController.getAllUsuarios);
    app.get('/usuario/:id', usuarioController.getUsuariosById);
    app.post('/usuario', usuarioController.postUsario);
    app.delete('/usuario/:id', usuarioController.deleteUsuario);
    app.patch('/usuario', usuarioController.patchUsuario);
}