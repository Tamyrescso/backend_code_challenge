'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantidadeEstoque: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      preço: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};