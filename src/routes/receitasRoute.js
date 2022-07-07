const receitasController = require('../controllers/receitasController');

module.exports = (app) => {
    app.get('/receitas', receitasController.getAllReceitas);
    app.get('/receitas/:id', receitasController.getReceitasById);
    app.post('/receitas', receitasController.postReceitas);
    app.delete('/receitas/:id', receitasController.deleteReceitas);
    app.patch('/receitas', receitasController.patchReceitas);
}