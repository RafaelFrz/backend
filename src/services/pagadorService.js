const db = require('../config/db');

const getAllPagadores = async () => {
    let sql = 'select * from pagador';
    let pagador = await db.query(sql);
    return pagador.rows;
}

const getPagadoresById = async (params) => {
    let sql = `select * from pagador where id = $1`;
    let pagador = await db.query(sql, [params.id]);
    return pagador.rows;
}

const patchPagador = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update usuario set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const postPagador = async (params) => {
    let { nome, telefone, email, cpf_cnpj } = params;
    let sql = `
        insert into pagador (
            nome,
            telefone,
            email,
            cpf_cnpj
        ) values ($1, $2, $3, $4) returning id
    `;
    let insert = await db.query(sql, [nome, telefone, email, cpf_cnpj]);
    return insert.rows[0];
}

const deletePagador = async (params) => {
    let sql = 'delete from pagador where id = $1';
    let query = await db.query(sql, [params.id]);
    return query.rowCount = 1;
}

module.exports.getAllPagadores = getAllPagadores;
module.exports.getPagadoresById = getPagadoresById;
module.exports.postPagador = postPagador;
module.exports.patchPagador = patchPagador;
module.exports.deletePagador = deletePagador;