"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("avenidas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      extensao_avenida: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      ciclofaixa: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      extensao_ciclofaixa: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      extensao_ciclofaixa_porcentagem: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("avenidas");
  }
};
