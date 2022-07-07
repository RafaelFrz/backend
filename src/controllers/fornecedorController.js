const fornecedorService = require('../services/fornecedorService');

const getAllFornecedores = async (req, res) => {
    try {
        const fornecedor = await fornecedorService.getAllFornecedores();
        res.status(200).send(fornecedor);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getFornecedoresById = async (req, res) => {
    try {
        const fornecedor = await fornecedorService.getFornecedoresById(req.params);
        res.status(200).send(fornecedor);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postFornecedor = async (req, res) => {
    try {
        const fornecedor = await fornecedorService.postFornecedor(req.body);
        res.status(201).send(fornecedor);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchFornecedor = async (req, res) => {
    try {
        const fornecedor = await fornecedorService.patchFornecedor(req.body);
        res.status(201).send(fornecedor);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteFornecedor = async (req, res) => {
    try {
        let deletado = await fornecedorService.deleteFornecedor(req.params);
        let msg = deletado
            ? `Fornecedor ${req.params.id} deletado com sucesso`
            : `Não foi encontrado nenhum fornecedor com o id ${req.params.id} para ser deletado`;
            res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllFornecedores = getAllFornecedores;
module.exports.getFornecedoresById = getFornecedoresById;
module.exports.postFornecedor = postFornecedor;
module.exports.patchFornecedor = patchFornecedor;
module.exports.deleteFornecedor = deleteFornecedor;