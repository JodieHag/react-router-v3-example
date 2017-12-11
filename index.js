'use strict'

const mongoose = require('mongoose');
const app = require('./server/app');
const config = require('./server/config.js');

app.listen(config.port, () => {
  console.log(`API REST corriendo en http://localhost:${config.port}`);
});
