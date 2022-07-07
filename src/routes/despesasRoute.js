const despesasController = require('../controllers/despesasController');

module.exports = (app) => {
    app.get('/despesas', despesasController.getAllDespesas);
    app.get('/despesas/:id', despesasController.getDespesasById);
    app.post('/despesas', despesasController.postDespesas);
    app.delete('/despesas/:id', despesasController.deleteDespesas);
    app.patch('/despesas', despesasController.patchDespesas);
}