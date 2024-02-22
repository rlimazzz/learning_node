const express = require('express');
const sequelize = require('sequelize');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

//Database connection
const sequelizeS = new sequelize('pessoas', 'root', '12345', {
    host:'localhost',
    dialect:'mysql'
});

//Template Engine Configuration
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body-Parser, this lib basically takes input from html and puts into a database
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Creating Routes
app.get('/', function(req, res) {
    res.render('form.handlebars');
});

//post significa que essa rota só pode ser acessada quando é feita uma requisição usando o metódo post no handlebars!
app.post('/signup', function(req, res) {
    res.send("Nickname : " + req.body.nickname + ", Senha : " + req.body.senha);
});

app.listen(8081);
