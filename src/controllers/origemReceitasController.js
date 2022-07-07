const origemReceitaService = require('../services/origemReceitaService');

const getOrigemReceita = async (req, res) => {
    try{
        const origem = await origemReceitaService.origemReceita();
        res.status(200).send(origem);   
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getOrigemReceita = getOrigemReceita;