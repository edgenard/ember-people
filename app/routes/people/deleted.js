import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var deleted_people =  $.getJSON("https://rails-people-api.herokuapp.com/deleted_people" );
    var parsePeople = function (data) {
      return data.people;
    };
    return deleted_people.then(parsePeople);
  },
  
  renderTemplate: function (controller, model) {
    this.render('people.index', {
      model: model
    });
  }
});
