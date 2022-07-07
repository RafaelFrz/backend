const origemReceitasController = require('../controllers/origemReceitasController');

module.exports = (app) => {
    app.get('/origem-receitas', origemReceitasController.getOrigemReceita);
}