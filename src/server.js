const express = require('express');

const routes = require('./routes');

require('./database');

const app = new express();

app.use(express.json());
app.use(routes);

app.listen(3333);