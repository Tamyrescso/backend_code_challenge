const express = require('express');
const errorMiddleware = require('./middleware/error.handler');
const { clientesRouter, produtosRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);

app.use(errorMiddleware);

module.exports = app;
