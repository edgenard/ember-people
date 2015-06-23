import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var  active =  $.getJSON("https://rails-people-api.herokuapp.com/people/active" );
    var parsePeople = function (data) {
      return data.people;
    };
    return active.then(parsePeople);
  },
  
  renderTemplate: function (controller, model) {
    this.render("people.index", {
      model: model
    });
  },
});
