'use strict';
const faker = require('faker');
const {Question, Answer} = require('../models');

function random(n) {
  return Math.floor(Math.random() * n);
}

module.exports = {
  // When declaring a function with the keyword `async`, we
  // can use the keyword `await` inside its body to wait for the
  // resolved value of a promise and assign to variables.
  up: async (queryInterface, Sequelize) => {
    const questions = await Question.all();

    for (let question of questions) {
      //Create up to 5 answers per question
      for (let i = 0, max = random(6); i <= max; i+=1){
        await Answer.create({
          content: faker.lorem.paragraph(),
          QuestionId: question.id
        });
      }
      }

  },

  down: async (queryInterface, Sequelize) => {
    await Answer.destroy({where: {}});
  }
};
