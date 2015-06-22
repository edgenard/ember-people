import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editPerson: function () {
      this.set("isEditing", true);
    },
    
    saveEdit: function () {
      this.set("isEditing", false);
      var person = this.get("person");
      person.save();
    },
  },
});
