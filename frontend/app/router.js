import Ember from 'ember';

var Router = Ember.Router.extend({
  location: OnBehalfENV.locationType
});

Router.map(function() {
  this.route('about');
});

export default Router;
