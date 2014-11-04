'use strict';

var Router = require('ampersand-router');

var HomePage = require('./pages/home');
var ContestantsPage = require('./pages/contestants');
var LocationPage = require('./pages/location');
var ContactPage = require('./pages/contact');
var TeamsPage = require('./pages/teams');
var GenericPage = require('./pages/factionTeam');
var RezultatePage = require('./pages/rezultate');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'contestants/': 'contestants',
    'contestants': 'contestants',
    'location/': 'location',
    'contact/': 'contact',
    'contestants/:faction/teams/': 'teams',
    'contestant/1/': 'page',
    'contestant/2/': 'page',
    'contestant/3/': 'page',
    'contestant/4/': 'page',
    'contestant/5/': 'page',
    'contestant/6/': 'page',
    'contestant/7/': 'page',
    'contestant/8/': 'page',
    'contestant/9/': 'page',
    'contestant/10/': 'page',
    'contestant/11/': 'page',
    'contestant/12/': 'page',
    'rezultate/': 'rezultate'
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
  },

  teams: function (faction) {
    this.trigger('newPage', new TeamsPage({
      faction: faction
    }));
  },
  page: function () {
    this.trigger('newPage', new GenericPage({}));
  },

  rezultate: function () {
    this.trigger('newPage', new RezultatePage({}));
  }
});
