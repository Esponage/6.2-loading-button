var Collection = require ('model/collection');

var Info = Backbone.Collection.extend ({
  model: Collection,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/following"
});


module.exports = Info;
