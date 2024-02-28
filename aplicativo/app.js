const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Avaliacoes = require('./modules/Avaliacoes');

//Template Engine Configuration
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault:true,
        allowProtoMethodsByDefault:true,
    },
}));
app.set('view engine', 'handlebars');

//Body-Parser, this lib basically takes input from html and puts into a database
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Creating Routes
app.get('/home', function(req, res) {
    res.render('form.handlebars');
});

app.get('/', function(req, res) {
    Avaliacoes.findAll({order: [['id', 'DESC']]}).then(function(avaliacoes) {
        res.render('home.handlebars', {avaliacoes : avaliacoes});
    });
});

//post significa que essa rota só pode ser acessada quando é feita uma requisição usando o metódo post no handlebars!
app.post('/signup', function(req, res) {
    Avaliacoes.create({
        titulo: req.body.nickname,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/');
    }).catch(function(erro){ 
        res.send("Avaliação não foi adicionada ao banco de dados devido ao erro " + erro);
    });
});

app.get('/bloquear/:id', function(req, res) {
    //deleta um post em específico do banco de dados
    Avaliacoes.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/');
    }).catch(function(erro){
        res.send("Error : " + erro);
    });
});

app.listen(8081);