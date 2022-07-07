const despesasService = require('../services/despesasService');

const getAllDespesas = async (req, res) => {
    try {
        const despesas = await despesasService.getAllDespesas();
        res.status(200).send(despesas);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDespesasById = async (req, res) => {
    try {
        const despesas = await despesasService.getDespesasById(req.params);
        res.status(200).send(despesas);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postDespesas = async (req, res) => {
    try {
        const despesas = await despesasService.postDespesas(req.body);
        res.status(201).send(despesas);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchDespesas = async (req, res) => {
    try {
        const despesas = await despesasService.patchDespesas(req.body);
        res.status(201).send(despesas);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteDespesas = async (req, res) => {
    try {
        let deletado = await despesasService.deleteDespesas(req.params);
        let msg = deletado
            ? `Despesa ${req.params.id} deletado com sucesso`
            : `Não foi encontrado nenhuma despesa com o id ${req.params.id} para ser deletado`;
            res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllDespesas = getAllDespesas;
module.exports.getDespesasById = getDespesasById;
module.exports.postDespesas = postDespesas;
module.exports.patchDespesas = patchDespesas;
module.exports.deleteDespesas = deleteDespesas;