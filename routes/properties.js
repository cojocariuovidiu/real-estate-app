var express = require('express');
var router = express.Router();

var Property = require('../models/property');

//  POST  /api/properties   --->  create a new property
 
//  GET   /api/properties   --->  return array of all properties
router.get('/', (req, res) => {
  Property.find({}, (err, properties) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(properties);
    }
  });
});

//  GET   /api/properties/:id   --->  return one properties by id
router.get('/:id', (req, res) => {

  Property.findById(req.params.id, (err, property) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(property);
    }
  });

});

//  DELETE   /api/properties/:id   --->  delete one capitl by id
router.delete('/:id', (req, res) => {
  Property.findByIdAndRemove(req.params.id, err => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send();
    }
  });
});

//  POST  /api/properties   --->  create a new property
router.post('/', (req, res) => {
  var property = new Property(req.body);
  console.log(req.body);
  property.save((err, savedProperty) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(savedProperty);
    }
  });
});

//  PUT   /api/properties/:id   --->  update one property
router.put('/:id', (req, res) => {

  // req.params.id  -->  document id
  // req.body  --->  update obj

  Property.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, property) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(property);
    }
  });
});

module.exports = router;
