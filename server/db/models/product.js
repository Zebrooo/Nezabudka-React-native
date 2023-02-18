const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Shop }) {
      this.belongsTo(Shop, { foreignKey: "shopid" });
    }
  }
  Product.init(
    {
      name: DataTypes.TEXT,
      img: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      shopid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
