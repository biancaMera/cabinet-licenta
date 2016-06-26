'use strict';
const mongoose = require('mongoose');
const config = require('./index');


module.exports.init = init;


function init(app) {
  mongoose.connect(config.mongodb.uri); // cofigu din develpment

  // If the Node process ends, cleanup existing connections
  process.on('SIGINT', cleanup); //inchide conexiunea
  process.on('SIGTERM', cleanup); //inchide conexiunea
  process.on('SIGHUP', cleanup); //inchide conexiunea

  // add the mongoose object to the app instance
  if (app) {
    app.set('mongoose', mongoose);
  }

  return mongoose;
};


function cleanup() {
  mongoose.connection.close(function () {
    process.exit(0);
  });
}