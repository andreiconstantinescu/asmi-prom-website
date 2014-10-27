'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

var $ = require('../shims/jquery');

module.exports = View.extend({
  pageTitle: 'Balul Bobocilor | Home',
  template: templates.pages.home,
  events: {
    'click .chevron': 'handleChevronClick'
  },

  render: function () {
    var self = this;

    self.$el.html(self.template());

    return self;
  },

  handleChevronClick: function () {
    $('body').animate({
      scrollTop: this.$('.container').offset().top - 50
    }, 200);
  }
});
