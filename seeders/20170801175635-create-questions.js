'use strict';
const faker = require('faker');
const {Question} = require('../models');

// The methods up & down must always return a promise. This is the only
// way sequelize can know that the seed is complete
module.exports = {
  up: function (queryInterface, Sequelize) {
    const questions = Array.from({length: 100})
      .map(() => {
        // Question.create and all Sequelize query methods return a promise.
        return Question.create({
          title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
          content: faker.hacker.phrase()
        });
      });

    // Here, we're using Promise.all to wait until all the promises in the
    // `questions` array are resolved.
    return Promise.all(questions);
  },

  down: function (queryInterface, Sequelize) {
    return Question.destroy({where: {}});
  }
};
