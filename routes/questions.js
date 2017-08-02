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

// questions#new PATH: /questions/new METHOD: GET
router.get('/new', (req, res, next) => {
  const question = Question.build();
  res.render('questions/new', {question});
});

// questions#create PATH: /questions METHOD: POST
router.post('/', (req, res, next) => {
  const {title, content} = req.body;
    Question
      .create({title, content})
      .then(question => {
        res.redirect(`/questions/${question.id}`)
      })
      .catch(next);
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
    // .catch(error => next(error))
    // ð ð are equivalent
    .catch(next)
})

module.exports = router;
