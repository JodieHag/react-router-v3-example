'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get(['/', '/**', '/**/**'], (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

module.exports = app;
