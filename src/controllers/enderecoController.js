const enderecoService = require('../services/enderecoService');

const getAllEnderecos = async (req, res) => {
    try {
        const pagador = await enderecoService.getAllEnderecos();
        res.status(200).send(pagador);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getEnderecoById = async (req, res) => {
    try {
        const pagador = await enderecoService.getEnderecoById(req.params);
        res.status(200).send(pagador);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postEndereco = async (req, res) => {
    try {
        const pagador = await enderecoService.postEndereco(req.body);
        res.status(201).send(pagador);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchEndereco = async (req, res) => {
    try {
        const pagador = await enderecoService.patchEndereco(req.body);
        res.status(201).send(pagador);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteEndereco = async (req, res) => {
    try {
        let deletado = await enderecoService.deleteEndereco(req.params);
        let msg = deletado
            ? `Endereço ${req.params.id} deletado com sucesso`
            : `Não foi encontrado nenhum endereço com o id ${req.params.id} para ser deletado`;
            res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllEnderecos = getAllEnderecos;
module.exports.getEnderecoById = getEnderecoById;
module.exports.postEndereco = postEndereco;
module.exports.patchEndereco = patchEndereco;
module.exports.deleteEndereco = deleteEndereco;