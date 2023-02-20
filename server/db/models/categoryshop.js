const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CategoryShop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event, Shop }) {
      this.belongsToMany(Event, {
        through: 'CategoryEvents',
        foreignKey: 'categoryid',
      });
      this.hasMany(Shop, { foreignKey: 'categoryid' });
    }
  }
  CategoryShop.init(
    {
      name: DataTypes.TEXT,
      sex: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'CategoryShop',
    }
  );
  return CategoryShop;
};
