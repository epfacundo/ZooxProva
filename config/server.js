var Koa = require("koa");
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const consign = require('consign');
var app = new Koa();
var rotasCidades = require('../routes/cidades');
var rotasEstados = require('../routes/estados');

app
.use(cors())
.use(bodyParser())
.use(rotasCidades.routes())
.use(rotasEstados.routes())
 consign()
     //.include('routes')
     .then('config/dbConnection.js')
     .into(app);

module.exports = app;