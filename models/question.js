'use strict';
module.exports = function(sequelize, DataTypes) {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }/*, {
    // Sequelize no longer supports this way of adding association to models.
    // Unfortunately, sequelize-cli still generates models using this technique.
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  }*/);

  Question.associate = ({Answer}) => {
    // associations can be defined here
    Question.hasMany(Answer);

    //We get the following methods from hasMany:
    //Question#getAnswers
    //Question#setAnswers
    //Question#addAnswer
    //usage:
    //Question.findById(2).then(question => question.addAnswer(answer))
  };

  return Question;
};
