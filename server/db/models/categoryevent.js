'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CategoryEvent.init({
    eventid: DataTypes.INTEGER,
    categoryid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CategoryEvent',
  });
  return CategoryEvent;
};