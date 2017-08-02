'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      QuestionId: {
        type: Sequelize.INTEGER,
        // The `references` property is used to configure our foreign key
        references: {
          // The model property takes a string that is the table name
          // that this foreign key refers to.
          model: 'Questions',
          // The key property takes a string of the column that holds the
          // foreign key in the table named above.
          key: 'id'
        },
        onDelete: 'cascade', // similar to `dependant: :destroy` from Rails
        onUpdate: 'cascade',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Answers');
  }
};
