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

// questions#show PATH: /questions/:id METHOD: GET
router.get('/:id', (req, res, next) => {
  // To get params from Express, use req.params. It's a property
  // of the request object. It doesn't contain form data. It only
  // has params related to the path such as `id`, `question_id`, etc.
  const {id} = req.params;
  Question
    .findById(id)
    .then(question => {
      res.render('questions/show', {question});
    })
    .catch(next)
    //.catch(error => next(error))
});

module.exports = router;
