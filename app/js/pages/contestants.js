'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Balul Bobocilor | Contestants',
  template: templates.pages.contestants,

  render: function () {
    var self = this;

    self.$el.html(self.template());

    return self;
  }
});
