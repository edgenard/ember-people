import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.filter("person", function (person) {
      return !person.get("isDeleted");
    });
  },
  
  renderTemplate: function (controller, model) {
    this.render("people.index", {
      model: model
    });
  },
});
