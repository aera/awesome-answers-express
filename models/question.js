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

  Question.associate = (models) => {
    // associations can be defined here
  };

  return Question;
};
