'use strict';

var mongoose = require('mongoose');

var Property = mongoose.model('Property', {
  address: String,
  status: String,
  rent: Number,
  description: String

});

module.exports = Property;
