const fornecedorController = require('../controllers/fornecedorController');

module.exports = (app) => {
    app.get('/fornecedor', fornecedorController.getAllFornecedores);
    app.get('/fornecedor/:id', fornecedorController.getFornecedoresById);
    app.post('/fornecedor', fornecedorController.postFornecedor);
    app.delete('/fornecedor/:id', fornecedorController.deleteFornecedor);
    app.patch('/fornecedor', fornecedorController.patchFornecedor);
}