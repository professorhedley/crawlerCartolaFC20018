'use strict';
const express = require('express');
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

require('./controllers/timesController')(app);
require('./controllers/mercadoController')(app);
require('./controllers/atletasController')(app);
require('./controllers/partidasController')(app);
require('./controllers/noticiasController')(app);
require('./controllers/globoEsporteController')(app);


app.listen(3000);