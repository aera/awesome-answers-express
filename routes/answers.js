const express = require('express');
const {Question, Answer} = require('../models');
const router = express.Router({mergeParams: true});

// Setting the option mergeParams to true when creating
// a router, it will preserve the params of `req.params` from
// the parent router.

router.post('/', async (req, res, next) => {
  try {
    const {content} = req.body;
    const {questionId} = req.params;
    const question = await Question.findById(questionId);

    await Answer.create({content, QuestionId: questionId});
    res.redirect(`/questions/${questionId}`);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
