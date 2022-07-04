//importar a dependencia do express para a criaçao do servidor
const express = require('express');
const { RowDescriptionMessage } = require('pg-protocol/dist/messages');

//criar uma constante que representa a nossa aplicação como um touch
//vamos chamar ela de "app" e ela recebe a invocação do express
const app = express();
const db = require('./config/db');

//criação de rota que vai listar todos os cadastros
//CALLBACK FUNCTION (Request, Response, Next) => {}
app.get('/usuario', async (req, res) => {
    const sql = 'select * from usuario';
    const usuarios = await db.query(sql);
    res.status(200).send({
        dados: usuarios.rows.map(c => ({id: c.id, nome: c.nome})),
        quantidade: usuarios.rowCount
    });  
})

//defini-se em qual portra a aplicação vai rodar
//para isso usamos a função .listen(PORT, CALLBACK FUNCTION)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});