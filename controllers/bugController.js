const db = require("../models");

// Defining methods for the bugController
module.exports = {
  findAll: function(req, res) {
    db.Bug.find(req.query)
      .then(dbBug => res.json(dbBug))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Bug.findById(req.params.id)
      .then(dbBug => res.json(dbBug))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Bug.create(req.body)
      .then(dbBug => res.json(dbBug))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Bug.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBug => res.json(dbBug))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Bug.findById(req.params.id)
      .then(dbBug => dbBug.remove())
      .then(dbBug => res.json(dbBug))
      .catch(err => res.status(422).json(err));
  }
};