const pagadorService = require('../services/pagadorService');

const getAllPagadores = async (req, res) => {
    try {
        const pagador = await pagadorService.getAllPagadores();
        res.status(200).send(pagador);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getPagadoresById = async (req, res) => {
    try {
        const pagador = await pagadorService.getPagadoresById(req.params);
        res.status(200).send(pagador);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postPagador = async (req, res) => {
    try {
        const pagador = await pagadorService.postPagador(req.body);
        res.status(201).send(pagador);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchPagador = async (req, res) => {
    try {
        const pagador = await pagadorService.patchPagador(req.body);
        res.status(201).send(pagador);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deletePagador = async (req, res) => {
    try {
        let deletado = await pagadorService.deletePagador(req.params);
        let msg = deletado
            ? `Pagador ${req.params.id} deletado com sucesso`
            : `Não foi encontrado nenhum pagador com o id ${req.params.id} para ser deletado`;
            res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllPagadores = getAllPagadores;
module.exports.getPagadoresById = getPagadoresById;
module.exports.postPagador = postPagador;
module.exports.patchPagador = patchPagador;
module.exports.deletePagador = deletePagador;