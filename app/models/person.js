import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  date_of_birth: DS.attr("date")
}).reopenClass({
  FIXTURES: [
    {   
        id: 1,
        name: "Emmanuel",
        date_of_birth: "July 8, 1985"
    },
    {
        id: 2,
        name: "Marguerite",
        date_of_birth: "March 29, 1988"
    },
    {
        id: 3,
        name: "Margaret",
        date_of_birth: "October 1, 1955"
    },
  ]
});
