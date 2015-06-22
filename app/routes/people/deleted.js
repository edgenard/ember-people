import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    console.log("Model Called");
    return this.store.filter("person", function (person) {
      console.log(person);
      return person.get("isDeleted");
    });
  },
  
  renderTemplate: function (controller, model) {
    this.render('people.index', {
      model: model
    });
  }
});
