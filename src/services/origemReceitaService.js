const db = require('../config/db');

const origemReceita = async () => {

    let sqlPagador = 'select * from pagador';
    let response = await db.query(sqlPagador);
    let pagadores = response.rows;
    getReceitasPorPagador(pagadores)
    return retorno;
}

const getReceitasPorPagador = async (pagadores) => {

    let retorno = pagadores.map(async pagador => {
        let sqlReceitas = `
            select * from receitas where id_pagador = $1;
        `
        let receitas = await db.query(sqlReceitas, [ pagador.id ]);

        return receitas.rows;
    });
    console.log(retorno);
}

module.exports.origemReceita = origemReceita;