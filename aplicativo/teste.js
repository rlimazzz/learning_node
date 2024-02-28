const Sequelize = require('sequelize');
const sequelize = new Sequelize('pessoas', 'root', '12345', {
    host: "localhost",
    dialect: "mysql"
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING,
    },
    conteudo: {
        type: Sequelize.TEXT,
    }
});

//Postagem.sync({force : true});
//comando que faz eu criar uma tabela no meu banco de dados mysql

const Usuario = sequelize.define('usuarios', {
    nickname: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.TEXT,
    },
    idade: {
        type: Sequelize.TINYINT,
    }
});

//Usuario.sync({force : true});

Usuario.create({
    nickname: "xdryanxd",
    email: "rlimagb@gmail.com",
    idade: 18
});