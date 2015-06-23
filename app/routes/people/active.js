import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var  active =  $.getJSON("http://localhost:3000/people/active" );
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
