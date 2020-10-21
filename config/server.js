/* importar modulos */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

/* iniciar o objeto */
var app = express();

/* setar variaveis*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar middleware */
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/* configurar o consign, efetua o autoload */
consign().include('app/routes').then('app/models').then('app/controllers').into(app);

/* exportar o objeto */
module.exports = app;