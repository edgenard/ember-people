import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "http://localhost:3000",
  ajax: function(url, method, hash) {
     hash = hash || {};
    hash.crossDomain = true;
    console.log("url is", url);
    return this._super(url, method, hash);
  }
  
});
// export default DS.FixtureAdapter.extend({});