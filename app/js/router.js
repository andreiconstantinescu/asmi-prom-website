'use strict';

var Router = require('ampersand-router');

var HomePage = require('./pages/home');
var ContestantsPage = require('./pages/contestants');
var LocationPage = require('./pages/location');
var ContactPage = require('./pages/contact');
var TeamsPage = require('./pages/teams');
var FactionTeamPage = require('./pages/factionTeam');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'contestants/': 'contestants',
    'location/': 'location',
    'contact/': 'contact',
    'contestants/:faction/teams/': 'teams',
    'contestants/:faction/teams/:number/': 'factionTeam'
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

  factionTeam: function (number) {
    this.trigger('newPage', new FactionTeamPage({
      number: number
    }));
  }
});
