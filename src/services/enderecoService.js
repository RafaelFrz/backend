const db = require('../config/db');

const getAllEnderecos = async () => {
    let sql = 'select * from endereco';
    let endereco = await db.query(sql);
    return endereco.rows;
}

const getEnderecoById = async (params) => {
    let sql = `select * from endereco where id = $1`;
    let endereco = await db.query(sql, [params.id]);
    return endereco.rows;
}

const patchEndereco = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update endereco set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const postEndereco = async (params) => {
    let { nome, telefone, email, cpf_cnpj } = params;
    let sql = `
        insert into endereco (
            bairro,
            rua,
            numero,
            cidade,
            logradouro,
            cep
        ) values ($1, $2, $3, $4, $5, $6) returning id
    `;
    let insert = await db.query(sql, [nome, telefone, email, cpf_cnpj]);
    return insert.rows[0];
}

const deleteEndereco = async (params) => {
    let sql = 'delete from endereco where id = $1';
    let query = await db.query(sql, [params.id]);
    return query.rowCount = 1;
}

module.exports.getAllEnderecos = getAllEnderecos;
module.exports.getEnderecoById = getEnderecoById;
module.exports.postEndereco = postEndereco;
module.exports.patchEndereco = patchEndereco;
module.exports.deleteEndereco = deleteEndereco;