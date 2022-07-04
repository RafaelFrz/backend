const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'fluxo-de-caixa', // > nome do banco
    password: 'unochapeco'
});

module.exports = 
    { query: (text, params) => pool.query(text, params)};