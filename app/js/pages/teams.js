'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var teams = require('../lib/teams');

module.exports = View.extend({
  pageTitle: 'Balul Bobocilor | Teams',
  template: templates.pages.teams,

  initialize: function (options) {
    this.faction = options.faction;
  },

  render: function () {
    var self = this;
    self.$el.html(self.template({
      faction: teams[self.faction]
      }
    ));

    return self;
  }
});
