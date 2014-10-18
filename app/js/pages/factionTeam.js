'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Balul Bobocilor | Team Info',
  template: templates.pages.factionTeam,

  initialize: function (options) {
    console.log(options.number);
  },

  render: function () {
    var self = this;

    self.$el.html(self.template());

    return self;
  }
});
