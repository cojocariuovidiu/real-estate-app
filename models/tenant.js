'use strict';

var mongoose = require('mongoose');

var Tenant = mongoose.model('Tenant', {
  name: String,
  email: String,
  phone: Number,
  other: String

});

module.exports = Tenant;