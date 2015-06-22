import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find("person");
  },
  actions: {
    createPerson: function () {
      var newName = $("#newName").val();
      var newDOB = $("#newDOB").val();
      var person = this.store.createRecord("person", {
        name: newName ,
        date_of_birth: newDOB, 
      });
      

      person.save().then(function (success) {
        console.log("sucess is", success);
      }, function (error) {
        console.log("error is", error);
      });
    },
    
    saveEdit: function (person) {
      person.save().then(function (success) {
        console.log("sucess is", success);
      }, function (error) {
        console.log("error is", error);
      });

    },
    
    deletePerson: function (person) {
      person.deleteRecord();
      person.save().then(function (success) {
        console.log("sucess is", success);
      }, function (error) {
        console.log("error is", error);
      });
    }
  }
});
