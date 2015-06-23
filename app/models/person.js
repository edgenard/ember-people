import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  date_of_birth: DS.attr("string"),
  deleted: DS.attr("boolean")
});

