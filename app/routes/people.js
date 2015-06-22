import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find("person");
  },
  actions: {
    createPerson: function (newPerson) {
      var person = this.store.createRecord("person", {
        name: newPerson,
      });
      
      this.controllerFor("people").set("newPerson", "");
      
      person.save();
    }
  }
});
