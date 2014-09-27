/**
 * routes
 */
var routes = {};

routes['/asciimo'] = function(req, res) {
  var link = "http://i.imgur.com/kmbjB.png";
  res.send("<html><body><img src='" + link + "'></body></html>");
};

routes['/'] = function(req, res) {
  var link = "http://mintywhite.com/wp-content/uploads/2012/10/fond-ecran-wallpaper-image-arriere-plan-hd-29-HD.jpg";
  res.send("<html><body><img src='" + link + "'></body></html>");
};

module.exports = routes;
