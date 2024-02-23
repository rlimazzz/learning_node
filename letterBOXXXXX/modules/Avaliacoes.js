const db = require("./db");

const Avaliacoes = db.sequelize.define('avaliacoes', {
    titulo: {
        type: db.Sequelize.TEXT,
    },
    conteudo: {
        type: db.Sequelize.TEXT,
    }
});

module.exports = Avaliacoes;