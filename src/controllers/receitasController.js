const receitasService = require('../services/receitasService');

const getAllReceitas = async (req, res) => {
    try {
        const receita = await receitasService.getAllReceitas();
        res.status(200).send(receita);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getReceitasById = async (req, res) => {
    try {
        const receita = await receitasService.getReceitasById(req.params);
        res.status(200).send(receita);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postReceitas = async (req, res) => {
    try {
        const receita = await receitasService.postReceitas(req.body);
        res.status(201).send(receita);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchReceitas = async (req, res) => {
    try {
        const receita = await receitasService.patchReceitas(req.body);
        res.status(201).send(receita);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteReceitas = async (req, res) => {
    try {
        let deletado = await receitasService.deleteReceitas(req.params);
        let msg = deletado
            ? `Pagador ${req.params.id} deletado com sucesso`
            : `Não foi encontrado nenhum receita com o id ${req.params.id} para ser deletado`;
            res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllReceitas = getAllReceitas;
module.exports.getReceitasById = getReceitasById;
module.exports.postReceitas = postReceitas;
module.exports.patchReceitas = patchReceitas;
module.exports.deleteReceitas = deleteReceitas;