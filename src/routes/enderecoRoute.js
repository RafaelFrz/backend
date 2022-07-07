const enderecoController = require('../controllers/enderecoController');

module.exports = (app) => {
    app.get('/endereco', enderecoController.getAllEnderecos);
    app.get('/endereco/:id', enderecoController.getEnderecoById);
    app.post('/endereco', enderecoController.postEndereco);
    app.delete('/endereco/:id', enderecoController.deleteEndereco);
    app.patch('/endereco', enderecoController.patchEndereco);
}