const express = require('express');
const router = express.Router();
const {Question} = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Question
    .all()
    .then(questions => {
      res.send(questions);
    })
});

module.exports = router;
