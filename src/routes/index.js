const usuario = require('./usuarioRoute');
const pagador = require('./pagadorRoute');
const fornecedor = require('./fornecedorRoute');
const endereco = require('./enderecoRoute');
const receitas = require('./receitasRoute');
const despesas = require('./despesasRoute');
const origemReceita = require('./origemReceitasRoute');

module.exports = (app) => {
    usuario(app);
    pagador(app);
    fornecedor(app);
    endereco(app);
    receitas(app);
    despesas(app);
    origemReceita(app);
}