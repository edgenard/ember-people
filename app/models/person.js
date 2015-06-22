import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  date_of_birth: DS.attr("string"),
  isDeleted: DS.attr("boolean", {defaultValue: false})
}).reopenClass({
  FIXTURES: [
    {   
        id: 1,
        name: "Emmanuel",
        date_of_birth: "1985-07-08",
        isDeleted: false
    },
    {
        id: 2,
        name: "Marguerite",
        date_of_birth: "March 29, 1988",
        isDeleted: false
    },
    {
        id: 3,
        name: "Margaret",
        date_of_birth: "October 1, 1955",
        isDeleted: false
    },
  ]
});
