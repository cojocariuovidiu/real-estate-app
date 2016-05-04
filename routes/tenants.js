'use strict';

var express = require('express');
var router = express.Router();

var Tenant = require('../models/tenant');

//  POST  /api/tenants   --->  create a new tenant
 
//  GET   /api/tenants   --->  return array of all tenants
router.get('/', (req, res) => {
  Tenant.find({}, (err, tenants) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(tenants);
    }
  });
});

//  GET   /api/tenants/:id   --->  return one tenants by id
router.get('/:id', (req, res) => {

  Tenant.findById(req.params.id, (err, tenant) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(tenant);
    }
  });

});

//  DELETE   /api/tenants/:id   --->  delete one capitl by id
router.delete('/:id', (req, res) => {
  Tenant.findByIdAndRemove(req.params.id, err => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send();
    }
  });
});

//  POST  /api/tenants   --->  create tenant
router.post('/', (req, res) => {
  var tenant = new Tenant(req.body);

  tenant.save((err, savedTenant) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(savedTenant);
    }
  });
});

//  PUT   /api/tenants/:id   --->  update one tenant
router.put('/:id', (req, res) => {

  // req.params.id  -->  document id
  // req.body  --->  update obj

  Tenant.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, tenant) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(tenant);
    }
  });
});

module.exports = router;
