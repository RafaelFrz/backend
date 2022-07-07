const pagadorController = require('../controllers/pagadorController');

module.exports = (app) => {
    app.get('/pagador', pagadorController.getAllPagadores);
    app.get('/pagador/:id', pagadorController.getPagadoresById);
    app.post('/pagador', pagadorController.postPagador);
    app.delete('/pagador/:id', pagadorController.deletePagador);
    app.patch('/pagador', pagadorController.patchPagador);
}