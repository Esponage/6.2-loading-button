

var Collection = Backbone.Model.extend ({
  idAttribute: '_id',
  
  defaults: {
    breathing: "yes",
  },
});



module.exports = Collection;
