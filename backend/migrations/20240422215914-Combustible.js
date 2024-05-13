'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Combustibles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ObjectId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Structure: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Id_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      Unity: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Nom_attribut_francais: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Category: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Tag_francais: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Type_poste: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Localisation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Sous_localisation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Incertitude: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Percentage: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      Reglementation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      CO2: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      CH4f: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      CH4b: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      N2O: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      Scope: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      Post: {
        type: Sequelize.FLOAT,
        allowNull: true,
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
    await queryInterface.dropTable('Combustibles');
  }
};
