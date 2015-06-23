import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "https://rails-people-api.herokuapp.com",
  ajax: function(url, method, hash) {
     hash = hash || {};
    hash.crossDomain = true;
    return this._super(url, method, hash);
  }
  
});
// export default DS.FixtureAdapter.extend({});