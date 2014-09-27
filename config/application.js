#!/bin/env node
/**
 * application
 */
var bootstrap = require('./config/bootstrap')(),
  logger = require('./config/logger'),
  database = require('./db'),
  server = require('./config/server');


console.log(logger);

database()
  .then(function (db) {
    var app = new server(db);
    app.start();
  });
