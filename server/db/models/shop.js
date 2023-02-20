const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Comment, CategoryShop, Product }) {
      this.belongsTo(User, { foreignKey: 'userid' });
      this.belongsTo(CategoryShop, { foreignKey: 'categoryid' });
      this.hasMany(Comment, { foreignKey: 'shopid' });
      this.hasMany(Product, { foreignKey: 'shopid' });
    }
  }
  Shop.init(
    {
      name: DataTypes.TEXT,
      http: DataTypes.TEXT,
      geoteg: DataTypes.TEXT,
      categoryid: DataTypes.INTEGER,
      userid: DataTypes.INTEGER,
      img: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Shop',
    }
  );
  return Shop;
};
