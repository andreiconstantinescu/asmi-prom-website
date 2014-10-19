'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Balul Bobocilor | Teams',
  template: templates.pages.teams,

  initialize: function (options) {
    this.faction = options.faction;
  },

  render: function () {
    var self = this;
    console.log(self.faction);
    self.$el.html(self.template());

    return self;
  }
});
