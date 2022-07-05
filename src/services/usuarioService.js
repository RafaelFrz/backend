const db = require('../config/db') //database

//consultar o cliente
const getAllUsuarios = async () => {
    let sql = 'select * from usuario';
    let usuario = await db.query(sql);
    return usuario.rows;
}

const getUsuariosById = async (params) => {
    let sql = `select * from usuario where id = $1`;
    let usuario = await db.query(sql, [params.id]);
    return usuario.rows;
}

//atualizar o usuario
const patchUsuario = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update usuario set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

//inserir um novo usuario
const postUsario = async (params) => {
    let { nome, cpf, email, telefone } = params;
    let sql = `
        insert into usuario (
            nome,
            cpf,
            email,
            telefone
        ) values ($1, $2, $3, $4) returning id`;
    let insert = await db.query(sql, [nome, cpf, email, telefone]);
    return insert.rows[0];
}

//deletar um cliente
const deleteUsuario = async (params) => {
    let sql = 'delete from usuario where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}

//exports
module.exports.getAllUsuarios = getAllUsuarios;
module.exports.getUsuariosById = getUsuariosById;
module.exports.postUsario = postUsario;
module.exports.deleteUsuario = deleteUsuario;
module.exports.patchUsuario = patchUsuario;