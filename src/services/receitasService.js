const db = require('../config/db');

const getAllReceitas = async () => {
    let sql = 'select * from receitas';
    let receitas = await db.query(sql);
    return receitas.rows;
}

const getReceitasById = async (params) => {
    let sql = `select * from receitas where id = $1`;
    let receitas = await db.query(sql, [params.id]);
    return receitas.rows;
}

const patchReceitas = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update usuario set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const postPagador = async (params) => {
    let { nome, telefone, email, cpf_cnpj } = params;
    let sql = `
        insert into receitas (
            valor,
            data,
            observacao,
            id_pagador,
            id_tipo,
            id_usuario
        ) values ($1, $2, $3, $4, $5, $6) returning id
    `;
    let insert = await db.query(sql, [valor, data, observacao, id_pagador, id_tipo, id_usuario]);
    return insert.rows[0];
}

const deleteReceitas = async (params) => {
    let sql = 'delete from receitas where id = $1';
    let query = await db.query(sql, [params.id]);
    return query.rowCount = 1;
}

module.exports.getAllReceitas = getAllReceitas;
module.exports.getReceitasById = getReceitasById;
module.exports.postPagador = postPagador;
module.exports.patchReceitas = patchReceitas;
module.exports.deleteReceitas = deleteReceitas;