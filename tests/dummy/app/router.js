import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('basic-list');
  this.route('mobile-list');
  this.route('mobile-large-images-list');
  this.route('mobile-small-images-list');
  this.route('multi-height-list');
  this.route('multi-height-multi-view-list');
  this.route('multi-height-virtual-list');
  this.route('pull-to-refresh-list');
  this.route('virtual');
  this.route('virtual-strange-ratios');
});

export default Router;
