const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event, Comment, Shop }) {
      this.hasMany(Event, { foreignKey: "userid" });
      this.hasMany(Shop, { foreignKey: "userid" });
      this.hasMany(Comment, { foreignKey: "userid" });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      avatar: DataTypes.TEXT,
      hashpass: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
