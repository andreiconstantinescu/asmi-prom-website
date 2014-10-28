'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var teams = require('../lib/teams');

module.exports = View.extend({
  pageTitle: 'Balul Bobocilor | Contestants',
  template: templates.pages.contestants,

  render: function () {
    var self = this;
    console.log(teams);
    self.$el.html(self.template({
      teams: teams
    }));
    this.$('.carousel').carousel();
    return self;
  }
});
