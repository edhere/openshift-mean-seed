/**
 * express server
 */
var express = require('express'),
  routes = require('./routes'),
  fs = require('fs');

module.exports = function() {
  var self = this;
  self.start = function() {
    self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
    self.port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

    if (typeof self.ipaddress === "undefined") {
      //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
      //  allows us to run/test the app locally.
      console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
      self.ipaddress = "127.0.0.1";
    };

    self.app = express();

    //  Add handlers for the app (from the routes).
    for (var r in routes) {
      self.app.get(r, routes[r]);
    }

    //  Start the app on the specific interface (and port).
    self.app.listen(self.port, self.ipaddress, function() {
      console.log('%s: Node server started on %s:%d ...',
        Date(Date.now() ), self.ipaddress, self.port);
    });
  };
};
