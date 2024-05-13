'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      total: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      nom_francais: {
        type: Sequelize.STRING,
        allowNull: true
      },
      associationType: {
        type: Sequelize.ENUM('Combustibles', 'Achats de biens', 'Achats de services', 'Electricité','Process et émissions fugitives'),
        allowNull: false
      },
      CombustiblesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Combustibles',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      AchatsDeBiensId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'AchatsDeBiens',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      AchatsDeServicesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'AchatsDeServices',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      ElectriciteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Electricite',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      ProcessEtEmissionsFugitivesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcessEtEmissionsFugitives',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      ActivityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Activities',
          key: 'id'
        },
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Posts');
  }
};