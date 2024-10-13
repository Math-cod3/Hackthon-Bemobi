// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const sequelize = require('./database/connection');
const config = require('./config');

const app = express();

app.use(bodyParser.json());

app.use('/api', routes);

sequelize.sync().then(() => {
  app.listen(config.port, () => {
    console.log(`Servidor rodando na porta ${config.port}`);
  });
});
