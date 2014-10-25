'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var $ = require('../shims/jquery');

module.exports = View.extend({
  pageTitle: 'Balul Bobocilor | Location',
  template: templates.pages.location,

  render: function () {
    var self = this;

    self.$el.html(self.template());

    this.generateMap();
    return self;
  },

  generateMap: function () {
    var map = new window.GMaps({
      el: this.$('#map')[0],
      lat: 44.4453485,
      lng: 26.0586513,
      width: '100%',
      height: '20em',
      zoom: 15
    });
    map.addMarker({
      lat: 44.4453485,
      lng: 26.0586513
    })
    setTimeout(function () {
      self.map.refresh();
      self.map.setCenter(44.4453485, 26.0586513);
    }, 1);
  }
});
