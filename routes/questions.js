const express = require('express');
const router = express.Router();
const {Question} = require('../models');

// questions#index PATH: /questions METHOD: GET
router.get('/', function(req, res, next) {
  Question
    .all()
    .then(questions => {
      // To pass a variable to a template, pass
      // an object as a second argument to res.render.
      // All the properties of that object will be available
      // as local variables inside of the template.
      res.render('questions/index', {questions});
    })
});

module.exports = router;
