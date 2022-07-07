const db = require('../config/db');

const getAllDespesas = async () => {
    let sql = 'select * from despesas';
    let despesas = await db.query(sql);
    return despesas.rows;
}

const getDespesasById = async (params) => {
    let sql = `select * from despesas where id = $1`;
    let despesas = await db.query(sql, [params.id]);
    return despesas.rows;
}

const patchDespesas = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update usuario set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const postDespesas = async (params) => {
    let { nome, telefone, email, cpf_cnpj } = params;
    let sql = `
        insert into despesas (
            valor,
            data,
            observacao,
            id_fornecedor,
            id_usuario
        ) values ($1, $2, $3, $4, $5) returning id
    `;
    let insert = await db.query(sql, [valor, data, observacao, id_fornecedor, id_usuario]);
    return insert.rows[0];
}

const deleteDespesas = async (params) => {
    let sql = 'delete from despesas where id = $1';
    let query = await db.query(sql, [params.id]);
    return query.rowCount = 1;
}

module.exports.getAllDespesas = getAllDespesas;
module.exports.getDespesasById = getDespesasById;
module.exports.postDespesas = postDespesas;
module.exports.patchDespesas = patchDespesas;
module.exports.deleteDespesas = deleteDespesas;