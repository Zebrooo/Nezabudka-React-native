'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Shop}) {
      this.belongsTo(User, { foreignKey: 'userid' });
      this.belongsTo(Shop, { foreignKey: 'shopid' });
    }
  }
  Comment.init({
    body: DataTypes.TEXT,
    stars: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    shopid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};