/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Shops", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
      },
      http: {
        type: Sequelize.TEXT,
      },
      geoteg: {
        type: Sequelize.TEXT,
      },
      categoryid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CategoryShops', 
          key: 'id',
        }
      },
      userid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', 
          key: 'id',
        }
      },
      img: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Shops");
  },
};
