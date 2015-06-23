import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find("person");
  },
  
  url: "https://rails-people-api.herokuapp.com/",
  
  actions: {
    createPerson: function () {
      var newName = $("#newName").val();
      var newDOB = $("#newDOB").val();
      var person = this.store.createRecord("person", {
        name: newName ,
        date_of_birth: newDOB, 
      });
      $("#newName").val("");
      $("#newDOB").val("");

      person.save();
    },
    
    saveEdit: function (person) {
      var oldPerson = this.store.getById("person", person.id);
    
      oldPerson.set("name", person.name);
      oldPerson.set("date_of_birth", person.date_of_birth);
      console.log(person);
      console.log(oldPerson);
      oldPerson.save().then(function (person) {
        console.log(person);
      }, function (error) {
        console.log(error);
      });

    },
    
    deletePerson: function (person) {
      var url = this.url +"/people/"+ person.id;
      var $delete = $.ajax({
        type: "DELETE",
        url: url
      });
      $delete.then(function () {
        person.set("deleted", true);
      });
    },
    
    restorePerson: function (person) {
      var url = this.url +"/people/" + person.id + "/restore";
      var $post = $.post(url);
      $post.then(function (data) {
        var restoredPerson = data.people[0];
        var deletedPerson = this.store.getById("person", restoredPerson.id);
        deletedPerson.set("deleted", false);
      }.bind(this));
    },
  }
});
