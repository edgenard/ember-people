import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editPerson: function () {
      this.set("isEditing", true);
    },
    
    saveEdit: function () {
      this.set("isEditing", false);
      var person = this.get("person");
      console.log(person.id);

      this.sendAction("saveEdit", person);
    },
    
    deletePerson: function (person) {
      this.sendAction("deletePerson", person);
    },
    
    showDOB: function (person) {
      $("p[data-id ="+ person.id + "]").toggleClass("show");
    },
    
    restorePerson: function (person) {
      this.sendAction("restorePerson", person);
    },
    
  
  },
});
