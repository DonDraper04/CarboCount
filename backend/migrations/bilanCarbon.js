'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BilanCarbons', {
      BilanCarbonId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      scope1: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      scope2: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      scope3: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      year: {
        allowNull: true,
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BilanCarbons');
  }
};
