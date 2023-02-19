'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, CategoryShop}) {
      this.belongsTo(User, { foreignKey: 'userid' });
      this.belongsToMany(CategoryShop, { through: 'CategoryEvents', foreignKey: 'eventid' });
    }
  }
  Event.init({
    name: DataTypes.STRING,
    date: DataTypes.STRING,
    comment: DataTypes.TEXT,
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};