import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,

});

Router.map(function() {
  this.resource("people", {path: "/"}, function () {
      this.route('active');
      this.route('deleted');

  });
});

export default Router;
