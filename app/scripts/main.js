var Collection = require ('model/info');

$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  $('#container').append(JST.application());


var data = new Collection();



$('.submit-button').on('click', function(){
  data.on('request', function() {
    $('.submit-button').text('Loading...');
  });
  data.fetch();
  data.on('add', renderItem);
    data.on('sync', function() {
      setTimeout(function(){
      $('.submit-button').text("Submit");
    },1000);
    });
});



// posts.on('add', function(post) {

//   console.log(post.get(title));
// });

function renderItem(data) {
  // $('.js-people').append(JST.person(person.toJSON()));
    $('.itemUL').append(JST.data(data.toJSON()));
  }


});
