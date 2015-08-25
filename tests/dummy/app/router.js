import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('simple');
  this.route('mobile');
  this.route('mobile-large-images');
  this.route('mobile-small-images');
  this.route('multi-height');
  this.route('multi-height-multi-view');
  this.route('mixed');
});

export default Router;
