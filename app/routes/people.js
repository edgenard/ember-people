import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find("person");
  },
  actions: {
    createPerson: function () {
      var newName = $("#newName").val();
      var newDOB = $("#newDOB").val()
      var person = this.store.createRecord("person", {
        name: newName ,
        date_of_birth: newDOB, 
      });
      

      person.save();
    },
    
    saveEdit: function (person) {
      person.save();

    },
    
    deletePerson: function (person) {
      person.set("isDeleted", true);
      person.deleteRecord();
    }
  }
});
