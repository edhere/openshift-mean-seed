/**
 * database setup
 */
var mongodb = require('mongodb'),
  q = require('q');

module.exports = function () {
  var deferred = q.defer(),
    self = this;
  self.dbServer = new mongodb.Server(process.env.OPENSHIFT_MONGODB_DB_HOST, parseInt(process.env.OPENSHIFT_MONGODB_DB_PORT));
  self.db = new mongodb.Db(process.env.OPENSHIFT_APP_NAME, self.dbServer, {auto_reconnect: true, safe: true});
  self.dbUser = process.env.OPENSHIFT_MONGODB_DB_USERNAME;
  self.dbPass = process.env.OPENSHIFT_MONGODB_DB_PASSWORD;
  self.db.open(function(err, db){
      if(err){ deferred.reject(err) };
      self.db.authenticate(self.dbUser, self.dbPass, {authdb: "admin"},  function(err, res){
          if(err){
            deferred.reject(err);
          } else {
            deferred.resolve(db);
          };
      });
  });
  return deferred.promise;
};
