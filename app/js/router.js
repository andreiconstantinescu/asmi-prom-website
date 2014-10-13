'use strict';

var Router = require('ampersand-router');

var HomePage = require('./pages/home');
var ContestantsPage = require('./pages/contestants');
var LocationPage = require('./pages/location');
var ContactPage = require('./pages/contact');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'contestants/': 'contestants',
    'location/': 'location',
    'contact/': 'contact'
  },
  home: function () {
    this.trigger('newPage', new HomePage({}));
  },

  location: function () {
    this.trigger('newPage', new LocationPage({}));
  },

  contact: function () {
    this.trigger('newPage', new ContactPage({}));
  },

  contestants: function () {
    this.trigger('newPage', new ContestantsPage({}));
  }
});
