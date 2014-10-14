'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Balul Bobocilor | Home',
  template: templates.pages.home,
  events: {
    'click .chevron': 'hadleChevronClick'
  },

  render: function () {
    var self = this;

    self.$el.html(self.template());

    return self;
  },

  handleChvronClick: function () {
    $('body').animate({
      scrollTop: this.$('.asmi').offset().top - 50
    }, 200);
  }
});
