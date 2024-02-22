const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

//Template Engine Configuration
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    res.send("Olá mundo");
});

app.listen(8081);
