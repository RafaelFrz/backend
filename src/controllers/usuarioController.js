const usuarioService = require('../services/usuarioService');

const getAllUsuarios = async (req, res) => {
    try{
        const usuario = await usuarioService.getAllUsuarios();
        res.status(200).send(usuario);   
    } catch (error) {
        res.status(500).send(error);
    }
}

const getUsuariosById = async (req, res) => {
    try {
        const usuario = await usuarioService.getUsuariosById(req.params);
        res.status(200).send(usuario);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postUsario = async (req, res) => {
    try {
        const usuario = await usuarioService.postUsario(req.body);
        res.status(201).send(cliente);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchUsuario = async (req, res) => {
    try {
        const usuario = await usuarioService.patchUsuario(req.body);
        res.status(201).send(usuario);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteUsuario = async (req, res) => {
    try {
        let deletado = await usuarioService.deleteUsuario(req.params);
        let msg = deletado
            ? `Cliente ${req.params.id} deletado com sucesso`
            : `Não foi encontrado nenhum cliente com o id ${req.params.id} para ser deletado`;
            res.status(200).send({ msg });            
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllUsuarios = getAllUsuarios;
module.exports.getUsuariosById = getUsuariosById;
module.exports.postUsario = postUsario;
module.exports.patchUsuario = patchUsuario;
module.exports.deleteUsuario = deleteUsuario;